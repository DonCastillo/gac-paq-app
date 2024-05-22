import React from "react";
import { TextInput, View, StyleSheet, ScrollView } from "react-native";
import { GeneralStyle } from "styles/general";
import { useSelector } from "react-redux";
import { getColorTheme } from "store/settings/settingsSlice";

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
	const colorTheme = useSelector(getColorTheme);
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
		...GeneralStyle.kid.field,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});
