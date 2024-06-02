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
	getLanguage,
	nextPage,
	prevPage,
} from "store/settings/settingsSlice";
import { translatePage } from "utils/translate.utils";
import type { PageInterface } from "interface/payload.type";

export default function PageKid(): React.ReactElement {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const colorTheme = useSelector(getColorTheme);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);

	const [background, setBackground] = useState<React.ReactElement | null>(null);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	const { color100 } = colorTheme;
	const translatedPage = translatePage(currentPage.page.translations, language) as PageInterface;

	// set background screen dynamically
	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
	}, [currentPageNumber]);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 0) {
			setButtonComponent(
				<BackAndNextNav
					key={"both"}
					colorTheme={color100}
					onPrev={() => dispatch(prevPage())}
					onNext={() => dispatch(nextPage())}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme={color100}
					onNext={() => dispatch(nextPage())}
				/>,
			);
		}
	}, [currentPageNumber]);

	return (
		<View style={styles.container}>
			{background !== null && background}
			<Main>
				<ProgressBarKid />
				<Toolbar />

				<CenterMain>
					<ScrollContainer>
						<Heading
							customStyle={{
								color: color100,
								...GeneralStyle.kid.pageHeading,
							}}
						>
							{translatedPage.heading}
						</Heading>

						<Paragraph
							customStyle={{
								color: color100,
								...GeneralStyle.kid.pageParagraph,
							}}
						>
							{translatedPage.description}
						</Paragraph>
					</ScrollContainer>
				</CenterMain>
				<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
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
});
