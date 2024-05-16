import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import { translate, translateText } from "utils/page";
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

export default function PreambleKid(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { mode, language, currentPage, device, colorTheme } = settingCtx.settingState;
	const { color100, color200 } = colorTheme;
	const translatedPage: any = translate(currentPage.page.translations, language);
	const description = translateText(mode, translatedPage?.description);

	return (
		<View style={styles.container}>
			<BackgroundPreamble fillColor={(color100 ?? "#fff") + "B3"} />
			<Main>
				<ProgressBarKid />
				<Toolbar />
				<CenterMain>
					<Heading
						customStyle={{
							...GeneralStyle.kid.extroPageHeading,
							maxWidth: device.isTablet ? 600 : "100%",
							fontSize: device.isTablet ? 50 : 40,
							lineHeight: device.isTablet ? 55 : 45,
						}}
					>
						{translatedPage?.heading}
					</Heading>
					<Paragraph
						customStyle={{
							...GeneralStyle.kid.extroPageParagraph,
							maxWidth: device.isTablet ? 600 : "100%",
							fontSize: device.isTablet ? 25 : 20,
							lineHeight: device.isTablet ? 35 : 27,
						}}
					>
						{description}
					</Paragraph>
				</CenterMain>
				<Navigation>
					<BackAndNextNav
						key={"WithValue"}
						colorTheme={color200}
						onPrev={() => settingCtx.prevPage()}
						onNext={() => settingCtx.nextPage()}
					/>
				</Navigation>
			</Main>
		</View>
	);
}

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
