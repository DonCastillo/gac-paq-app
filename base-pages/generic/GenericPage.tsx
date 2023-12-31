import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SettingContext } from "../../store/settings";
import { translate } from "../../utils/page";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import BGLinearGradient from "components/BGLinearGradient";
import Toolbar from "components/adults/Toolbar";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import ScrollContainer from "components/ScrollContainer";

export default function GenericPage(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { language, colorTheme, currentPage } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const translatedPage = translate(currentPage.page.translations, language);

	function renderToolbar(): React.ReactElement {
		if (currentPage.section === "intro" && currentPage.sectionPageNumber === 1) {
			return <></>;
		} else {
			return <Toolbar />;
		}
	}

	return (
		<View style={[styles.container, { backgroundColor: color100 }]}>
			<BGLinearGradient />
			<Main>
				{renderToolbar()}
				<CenterMain>
					<ScrollContainer>
						<Heading
							customStyle={{
								color: "white",
								fontSize: 40,
								marginBottom: 50,
								textAlign: "center",
							}}
						>
							{translatedPage?.heading.toLowerCase()}
						</Heading>
						<Paragraph
							customStyle={{
								color: "white",
								fontSize: 15,
								lineHeight: 17,
							}}
						>
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
