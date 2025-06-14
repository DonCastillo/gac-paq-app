import React, { useEffect } from "react";
import { StyleSheet, View, Image, BackHandler } from "react-native";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import ProgressBar from "components/ProgressBar";

const LoadingScreenKid = (): React.ReactElement => {
	useEffect(() => {
		const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
			return true;
		});
		return () => backHandler.remove();
	}, []);

	return (
		<View style={[styles.container, { backgroundColor: "white" }]}>
			<Main>
				<CenterMain>
					<Image
						style={styles.logo}
						source={require("assets/images/Logo.png")}
					/>
					<ProgressBar color="#37383c" />
				</CenterMain>
			</Main>
		</View>
	);
};

export default LoadingScreenKid;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		width: 350,
		resizeMode: "contain",
		marginLeft: 10,
	},
});
