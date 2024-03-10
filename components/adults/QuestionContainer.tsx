import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import { GeneralStyle } from "styles/general";
import { verticalScale } from "utils/responsive";

interface PropsInterface {
	children: React.ReactNode;
}

export default function QuestionContainer({ children }: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { device } = settingCtx.settingState;
	return (
		<View style={[styles.container, { maxHeight: verticalScale(500, device.screenHeight) }]}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		...GeneralStyle.adult.questionContainer,
		height: "auto",
		width: "100%",
	},
});
