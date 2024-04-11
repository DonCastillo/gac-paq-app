import React, { memo, useContext } from "react";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import { SettingContext } from "store/settings";
import { moderateScale } from "utils/responsive";

interface PropsInterface {
	currentSectionPage: number | null;
	sectionPageTotal: number | null;
	filledColor?: string;
	unfilledColor?: string;
}

function ProgressBar({
	currentSectionPage,
	sectionPageTotal,
	filledColor = "#fff",
	unfilledColor = "rgba(255, 255, 255, 0.82)",
}: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { device } = settingCtx.settingState;

	if (currentSectionPage !== null && sectionPageTotal !== null) {
		return (
			<View style={[styles.container, { paddingHorizontal: 20 }]}>
				<Progress.Bar
					style={{ width: "100%" }}
					progress={currentSectionPage / sectionPageTotal}
					width={null}
					height={moderateScale(
						device.isTablet ? 4 : 4,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					)}
					color={filledColor}
					unfilledColor={unfilledColor}
					borderWidth={0}
					borderRadius={6}
					animated={false}
				/>
			</View>
		);
	} else {
		return <></>;
	}
}

export default memo(ProgressBar);

const styles = StyleSheet.create({
	container: {
		marginVertical: 5,
		width: "100%",
	},
});
