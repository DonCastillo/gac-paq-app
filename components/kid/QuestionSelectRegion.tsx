import React, { useContext } from "react";
import DropDownSelector from "../DropDownPicker";
import type QuestionRadioItemInterface from "../../interface/question_radio_item";
import { QuestionContext } from "store/questions";
import type RegionInterface from "../../interface/region";
import { optionRegion } from "utils/options";

interface QuestionSelectRegionProps {
	onChange: (value: string) => void;
	selectedValue: string | null;
}

export default function QuestionSelectRegion({
	selectedValue,
	onChange,
}: QuestionSelectRegionProps): React.ReactElement {
	const questionCtx = useContext(QuestionContext);
	const { regionOption } = questionCtx.questionState;
	const options: RegionInterface[] = regionOption;
	const itemsRaw: QuestionRadioItemInterface[] = optionRegion(options);

	return (
		<DropDownSelector
			options={[...itemsRaw]}
			selectedValue={selectedValue}
			onSelect={onChange}
		/>
	);
}
