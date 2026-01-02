import QuestionCheckbox from "@components/kid/QuestionCheckbox";
import QuestionInput from "@components/kid/QuestionInput";
import QuestionRadio from "@components/kid/QuestionRadio";
import QuestionRadioImage from "@components/kid/QuestionRadioImage";
import QuestionSatisfactionImage from "@components/kid/QuestionSatisfactionImage";
import QuestionSlider from "@components/kid/QuestionSlider";
import QuestionTextarea from "@components/kid/QuestionTextarea";
import PhraseLabel from "@constants/phrase_label.enum";
import Question from "@constants/question.enum";
import { useQuestionContext } from "@contexts/common/QuestionContext";
import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import { Component } from "@interface/function.type";
import type {
	ChoiceImage,
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

const QuestionnaireKidQuestionContent: Component = () => {
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
			case Question.QuestionCheckbox: {
				const questionCasted = translatedPage as QuestionCheckboxInterface;
				return (
					<QuestionCheckbox
						key={currentPageNumber}
						options={choiceMode(questionCasted.choices, mode)}
						onChange={changeHandler}
						selectedValue={selectedValue}
					/>
				);
			}
			case Question.QuestionRadio: {
				const questionCasted = translatedPage as QuestionRadioInterface;
				return (
					<QuestionRadio
						key={currentPageNumber}
						options={choiceMode(questionCasted.choices, mode)}
						onChange={changeHandler}
						selectedValue={selectedValue}
					/>
				);
			}
			case Question.QuestionRadioImage: {
				const questionCasted = translatedPage as QuestionRadioImageInterface;
				return (
					<QuestionRadioImage
						key={currentPageNumber}
						options={choiceMode(questionCasted.choices, mode) as ChoiceImage[]}
						onChange={changeHandler}
						selectedValue={selectedValue}
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

export default QuestionnaireKidQuestionContent;
