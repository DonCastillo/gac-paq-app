import React, { useContext } from "react";
import PropTypes from "prop-types";
import type LanguageInterface from "../../interface/language";
import type QuestionRadioItemInterface from "../../interface/question_radio_item";
import QuestionRadio from "./QuestionRadio";
import { QuestionContext } from "../../store/questions";
import { optionLanguage } from "../../utils/options";

QuestionSelectLanguageAdult.propTypes = {
	onChange: PropTypes.func.isRequired,
};

export default function QuestionSelectLanguageAdult({ onChange }): React.ReactElement {
	const questionCtx = useContext(QuestionContext);
	const options: LanguageInterface[] = questionCtx.questionState.languageOption;
	const itemsRaw: QuestionRadioItemInterface[] = optionLanguage(options);

	function selectHandler(value: string): void {
		onChange(value);
	}

	return (
		<QuestionRadio
			options={itemsRaw}
			onSelect={selectHandler}
		/>
	);
}
