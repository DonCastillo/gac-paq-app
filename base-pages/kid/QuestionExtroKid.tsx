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

export default function QuestionExtroKid(): React.ReactElement {
	console.log("question extro kid ...");
	const settingCtx = useContext(SettingContext);
	const { language, currentPage } = settingCtx.settingState;
	const color100 = "#FFEDA5";
	// const color200 = "#FFCB66";
	const translatedPage = translate(currentPage.page.translations, language);
	const ImageComponent = Images.kid.extro_question_page;

	console.log(translatedPage);

	function pressHandler(): void {
		console.log("press handler: ");
		settingCtx.nextPage();
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
						Start
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
