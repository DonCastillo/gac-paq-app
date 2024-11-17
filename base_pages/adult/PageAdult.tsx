import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import BGLinearGradient from "components/BGLinearGradient";
import Toolbar from "components/adults/subcomponents/Toolbar";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { GeneralStyle } from "styles/general";
import ScrollContainer from "components/ScrollContainer";
import ProgressBarAdult from "components/adults/subcomponents/ProgressBarAdult";
import { useDispatch, useSelector } from "react-redux";
import {
	getColorTheme,
	getCurrentPage,
	getCurrentPageNumber,
	getIsLoading,
	getMode,
	prevPage,
} from "store/settings/settingsSlice";
import { translateDescription } from "utils/translate.utils";
import type { PageInterface } from "interface/payload.type";
import { proceedPage } from "utils/navigation.utils";
import AnimatedView from "components/AnimatedView";
import LoadingScreenAdult from "./LoadingScreenAdult";
import { adjustPageDescriptionText, adjustPageHeadingText } from "utils/style";

const PageAdult = (): React.ReactElement => {
	const dispatch = useDispatch();
	const colorTheme = useSelector(getColorTheme);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const mode = useSelector(getMode);
	const isLoading = useSelector(getIsLoading);
	const { color100 } = colorTheme;

	// state
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [proceed, setProceed] = useState<boolean>(false);

	// translations
	const translatedPage = currentPage.page.translations as PageInterface;
	const translatedDescription = translateDescription(
		translatedPage.description ?? "",
		translatedPage.description_mode,
		mode,
	) as string;

	useEffect(() => {
		const timer = setTimeout(() => {
			setProceed(true);
			clearTimeout(timer);
		}, 3000);
		return () => {
			setProceed(false);
		};
	}, [currentPageNumber]);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 0) {
			if (proceed || currentPage.page.audio_autoplay === false) {
				setButtonComponent(
					<BackAndNextNav
						key={"both"}
						colorTheme={"#FFF"}
						onPrev={() => dispatch(prevPage())}
						onNext={() => proceedPage()}
					/>,
				);
			} else {
				setButtonComponent(
					<BackAndNextNav
						key={"next"}
						colorTheme={"#FFF"}
						onPrev={() => dispatch(prevPage())}
					/>,
				);
			}
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme={"#FFF"}
					onNext={() => proceedPage()}
				/>,
			);
		}
	}, [currentPageNumber, proceed]);

	if (isLoading) {
		return <LoadingScreenAdult key={currentPageNumber} />;
	}
	return (
		<View style={[styles.container, { backgroundColor: color100 }]}>
			<BGLinearGradient />
			<Main>
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
					<AnimatedView style={{ flex: 0 }}>
						<ScrollContainer>
							<Heading
								customStyle={{
									...GeneralStyle.adult.pageHeading,
									...adjustPageHeadingText(),
								}}
							>
								{translatedPage.heading}
							</Heading>
							<Paragraph
								customStyle={{
									...GeneralStyle.adult.pageParagraph,
									...adjustPageDescriptionText(),
								}}
							>
								{translatedDescription}
							</Paragraph>
						</ScrollContainer>
					</AnimatedView>
				</CenterMain>
				<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
			</Main>
		</View>
	);
};

export default PageAdult;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
});
