import React, { useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import { SettingContext } from "store/settings";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import ProgressBar from "components/ProgressBar";
import Colors from "store/data/colors";
import Mode from "../../constants/mode";

export default function LoadingScreenAdult(): React.ReactElement {
	const color100 = Colors[Mode.Adult][0].color100;
	return (
		<View style={[styles.container, { backgroundColor: color100 }]}>
			<Main>
				<CenterMain>
					<Image
						style={styles.logo}
						source={require("./../../assets/images/Logo.png")}
					/>
					<ProgressBar />
				</CenterMain>
			</Main>
		</View>
	);
}

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
	},
});
