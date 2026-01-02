import QuestionInput from "@components/adults/QuestionInput";
import QuestionRadio from "@components/adults/QuestionRadio";
import Question from "@constants/question.enum";
import { useQuestionContext } from "@contexts/common/QuestionContext";
import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import { Component } from "@interface/function.type";
import type { QuestionDropdownInterface, QuestionInputInterface } from "@interface/payload.type";
import { nextPage, setMode, setStartDateTime } from "@store/settings/settingsSlice";
import { loadSectionPages } from "@utils/load_pages.utils";
import { changeMode } from "@utils/mode.utils";
import { addResponse } from "@utils/response.utils";
import { getModeType } from "@utils/type.utils";
import React from "react";
import { useDispatch } from "react-redux";

const GenericQuestionnaireContent: Component = () => {
	const dispatch = useDispatch();
	const { currentPageNumber, currentPage } = useCurrentPage();
	const { language } = useCharacter();
	const { questionType, translatedPage, selectedValue, setSelectedValue } = useQuestionContext();

	const changeHandlerPromise = async (value: string | null): Promise<void> => {
		addResponse(value);
		setSelectedValue(value);

		if (value !== undefined && value !== null && value !== "") {
			// set mode
			// only triggers a mode change if the respondent actually selects a mode
			if (currentPage.page.ident === "mode") {
				dispatch(setMode(getModeType(value)));
				changeMode(getModeType(value), language);
				loadSectionPages();
			}

			// record start when user is answering questions
			if (currentPage.page.ident === "participant_id") {
				dispatch(setStartDateTime());
			}

			if (currentPage.page.ident === "mode") {
				if (value !== selectedValue) {
					dispatch(nextPage());
				}
			}
		}
	};

	// save response
	const changeHandler = (value: string | null): void => {
		changeHandlerPromise(value)
			.then(() => {})
			.catch(() => {});
	};

	const getComponent: Component = () => {
		switch (questionType) {
			case Question.QuestionInput: {
				const questionCasted = translatedPage as QuestionInputInterface;
				return (
					<QuestionInput
						key={currentPageNumber}
						selectedValue={selectedValue}
						placeholder={questionCasted.placeholder}
						onChange={changeHandler}
					/>
				);
			}
			case Question.QuestionDropdown: {
				const questionCasted = translatedPage as QuestionDropdownInterface;
				return (
					<QuestionRadio
						key={currentPageNumber}
						selectedValue={selectedValue}
						options={questionCasted.choices}
						onSelect={(value: string) => {
							changeHandler(value);
						}}
					/>
				);
			}
			default: {
				return <></>;
			}
		}
	};

	return <>{getComponent()}</>;
};

export default GenericQuestionnaireContent;
