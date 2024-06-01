import React from "react";
import type LanguageInterface from "interface/language";
import DropDownSelector from "components/DropDownPicker";
import { optionLanguage } from "utils/options.utils";
import { verticalScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import { getDevice } from "store/settings/settingsSlice";
import { getLanguageOption } from "store/questions/questionsSlice";
import type { ChoiceIcon } from "interface/payload.type";

interface PropsInterface {
	onChange: (value: string) => void;
	selectedValue: string | null;
	dropdownOpen: boolean;
	setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function QuestionSelectLanguage({
	selectedValue,
	onChange,
	dropdownOpen,
	setDropdownOpen,
}: PropsInterface): React.ReactElement {
	const device = useSelector(getDevice);
	const options: LanguageInterface[] = useSelector(getLanguageOption);
	const itemsRaw: ChoiceIcon[] = optionLanguage(options);

	return (
		<DropDownSelector
			options={[...itemsRaw]}
			selectedValue={selectedValue}
			onSelect={onChange}
			dropdownOpen={dropdownOpen}
			setDropdownOpen={setDropdownOpen}
			dropdownMinHeight={verticalScale(300, device.screenHeight)}
		/>
	);
}
