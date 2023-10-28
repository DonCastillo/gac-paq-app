import { useContext } from "react";
import type LanguageInterface from "../../interface/language";
import type QuestionRadioItemInterface from "../../interface/question_radio_item";
import QuestionRadio from "./QuestionRadio";
import { QuestionContext } from "../../store/questions";
import { optionLanguage } from "../../utils/options";

export default function QuestionSelectLanguageAdult({ onChange }) {
	const questionCtx = useContext(QuestionContext);
	const options: LanguageInterface[] = questionCtx.questionState.languageOption;
	const itemsRaw: QuestionRadioItemInterface[] = optionLanguage(options);

	function selectHandler(value: string) {
		onChange(value);
	}

	return (
		<QuestionRadio
			options={itemsRaw}
			onSelect={selectHandler}
		/>
	);
}
