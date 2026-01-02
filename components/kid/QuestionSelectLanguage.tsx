import DropDownSelector from "@components/DropDownPicker";
import type { ChoiceIcon, LanguageInterface } from "@interface/payload.type";
import { getLanguageOption } from "@store/questions/questionsSlice";
import { getDevice } from "@store/settings/settingsSlice";
import { optionLanguage } from "@utils/options.utils";
import { verticalScale } from "@utils/responsive.utils";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

interface PropsInterface {
	onChange: (value: string) => void;
	selectedValue: string | null;
	dropdownOpen: boolean;
	setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuestionSelectLanguage = ({ selectedValue, onChange, dropdownOpen, setDropdownOpen }: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);
	const options: LanguageInterface[] = useSelector(getLanguageOption);
	const itemsRaw: ChoiceIcon[] = optionLanguage(options);

	return (
		<View style={{ maxWidth: "100%" }}>
			<DropDownSelector
				options={[...itemsRaw]}
				selectedValue={selectedValue}
				onSelect={onChange}
				dropdownOpen={dropdownOpen}
				setDropdownOpen={setDropdownOpen}
				dropdownMinHeight={verticalScale(300, device.screenHeight)}
			/>
		</View>
	);
};

export default QuestionSelectLanguage;
