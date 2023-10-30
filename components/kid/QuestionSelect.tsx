import React from "react";
import type QuestionRadioItemInterface from "../../interface/question_radio_item";
import DropDownSelector from "../DropDownPicker";
import { optionText } from "../../utils/options";
import type { OptionInterface } from "../../utils/options";


interface QuestionSelectPropsInterface {
	options: OptionInterface[];
	onChange: (value: string) => void;
	selectedValue: string | null;
}

export default function QuestionSelect({ options, onChange, selectedValue }: QuestionSelectPropsInterface): React.ReactElement {
	const rawItems: QuestionRadioItemInterface[] = optionText(options);
	return (
		<DropDownSelector
			options={rawItems}
			selectedValue={selectedValue}
			onSelect={onChange}
		/>
	);
}
