import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { SettingContext } from "../../store/settings";
import { translate } from "../../utils/page";
import Main from "../../components/Main";
import CenterMain from "../../components/orientation/CenterMain";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { Images } from "../../styles/images";
import Navigation from "../../components/Navigation";
import { submitResponse } from "../../utils/api";
import { ResponseContext } from "../../store/responses";
import SingleNav from "../../components/adults/navigation/SingleNav";
import Toolbar from "../../components/adults/Toolbar";
import BGLinearGradient from "../../components/BGLinearGradient";
import BackAndNextNav from "../../components/generic/navigation/BackAndNextNav";
import BackAndSubmitNav from "../../components/generic/navigation/BackAndSubmitNav";
import LoadingScreenAdult from "./LoadingScreenAdult";

export default function QuestionExtroAdult(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const [loading, setLoading] = useState<boolean>(false);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const { language, currentPage, currentPageNumber, directusAccessToken, directusBaseEndpoint } =
		settingCtx.settingState;
	const isFinal = currentPage.page.isFinal;
	const translatedPage = translate(currentPage.page.translations, language);
	const ImageComponent = Images.kid.extro_question_page;

	console.log(translatedPage);
	console.log("isFinal: ", isFinal);

	const bgImageURL =
		"http://localhost:8055/assets/607b231c-f6d0-439d-8b0a-a8e873457ed9?access_token=kaTCPGRRqTCp18GmHkECCKNeMcY5Vwa5";

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
			await new Promise((resolve) => setTimeout(resolve, 5000));
		} catch (error) {
			await new Promise((resolve) => setTimeout(resolve, 5000));
			console.log("redirect to the error page");
			console.log("error: ", error);
		} finally {
			setLoading(false);
		}
	}

	if (!loading) {
		return (
			<View style={styles.container}>
				<BGLinearGradient />
				<ImageBackground
					source={{ uri: bgImageURL }}
					resizeMode="cover"
					style={styles.bgImage}
				></ImageBackground>
				<Main>
					<Toolbar />
					<CenterMain>
						<Heading
							customStyle={{
								color: "white",
								fontSize: 40,
								fontWeight: "bold",
								textAlign: "center",
							}}
						>
							{translatedPage?.heading}
						</Heading>
						<Paragraph
							customStyle={{
								color: "#fff",
								fontSize: 20,
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
