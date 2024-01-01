import React, { useContext } from "react";
import { SettingContext } from "store/settings";
import { TextInput, View, StyleSheet, ScrollView } from "react-native";
import { GeneralStyle } from "styles/general";

interface QuestionTextProps {
	fields: any[];
	selectedValue: string | null;
	onChange: (value: string) => void;
}

export default function QuestionText({
	fields,
	onChange,
	selectedValue,
}: QuestionTextProps): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme } = settingCtx.settingState;
	const { color100 } = colorTheme;

	// function DismissKeyboard({children}) {
	//     return <TouchableWithoutFeedback
	// }

	function changeHandler(value: string): void {
		onChange(value);
	}

	function displayTextInput(field: any, index: number): React.ReactElement {
		return (
			<ScrollView key={index + 1}>
				<TextInput
					style={[styles.container, { borderColor: color100 }]}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={changeHandler}
					placeholder={field.label}
					defaultValue={selectedValue ?? ""}
				/>
			</ScrollView>
		);
	}

	return <View>{fields.map(displayTextInput)}</View>;
}

const styles = StyleSheet.create({
	container: {
		borderWidth: GeneralStyle.kid.field.borderWidth,
		borderRadius: GeneralStyle.kid.field.borderRadius,
		fontSize: GeneralStyle.kid.field.fontSize,
		paddingHorizontal: GeneralStyle.kid.field.paddingHorizontal,
		paddingVertical: GeneralStyle.kid.field.paddingVertical,
		backgroundColor: "#fff",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});
