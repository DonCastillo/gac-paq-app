import React from "react";
import { StyleSheet, View } from "react-native";
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
import { getImageBackground } from "utils/background.utils";
import QuestionTitle from "components/generic/QuestionTitle";
import ProgressBarAdult from "components/adults/subcomponents/ProgressBarAdult";
import { moderateScale } from "utils/responsive.utils";
import ScrollContainer from "components/ScrollContainer";
import { useDispatch, useSelector } from "react-redux";
import {
	getColorTheme,
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getLanguage,
	getMode,
	nextPage,
	prevPage,
} from "store/settings/settingsSlice";
import { translatePage, translateText } from "utils/translate.utils";
import type { PreambleInterface } from "interface/payload.type";

const PreambleAdult = (): React.ReactElement => {
	const dispatch = useDispatch();
	const mode = useSelector(getMode);
	const language = useSelector(getLanguage);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const device = useSelector(getDevice);
	const colorTheme = useSelector(getColorTheme);
	const { color200 } = colorTheme;

	// translations
	const translatedPage = translatePage(
		currentPage.page.translations,
		language,
	) as PreambleInterface;

	const description = translateText(translatedPage.description, mode);

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<ImageBackdrop
				source={getImageBackground(translatedPage?.images, mode, device.isTablet)}
				key={currentPageNumber}
			/>
			<Main>
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
					<QuestionContainer customStyle={{ backgroundColor: color200 }}>
						<ScrollContainer>
							<QuestionTitle
								customStyle={{ marginBottom: 10 }}
								textStyle={{ color: "#fff" }}
							>
								{translatedPage.heading}
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
						</ScrollContainer>
					</QuestionContainer>
				</CenterMain>
				<Navigation>
					<BackAndNextNav
						key={"WithValue"}
						onPrev={() => dispatch(prevPage())}
						onNext={() => dispatch(nextPage())}
					/>
				</Navigation>
			</Main>
		</View>
	);
};

export default PreambleAdult;

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
