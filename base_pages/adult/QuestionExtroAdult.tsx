import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { translate } from "utils/page";
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
import { getImageBackground } from "utils/background";
import { GeneralStyle } from "styles/general";
import ProgressBarAdult from "components/adults/subcomponents/ProgressBarAdult";
import { sanitizeResponse } from "utils/response";
import { useDispatch, useSelector } from "react-redux";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getLanguage,
	getMode,
	prevPage,
} from "store/settings/settingsSlice";
import { proceedPage } from "utils/navigation";
import { resetResponses } from "store/responses/responsesSlice";

export default function QuestionExtroAdult(): React.ReactElement {
	const dispatch = useDispatch();
	const mode = useSelector(getMode);
	const language = useSelector(getLanguage);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const device = useSelector(getDevice);

	const [loading, setLoading] = useState<boolean>(false);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	const isFinal = currentPage.page.isFinal;
	const translatedPage: any = translate(currentPage.page.translations, language);
	const navigation = useNavigation();

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

	async function submitResponseHandler(): Promise<void> {
		try {
			setLoading(true);

			const sanitizedResponses = sanitizeResponse();
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
			navigation.navigate("ErrorScreen");
		} finally {
			setLoading(false);
		}
	}

	if (!loading) {
		return (
			<View style={styles.container}>
				<BGLinearGradient />
				<ImageBackdrop
					source={getImageBackground(translatedPage?.images, mode, device.isTablet)}
					key={currentPageNumber}
					opacity={0.2}
				/>
				<Main>
					<ProgressBarAdult />
					<Toolbar />
					<CenterMain>
						<Heading
							customStyle={{
								...GeneralStyle.adult.pageHeading,
								fontSize: device.isTablet ? 65 : 50,
								lineHeight: device.isTablet ? 75 : 60,
							}}
						>
							{translatedPage?.heading}
						</Heading>
						<Paragraph
							customStyle={{
								...GeneralStyle.adult.pageParagraph,
								fontSize: device.isTablet ? 25 : 23,
								lineHeight: device.isTablet ? 30 : 25,
							}}
						>
							{translatedPage?.subheading}
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
