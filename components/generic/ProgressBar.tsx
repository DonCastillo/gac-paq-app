import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import { SettingContext } from "store/settings";

interface PropsInterface {
	currentSectionPage: number | null;
	sectionPageTotal: number | null;
	filledColor?: string;
	unfilledColor?: string;
}

export default function ProgressBar({
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
					height={device.isTablet ? 10 : 7}
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

const styles = StyleSheet.create({
	container: {
		marginVertical: 5,
		width: "100%",
	},
});
