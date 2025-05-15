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
	getMode,
	prevPage,
} from "store/settings/settingsSlice";
import { translateText } from "utils/translate.utils";
import type { PreambleInterface } from "interface/payload.type";
import { proceedPage } from "utils/navigation.utils";
import AnimatedView from "components/AnimatedView";
import LoadingScreenKid from "./LoadingScreenKid";
import { adjustPreambleDescriptionText, adjustPreambleHeadingText } from "utils/style";

const PreambleKid = (): React.ReactElement => {
	const dispatch = useDispatch();
	const mode = useSelector(getMode);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const device = useSelector(getDevice);
	const colorTheme = useSelector(getColorTheme);
	const isLoading = useSelector(getIsLoading);
	const { color100, color200 } = colorTheme;

	// translations
	const translatedPage = currentPage.page.translations as PreambleInterface;
	const description = translateText(translatedPage.description, mode);
	const [proceed, setProceed] = useState<boolean>(false);

	// display buttons
	useEffect(() => {
		if (currentPage.page.audio_autoplay === true) {
			const timer = setTimeout(() => {
				setProceed(true);
				clearTimeout(timer);
			}, 3000);
		} else {
			setProceed(true);
		}
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
						<ScrollContainer
							scrollContainerStyle={{
								...GeneralStyle.kid.scrollContainer,
								backgroundColor: color100 + "26",
							}}
							scrollIndicatorStyle={{
								...GeneralStyle.kid.scrollIndicator,
								backgroundColor: color200,
							}}
						>
							<Heading
								customStyle={{
									...GeneralStyle.kid.extroPageHeading,
									maxWidth: device.isTablet ? 600 : "100%",
									...adjustPreambleHeadingText(),
								}}
							>
								{translatedPage.heading}
							</Heading>
							<Paragraph
								customStyle={{
									...GeneralStyle.kid.extroPageParagraph,
									maxWidth: device.isTablet ? 600 : "100%",
									...adjustPreambleDescriptionText(),
								}}
							>
								{description}
							</Paragraph>
						</ScrollContainer>
					</AnimatedView>
				</CenterMain>
				<Navigation>
					{proceed ? (
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
