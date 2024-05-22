import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { GeneralStyle } from "styles/general";
import { useSelector } from "react-redux";
import { getColorTheme } from "store/settings/settingsSlice";

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
	const colorTheme = useSelector(getColorTheme);
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
		...GeneralStyle.kid.field,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});
