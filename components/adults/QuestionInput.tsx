import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { getDevice } from "store/settings/settingsSlice";
import { GeneralStyle } from "styles/general";
import { adjustTextAlignmentDirection } from "utils/style";

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
	const device = useSelector(getDevice);

	const changeHandler = (value: string): void => {
		onChange(value);
	};

	return (
		<View>
			<TextInput
				style={[styles.container]}
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
		...GeneralStyle.adult.field,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
});
