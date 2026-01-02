import AnimatedView from "@components/AnimatedView";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import QuestionSubLabel from "@components/generic/QuestionSubLabel";
import QuestionTitle from "@components/generic/QuestionTitle";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import QuestionLabel from "@components/kid/QuestionLabel";
import ProgressBarKid from "@components/kid/subcomponents/ProgressBarKid";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import TopMain from "@components/orientation/TopMain";
import Device from "@constants/device.enum";
import { useButtonContext } from "@contexts/common/ButtonContext";
import { useProceedContext } from "@contexts/common/ProceedContext";
import { useQuestionContext } from "@contexts/common/QuestionContext";
import useCurrentPage from "@hooks/useCurrentPage";
import { ParentComponent } from "@interface/function.type";
import { getColorTheme, getDevice, prevPage } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { getQuestionBackground } from "@utils/background.utils";
import { proceedPage } from "@utils/navigation.utils";
import { verticalScale } from "@utils/responsive.utils";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const QuestionnaireKidQuestionLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { currentPageNumber, currentPage } = useCurrentPage();
	const colorTheme = useSelector(getColorTheme);
	const device = useSelector(getDevice);
	const { color200 } = colorTheme;
	const { isKeyboardOpen } = device;
	const { buttonComponent, setButtonComponent } = useButtonContext();
	const { proceed } = useProceedContext();
	const { selectedValue, questionLabel, questionSubLabel, questionType, heading } = useQuestionContext();
	const [background, setBackground] = useState<React.ReactElement | null>(null);

	// set background screen dynamically
	useEffect(() => {
		setBackground(getQuestionBackground(currentPage.sectionNumber, currentPage.sectionPageNumber, questionType, Device.Mobile, colorTheme.color100));
	}, [currentPageNumber]);

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 1) {
			setButtonComponent(
				<BackAndNextNav
					key={"both" + selectedValue}
					colorTheme={color200}
					onPrev={() => dispatch(prevPage())}
					onNext={() => proceedPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next" + selectedValue}
					colorTheme={color200}
					onNext={() => proceedPage()}
				/>,
			);
		}
	}, [currentPageNumber]);

	useEffect(() => {
		if (((selectedValue !== null && selectedValue !== "") || currentPage.page.ident === "app_use_comment") && proceed) {
			setButtonComponent(
				<BackAndNextNav
					key={"both" + selectedValue}
					colorTheme={color200}
					onPrev={() => dispatch(prevPage())}
					onNext={() => proceedPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"prev" + selectedValue}
					colorTheme={color200}
					onPrev={() => dispatch(prevPage())}
				/>,
			);
		}
	}, [selectedValue, proceed]);

	return (
		<View style={styles.container}>
			{background !== null && background}
			<Main>
				{!isKeyboardOpen && <ProgressBarKid />}
				{!isKeyboardOpen && <Toolbar key={currentPageNumber} />}

				<TopMain>
					<AnimatedView key={currentPageNumber}>
						<View
							style={[
								{
									marginVertical: verticalScale(5, device.screenHeight),
									paddingHorizontal: device.isTablet ? 20 : 0,
									...styles.mainContainer,
								},
							]}
						>
							{!isKeyboardOpen && (
								<View style={{ marginBottom: 9 }}>
									<QuestionTitle>{heading}</QuestionTitle>
									<QuestionLabel
										textStyle={GeneralStyle.kid.questionQuestionLabel}
										customStyle={{
											marginBottom: 7,
										}}
									>
										{questionLabel}
									</QuestionLabel>
									<QuestionSubLabel customStyle={{ marginBottom: 4 }}>{questionSubLabel}</QuestionSubLabel>
								</View>
							)}
							<View style={styles.questionComponentContainer}>{children}</View>
						</View>
					</AnimatedView>
				</TopMain>
				{!isKeyboardOpen && <Navigation>{buttonComponent !== null && buttonComponent}</Navigation>}
			</Main>
		</View>
	);
};

export default QuestionnaireKidQuestionLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
	mainContainer: {
		maxHeight: "100%",
		flex: 1,
	},
	questionComponentContainer: {
		...GeneralStyle.kid.questionComponentContainer,
	},
});
