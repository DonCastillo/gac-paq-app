import Main from "@components/Main";
import CenterMain from "@components/orientation/CenterMain";
import Paragraph from "@components/Paragraph";
import ProgressBar from "@components/ProgressBar";
import useBackHandler from "@hooks/useBackHandler";
import { getDevice } from "@store/settings/settingsSlice";
import { horizontalScale, moderateScale } from "@utils/responsive.utils";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

interface PropsInterface {
	displayTitle?: boolean;
}

const LoadingScreenAdult = ({ displayTitle }: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);
	const progressBarTop = moderateScale(device.isTablet ? 10 : -20, device.screenHeight);

	useBackHandler();

	return (
		<View style={[styles.container]}>
			<Main>
				<CenterMain>
					<Image
						style={[styles.logo, { maxWidth: horizontalScale(250, device.screenWidth) }]}
						source={require("@assets/splash-icon-loading.png")}
					/>
					{displayTitle === true && (
						<Paragraph customStyle={{ color: "#37383c", fontSize: 20, lineHeight: 30 }}>
							The Global Adolescent and Child Activity Questionnaire
						</Paragraph>
					)}
					<View
						style={{
							marginTop: displayTitle === true ? 0 : progressBarTop,
							backgroundColor: "white",
						}}
					>
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
		maxHeight: "35%",
		resizeMode: "contain",
		opacity: 0.85,
	},
});
