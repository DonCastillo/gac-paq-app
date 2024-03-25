import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import BGLinearGradient from "components/BGLinearGradient";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import Main from "components/Main";
import BottomMain from "components/orientation/BottomMain";
import Navigation from "components/Navigation";
import ImageBackdrop from "components/ImageBackdrop";
import { getImageBackground } from "utils/background";
import { GeneralStyle } from "styles/general";
import Toolbar from "components/adults/subcomponents/Toolbar";

export default function QuestionIntroAdult(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { mode, language, colorTheme, currentPage, currentPageNumber, device } =
		settingCtx.settingState;
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

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<ImageBackdrop
				source={getImageBackground(translatedPage?.images, mode, device.isTablet)}
				key={currentPageNumber}
			/>
			<View
				style={[
					styles.headingPanel,
					{
						backgroundColor: color200,
						maxWidth: device.isTablet ? 400 : "100%",
						minHeight: device.isTablet ? "100%" : 250,
					},
				]}
			>
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
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	toolbar: {
		position: "absolute",
		top: 0,
		width: "100%",
	},
	headingPanel: {
		position: "absolute",
		width: "100%",
		height: "auto",
		...GeneralStyle.general.sectionIntroPanel,
	},
	headingSubText: {
		textAlign: "center",
		...GeneralStyle.general.sectionIntroSubheading,
	},
	headingText: {
		textAlign: "center",
		height: "100%",
		...GeneralStyle.general.sectionIntroHeading,
	},
});
