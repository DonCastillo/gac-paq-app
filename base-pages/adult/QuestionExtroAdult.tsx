import React, { useContext } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { SettingContext } from "../../store/settings";
import { translate } from "../../utils/page";
import Main from "../../components/Main";
import CenterMain from "../../components/orientation/CenterMain";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Navigation from "../../components/Navigation";
import SingleNav from "../../components/adults/navigation/SingleNav";
import Toolbar from "../../components/adults/Toolbar";
import BGLinearGradient from "../../components/BGLinearGradient";

export default function QuestionExtroAdult(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { language, currentPage, buttons } = settingCtx.settingState;
	const translatedPage = translate(currentPage.page.translations, language);

	const bgImageURL =
		"http://localhost:8055/assets/607b231c-f6d0-439d-8b0a-a8e873457ed9?access_token=kaTCPGRRqTCp18GmHkECCKNeMcY5Vwa5";

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<ImageBackground
				source={{ uri: bgImageURL }}
				resizeMode="cover"
				style={styles.bgImage}
			></ImageBackground>
			<Main>
				<Toolbar />
				<CenterMain>
					<Heading
						customStyle={{
							color: "white",
							fontSize: 40,
							fontWeight: "bold",
							textAlign: "center",
						}}
					>
						{translatedPage?.heading}
					</Heading>
					<Paragraph
						customStyle={{
							color: "#fff",
							fontSize: 20,
						}}
					>
						{translatedPage?.subheading}
					</Paragraph>
				</CenterMain>
				<Navigation>
					<SingleNav
						label={buttons?.continue}
						onPress={() => {
							settingCtx.nextPage();
						}}
					/>
				</Navigation>
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
		width: "100%",
		height: "100%",
		position: "relative",
	},
	bgImage: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
		opacity: 0.3,
	},
});
