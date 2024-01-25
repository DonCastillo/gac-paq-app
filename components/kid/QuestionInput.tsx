import React, { useContext } from "react";
import { SettingContext } from "store/settings";
import { TextInput, View, StyleSheet, ScrollView } from "react-native";
import { GeneralStyle } from "styles/general";

interface QuestionInputPropsInterface {
	onChange: (value: string) => void;
	selectedValue: string | null;
	placeholder: string | null;
}

export default function QuestionInput({
	onChange,
	selectedValue,
	placeholder,
}: QuestionInputPropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme } = settingCtx.settingState;
	const { color100 } = colorTheme;

	function changeHandler(value: string): void {
		onChange(value);
	}

	return (
		<View>
			<TextInput
				style={[styles.container, { borderColor: color100 }]}
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={changeHandler}
				placeholder={placeholder ?? ""}
				defaultValue={selectedValue ?? ""}
			/>
		</View>
	);
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
