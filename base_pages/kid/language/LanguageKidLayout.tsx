import AnimatedView from "@components/AnimatedView";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import ProgressBarKid from "@components/kid/subcomponents/ProgressBarKid";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import TopMain from "@components/orientation/TopMain";
import { useDropdownContext } from "@contexts/common/DropdownContext";
import { useLanguageContext } from "@contexts/common/LanguageContext";
import useCurrentPage from "@hooks/useCurrentPage";
import { ParentComponent } from "@interface/function.type";
import { getColorTheme, getDevice, nextPage } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { getIntroductoryBackground } from "@utils/background.utils";
import { verticalScale } from "@utils/responsive.utils";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const LanguageKidLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const device = useSelector(getDevice);
	const colorTheme = useSelector(getColorTheme);
	const { color100 } = colorTheme;
	const { currentPageNumber } = useCurrentPage();
	const { setDropdownOpen } = useDropdownContext();
	const { selectedValue } = useLanguageContext();
	const [background, setBackground] = useState<React.ReactElement | null>(null);

	// set background screen dynamically
	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
	}, [currentPageNumber]);

	return (
		<TouchableWithoutFeedback onPress={() => setDropdownOpen(false)}>
			<View style={styles.container}>
				{background !== null && background}
				<Main>
					<ProgressBarKid />
					<Toolbar />
					<TopMain>
						<AnimatedView>
							<View
								style={[
									GeneralStyle.kid.introQuestionContainer,
									{
										marginVertical: verticalScale(40, device.screenHeight),
										...styles.mainContainer,
									},
								]}
							>
								{children}
							</View>
						</AnimatedView>
					</TopMain>
					<Navigation>
						{selectedValue !== null && (
							<BackAndNextNav
								colorTheme={color100}
								onNext={() => dispatch(nextPage())}
							/>
						)}
					</Navigation>
				</Main>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default LanguageKidLayout;
const styles = StyleSheet.create({
	mainContainer: {
		minHeight: "100%",
		flex: 1,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
});
