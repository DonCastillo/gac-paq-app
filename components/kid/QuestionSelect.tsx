import React from "react";
import PropTypes from "prop-types";
import type QuestionRadioItemInterface from "../../interface/question_radio_item";
import DropDownSelector from "../DropDownPicker";
import { optionText } from "../../utils/options";

QuestionSelect.propTypes = {
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default function QuestionSelect({ options, onChange }): React.ReactElement {
	const rawItems: QuestionRadioItemInterface[] = optionText(options);

	return (
		<DropDownSelector
			options={rawItems}
			selectedValue={""}
			onSelect={onChange}
		/>
	);
}
