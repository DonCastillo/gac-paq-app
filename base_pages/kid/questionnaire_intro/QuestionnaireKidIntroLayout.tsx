import AnimatedView from "@components/AnimatedView";
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

const QuestionnaireKidIntroLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { currentPageNumber } = useCurrentPage();
	const colorTheme = useSelector(getColorTheme);
	const device = useSelector(getDevice);
	const { color200 } = colorTheme;
	const backgroundImage = getImageBackground();
	const { buttonComponent, setButtonComponent } = useButtonContext();

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
							minHeight: device.isTablet ? 250 : 220,
						},
					]}
				>
					<ScrollView>{children}</ScrollView>
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

export default QuestionnaireKidIntroLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	headingPanel: {
		position: "absolute",
		width: "100%",
		height: "auto",
		...GeneralStyle.general.sectionIntroPanel,
	},
});
