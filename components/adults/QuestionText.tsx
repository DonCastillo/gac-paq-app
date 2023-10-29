import React from "react";
import { TextInput, View, StyleSheet, ScrollView } from "react-native";
import { GeneralStyle } from "../../styles/general";

interface Props {
	fields: any[];
	onChange: (value: string) => void;
}

export default function QuestionText({ fields, onChange }: Props): React.ReactElement {
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
				/>
			</ScrollView>
		);
	}

	return <View>{fields.length > 0 ? fields.map(displayTextInput) : ""}</View>;
}

const styles = StyleSheet.create({
	container: {
		borderWidth: GeneralStyle.adult.field.borderWidth,
		borderRadius: GeneralStyle.adult.field.borderRadius,
		borderColor: GeneralStyle.adult.field.borderColor,
		fontSize: GeneralStyle.adult.field.fontSize,
		paddingHorizontal: GeneralStyle.adult.field.paddingHorizontal,
		paddingVertical: GeneralStyle.adult.field.paddingVertical,
		backgroundColor: "#fff",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});
