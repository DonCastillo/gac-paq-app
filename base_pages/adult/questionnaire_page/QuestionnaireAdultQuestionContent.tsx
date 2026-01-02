import QuestionCheckbox from "@components/adults/QuestionCheckbox";
import QuestionCheckboxInput from "@components/adults/QuestionCheckboxInput";
import QuestionInput from "@components/adults/QuestionInput";
import QuestionRadio from "@components/adults/QuestionRadio";
import QuestionRadioImage from "@components/adults/QuestionRadioImage";
import QuestionSatisfactionImage from "@components/adults/QuestionSatisfactionImage";
import QuestionSlider from "@components/adults/QuestionSlider";
import QuestionTextarea from "@components/adults/QuestionTextarea";
import PhraseLabel from "@constants/phrase_label.enum";
import Question from "@constants/question.enum";
import { useQuestionContext } from "@contexts/common/QuestionContext";
import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import { Component } from "@interface/function.type";
import type {
	ChoiceImage,
	QuestionCheckboxInputInterface,
	QuestionCheckboxInterface,
	QuestionInputInterface,
	QuestionRadioImageInterface,
	QuestionRadioInterface,
	QuestionSliderInterface,
	QuestionTextareaInterface,
} from "@interface/payload.type";
import { choiceMode } from "@utils/options.utils";
import { addResponse } from "@utils/response.utils";
import { intToString, stringToInt } from "@utils/translate.utils";
import React from "react";

const QuestionnaireAdultQuestionContent: Component = () => {
	const { currentPageNumber } = useCurrentPage();
	const { mode } = useCharacter();
	const { questionType, translatedPage, selectedValue, setSelectedValue } = useQuestionContext();

	/**
	 * temporarily store the initial selection
	 */
	const changeHandler = (value: string | null): void => {
		addResponse(value);
		setSelectedValue(value);
	};

	const getComponent: Component = () => {
		switch (questionType) {
			case Question.QuestionRadio: {
				const questionCasted = translatedPage as QuestionRadioInterface;
				return (
					<QuestionRadio
						key={currentPageNumber}
						selectedValue={selectedValue}
						options={choiceMode(questionCasted.choices, mode)}
						onSelect={(value: string) => {
							changeHandler(value);
						}}
					/>
				);
			}
			case Question.QuestionCheckbox: {
				const questionCasted = translatedPage as QuestionCheckboxInterface;
				return (
					<QuestionCheckbox
						key={currentPageNumber}
						selectedValue={selectedValue}
						options={choiceMode(questionCasted.choices, mode)}
						onSelect={(value: string) => {
							changeHandler(value);
						}}
					/>
				);
			}

			case Question.QuestionRadioImage: {
				const questionCasted = translatedPage as QuestionRadioImageInterface;
				return (
					<QuestionRadioImage
						key={currentPageNumber}
						selectedValue={selectedValue}
						options={choiceMode(questionCasted.choices, mode) as ChoiceImage[]}
						onChange={changeHandler}
					/>
				);
			}
			case Question.QuestionSatisfactionImage: {
				const questionCasted = translatedPage as QuestionRadioImageInterface;
				return (
					<QuestionSatisfactionImage
						key={currentPageNumber}
						options={questionCasted.choices}
						onChange={changeHandler}
						selectedValue={selectedValue}
					/>
				);
			}
			case Question.QuestionSlider: {
				const questionCasted = translatedPage as QuestionSliderInterface;
				return (
					<QuestionSlider
						key={currentPageNumber}
						maxValue={questionCasted.max_value}
						onChange={(value: number | null | PhraseLabel.DontKnow) => {
							if (typeof value === "number" && Number.isInteger(value)) {
								changeHandler(intToString(value));
							} else if (value === PhraseLabel.DontKnow) {
								changeHandler(value);
							} else {
								changeHandler(null);
							}
						}}
						selectedValue={selectedValue === PhraseLabel.DontKnow ? PhraseLabel.DontKnow : stringToInt(selectedValue)}
					/>
				);
			}
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
			case Question.QuestionCheckboxInput: {
				const questionCasted = translatedPage as QuestionCheckboxInputInterface;
				return (
					<QuestionCheckboxInput
						key={currentPageNumber}
						selectedValue={selectedValue}
						inputPlaceholder={questionCasted.input_placeholder}
						inputLabel={questionCasted.input_label}
						inputLabelEn={questionCasted.input_label_en}
						options={choiceMode(questionCasted.choices, mode)}
						onSelect={(value: string) => {
							changeHandler(value);
						}}
					/>
				);
			}
			case Question.QuestionTextarea: {
				const questionCasted = translatedPage as QuestionTextareaInterface;
				return (
					<QuestionTextarea
						key={currentPageNumber}
						selectedValue={selectedValue}
						placeholder={questionCasted.placeholder}
						onChange={changeHandler}
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

export default QuestionnaireAdultQuestionContent;
