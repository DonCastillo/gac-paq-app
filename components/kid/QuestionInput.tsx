import { getColorTheme, getDevice } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { adjustTextAlignmentDirection } from "@utils/style";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

interface PropsInterface {
	onChange: (value: string) => void;
	selectedValue: string | null;
	placeholder: string | null;
}

const QuestionInput = ({ onChange, selectedValue, placeholder }: PropsInterface): React.ReactElement => {
	const colorTheme = useSelector(getColorTheme);
	const device = useSelector(getDevice);

	const { color100 } = colorTheme;

	const changeHandler = (value: string): void => {
		onChange(value);
	};

	return (
		<View style={{ maxWidth: "100%" }}>
			<TextInput
				style={[styles.container, { borderColor: color100 }]}
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={changeHandler}
				placeholder={placeholder ?? ""}
				defaultValue={selectedValue ?? ""}
				keyboardType={device.platform === "ios" ? "ascii-capable" : "visible-password"}
				textAlign={adjustTextAlignmentDirection()}
			/>
		</View>
	);
};

export default QuestionInput;

const styles = StyleSheet.create({
	container: {
		...GeneralStyle.kid.field,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});
