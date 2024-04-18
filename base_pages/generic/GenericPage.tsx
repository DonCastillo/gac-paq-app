import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import BGLinearGradient from "components/BGLinearGradient";
import Toolbar from "components/adults/subcomponents/Toolbar";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import ScrollContainer from "components/ScrollContainer";
import { GeneralStyle } from "styles/general";
import ProgressBarAdult from "components/adults/subcomponents/ProgressBarAdult";

export default function GenericPage(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { language, colorTheme, currentPage } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const translatedPage = translate(currentPage.page.translations, language);

	return (
		<View style={[styles.container, { backgroundColor: color100 }]}>
			<BGLinearGradient />
			<Main>
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
					<ScrollContainer>
						<Heading customStyle={GeneralStyle.adult.pageHeading}>
							{translatedPage?.heading}
						</Heading>
						<Paragraph customStyle={GeneralStyle.adult.pageParagraph}>
							{translatedPage?.description}
						</Paragraph>
					</ScrollContainer>
				</CenterMain>
				<Navigation>
					<BackAndNextNav
						onPrev={() => settingCtx.prevPage()}
						onNext={() => settingCtx.nextPage()}
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
		position: "relative",
	},
});
