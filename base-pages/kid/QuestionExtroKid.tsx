import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { SettingContext } from "../../store/settings";
import { translate } from "../../utils/page";
import Main from "../../components/Main";
import CenterMain from "../../components/orientation/CenterMain";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { Images } from "../../styles/images";
import Navigation from "../../components/Navigation";
import FullWidthButton from "../../components/buttons/FullWidthButton";
import { submitResponse } from "../../utils/api";
import { ResponseContext } from "../../store/responses";

export default function QuestionExtroKid(): React.ReactElement {
	console.log("question extro kid ...");
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const { language, currentPage, buttons, directusAccessToken, directusBaseEndpoint } =
		settingCtx.settingState;
	const color100 = "#FFEDA5";
	// const color200 = "#FFCB66";
	const isFinal = currentPage.page.isFinal;
	const translatedPage = translate(currentPage.page.translations, language);
	const ImageComponent = Images.kid.extro_question_page;

	console.log(translatedPage);
	console.log("isFinal: ", isFinal);

	async function pressHandler(): Promise<void> {
		try {
			if (isFinal === true) {
				console.log("submitting the responses...");
				console.log("reset the responses");
				console.log("go back to the beginning of the page");
				console.log(responseCtx.responses)
				console.log("!!!!!!!")
				await submitResponse(
					responseCtx.responses,
					`${directusBaseEndpoint}/items/response`,
					directusAccessToken,
				);
				console.log("done submitting the responses");
			} else {
				console.log("press handler: ");
				settingCtx.nextPage();
			}
		} catch (error) {
			console.log("error: ", error);
		}
	}

	return (
		<View style={styles.container}>
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
				<Navigation>
					<FullWidthButton
						customStyle={{
							backgroundColor: color100,
						}}
						onPress={pressHandler}
					>
						{isFinal === true ? buttons?.complete : buttons?.next}
					</FullWidthButton>
				</Navigation>
			</Main>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	imageContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginLeft: -40,
	},
});
