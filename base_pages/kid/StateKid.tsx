import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import State from "constants/state.enum";
import BackgroundYellowStroke from "components/kid/background/question-pages/BackgroundYellowStroke";
import Images from "styles/images/index";
import BackAndTryAgainNav from "components/generic/navigation/BackAndTryAgainNav";
import FWBtnShadowed from "components/derived-buttons/FWBtnShadowed";
import { useNavigation, useRoute } from "@react-navigation/native";
import LoadingScreenKid from "./LoadingScreenKid";
import { useDispatch, useSelector } from "react-redux";
import {
	getDevice,
	getIsConnected,
	getLanguage,
	getPhrases,
	reset,
} from "store/settings/settingsSlice";
import { resetResponses } from "store/responses/responsesSlice";
import {
	getErrorPage,
	getOfflineSuccessPage,
	getSuccessPage,
} from "store/questions/questionsSlice";
import { translatePage as translatePageUtil } from "utils/translate.utils";
import type { PageInterface, LangPageInterface } from "interface/payload.type";
import { queueResponseToStorage, sanitizeResponse } from "utils/response.utils";
import { submitResponse } from "utils/api.utils";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive.utils";
import AnimatedView from "components/AnimatedView";

interface Props {
	state: State;
}

function StateKid({ state }: Props): React.ReactElement {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const phrases = useSelector(getPhrases);
	const successPage = useSelector(getSuccessPage);
	const offlineSuccessPage = useSelector(getOfflineSuccessPage);
	const errorPage = useSelector(getErrorPage);
	const device = useSelector(getDevice);
	const isConnected = useSelector(getIsConnected);

	const [loading, setLoading] = useState<boolean>(false);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [translatedPage, setTranslatedPage] = useState<PageInterface | null>(null);
	const navigation = useNavigation();
	const route = useRoute();
	const { success_type } = route.params as { success_type: string };

	const SuccessImage = Images.kids.graphics.success_image;
	const ErrorImage = Images.kids.graphics.error_image;
	const ErrorMark = Images.general.error;
	const CheckMark = Images.general.check;

	// set image, state icon, and state page on state change
	useEffect(() => {
		statePageChange();
		buttonChange();
	}, [state]);

	const statePageChange = (): void => {
		if (state === State.Success) {
			if (success_type === "online") {
				const pageTranslations: LangPageInterface = successPage.translations;
				setTranslatedPage(translatePageUtil(pageTranslations, language) as PageInterface);
			} else {
				const pageTranslations: LangPageInterface = offlineSuccessPage.translations;
				setTranslatedPage(translatePageUtil(pageTranslations, language) as PageInterface);
			}
		} else {
			const pageTranslations: LangPageInterface = errorPage.translations;
			setTranslatedPage(translatePageUtil(pageTranslations, language) as PageInterface);
		}
	};

	function resetApp(): void {
		dispatch(reset());
		navigation.navigate("SplashScreen" as never);
	}

	const resubmitResponse = async (): Promise<void> => {
		try {
			setLoading(true);
			const sanitizedResponses = sanitizeResponse();
			if (isConnected) {
				await submitResponse(sanitizedResponses);
				dispatch(resetResponses());
				navigation.navigate("SuccessScreen", { success_type: "online" });
			} else {
				await queueResponseToStorage(sanitizedResponses);
				dispatch(resetResponses());
				navigation.navigate("SuccessScreen", { success_type: "offline" });
			}
		} catch (error) {
			navigation.navigate("ErrorScreen" as never);
		} finally {
			setLoading(false);
		}
	};

	function buttonChange(): void {
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
					colorTheme="#FFCB66"
					onPrev={() => navigation.goBack()}
					onNext={async () => await resubmitResponse()}
				/>,
			);
		}
	}

	if (!loading) {
		return (
			<AnimatedView>
				<View style={styles.container}>
					<BackgroundYellowStroke />
					<Main>
						<CenterMain>
							<Heading
								customStyle={{
									color: "#000",
									...GeneralStyle.kid.pageHeading,
									fontSize: device.isTablet ? 40 : 30,
									lineHeight: device.isTablet ? 45 : 35,
								}}
							>
								{translatedPage?.heading}
							</Heading>
							<Paragraph
								customStyle={{
									color: "#000",
									...GeneralStyle.kid.pageParagraph,
									fontSize: moderateScale(
										device.isTablet ? 18 : 18,
										device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
									),
									lineHeight: moderateScale(
										device.isTablet ? 23 : 23,
										device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
									),
								}}
							>
								{translatedPage?.description}
							</Paragraph>
							<View style={styles.imageContainer}>
								{/* State Image */}
								<View style={[styles.stateImageContainer, {}]}>
									{state === State.Success ? (
										<SuccessImage
											width={250}
											height={280}
										/>
									) : (
										<ErrorImage
											width={250}
											height={280}
										/>
									)}
								</View>

								{/* State Icon */}
								<View style={styles.stateIconContainer}>
									{state === State.Success ? <CheckMark /> : <ErrorMark style={styles.errorMark} />}
								</View>
							</View>
						</CenterMain>
						<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
					</Main>
				</View>
			</AnimatedView>
		);
	} else {
		return <LoadingScreenKid />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	imageContainer: {
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 5,
		flexDirection: "row",
		position: "relative",
	},
	stateImageContainer: {
		marginLeft: -30,
	},
	stateIconContainer: {
		position: "absolute",
		zIndex: -1,
		right: -50,
	},
	errorMark: {
		top: 40,
		left: -45,
	},
});

export default StateKid;
