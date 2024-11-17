import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Font, GeneralStyle } from "styles/general";
import { verticalScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import { getDevice } from "store/settings/settingsSlice";
import { adjustTextAlignmentDirection } from "utils/style";

interface PropsInterface {
	onChange: (value: string) => void;
	selectedValue: string | null;
	placeholder: string | null;
}

const QuestionTextarea = ({
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
				style={[styles.container, { height: verticalScale(180, device.screenHeight) }]}
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
		...GeneralStyle.adult.field,
		maxWidth: "100%",
		padding: 10,
		textAlignVertical: "top",
		textAlign: "left",
		flexWrap: "wrap",
		fontFamily: Font.PoppinsRegular,
	},
});
