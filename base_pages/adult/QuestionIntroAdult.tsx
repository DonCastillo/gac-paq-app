import React, { useContext, useState, useEffect } from "react";
import { View, ImageBackground, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import BGLinearGradient from "components/BGLinearGradient";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import Main from "components/Main";
import BottomMain from "components/orientation/BottomMain";
import Navigation from "components/Navigation";

export default function QuestionIntroAdult(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { language, colorTheme, currentPage, currentPageNumber, buttons } = settingCtx.settingState;
	const { color200 } = colorTheme;
	const translatedPage = translate(currentPage.page.translations, language);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 0) {
			setButtonComponent(
				<BackAndNextNav
					key={"both"}
					colorTheme="#FFF"
					onPrev={() => settingCtx.prevPage()}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme="#FFF"
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		}
	}, [currentPageNumber]);

	const image = {
		uri: currentPage.page.image_mobile,
	};

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<ImageBackground
				source={image}
				resizeMode="cover"
				style={styles.image}
			></ImageBackground>
			<View style={[styles.headingPanel, { backgroundColor: color200 }]}>
				<ScrollView>
					<Text style={styles.headingSubText}>{translatedPage?.subheading}</Text>
					<Text style={styles.headingText}>{translatedPage?.heading}</Text>
				</ScrollView>
			</View>
			<Main>
				<BottomMain></BottomMain>
				<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
			</Main>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	image: {
		flex: 1,
		position: "absolute",
		top:0,
		left: 0,
		width: "100%",
		height:"100%",
		justifyContent: "center",
	},
	toolbar: {
		position: "absolute",
		top: 0,
		width: "100%",
	},
	headingPanel: {
		paddingHorizontal: 60,
		position: "absolute",
		bottom: 0,
		width: "100%",
		minHeight: 250,
		height: "auto",
		borderTopRightRadius: 45,
		borderTopLeftRadius: 45,
		paddingTop: 20,
		paddingBottom: 30,
	},
	headingSubText: {
		textAlign: "center",
		color: "#fff",
		fontSize: 20
	},
	headingText: {
		textAlign: "center",
		paddingTop: 20,
		color: "#fff",
		fontSize: 32,
		fontWeight: "bold",
		height: "100%",
	},
	headingPanelTop: {
		flex: 1,
	},
	headingPanelBottom: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		paddingHorizontal: 20,
	},
});
