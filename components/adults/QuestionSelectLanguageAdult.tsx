import React, { useContext } from "react";
import PropTypes from "prop-types";
import type LanguageInterface from "interface/language";
import type QuestionRadioItemInterface from "interface/question_radio_item";
import QuestionRadio from "components/adults/QuestionRadio";
import { QuestionContext } from "store/questions";
import { optionLanguage } from "utils/options";

interface QuestionSelectLanguageAdultPropsInterface {
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

export default function QuestionSelectLanguageAdult({
	onChange,
	selectedValue,
}: QuestionSelectLanguageAdultPropsInterface): React.ReactElement {
	const questionCtx = useContext(QuestionContext);
	const options: LanguageInterface[] = questionCtx.questionState.languageOption;
	const itemsRaw: QuestionRadioItemInterface[] = optionLanguage(options);

	function selectHandler(value: string | null): void {
		onChange(value);
	}

	return (
		<QuestionRadio
			options={itemsRaw}
			selectedValue={selectedValue}
			onSelect={selectHandler}
		/>
	);
}
