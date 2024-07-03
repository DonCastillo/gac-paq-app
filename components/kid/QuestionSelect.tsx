import React from "react";
import DropDownSelector from "components/DropDownPicker";
import type { Choice, ChoiceIcon } from "interface/payload.type";
import { View } from "react-native";

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
		<View style={{ maxWidth: "100%" }}>
			<DropDownSelector
				options={options}
				selectedValue={selectedValue}
				onSelect={onChange}
				dropdownOpen={dropdownOpen}
				setDropdownOpen={setDropdownOpen}
			/>
		</View>
	);
};

export default QuestionSelect;
