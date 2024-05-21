import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { translate } from "utils/page";
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
import { verticalScale } from "utils/responsive";
import Toolbar from "components/kid/subcomponents/Toolbar";
import ProgressBar from "components/generic/ProgressBar";
import { sanitizeResponse } from "utils/response";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getLanguage,
	getMode,
	getSectionTotalPages,
	prevPage,
} from "store/settings/settingsSlice";
import { proceedPage } from "utils/navigation";
import { getAllResponses, resetResponses } from "store/responses/responsesSlice";

export default function QuestionExtroKid(): React.ReactElement {
	console.log("question extro kid ...");
	const dispatch = useDispatch();

	const mode = useSelector(getMode);
	const language = useSelector(getLanguage);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const device = useSelector(getDevice);
	const sectionTotalPages = useSelector(getSectionTotalPages);
	const allResponses = useSelector(getAllResponses);

	const [loading, setLoading] = useState<boolean>(false);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	const isFinal = currentPage.page.isFinal;
	const translatedPage: any = translate(currentPage.page.translations, language);
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

	async function submitResponseHandler(): Promise<void> {
		try {
			setLoading(true);

			// throw new Error("testing error page");

			const sanitizedResponses = sanitizeResponse(allResponses, mode);
			console.log("sanitized responses: ", sanitizedResponses);
			// await submitResponse(
			// 	sanitizedResponses,
			// 	`${directusBaseEndpoint}/items/response`,
			// 	directusAccessToken,
			// );
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

	if (!loading) {
		return (
			<View style={styles.container}>
				<BackgroundYellowStroke />
				<Main>
					<ProgressBar
						currentSectionPage={currentPage.sectionPageNumber}
						sectionPageTotal={
							currentPage.sectionNumber !== null
								? sectionTotalPages[currentPage.sectionNumber]
								: null
						}
						filledColor={"#FFCB66"}
						unfilledColor={"#FFCB66" + "4D"}
					/>
					<Toolbar />

					<CenterMain>
						<Heading
							customStyle={{
								...GeneralStyle.kid.extroPageHeading,
								maxWidth: device.isTablet ? 600 : "100%",
								fontSize: device.isTablet ? 50 : 40,
								lineHeight: device.isTablet ? 55 : 45,
							}}
						>
							{translatedPage?.heading}
						</Heading>
						<Paragraph
							customStyle={{
								...GeneralStyle.kid.extroPageParagraph,
								maxWidth: device.isTablet ? 600 : "100%",
								fontSize: device.isTablet ? 25 : 20,
								lineHeight: device.isTablet ? 35 : 27,
							}}
						>
							{translatedPage?.subheading}
						</Paragraph>
						<View style={styles.imageContainer}>
							<ImageComponent
								backgroundColor={"red"}
								height={verticalScale(320, device.screenHeight)}
								padding={0}
								margin={0}
							/>
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
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
		width: "100%",
	},
});
