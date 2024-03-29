import React, { useContext, useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import { Icon } from "@rneui/themed";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import StateType from "constants/state_type";
import { QuestionContext } from "store/questions";
import type PagePayloadInterface from "interface/directus/page-payload";
import type PageInterface from "interface/page";
import type QuestionDropdownInterface from "interface/question_dropdown";
import { useNavigation } from "@react-navigation/native";
import Images from "styles/images";
import BackAndTryAgainNav from "components/generic/navigation/BackAndTryAgainNav";
import FWBtnShadowed from "components/derived-buttons/FWBtnShadowed";
import BGLinearGradient from "components/BGLinearGradient";
import { ResponseContext } from "store/responses";
import { submitResponse } from "utils/api";
import LoadingScreenAdult from "./LoadingScreenAdult";

interface Props {
	state: StateType;
}

function StateAdult({ state }: Props): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const questionCtx = useContext(QuestionContext);
	const responseCtx = useContext(ResponseContext);
	const [loading, setLoading] = useState<boolean>(false);
	const { language, phrases, colorTheme, directusAccessToken, directusBaseEndpoint } =
		settingCtx.settingState;
	const successPage = questionCtx.questionState.successPage as PagePayloadInterface;
	const errorPage = questionCtx.questionState.errorPage as PagePayloadInterface;
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [translatedPage, setTranslatedPage] = useState<
		PageInterface | QuestionDropdownInterface | null | null
	>(null);
	const navigation = useNavigation();

	const ErrorImage = Images.adults.graphics.error_image;
	const SuccessImage = Images.adults.graphics.success_image;
	const ErrorMark = Images.general.error;
	const CheckMark = Images.general.check;
	const ICON_SIZE = 200;
	const MARK_SIZE = 300;

	// const translatedPage = translate(currentPage.page.translations, language);

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
		settingCtx.setMode(undefined);
		settingCtx.setCurrentPage(1);
		settingCtx.setColorTheme(0);
		settingCtx.setLanguage("en-CA");
		navigation.navigate("SplashScreen");
	}

	async function resubmitResponse(): Promise<void> {
		try {
			setLoading(true);

			await submitResponse(
				responseCtx.responses,
				`${directusBaseEndpoint}/items/response`,
				directusAccessToken,
			);

			console.log("done submitting the responses");
			// introduce a delay
			responseCtx.resetResponses();
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
					onPrev={() => navigation.goBack()}
					onNext={async () => await resubmitResponse()}
					colorTheme="#FFF"
				/>,
			);
		}
	}

	console.log("SuccessImage: ", SuccessImage);
	console.log("ErrorImage: ", ErrorImage);

	if (!loading) {
		return (
			<View style={styles.container}>
				<BGLinearGradient />
				<ImageBackground
					source={SuccessImage}
					resizeMode="cover"
					style={styles.bgImage}
				></ImageBackground>
				<Main>
					<CenterMain>
						<View style={styles.stateIconContainer}>
							{state === StateType.Success ? <CheckMark /> : <ErrorMark />}
						</View>
						<Heading
							customStyle={{
								color: "white",
								fontSize: 70,
								marginBottom: 50,
								textAlign: "center",
							}}
						>
							{translatedPage?.heading.toLowerCase()}
						</Heading>
						<Paragraph
							customStyle={{
								color: "white",
								fontSize: 15,
								lineHeight: 17,
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
}

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
		justifyContent: "center",
		alignItems: "center",
	},
});

export default StateAdult;
