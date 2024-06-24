import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import State from "constants/state.enum";
import type PageInterface from "interface/page";
import { useNavigation } from "@react-navigation/native";
import Images from "styles/images";
import BackAndTryAgainNav from "components/generic/navigation/BackAndTryAgainNav";
import FWBtnShadowed from "components/derived-buttons/FWBtnShadowed";
import BGLinearGradient from "components/BGLinearGradient";
import LoadingScreenAdult from "./LoadingScreenAdult";
import { useDispatch, useSelector } from "react-redux";
import { getDevice, getLanguage, getPhrases, reset } from "store/settings/settingsSlice";
import { getErrorPage, getSuccessPage } from "store/questions/questionsSlice";
import { resetResponses } from "store/responses/responsesSlice";
import { translatePage as translatePageUtil } from "utils/translate.utils";
import ImageBackdrop from "components/ImageBackdrop";
import { getImageBackgroundStatus } from "utils/background.utils";
import { GeneralStyle } from "styles/general";
import type { LangPageInterface } from "interface/payload.type";
import { sanitizeResponse } from "utils/response.utils";
import { submitResponse } from "utils/api.utils";
import { moderateScale } from "utils/responsive.utils";

interface Props {
	state: State;
}

const StateAdult = ({ state }: Props): React.ReactElement => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const phrases = useSelector(getPhrases);
	const successPage = useSelector(getSuccessPage);
	const errorPage = useSelector(getErrorPage);
	const device = useSelector(getDevice);

	const [loading, setLoading] = useState<boolean>(false);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [translatedPage, setTranslatedPage] = useState<PageInterface | null>(null);
	const navigation = useNavigation();

	const ErrorMark = Images.general.error;
	const CheckMark = Images.general.check;

	// set image, state icon, and state page on state change
	useEffect(() => {
		statePageChange();
		buttonChange();
	}, [state]);

	const statePageChange = (): void => {
		if (state === State.Success) {
			const pageTranslations: LangPageInterface = successPage.translations;
			setTranslatedPage(translatePageUtil(pageTranslations, language) as PageInterface);
		} else {
			const pageTranslations: LangPageInterface = errorPage.translations;
			setTranslatedPage(translatePageUtil(pageTranslations, language) as PageInterface);
		}
	};

	const resetApp = (): void => {
		console.log("resetting app inside State Adult ...")
		// dispatch(reset());
		// navigation.navigate("SplashScreen" as never);
	};

	const resubmitResponse = async (): Promise<void> => {
		try {
			setLoading(true);
			const sanitizedResponses = sanitizeResponse();
			await submitResponse(sanitizedResponses);
			// dispatch(resetResponses());
			navigation.navigate("SuccessScreen" as never);
		} catch (error) {
			navigation.navigate("ErrorScreen" as never);
		} finally {
			setLoading(false);
		}
	};

	const buttonChange = (): void => {
		if (state === State.Success) {
			setButtonComponent(
				<FWBtnShadowed
					label={phrases.done}
					onPress={resetApp}
					colorTheme="#FFCB66"
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndTryAgainNav
					onPrev={() => navigation.goBack()}
					onNext={async () => await resubmitResponse()}
					colorTheme="#FFF"
				/>,
			);
		}
	};

	if (!loading) {
		return (
			<View style={styles.container}>
				<BGLinearGradient />
				<ImageBackdrop
					source={getImageBackgroundStatus(state)}
					opacity={0.7}
					key={state.toString()}
				/>
				<Main>
					<CenterMain>
						<View style={styles.stateIconContainer}>
							{state === State.Success ? <CheckMark /> : <ErrorMark />}
						</View>
						<Heading
							customStyle={{
								...GeneralStyle.adult.pageHeading,
							}}
						>
							{translatedPage?.heading}
						</Heading>
						<Paragraph
							customStyle={{
								...GeneralStyle.adult.pageParagraph,
								fontSize: moderateScale(
									device.isTablet ? 18 : 20,
									device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
								),
								lineHeight: moderateScale(
									device.isTablet ? 23 : 25,
									device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
								),
							}}
						>
							{translatedPage?.description}
						</Paragraph>
					</CenterMain>
					<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
				</Main>
			</View>
		);
	} else {
		return <LoadingScreenAdult />;
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	bgImage: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
		opacity: 0.7,
	},
	stateIconContainer: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default StateAdult;
