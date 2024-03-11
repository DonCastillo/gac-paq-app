import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { SettingContext } from "store/settings";
import { translate } from "utils/page";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Navigation from "components/Navigation";
import { submitResponse } from "utils/api";
import { ResponseContext } from "store/responses";
import Toolbar from "components/adults/Toolbar";
import BGLinearGradient from "components/BGLinearGradient";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import BackAndSubmitNav from "components/generic/navigation/BackAndSubmitNav";
import LoadingScreenAdult from "base_pages/adult/LoadingScreenAdult";
import { useNavigation } from "@react-navigation/native";
import ImageBackdrop from "components/ImageBackdrop";
import { getImageBackground } from "utils/background";
import { GeneralStyle } from "styles/general";

export default function QuestionExtroAdult(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const responseCtx = useContext(ResponseContext);
	const [loading, setLoading] = useState<boolean>(false);
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);
	const {
		mode,
		language,
		currentPage,
		currentPageNumber,
		directusAccessToken,
		directusBaseEndpoint,
		device,
	} = settingCtx.settingState;
	const isFinal = currentPage.page.isFinal;
	const translatedPage = translate(currentPage.page.translations, language);
	const navigation = useNavigation();

	// set button component dynamically
	useEffect(() => {
		if (isFinal === true) {
			setButtonComponent(
				<BackAndSubmitNav
					key={"prev"}
					colorTheme="#FFF"
					onPrev={() => settingCtx.prevPage()}
					onNext={async () => await submitResponseHandler()}
				/>,
			);
		} else {
			if (currentPageNumber > 0) {
				setButtonComponent(
					<BackAndNextNav
						key={"both"}
						colorTheme="#FFF"
						onPrev={() => settingCtx.prevPage()}
						onNext={() => settingCtx.nextPage()}
					/>,
				);
			} else {
				setButtonComponent(
					<BackAndNextNav
						colorTheme="#FFF"
						onNext={() => settingCtx.nextPage()}
					/>,
				);
			}
		}
	}, [currentPageNumber]);

	async function submitResponseHandler(): Promise<void> {
		try {
			setLoading(true);

			// await submitResponse(
			// 	responseCtx.responses,
			// 	`${directusBaseEndpoint}/items/response`,
			// 	directusAccessToken,
			// );
			responseCtx.resetResponses();
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
