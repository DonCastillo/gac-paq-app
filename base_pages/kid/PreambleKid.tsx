import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import Navigation from "components/Navigation";
import Toolbar from "components/kid/subcomponents/Toolbar";
import CenterMain from "components/orientation/CenterMain";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { GeneralStyle } from "styles/general";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import ProgressBarKid from "components/kid/subcomponents/ProgressBarKid";
import BackgroundPreamble from "components/kid/background/question-pages/BackgroundPreamble";
import ScrollContainer from "components/ScrollContainer";
import { useDispatch, useSelector } from "react-redux";
import {
	getColorTheme,
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getIsLoading,
	getLanguage,
	getMode,
	prevPage,
} from "store/settings/settingsSlice";
import { translateText } from "utils/translate.utils";
import type { PreambleInterface } from "interface/payload.type";
import { proceedPage } from "utils/navigation.utils";
import AnimatedView from "components/AnimatedView";
import LoadingScreenKid from "./LoadingScreenKid";

const PreambleKid = (): React.ReactElement => {
	const dispatch = useDispatch();
	const mode = useSelector(getMode);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const device = useSelector(getDevice);
	const language = useSelector(getLanguage);
	const colorTheme = useSelector(getColorTheme);
	const isLoading = useSelector(getIsLoading);
	const { color100, color200 } = colorTheme;

	// translations
	const translatedPage = currentPage.page.translations as PreambleInterface;
	const description = translateText(translatedPage.description, mode);
	const [proceed, setProceed] = useState<boolean>(false);

	// display buttons
	useEffect(() => {
		const timer = setTimeout(() => {
			setProceed(true);
			clearTimeout(timer);
		}, 3000);
		return () => {
			setProceed(false);
		};
	}, [currentPageNumber]);

	if (isLoading) {
		return <LoadingScreenKid key={currentPageNumber} />;
	}
	return (
		<View style={styles.container}>
			<BackgroundPreamble fillColor={(color100 ?? "#fff") + "B3"} />
			<Main>
				<ProgressBarKid />
				<Toolbar />
				<CenterMain>
					<AnimatedView style={{ flex: 0 }}>
						<ScrollContainer>
							<Heading
								customStyle={{
									...GeneralStyle.kid.extroPageHeading,
									maxWidth: device.isTablet ? 600 : "100%",
									fontSize: device.isTablet
										? language === "ar-AE"
											? 43
											: 40
										: language === "ar-AE"
											? 33
											: 30,
									lineHeight: device.isTablet
										? language === "ar-AE"
											? 48
											: 45
										: language === "ar-AE"
											? 38
											: 35,
								}}
							>
								{translatedPage.heading}
							</Heading>
							<Paragraph
								customStyle={{
									...GeneralStyle.kid.extroPageParagraph,
									maxWidth: device.isTablet ? 600 : "100%",
									fontSize: device.isTablet
										? language === "ar-AE"
											? 26
											: 23
										: language === "ar-AE"
											? 21
											: 18,
									lineHeight: device.isTablet
										? language === "ar-AE"
											? 36
											: 33
										: language === "ar-AE"
											? 28
											: 25,
								}}
							>
								{description}
							</Paragraph>
						</ScrollContainer>
					</AnimatedView>
				</CenterMain>
				<Navigation>
					{proceed || currentPage.page.audio_autoplay === false ? (
						<BackAndNextNav
							key={"Proceed"}
							colorTheme={color200}
							onPrev={() => dispatch(prevPage())}
							onNext={() => proceedPage()}
						/>
					) : (
						<BackAndNextNav
							key={"DontProceed"}
							colorTheme={color200}
							onPrev={() => dispatch(prevPage())}
						/>
					)}
				</Navigation>
			</Main>
		</View>
	);
};

export default PreambleKid;

const styles = StyleSheet.create({
	sublabel: {
		color: "black",
		fontSize: 17,
		marginBottom: 10,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	imageContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
		width: "100%",
	},
});
