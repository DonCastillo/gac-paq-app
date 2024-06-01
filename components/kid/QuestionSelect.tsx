import React from "react";
import DropDownSelector from "components/DropDownPicker";
import { optionText } from "utils/options.utils";
import type { OptionInterface } from "utils/options.utils";
import type { ChoiceIcon } from "interface/payload.type";

interface PropsInterface {
	options: OptionInterface[];
	onChange: (value: string) => void;
	selectedValue: string | null;
	dropdownOpen: boolean;
	setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function QuestionSelect({
	options,
	onChange,
	selectedValue,
	dropdownOpen,
	setDropdownOpen,
}: PropsInterface): React.ReactElement {
	const rawItems: ChoiceIcon[] = optionText(options);
	return (
		<DropDownSelector
			options={rawItems}
			selectedValue={selectedValue}
			onSelect={onChange}
			dropdownOpen={dropdownOpen}
			setDropdownOpen={setDropdownOpen}
		/>
	);
}
