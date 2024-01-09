import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import { getIntroductoryBackground } from "utils/background";

export default function PageKid(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { language, colorTheme, currentPage, currentPageNumber } = settingCtx.settingState;
	const [background, setBackground] = useState<React.ReactElement | null>(null);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	const { color100 } = colorTheme;
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
					buttonColor={color100}
					onPrev={() => settingCtx.prevPage()}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					buttonColor={color100}
					onNext={() => settingCtx.nextPage()}
				/>,
			);
		}
	}, [currentPageNumber]);

	return (
		<View style={styles.container}>
			{background !== null && background}
			<Main>
				<CenterMain>
					<Heading
						customStyle={{
							color: color100,
							fontSize: 50,
							marginBottom: 50,
							textAlign: "center",
						}}
					>
						{translatedPage?.heading.toLowerCase()}
					</Heading>
					<Paragraph
						customStyle={{
							color: color100,
							fontSize: 15,
							lineHeight: 20,
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
	},
});
