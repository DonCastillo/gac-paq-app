import React, { useContext } from "react";
import { TextInput, View, StyleSheet, ScrollView, Text } from "react-native";
import { SettingContext } from "store/settings";
import { Font, GeneralStyle } from "styles/general";
import { verticalScale } from "utils/responsive";

interface QuestionInputPropsInterface {
	onChange: (value: string) => void;
	selectedValue: string | null;
	placeholder: string | null;
}

export default function QuestionTextarea({
	onChange,
	selectedValue,
	placeholder,
}: QuestionInputPropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme, device } = settingCtx.settingState;
	const { color100 } = colorTheme;

	function changeHandler(value: string): void {
		onChange(value);
	}

	return (
		<View>
			<TextInput
				style={[
					styles.container,
					{ height: verticalScale(230, device.screenHeight) },
				]}
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={changeHandler}
				placeholder={placeholder ?? ""}
				defaultValue={selectedValue ?? ""}
				multiline={true}
				numberOfLines={15}
				maxLength={500}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		...GeneralStyle.adult.field,
		maxWidth: "100%",
		padding: 10,
		textAlignVertical: "top",
		textAlign: "left",
		fontFamily: Font.PoppinsRegular,
	},
});
