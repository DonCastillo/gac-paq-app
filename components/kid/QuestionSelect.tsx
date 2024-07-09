import React from "react";
import DropDownSelector from "components/DropDownPicker";
import type { Choice, ChoiceIcon } from "interface/payload.type";
import { View } from "react-native";
import { getOptionSubLabel } from "utils/background.utils";
import { useSelector } from "react-redux";
import { getMode } from "store/settings/settingsSlice";

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
	const mode = useSelector(getMode);

	const finalLabel = (
		label: string,
		sublabel: { kid: string; adult: string } | undefined,
	): string => {
		if (sublabel !== undefined || sublabel !== null) {
			const optionSublabel = getOptionSubLabel(sublabel, mode);
			if (optionSublabel !== "" && optionSublabel !== null && optionSublabel !== undefined) {
				return label + "  (" + optionSublabel + ")";
			} else {
				return label;
			}
		}
		return label;
	};

	return (
		<View style={{ maxWidth: "100%" }}>
			<DropDownSelector
				options={options.map((option: Choice) => {
					return {
						...option,
						label: finalLabel(option.label, option.sublabel),
					};
				})}
				selectedValue={selectedValue}
				onSelect={onChange}
				dropdownOpen={dropdownOpen}
				setDropdownOpen={setDropdownOpen}
			/>
		</View>
	);
};

export default QuestionSelect;
