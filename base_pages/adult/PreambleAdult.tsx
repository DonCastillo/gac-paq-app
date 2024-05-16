import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import { translate, translateText } from "utils/page";
import Main from "components/Main";
import Navigation from "components/Navigation";
import QuestionLabel from "components/kid/QuestionLabel";
import BGLinearGradient from "components/BGLinearGradient";
import Toolbar from "components/adults/subcomponents/Toolbar";
import CenterMain from "components/orientation/CenterMain";
import QuestionContainer from "components/adults/QuestionContainer";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import ImageBackdrop from "components/ImageBackdrop";
import { GeneralStyle } from "styles/general";
import { getImageBackground } from "utils/background";
import QuestionTitle from "components/generic/QuestionTitle";
import ProgressBarAdult from "components/adults/subcomponents/ProgressBarAdult";
import { moderateScale } from "utils/responsive";

export default function PreambleAdult(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { mode, language, currentPage, currentPageNumber, device, colorTheme } = settingCtx.settingState;
	const { color200 } = colorTheme;
	const { isKeyboardOpen } = device;
	const translatedPage: any = translate(currentPage.page.translations, language);
	const description = translateText(mode, translatedPage?.description);

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<ImageBackdrop
				source={getImageBackground(translatedPage?.images, mode, device.isTablet)}
				key={currentPageNumber}
			/>
			<Main>
				{!isKeyboardOpen && <ProgressBarAdult />}
				{!isKeyboardOpen && <Toolbar />}
				<CenterMain>
					<QuestionContainer customStyle={{backgroundColor: color200}}>
						<QuestionTitle
							customStyle={{ marginBottom: 10 }}
							textStyle={{ color: "#fff" }}
						>
							{translatedPage?.heading}
						</QuestionTitle>
						<QuestionLabel
							textStyle={[
								GeneralStyle.adult.questionLabel,
								{
									color: "#fff",
									fontSize: moderateScale(
										device.isTablet ? 15 : 17,
										device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
									),
									lineHeight: moderateScale(
										device.isTablet ? 20 : 22,
										device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
									),
								},
							]}
							customStyle={{ marginBottom: 7 }}
						>
							{description}
						</QuestionLabel>
					</QuestionContainer>
				</CenterMain>
				<Navigation>
					<BackAndNextNav
						key={"WithValue"}
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
		alignItems: "center",
		justifyContent: "center",
	},
	sublabel: {
		color: "black",
		fontSize: 17,
		marginBottom: 10,
	},
});
