import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import State from "constants/state.enum";
import { useNavigation, useRoute } from "@react-navigation/native";
import Images from "styles/images";
import BackAndTryAgainNav from "components/generic/navigation/BackAndTryAgainNav";
import FWBtnShadowed from "components/derived-buttons/FWBtnShadowed";
import BGLinearGradient from "components/BGLinearGradient";
import LoadingScreenAdult from "./LoadingScreenAdult";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPageNumber,
	getIsConnected,
	getIsLoading,
	getPhrases,
	reset,
	setIsLoading,
} from "store/settings/settingsSlice";
import {
	getErrorPage,
	getOfflineSuccessPage,
	getSuccessPage,
} from "store/questions/questionsSlice";
import { resetResponses } from "store/responses/responsesSlice";
import ImageBackdrop from "components/ImageBackdrop";
import { getImageBackgroundStatus } from "utils/background.utils";
import { GeneralStyle } from "styles/general";
import type { PageInterface } from "interface/payload.type";
import { queueResponseToStorage, sanitizeResponse } from "utils/response.utils";
import { submitResponse } from "utils/api.utils";
import AnimatedView from "components/AnimatedView";
import { adjustPageHeadingText, adjustStateDescriptionText } from "utils/style";

interface Props {
	state: State;
}

const StateAdult = ({ state }: Props): React.ReactElement => {
	const dispatch = useDispatch();
	const phrases = useSelector(getPhrases);
	const successPage = useSelector(getSuccessPage);
	const offlineSuccessPage = useSelector(getOfflineSuccessPage);
	const errorPage = useSelector(getErrorPage);
	const isConnected = useSelector(getIsConnected);
	const isLoading = useSelector(getIsLoading);
	const currentPageNumber = useSelector(getCurrentPageNumber);

	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [translatedPage, setTranslatedPage] = useState<PageInterface | null>(null);
	const navigation = useNavigation();
	const route = useRoute();
	const { success_type } = (route.params as { success_type: string }) ?? "";

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

	const resetApp = (): void => {
		dispatch(reset());
		navigation.reset({ index: 0, routes: [{ name: "SplashScreen" as never }] });
	};

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
			console.log("Error submitting response: ", error.message);
			navigation.navigate("ErrorScreen" as never);
		} finally {
			dispatch(setIsLoading(false));
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

	const backgroundImage = getImageBackgroundStatus(state);
	if (isLoading) {
		return <LoadingScreenAdult key={currentPageNumber} />;
	}
	return (
		<AnimatedView>
			<View style={styles.container}>
				<BGLinearGradient />
				{backgroundImage !== undefined && backgroundImage !== null && backgroundImage !== "" && (
					<ImageBackdrop
						source={backgroundImage}
						opacity={0.7}
						key={state.toString()}
					/>
				)}
				<Main>
					<CenterMain>
						<View style={styles.stateIconContainer}>
							{state === State.Success ? <CheckMark /> : <ErrorMark />}
						</View>
						<Heading
							customStyle={{
								...GeneralStyle.adult.pageHeading,
								...adjustPageHeadingText(),
							}}
						>
							{translatedPage?.heading}
						</Heading>
						<Paragraph
							customStyle={{
								...GeneralStyle.adult.pageParagraph,
								...adjustStateDescriptionText(),
							}}
						>
							{translatedPage?.description}
						</Paragraph>
					</CenterMain>
					<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
				</Main>
			</View>
		</AnimatedView>
	);
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
