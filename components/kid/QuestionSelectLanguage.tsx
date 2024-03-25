import React, { useContext } from "react";
import type LanguageInterface from "interface/language";
import type QuestionRadioItemInterface from "interface/question_radio_item";
import DropDownSelector from "components/DropDownPicker";
import { QuestionContext } from "store/questions";
import { optionLanguage } from "utils/options";

interface PropsInterface {
	onChange: (value: string) => void;
	selectedValue: string | null;
}

export default function QuestionSelectLanguage({
	selectedValue,
	onChange,
}: PropsInterface): React.ReactElement {
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
