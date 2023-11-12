import { View, ImageBackground, Text, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SettingContext } from "../../store/settings";
import { translate } from "../../utils/page";
import BackAndNextNav from "../../components/kid/navigation/BackAndNextNav";

export default function QuestionIntroKid(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { language, colorTheme, currentPage, currentPageNumber } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const translatedPage = translate(currentPage.page.translations, language);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 0) {
			setButtonComponent(
				<BackAndNextNav
					onPrev={() => settingCtx.prevPage()}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		} else {
			setButtonComponent(<BackAndNextNav onNext={() => settingCtx.nextPage()} />);
		}
	}, [currentPageNumber]);

	const image = {
		uri: currentPage.page.image_mobile,
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={image}
				resizeMode="cover"
				style={styles.image}
			></ImageBackground>
			<View style={[styles.headingPanel, { backgroundColor: color100 }]}>
				<ScrollView style={styles.headingPanelTop}>
					<Text style={styles.headingSubText}>{translatedPage?.subheading}</Text>
					<Text style={styles.headingText}>{translatedPage?.heading}</Text>
				</ScrollView>
				<View style={styles.headingPanelBottom}>{buttonComponent !== null && buttonComponent}</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
	headingPanel: {
		paddingHorizontal: 20,
		position: "absolute",
		bottom: 0,
		width: "100%",
		height: "45%",
		flex: 1,
		borderTopRightRadius: 45,
		borderTopLeftRadius: 45,
		paddingTop: 40,
		paddingBottom: 50,
	},
	headingSubText: {
		textAlign: "center",
		color: "#fff",
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
