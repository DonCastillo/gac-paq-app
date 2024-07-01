import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import ProgressBar from "components/ProgressBar";
import { horizontalScale, moderateScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import { getDevice } from "store/settings/settingsSlice";

const LoadingScreenAdult = (): React.ReactElement => {
	const device = useSelector(getDevice);
	const progressBarTop = moderateScale(device.isTablet ? 10 : -20, device.screenHeight);
	return (
		<View style={[styles.container]}>
			<Main>
				<CenterMain>
					<Image
						style={[styles.logo, { maxWidth: horizontalScale(250, device.screenWidth) }]}
						source={require("assets/splash-icon-loading.png")}
					/>
					<View style={{ marginTop: progressBarTop, backgroundColor: "white" }}>
						<ProgressBar color="#37383c" />
					</View>
				</CenterMain>
			</Main>
		</View>
	);
};

export default LoadingScreenAdult;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		height: "100%",
		width: "100%",
		maxHeight: "40%",
		resizeMode: "contain",
		opacity: 0.85,
	},
});
