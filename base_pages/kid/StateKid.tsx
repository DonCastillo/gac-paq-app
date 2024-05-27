import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { translate } from "utils/page.utils";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import StateType from "constants/state_type.enum";
import type PagePayloadInterface from "interface/directus/page-payload";
import type PageInterface from "interface/page";
import type QuestionDropdownInterface from "interface/question_dropdown";
import BackgroundYellowStroke from "components/kid/background/question-pages/BackgroundYellowStroke";
import Images from "styles/images/index";
import BackAndTryAgainNav from "components/generic/navigation/BackAndTryAgainNav";
import FWBtnShadowed from "components/derived-buttons/FWBtnShadowed";
import { useNavigation } from "@react-navigation/native";
import LoadingScreenKid from "./LoadingScreenKid";
import { useDispatch, useSelector } from "react-redux";
import {
	getDirectusAccessToken,
	getDirectusBaseEndpoint,
	getLanguage,
	getPhrases,
	reset,
} from "store/settings/settingsSlice";
import { resetResponses, selectAllResponses } from "store/responses/responsesSlice";
import { getErrorPage, getSuccessPage } from "store/questions/questionsSlice";

interface Props {
	state: StateType;
}

function StateKid({ state }: Props): React.ReactElement {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const phrases = useSelector(getPhrases);
	const successPage = useSelector(getSuccessPage) as PagePayloadInterface;
	const errorPage = useSelector(getErrorPage) as PagePayloadInterface;

	const [loading, setLoading] = useState<boolean>(false);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [translatedPage, setTranslatedPage] = useState<
		PageInterface | QuestionDropdownInterface | null | null
	>(null);
	const navigation = useNavigation();

	const SuccessImage = Images.kids.graphics.success_image;
	const ErrorImage = Images.kids.graphics.error_image;
	const ErrorMark = Images.general.error;
	const CheckMark = Images.general.check;

	// set image, state icon, and state page on state change
	useEffect(() => {
		statePageChange();
		buttonChange();
	}, [state]);

	function statePageChange(): void {
		if (state === StateType.Success) {
			setTranslatedPage(translate(successPage.translations, language));
		} else {
			setTranslatedPage(translate(errorPage.translations, language));
		}
	}

	function resetApp(): void {
		dispatch(reset());
		navigation.navigate("SplashScreen");
	}

	async function resubmitResponse(): Promise<void> {
		try {
			setLoading(true);

			// throw new Error("testing error page");
			// await submitResponse(
			// 	responseCtx.responses,
			// 	`${directusBaseEndpoint}/items/response`,
			// 	directusAccessToken,
			// );

			console.log("done submitting the responses");
			// introduce a delay

			dispatch(resetResponses());
			await new Promise((resolve) => setTimeout(resolve, 5000));
			navigation.navigate("SuccessScreen");
		} catch (error) {
			await new Promise((resolve) => setTimeout(resolve, 5000));
			console.log("redirect to the error page");
			console.log("error: ", error);
			navigation.navigate("ErrorScreen");
		} finally {
			setLoading(false);
		}
	}

	function buttonChange(): void {
		if (state === StateType.Success) {
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
			<View style={styles.container}>
				<BackgroundYellowStroke />
				<Main>
					<CenterMain>
						<Heading
							customStyle={{
								color: "#000",
								fontSize: 32,
								textAlign: "center",
							}}
						>
							{translatedPage?.heading}
						</Heading>
						<Paragraph
							customStyle={{
								color: "#000",
								fontSize: 20,
								marginTop: 20,
							}}
						>
							{translatedPage?.description}
						</Paragraph>
						<View style={styles.imageContainer}>
							{/* State Image */}
							<View style={styles.stateImageContainer}>
								{state === StateType.Success ? (
									<SuccessImage width={300} />
								) : (
									<ErrorImage width={300} />
								)}
							</View>

							{/* State Icon */}
							<View style={styles.stateIconContainer}>
								{state === StateType.Success ? (
									<CheckMark />
								) : (
									<ErrorMark style={styles.errorMark} />
								)}
							</View>
						</View>
					</CenterMain>
					<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
				</Main>
			</View>
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
