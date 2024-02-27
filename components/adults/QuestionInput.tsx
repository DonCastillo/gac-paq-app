import React from "react";
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
	function changeHandler(value: string): void {
		onChange(value);
	}

	return (
		<View>
			<TextInput
				style={[styles.container]}
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
		...GeneralStyle.adult.field,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});
