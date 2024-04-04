import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive";
import { SettingContext } from "store/settings";

QuestionTitle.propTypes = {
	children: PropTypes.node,
};

export default function QuestionTitle({ children }): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { device } = settingCtx.settingState;
	return (
		<View style={styles.container}>
			<Text
				style={{
					...styles.text,
					fontSize: moderateScale(
						device.isTablet ? 14 : 14,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
					lineHeight: moderateScale(
						device.isTablet ? 18 : 18,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
				}}
			>
				{children}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		// backgroundColor: "green"
	},
	text: {
		...GeneralStyle.kid.questionQuestionTitle,
		flex: 1,
		width: "100%",
		flexWrap: "wrap",
		marginBottom: 10,
	},
});
