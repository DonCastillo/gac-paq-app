import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import Toolbar from "components/adults/subcomponents/Toolbar";
import BGLinearGradient from "components/BGLinearGradient";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import BackAndSubmitNav from "components/generic/navigation/BackAndSubmitNav";
import LoadingScreenAdult from "base_pages/adult/LoadingScreenAdult";
import { useNavigation } from "@react-navigation/native";
import ImageBackdrop from "components/ImageBackdrop";
import { getImageBackground } from "utils/background.utils";
import { GeneralStyle } from "styles/general";
import ProgressBarAdult from "components/adults/subcomponents/ProgressBarAdult";
import { queueResponseToStorage, sanitizeResponse } from "utils/response.utils";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getIsConnected,
	getLanguage,
	prevPage,
} from "store/settings/settingsSlice";
import { proceedPage } from "utils/navigation.utils";
import { resetResponses } from "store/responses/responsesSlice";
import type { ExtroInterface } from "interface/payload.type";
import { translatePage } from "utils/translate.utils";
import { submitResponse } from "utils/api.utils";
import AnimatedView from "components/AnimatedView";

const QuestionExtroAdult = (): React.ReactElement => {
	const dispatch = useDispatch();
	const language = useSelector(getLanguage);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const device = useSelector(getDevice);
	const navigation = useNavigation();
	const backgroundImage = getImageBackground();
	const isConnected = useSelector(getIsConnected);

	// state
	const [loading, setLoading] = useState<boolean>(false);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	// translations
	const isFinal = currentPage.page?.isFinal;
	const translatedPage = translatePage(currentPage.page.translations, language) as ExtroInterface;

	// set button component dynamically
	useEffect(() => {
		if (isFinal === true) {
			setButtonComponent(
				<BackAndSubmitNav
					key={"prev" + currentPageNumber}
					colorTheme="#FFF"
					onPrev={() => dispatch(prevPage())}
					onNext={async () => await submitResponseHandler()}
				/>,
			);
		} else {
			if (currentPageNumber > 0) {
				setButtonComponent(
					<BackAndNextNav
						key={"both" + currentPageNumber}
						colorTheme="#FFF"
						onPrev={() => dispatch(prevPage())}
						onNext={() => proceedPage()}
					/>,
				);
			} else {
				setButtonComponent(
					<BackAndNextNav
						key={"next" + currentPageNumber}
						colorTheme="#FFF"
						onNext={() => proceedPage()}
					/>,
				);
			}
		}
	}, [currentPageNumber]);

	const submitResponseHandler = async (): Promise<void> => {
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
			console.log("Error submitting response: ", error.message);
			navigation.navigate("ErrorScreen" as never);
		} finally {
			setLoading(false);
		}
	};

	if (!loading) {
		return (
			<View style={styles.container}>
				<BGLinearGradient />
				{backgroundImage !== undefined && backgroundImage !== null && backgroundImage !== "" && (
					<ImageBackdrop
						source={backgroundImage}
						key={currentPageNumber}
						opacity={0.2}
					/>
				)}
				<Main>
					<ProgressBarAdult />
					<Toolbar />
					<CenterMain>
						<AnimatedView style={{ flex: 0 }}>
							<Heading
								customStyle={{
									...GeneralStyle.adult.pageHeading,
									fontSize: device.isTablet ? 65 : 50,
									lineHeight: device.isTablet ? 75 : 60,
								}}
							>
								{translatedPage.heading}
							</Heading>
							<Paragraph
								customStyle={{
									...GeneralStyle.adult.pageParagraph,
									fontSize: device.isTablet ? 25 : 23,
									lineHeight: device.isTablet ? 30 : 25,
								}}
							>
								{translatedPage.subheading}
							</Paragraph>
						</AnimatedView>
					</CenterMain>
					<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
				</Main>
			</View>
		);
	} else {
		return <LoadingScreenAdult />;
	}
};

export default QuestionExtroAdult;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
		position: "relative",
	},
	bgImage: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
		opacity: 0.3,
	},
});
