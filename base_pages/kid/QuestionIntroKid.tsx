import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import BackAndNextNav from "components/generic/navigation/BackAndNextNav";
import Main from "components/Main";
import BottomMain from "components/orientation/BottomMain";
import Navigation from "components/Navigation";
import ImageBackdrop from "components/ImageBackdrop";
import { GeneralStyle } from "styles/general";
import { getImageBackground } from "utils/background.utils";
import { moderateScale } from "utils/responsive.utils";
import { useDispatch, useSelector } from "react-redux";
import {
	getColorTheme,
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	prevPage,
} from "store/settings/settingsSlice";
import { proceedPage } from "utils/navigation.utils";
import type { SectionInterface } from "interface/payload.type";
import AnimatedView from "components/AnimatedView";

const QuestionIntroKid = (): React.ReactElement => {
	const dispatch = useDispatch();
	const colorTheme = useSelector(getColorTheme);
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const device = useSelector(getDevice);
	const { color200 } = colorTheme;
	const backgroundImage = getImageBackground();

	// state
	const [buttonComponent, setButtonComponent] = useState<React.ReactElement | null>(null);

	// translations
	const translatedPage = currentPage.page.translations as SectionInterface;

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 0) {
			setButtonComponent(
				<BackAndNextNav
					key={"both" + currentPageNumber}
					colorTheme="#fff"
					onPrev={() => dispatch(prevPage())}
					onNext={() => proceedPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next" + currentPageNumber}
					colorTheme="#fff"
					onNext={() => proceedPage()}
				/>,
			);
		}
	}, [currentPageNumber]);

	return (
		<AnimatedView>
			<View style={styles.container}>
				{backgroundImage !== undefined && backgroundImage !== null && backgroundImage !== "" && (
					<ImageBackdrop
						source={backgroundImage}
						key={currentPageNumber}
					/>
				)}

				<View
					style={[
						styles.headingPanel,
						{
							backgroundColor: color200,
							maxWidth: device.isTablet ? 400 : "100%",
							minHeight: device.isTablet ? "100%" : 220,
						},
					]}
				>
					<ScrollView>
						<Text style={styles.headingSubText}>{translatedPage.subheading}</Text>
						<Text
							style={{
								...styles.headingText,
								fontSize: moderateScale(
									device.isTablet ? 20 : 27,
									device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
								),
								lineHeight: moderateScale(
									device.isTablet ? 25 : 32,
									device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
								),
							}}
						>
							{translatedPage.heading}
						</Text>
					</ScrollView>
				</View>
				<Main>
					<BottomMain>
						<></>
					</BottomMain>
					<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
				</Main>
			</View>
		</AnimatedView>
	);
};

export default QuestionIntroKid;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	image: {
		flex: 1,
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	headingPanel: {
		position: "absolute",
		width: "100%",
		height: "auto",
		...GeneralStyle.general.sectionIntroPanel,
	},
	headingSubText: {
		textAlign: "center",
		...GeneralStyle.general.sectionIntroSubheading,
	},
	headingText: {
		textAlign: "center",
		height: "100%",
		...GeneralStyle.general.sectionIntroHeading,
	},
});
