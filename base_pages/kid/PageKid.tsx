import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { getIntroductoryBackground } from "utils/background";
import { GeneralStyle } from "styles/general";
import Toolbar from "components/kid/subcomponents/Toolbar";
import ScrollContainer from "components/ScrollContainer";
import ProgressBar from "components/kid/subcomponents/ProgressBar";

export default function PageKid(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { language, colorTheme, currentPage, currentPageNumber, sectionTotalPages, device } =
		settingCtx.settingState;
	const [background, setBackground] = useState<React.ReactElement | null>(null);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	const { color100, color200 } = colorTheme;
	const translatedPage = translate(currentPage.page.translations, language);

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
					onPrev={() => settingCtx.prevPage()}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme={color100}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		}
	}, [currentPageNumber]);

	return (
		<View style={styles.container}>
			{background !== null && background}
			<Main>
				<ProgressBar
					currentSectionPage={currentPage.sectionPageNumber}
					sectionPageTotal={
						currentPage.sectionNumber !== null && sectionTotalPages[currentPage.sectionNumber]
					}
					filledColor={color100}
					unfilledColor={color200 + "4D"}
				/>
				<Toolbar />

				<CenterMain>
					<ScrollContainer>
						<Heading
							customStyle={{
								color: color100,
								...GeneralStyle.kid.pageHeading,
							}}
						>
							{translatedPage?.heading}
						</Heading>

						<Paragraph
							customStyle={{
								color: color100,
								...GeneralStyle.kid.pageParagraph,
							}}
						>
							{translatedPage?.description}
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
