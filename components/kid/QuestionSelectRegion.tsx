import React, { useContext } from "react";
import PropTypes from "prop-types";
import DropDownSelector from "../DropDownPicker";
import type QuestionRadioItemInterface from "../../interface/question_radio_item";
import { QuestionContext } from "../../store/questions";
import type RegionInterface from "../../interface/region";
import { optionRegion } from "../../utils/options";

QuestionSelectRegion.propTypes = {
	onChange: PropTypes.func.isRequired,
	selectedValue: PropTypes.string.isRequired,
};

export default function QuestionSelectRegion({ selectedValue, onChange }): React.ReactElement {
	const questionCtx = useContext(QuestionContext);
	const { regionOption } = questionCtx.questionState;
	const options: RegionInterface[] = regionOption;
	const itemsRaw: QuestionRadioItemInterface[] = optionRegion(options);

	return (
		<DropDownSelector
			options={[...itemsRaw]}
			selectedValue={""}
			onSelect={onChange}
		/>
	);
}
