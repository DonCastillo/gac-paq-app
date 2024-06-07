import React from "react";
import DropDownSelector from "components/DropDownPicker";
import type { Choice, ChoiceIcon } from "interface/payload.type";

interface PropsInterface {
	options: Choice[] | ChoiceIcon[];
	onChange: (value: string) => void;
	selectedValue: string | null;
	dropdownOpen: boolean;
	setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuestionSelect = ({
	options,
	onChange,
	selectedValue,
	dropdownOpen,
	setDropdownOpen,
}: PropsInterface): React.ReactElement => {
	return (
		<DropDownSelector
			options={options}
			selectedValue={selectedValue}
			onSelect={onChange}
			dropdownOpen={dropdownOpen}
			setDropdownOpen={setDropdownOpen}
		/>
	);
};

export default QuestionSelect;
