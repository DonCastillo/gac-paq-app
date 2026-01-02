import Main from "@components/Main";
import CenterMain from "@components/orientation/CenterMain";
import ProgressBar from "@components/ProgressBar";
import useBackHandler from "@hooks/useBackHandler";
import { Component } from "@interface/function.type";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const LoadingScreenKid: Component = () => {
	useBackHandler();

	return (
		<View style={[styles.container, { backgroundColor: "white" }]}>
			<Main>
				<CenterMain>
					<Image
						style={styles.logo}
						source={require("@assets/images/Logo.png")}
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
