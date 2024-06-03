import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { GeneralStyle } from "styles/general";

interface PropsInterface {
	onChange: (value: string) => void;
	selectedValue: string | null;
	placeholder: string | null;
}

const QuestionInput = ({
	onChange,
	selectedValue,
	placeholder,
}: PropsInterface): React.ReactElement => {
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
};

export default QuestionInput;

const styles = StyleSheet.create({
	container: {
		...GeneralStyle.adult.field,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});
