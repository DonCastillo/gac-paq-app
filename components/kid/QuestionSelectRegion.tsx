import React from "react";
import DropDownSelector from "components/DropDownPicker";
import { optionRegion } from "utils/options.utils";
import { useSelector } from "react-redux";
import { getRegionOption } from "store/questions/questionsSlice";
import type { ChoiceIcon, RegionInterface } from "interface/payload.type";

interface QuestionSelectRegionProps {
	onChange: (value: string) => void;
	selectedValue: string | null;
	dropdownOpen: boolean;
	setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function QuestionSelectRegion({
	selectedValue,
	onChange,
	dropdownOpen,
	setDropdownOpen,
}: QuestionSelectRegionProps): React.ReactElement {
	const regionOption = useSelector(getRegionOption);
	const options: RegionInterface[] = regionOption;
	const itemsRaw: ChoiceIcon[] = optionRegion(options);

	return (
		<DropDownSelector
			options={[...itemsRaw]}
			selectedValue={selectedValue}
			onSelect={onChange}
			dropdownOpen={dropdownOpen}
			setDropdownOpen={setDropdownOpen}
		/>
	);
}
