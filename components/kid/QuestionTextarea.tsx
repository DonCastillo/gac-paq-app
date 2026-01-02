import { getColorTheme, getDevice } from "@store/settings/settingsSlice";
import { Font, GeneralStyle } from "@styles/general";
import { verticalScale } from "@utils/responsive.utils";
import { adjustTextAlignmentDirection } from "@utils/style";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

interface PropsInterface {
	onChange: (value: string) => void;
	selectedValue: string | null;
	placeholder: string | null;
}

const QuestionTextarea = ({ onChange, selectedValue, placeholder }: PropsInterface): React.ReactElement => {
	const colorTheme = useSelector(getColorTheme);
	const device = useSelector(getDevice);
	const { color100 } = colorTheme;

	const changeHandler = (value: string): void => {
		onChange(value);
	};

	return (
		<View>
			<TextInput
				style={[styles.container, { borderColor: color100, maxHeight: verticalScale(230, device.screenHeight) }]}
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={changeHandler}
				placeholder={placeholder ?? ""}
				defaultValue={selectedValue ?? ""}
				multiline={true}
				numberOfLines={15}
				maxLength={500}
				keyboardType={device.platform === "ios" ? "ascii-capable" : "visible-password"}
				textAlign={adjustTextAlignmentDirection()}
			/>
		</View>
	);
};

export default QuestionTextarea;

const styles = StyleSheet.create({
	container: {
		...GeneralStyle.kid.field,
		maxWidth: "100%",
		height: "100%",
		padding: 10,
		textAlignVertical: "top",
		textAlign: "left",
		fontFamily: Font.PoppinsRegular,
	},
});
