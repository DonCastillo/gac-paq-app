import { StyleSheet } from "react-native";
import { useContext } from "react";
import type LanguageInterface from "../../interface/language";
import { SettingContext } from "../../store/settings";
import type QuestionRadioItemInterface from "../../interface/question_radio_item";
import DropDownSelector from "../DropDownPicker";
import { QuestionContext } from "../../store/questions";

export default function QuestionSelectLanguage({ selectedValue, onChange }) {
	const settingCtx = useContext(SettingContext);
	const questionCtx = useContext(QuestionContext);
	const options: LanguageInterface[] = questionCtx.questionState.languageOption;

	const itemsRaw: QuestionRadioItemInterface[] = options.map((option: LanguageInterface) => {
		const FlagComponent = option.flag;
		return {
			label: option.name,
			value: option.lang_code,
			icon: () => (
				<FlagComponent
					height={50}
					width={50}
					padding={0}
					margin={0}
				/>
			),
		};
	});

	return (
		<DropDownSelector
			options={[...itemsRaw]}
			selectedValue={selectedValue}
			onSelect={onChange}
		/>
	);
}

const styles = StyleSheet.create({
	optionIcon: {
		width: 50,
		height: "100%",
	},
});
