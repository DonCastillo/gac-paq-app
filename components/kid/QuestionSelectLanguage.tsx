import React, { useContext } from "react";
import type LanguageInterface from "interface/language";
import type QuestionRadioItemInterface from "interface/question_radio_item";
import DropDownSelector from "components/DropDownPicker";
import { QuestionContext } from "store/questions";
import { optionLanguage } from "utils/options";
import { verticalScale } from "utils/responsive";
import { SettingContext } from "store/settings";

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
	const questionCtx = useContext(QuestionContext);
	const settingCtx = useContext(SettingContext);
	const { device } = settingCtx.settingState;
	const options: LanguageInterface[] = questionCtx.questionState.languageOption;
	const itemsRaw: QuestionRadioItemInterface[] = optionLanguage(options);

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
