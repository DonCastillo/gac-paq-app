import AnimatedView from "@components/AnimatedView";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import QuestionSubLabel from "@components/generic/QuestionSubLabel";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import QuestionLabel from "@components/kid/QuestionLabel";
import ProgressBarKid from "@components/kid/subcomponents/ProgressBarKid";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import TopMain from "@components/orientation/TopMain";
import Mode from "@constants/mode.enum";
import { useButtonContext } from "@contexts/common/ButtonContext";
import { useDropdownContext } from "@contexts/common/DropdownContext";
import { useProceedContext } from "@contexts/common/ProceedContext";
import { useQuestionContext } from "@contexts/common/QuestionContext";
import useCharacter from "@hooks/useCharacter";
import useCurrentPage from "@hooks/useCurrentPage";
import { ParentComponent } from "@interface/function.type";
import { getColorTheme, getDevice, nextPage, prevPage } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { getIntroductoryBackground } from "@utils/background.utils";
import { loadSectionPages } from "@utils/load_pages.utils";
import { changeMode } from "@utils/mode.utils";
import { verticalScale } from "@utils/responsive.utils";
import React, { useEffect, useState } from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const OpeningQuestionKidLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { currentPageNumber } = useCurrentPage();
	const { mode, language } = useCharacter();
	const device = useSelector(getDevice);
	const colorTheme = useSelector(getColorTheme);
	const { color200 } = colorTheme;
	const { buttonComponent, setButtonComponent } = useButtonContext();
	const { proceed } = useProceedContext();
	const { selectedValue, questionLabel, questionSubLabel } = useQuestionContext();
	const { setDropdownOpen } = useDropdownContext();
	const [background, setBackground] = useState<React.ReactElement | null>(null);

	// change background on page change
	useEffect(() => {
		setBackground(getIntroductoryBackground(currentPageNumber));
	}, [currentPageNumber]);

	// trigger a mode change if the mode changes from a values that is not a kid
	useEffect(() => {
		if (mode !== Mode.Kid) {
			changeMode(mode, language);
			loadSectionPages();
		}
	}, [mode]);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 1) {
			setButtonComponent(
				<BackAndNextNav
					key={"bothCurrentPage"}
					colorTheme={color200}
					onPrev={() => dispatch(prevPage())}
					onNext={() => dispatch(nextPage())}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme={color200}
					onNext={() => dispatch(nextPage())}
				/>,
			);
		}
	}, [currentPageNumber]);

	useEffect(() => {
		if (selectedValue !== null && proceed) {
			setButtonComponent(
				<BackAndNextNav
					key={"bothSelectedValue"}
					colorTheme={color200}
					onPrev={() => dispatch(prevPage())}
					onNext={() => dispatch(nextPage())}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"prev"}
					colorTheme={color200}
					onPrev={() => dispatch(prevPage())}
				/>,
			);
		}
	}, [selectedValue, proceed]);

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				setDropdownOpen(false);
				Keyboard.dismiss();
			}}
		>
			<View style={styles.container}>
				{background !== null && background}
				<Main>
					<ProgressBarKid />
					<Toolbar />
					<TopMain>
						<AnimatedView key={currentPageNumber}>
							<View
								style={[
									GeneralStyle.kid.introQuestionContainer,
									{
										marginVertical: verticalScale(40, device.screenHeight),
										...styles.mainContainer,
									},
								]}
							>
								<View style={{ marginBottom: 9 }}>
									<QuestionLabel
										textStyle={GeneralStyle.kid.introQuestionLabel}
										customStyle={{ marginBottom: 7 }}
									>
										{questionLabel}
									</QuestionLabel>
									<QuestionSubLabel customStyle={{ marginBottom: 4 }}>{questionSubLabel}</QuestionSubLabel>
								</View>

								<View style={styles.questionComponentContainer}>{children}</View>
							</View>
						</AnimatedView>
					</TopMain>
					<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
				</Main>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default OpeningQuestionKidLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	mainContainer: {
		minHeight: "100%",
		flex: 1,
	},
	questionComponentContainer: {
		...GeneralStyle.kid.questionComponentContainer,
	},
});
