import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import BGLinearGradient from "components/BGLinearGradient";
import Toolbar from "components/adults/Toolbar";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";

export default function PageAdult(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { language, colorTheme, currentPage, currentPageNumber } = settingCtx.settingState;
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	const { color100 } = colorTheme;
	const translatedPage = translate(currentPage.page.translations, language);

	console.log("Page Adult ...");

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 0) {
			setButtonComponent(
				<BackAndNextNav
					key={"both"}
					colorTheme={"#FFF"}
					onPrev={() => settingCtx.prevPage()}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme={"#FFF"}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		}
	}, [currentPageNumber]);

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
					<Heading
						customStyle={{
							color: "white",
							fontSize: 70,
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
		position: "relative",
	},
});
