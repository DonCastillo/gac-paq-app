import QuestionInput from "@components/kid/QuestionInput";
import QuestionSelect from "@components/kid/QuestionSelect";
import Question from "@constants/question.enum";
import { useDropdownContext } from "@contexts/common/DropdownContext";
import { useQuestionContext } from "@contexts/common/QuestionContext";
import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import { Component } from "@interface/function.type";
import type { QuestionDropdownInterface, QuestionInputInterface } from "@interface/payload.type";
import { nextPage, setMode } from "@store/settings/settingsSlice";
import { choiceMode } from "@utils/options.utils";
import { addResponse } from "@utils/response.utils";
import { getModeType } from "@utils/type.utils";
import React from "react";
import { useDispatch } from "react-redux";

const OpeningQuestionKidContent: Component = () => {
	const dispatch = useDispatch();
	const { currentPageNumber, currentPage } = useCurrentPage();
	const { mode } = useCharacter();
	const { questionType, translatedPage, selectedValue, setSelectedValue } = useQuestionContext();
	const { dropdownOpen, setDropdownOpen } = useDropdownContext();

	const changeHandlerPromise = async (value: string | null): Promise<void> => {
		addResponse(value);
		setSelectedValue(value);

		if (value !== undefined && value !== null && value !== "") {
			if (currentPage.page.ident === "mode") {
				dispatch(setMode(getModeType(value)));
			}

			if (currentPage.page.ident === "mode") {
				if (value !== selectedValue) {
					dispatch(nextPage());
				}
			}
		}
	};

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
					<QuestionSelect
						key={currentPageNumber}
						options={choiceMode(questionCasted.choices, mode)}
						onChange={changeHandler}
						selectedValue={selectedValue}
						dropdownOpen={dropdownOpen}
						setDropdownOpen={setDropdownOpen}
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
export default OpeningQuestionKidContent;
