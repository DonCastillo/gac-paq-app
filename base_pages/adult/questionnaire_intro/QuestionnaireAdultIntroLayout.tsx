import AnimatedView from "@components/AnimatedView";
import BGLinearGradient from "@components/BGLinearGradient";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import ImageBackdrop from "@components/ImageBackdrop";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import BottomMain from "@components/orientation/BottomMain";
import { useButtonContext } from "@contexts/common/ButtonContext";
import useCurrentPage from "@hooks/useCurrentPage";
import { ParentComponent } from "@interface/function.type";
import { getColorTheme, getDevice, prevPage } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { getImageBackground } from "@utils/background.utils";
import { proceedPage } from "@utils/navigation.utils";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const QuestionnaireAdultIntroLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { currentPageNumber } = useCurrentPage();
	const colorTheme = useSelector(getColorTheme);
	const device = useSelector(getDevice);
	const { color200 } = colorTheme;
	const { buttonComponent, setButtonComponent } = useButtonContext();
	const backgroundImage = getImageBackground();

	// set button component dynamically
	useEffect(() => {
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
	}, [currentPageNumber]);

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			{backgroundImage !== undefined && backgroundImage !== null && backgroundImage !== "" && (
				<ImageBackdrop
					source={backgroundImage}
					key={currentPageNumber}
				/>
			)}
			{/* only the panel fades; the backdrop and navigation stay outside so a failed fade can't blank the page */}
			<AnimatedView style={styles.panelContainer}>
				<View
					style={[
						styles.headingPanel,
						{
							backgroundColor: color200,
							maxWidth: device.isTablet ? 500 : "100%",
							minHeight: device.isTablet ? 250 : 220,
						},
					]}
				>
					<ScrollView>{children}</ScrollView>
				</View>
			</AnimatedView>
			<Main>
				<BottomMain>
					<></>
				</BottomMain>
				<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
			</Main>
		</View>
	);
};

export default QuestionnaireAdultIntroLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	panelContainer: {
		...StyleSheet.absoluteFillObject,
		alignItems: "center",
	},
	headingPanel: {
		position: "absolute",
		width: "100%",
		height: "auto",
		...GeneralStyle.general.sectionIntroPanel,
	},
});
