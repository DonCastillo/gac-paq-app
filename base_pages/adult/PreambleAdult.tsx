import React, { useState, useEffect } from "react";
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
import ScrollContainer from "components/ScrollContainer";
import { useDispatch, useSelector } from "react-redux";
import {
	getColorTheme,
	getCurrentPage,
	getCurrentPageNumber,
	getIsLoading,
	getMode,
	prevPage,
} from "store/settings/settingsSlice";
import { translateText } from "utils/translate.utils";
import type { PreambleInterface } from "interface/payload.type";
import { proceedPage } from "utils/navigation.utils";
import AnimatedView from "components/AnimatedView";
import LoadingScreenAdult from "./LoadingScreenAdult";
import { adjustPreambleDescriptionText } from "utils/style";

const PreambleAdult = (): React.ReactElement => {
	const dispatch = useDispatch();
	const mode = useSelector(getMode);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const colorTheme = useSelector(getColorTheme);
	const isLoading = useSelector(getIsLoading);
	const { color200 } = colorTheme;
	const backgroundImage = getImageBackground();

	// translations
	const translatedPage = currentPage.page.translations as PreambleInterface;
	const description = translateText(translatedPage.description, mode);
	const [proceed, setProceed] = useState<boolean>(false);

	// display buttons
	useEffect(() => {
		if (currentPage.page.audio_autoplay === true) {
			const timer = setTimeout(() => {
				setProceed(true);
				clearTimeout(timer);
			}, 3000);
		} else {
			setProceed(true);
		}
		return () => {
			setProceed(false);
		};
	}, [currentPageNumber]);

	if (isLoading) {
		return <LoadingScreenAdult key={currentPageNumber} />;
	}
	return (
		<View style={styles.container}>
			<BGLinearGradient />
			{backgroundImage !== undefined && backgroundImage !== null && backgroundImage !== "" && (
				<ImageBackdrop
					source={backgroundImage}
					key={currentPageNumber}
				/>
			)}
			<Main>
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
					<AnimatedView style={{ flex: 0 }}>
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
											...adjustPreambleDescriptionText(),
										},
									]}
									customStyle={{ marginBottom: 7 }}
								>
									{description}
								</QuestionLabel>
							</ScrollContainer>
						</QuestionContainer>
					</AnimatedView>
				</CenterMain>
				<Navigation>
					{proceed ? (
						<BackAndNextNav
							key={"Proceed"}
							onPrev={() => dispatch(prevPage())}
							onNext={() => proceedPage()}
						/>
					) : (
						<BackAndNextNav
							key={"DontProceed"}
							onPrev={() => dispatch(prevPage())}
						/>
					)}
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
