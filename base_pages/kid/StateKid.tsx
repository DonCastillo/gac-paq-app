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
	getCurrentPageNumber,
	getDevice,
	getIsConnected,
	getIsLoading,
	getPhrases,
	reset,
	setIsLoading,
} from "store/settings/settingsSlice";
import { resetResponses } from "store/responses/responsesSlice";
import {
	getErrorPage,
	getOfflineSuccessPage,
	getSuccessPage,
} from "store/questions/questionsSlice";
import type { PageInterface } from "interface/payload.type";
import { queueResponseToStorage, sanitizeResponse } from "utils/response.utils";
import { submitResponse } from "utils/api.utils";
import { GeneralStyle } from "styles/general";
import AnimatedView from "components/AnimatedView";
import { adjustStateDescriptionText, adjustStateKidPageHeadingText } from "utils/style";
import { verticalScale } from "utils/responsive.utils";

interface Props {
	state: State;
}

function StateKid({ state }: Props): React.ReactElement {
	const dispatch = useDispatch();
	const phrases = useSelector(getPhrases);
	const successPage = useSelector(getSuccessPage);
	const offlineSuccessPage = useSelector(getOfflineSuccessPage);
	const errorPage = useSelector(getErrorPage);
	const device = useSelector(getDevice);
	const isConnected = useSelector(getIsConnected);
	const isLoading = useSelector(getIsLoading);
	const currentPageNumber = useSelector(getCurrentPageNumber);

	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [translatedPage, setTranslatedPage] = useState<PageInterface | null>(null);
	const navigation = useNavigation();
	const route = useRoute();
	const { success_type } = (route.params as { success_type: string }) ?? "";

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
				const pageTranslations: PageInterface = successPage.translations;
				setTranslatedPage(pageTranslations);
			} else {
				const pageTranslations: PageInterface = offlineSuccessPage.translations;
				setTranslatedPage(pageTranslations);
			}
		} else {
			const pageTranslations: PageInterface = errorPage.translations;
			setTranslatedPage(pageTranslations);
		}
	};

	function resetApp(): void {
		dispatch(reset());
		navigation.reset({ index: 0, routes: [{ name: "SplashScreen" as never }] });
	}

	const resubmitResponse = async (): Promise<void> => {
		try {
			dispatch(setIsLoading(true));
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
			dispatch(setIsLoading(false));
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

	if (isLoading) {
		return <LoadingScreenKid key={currentPageNumber} />;
	}
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
								...adjustStateKidPageHeadingText(),
							}}
						>
							{translatedPage?.heading}
						</Heading>
						<Paragraph
							customStyle={{
								color: "#000",
								...GeneralStyle.kid.pageParagraph,
								...adjustStateDescriptionText(),
							}}
						>
							{translatedPage?.description}
						</Paragraph>
						<View style={styles.imageContainer}>
							{/* State Image */}
							<View style={[styles.stateImageContainer, {}]}>
								{state === State.Success ? (
									<SuccessImage
										height={verticalScale(device.isTablet ? 220 : 200, device.screenHeight)}
										width={verticalScale(device.isTablet ? 220 : 200, device.screenHeight)}
									/>
								) : (
									<ErrorImage
										height={verticalScale(device.isTablet ? 220 : 200, device.screenHeight)}
										width={verticalScale(device.isTablet ? 220 : 200, device.screenHeight)}
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
		marginTop: 15,
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
