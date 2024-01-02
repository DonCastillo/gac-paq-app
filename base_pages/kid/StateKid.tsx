import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
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
import BackgroundYellowStroke from "components/kid/background/question-pages/BackgroundYellowStroke";
import Images from "styles/images/index";
import BackAndTryAgainNav from "components/generic/navigation/BackAndTryAgainNav";
import FWBtnShadowed from "components/derived-buttons/FWBtnShadowed";
import { useNavigation } from "@react-navigation/native";
import { ResponseContext } from "store/responses";

interface Props {
	state: StateType;
}

function StateKid({ state }: Props): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const questionCtx = useContext(QuestionContext);
	const responseCtx = useContext(ResponseContext);
	const { language, phrases } = settingCtx.settingState;
	const successPage = questionCtx.questionState.successPage as PagePayloadInterface;
	const errorPage = questionCtx.questionState.errorPage as PagePayloadInterface;
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const [translatedPage, setTranslatedPage] = useState<
		PageInterface | QuestionDropdownInterface | null | null
	>(null);
	const navigation = useNavigation();

	const SuccessImage = Images.kids.graphics.success_image;
	const ErrorImage = Images.kids.graphics.error_image;
	const ErrorMark = Images.general.error;
	const CheckMark = Images.general.check;
	const MARK_SIZE = 250;
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
		settingCtx.setCurrentPage(1);
		settingCtx.setColorTheme(0);
		navigation.navigate("SplashScreen");
	}

	function resubmitResponse(): Promise<void> {

	}

	function buttonChange(): void {
		if (state === StateType.Success) {
			setButtonComponent(
				<FWBtnShadowed
					label={phrases.done}
					onPress={resetApp}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndTryAgainNav
					onPrev={() => settingCtx.prevPage()}
					onNext={async () => await resubmitResponse()}
				/>,
			);
		}
	}

	return (
		<View style={styles.container}>
			<BackgroundYellowStroke />
			<Main>
				<CenterMain>
					<Heading
						customStyle={{
							color: "#000",
							fontSize: 32,
							fontWeight: "bold",
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
							{state === StateType.Success ? <CheckMark /> : <ErrorMark style={styles.errorMark} />}
						</View>
					</View>
				</CenterMain>
				<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
			</Main>
		</View>
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
		left:-45,
	}
});

export default StateKid;
