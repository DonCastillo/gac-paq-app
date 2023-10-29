import React, { useContext } from "react";
import PropTypes from "prop-types";
import type LanguageInterface from "../../interface/language";
import type QuestionRadioItemInterface from "../../interface/question_radio_item";
import DropDownSelector from "../DropDownPicker";
import { QuestionContext } from "../../store/questions";
import { optionLanguage } from "../../utils/options";

QuestionSelectLanguage.propTypes = {
	onChange: PropTypes.func.isRequired,
	selectedValue: PropTypes.string,
};

export default function QuestionSelectLanguage({ selectedValue, onChange }): React.ReactElement {
	const questionCtx = useContext(QuestionContext);
	const options: LanguageInterface[] = questionCtx.questionState.languageOption;
	const itemsRaw: QuestionRadioItemInterface[] = optionLanguage(options);

	return (
		<DropDownSelector
			options={[...itemsRaw]}
			selectedValue={selectedValue}
			onSelect={onChange}
		/>
	);
}
