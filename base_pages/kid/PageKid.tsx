import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { getIntroductoryBackground } from "utils/background.utils";
import { GeneralStyle } from "styles/general";
import Toolbar from "components/kid/subcomponents/Toolbar";
import ScrollContainer from "components/ScrollContainer";
import ProgressBarKid from "components/kid/subcomponents/ProgressBarKid";
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
import LoadingScreenKid from "./LoadingScreenKid";
import { adjustPageDescriptionText, adjustPageHeadingText } from "utils/style";
import Mode from "constants/mode.enum";

const PageKid = (): React.ReactElement => {
	const dispatch = useDispatch();
	const colorTheme = useSelector(getColorTheme);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const mode = useSelector(getMode);
	const isLoading = useSelector(getIsLoading);
	const { color100, color200 } = colorTheme;

	// state
	const [background, setBackground] = useState<React.ReactElement | null>(null);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [proceed, setProceed] = useState<boolean>(false);

	// translations
	const translatedPage = currentPage.page.translations as PageInterface;
	const translatedDescription = translateDescription(
		translatedPage.description ?? "",
		translatedPage.description_mode,
		mode,
	) as string;

	// set background screen dynamically
	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
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
						colorTheme={color100}
						onPrev={() => dispatch(prevPage())}
						onNext={() => proceedPage()}
					/>,
				);
			} else {
				setButtonComponent(
					<BackAndNextNav
						key={"next"}
						colorTheme={color100}
						onPrev={() => dispatch(prevPage())}
					/>,
				);
			}
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme={color100}
					onNext={() => proceedPage()}
				/>,
			);
		}
	}, [currentPageNumber, proceed]);

	if (isLoading) {
		<LoadingScreenKid key={currentPageNumber} />;
	}
	return (
		<View style={styles.container}>
			{background !== null && background}
			<Main>
				<ProgressBarKid />
				<Toolbar />
				<CenterMain>
					<AnimatedView style={{ flex: 0 }}>
						<ScrollContainer
							scrollContainerStyle={{
								width: 8,
								backgroundColor: color100 + "26",
							}}
							scrollIndicatorStyle={{
								width: 8,
								backgroundColor: color200,
							}}
						>
							<Heading
								customStyle={{
									color: color100,
									...GeneralStyle.kid.pageHeading,
									...adjustPageHeadingText(),
								}}
							>
								{translatedPage.heading}
							</Heading>

							<Paragraph
								customStyle={{
									color: color100,
									...GeneralStyle.kid.pageParagraph,
									backgroundColor: "white",
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

export default PageKid;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
