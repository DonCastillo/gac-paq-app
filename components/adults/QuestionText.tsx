import React from "react";
import { TextInput, View, StyleSheet, ScrollView } from "react-native";
import { GeneralStyle } from "styles/general";

interface QuestionTextPropsInterface {
	fields: any[];
	onChange: (value: string) => void;
	selectedValue: string | null;
}

export default function QuestionText({
	fields,
	onChange,
	selectedValue,
}: QuestionTextPropsInterface): React.ReactElement {
	function changeHandler(value: string): void {
		onChange(value);
	}

	function displayTextInput(field: any, index: number): React.ReactElement {
		return (
			<ScrollView key={index + 1}>
				<TextInput
					style={[styles.container]}
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={changeHandler}
					placeholder={field.label}
					defaultValue={selectedValue ?? ""}
				/>
			</ScrollView>
		);
	}

	return <View>{fields.length > 0 ? fields.map(displayTextInput) : ""}</View>;
}

const styles = StyleSheet.create({
	container: {
		...GeneralStyle.adult.field,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});
