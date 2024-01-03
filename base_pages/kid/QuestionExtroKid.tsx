import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Images from "styles/images/index";
import Navigation from "components/Navigation";
import { submitResponse } from "utils/api";
import { ResponseContext } from "store/responses";
import LoadingScreenKid from "base_pages/kid/LoadingScreenKid";
import BackgroundYellowStroke from "components/kid/background/question-pages/BackgroundYellowStroke";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import BackAndSubmitNav from "components/generic/navigation/BackAndSubmitNav";
import { useNavigation } from "@react-navigation/native";

export default function QuestionExtroKid(): React.ReactElement {
	console.log("question extro kid ...");
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const [loading, setLoading] = useState<boolean>(false);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const { language, currentPage, currentPageNumber, directusAccessToken, directusBaseEndpoint } =
		settingCtx.settingState;
	const isFinal = currentPage.page.isFinal;
	const translatedPage = translate(currentPage.page.translations, language);
	const ImageComponent = Images.kids.graphics.extro_question_page;
	const navigation = useNavigation();

	console.log(translatedPage);
	console.log("isFinal: ", isFinal);

	// set button component dynamically
	useEffect(() => {
		if (isFinal === true) {
			setButtonComponent(
				<BackAndSubmitNav
					onPrev={() => settingCtx.prevPage()}
					onNext={async () => await submitResponseHandler()}
				/>,
			);
		} else {
			if (currentPageNumber > 0) {
				setButtonComponent(
					<BackAndNextNav
						onPrev={() => settingCtx.prevPage()}
						onNext={() => settingCtx.nextPage()}
					/>,
				);
			} else {
				setButtonComponent(<BackAndNextNav onNext={() => settingCtx.nextPage()} />);
			}
		}
	}, [currentPageNumber]);

	async function submitResponseHandler(): Promise<void> {
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
							}}
						>
							{translatedPage?.subheading}
						</Paragraph>
						<View style={styles.imageContainer}>
							<ImageComponent
								height={400}
								width={300}
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
		// marginLeft: -40,
		// backgroundColor: "blue"
	},
});
