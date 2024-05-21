import React from "react";
import { StyleSheet, View } from "react-native";
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
import { useDispatch, useSelector } from "react-redux";
import {
	getColorTheme,
	getCurrentPage,
	getLanguage,
	nextPage,
	prevPage,
} from "store/settings/settingsSlice";

export default function GenericPage(): React.ReactElement {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const colorTheme = useSelector(getColorTheme);
	const currentPage = useSelector(getCurrentPage);

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
						onPrev={() => dispatch(prevPage())}
						onNext={() => dispatch(nextPage())}
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
