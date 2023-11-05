import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "../../store/settings";
import Main from "../../components/Main";
import CenterMain from "../../components/orientation/CenterMain";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import ProgressBar from "../../components/ProgressBar";
import { useNavigation } from "@react-navigation/native";
import { Images } from "../../styles/images";
import { Logo } from "../../components/svgs/kid";

export default function SplashKid(): JSX.Element {
	const settingCtx = useContext(SettingContext);
	const { color100 } = settingCtx.settingState.colorTheme;
	const navigation = useNavigation();
	const SplashImage = Images.kid.splash_image;

	useEffect(() => {
		const timeout = setTimeout(() => {
			clearInterval(timeout);
			navigation.navigate(`RegularPageScreen`);
		}, 3000);
	});

	return (
		<View style={[styles.container, { backgroundColor: color100 }]}>
			<Main>
				<CenterMain>
					<View style={styles.imageContainer}>
						<Logo />
					</View>
					<Heading
						customStyle={{
							fontWeight: "bold",
						}}
					>
						gacpaq
					</Heading>
					<Paragraph
						customStyle={{
							color: "#fff",
							fontSize: 20,
							lineHeight: 23.6,
						}}
					>
						The global adolescent and children activity questionnaire
					</Paragraph>
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
	imageContainer: {},
});
