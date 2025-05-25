import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Images from "styles/images/index";
import Navigation from "components/Navigation";
import LoadingScreenKid from "base_pages/kid/LoadingScreenKid";
import BackgroundYellowStroke from "components/kid/background/question-pages/BackgroundYellowStroke";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import BackAndSubmitNav from "components/generic/navigation/BackAndSubmitNav";
import { useNavigation } from "@react-navigation/native";
import { GeneralStyle } from "styles/general";
import { verticalScale } from "utils/responsive.utils";
import ProgressBar from "components/generic/ProgressBar";
import { sanitizeResponse, queueResponseToStorage } from "utils/response.utils";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getIsConnected,
	getIsLoading,
	getSectionTotalPages,
	prevPage,
	setIsLoading,
} from "store/settings/settingsSlice";
import { proceedPage } from "utils/navigation.utils";
import { resetResponses } from "store/responses/responsesSlice";
import type { ExtroInterface } from "interface/payload.type";
import { submitResponse } from "utils/api.utils";
import AnimatedView from "components/AnimatedView";
import { adjustExtroDescriptionText, adjustExtroPageHeading } from "utils/style";
import Toolbar from "components/adults/subcomponents/Toolbar";

const QuestionExtroKid = (): React.ReactElement => {
	const dispatch = useDispatch();
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const device = useSelector(getDevice);
	const sectionTotalPages = useSelector(getSectionTotalPages);
	const isConnected = useSelector(getIsConnected);
	const isLoading = useSelector(getIsLoading);
	// const isConnected = false;

	// state
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	// translations
	const isFinal = currentPage.page.isFinal;
	const translatedPage = currentPage.page.translations as ExtroInterface;
	const ImageComponent = Images.kids.graphics.extro_question_page;
	const navigation = useNavigation();

	// set button component dynamically
	useEffect(() => {
		if (isFinal === true) {
			setButtonComponent(
				<BackAndSubmitNav
					key={"prev" + currentPageNumber}
					colorTheme="#FFCB66"
					onPrev={() => dispatch(prevPage())}
					onNext={async () => await submitResponseHandler()}
				/>,
			);
		} else {
			if (currentPageNumber > 0) {
				setButtonComponent(
					<BackAndNextNav
						key={"both" + currentPageNumber}
						colorTheme="#FFCB66"
						onPrev={() => dispatch(prevPage())}
						onNext={() => proceedPage()}
					/>,
				);
			} else {
				setButtonComponent(
					<BackAndNextNav
						key={"next" + currentPageNumber}
						colorTheme="#FFCB66"
						onNext={() => proceedPage()}
					/>,
				);
			}
		}
	}, [currentPageNumber]);

	const submitResponseHandler = async (): Promise<void> => {
		try {
			dispatch(setIsLoading(true));
			const sanitizedResponses = sanitizeResponse();
			// if (isConnected) {
			// 	await submitResponse(sanitizedResponses);
			// 	dispatch(resetResponses());
			// 	navigation.navigate("SuccessScreen", { success_type: "online" });
			// } else {
			await queueResponseToStorage(sanitizedResponses);
			dispatch(resetResponses());
			navigation.navigate("SuccessScreen", { success_type: "offline" });
			// }
		} catch (error) {
			console.log("Error submitting response: ", error.message);
			navigation.navigate("ErrorScreen" as never);
		} finally {
			dispatch(setIsLoading(false));
		}
	};

	if (isLoading) {
		return <LoadingScreenKid key={currentPageNumber} />;
	}
	return (
		<View style={styles.container}>
			<BackgroundYellowStroke />
			<Main>
				<ProgressBar
					currentSectionPage={currentPage.sectionPageNumber}
					sectionPageTotal={
						currentPage.sectionNumber !== null ? sectionTotalPages[currentPage.sectionNumber] : null
					}
					filledColor={"#FFCB66"}
					unfilledColor={"#FFCB66" + "4D"}
				/>
				<Toolbar />

				<CenterMain>
					<AnimatedView style={{ flex: 0, alignItems: "center", justifyContent: "center" }}>
						<Heading
							customStyle={{
								...GeneralStyle.kid.extroPageHeading,
								maxWidth: device.isTablet ? 600 : "100%",
								...adjustExtroPageHeading(),
							}}
						>
							{translatedPage.heading}
						</Heading>
						<Paragraph
							customStyle={{
								...GeneralStyle.kid.extroPageParagraph,
								maxWidth: device.isTablet ? 600 : "100%",
								...adjustExtroDescriptionText(),
							}}
						>
							{translatedPage.subheading}
						</Paragraph>
						<View style={styles.imageContainer}>
							<ImageComponent
								backgroundColor={"white"}
								height={verticalScale(device.isTablet ? 320 : 290, device.screenHeight)}
								padding={0}
								margin={0}
							/>
						</View>
					</AnimatedView>
				</CenterMain>
				<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
			</Main>
		</View>
	);
};

export default QuestionExtroKid;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	imageContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
		width: "100%",
	},
});
