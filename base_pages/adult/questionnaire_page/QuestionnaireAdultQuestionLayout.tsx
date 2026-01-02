import AnimatedView from "@components/AnimatedView";
import BGLinearGradient from "@components/BGLinearGradient";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import QuestionContainer from "@components/adults/QuestionContainer";
import ProgressBarAdult from "@components/adults/subcomponents/ProgressBarAdult";
import QuestionSubLabel from "@components/generic/QuestionSubLabel";
import QuestionTitle from "@components/generic/QuestionTitle";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import QuestionLabel from "@components/kid/QuestionLabel";
import CenterMain from "@components/orientation/CenterMain";
import { useButtonContext } from "@contexts/common/ButtonContext";
import { useProceedContext } from "@contexts/common/ProceedContext";
import { useQuestionContext } from "@contexts/common/QuestionContext";
import useCurrentPage from "@hooks/useCurrentPage";
import { ParentComponent } from "@interface/function.type";
import { getDevice, prevPage } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { proceedPage } from "@utils/navigation.utils";
import { verticalScale } from "@utils/responsive.utils";
import { adjustQuestionSingleQuestionLabel } from "@utils/style";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const QuestionnaireAdultQuestionLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { currentPageNumber, currentPage } = useCurrentPage();
	const device = useSelector(getDevice);
	const { isKeyboardOpen } = device;
	const { buttonComponent, setButtonComponent } = useButtonContext();
	const { proceed } = useProceedContext();
	const { questionLabel, questionSubLabel, heading, selectedValue } = useQuestionContext();

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 1) {
			setButtonComponent(
				<BackAndNextNav
					key={"both" + selectedValue}
					colorTheme="#FFF"
					onPrev={() => dispatch(prevPage())}
					onNext={() => proceedPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next" + selectedValue}
					colorTheme="#FFF"
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
					colorTheme="#FFF"
					onPrev={() => dispatch(prevPage())}
					onNext={() => proceedPage()}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"prev" + selectedValue}
					colorTheme="#FFF"
					onPrev={() => dispatch(prevPage())}
				/>,
			);
		}
	}, [selectedValue, proceed]);

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<Main>
				{!isKeyboardOpen && <ProgressBarAdult />}
				{!isKeyboardOpen && <Toolbar key={currentPageNumber} />}
				<CenterMain>
					<AnimatedView
						key={currentPageNumber}
						style={{ flex: 0 }}
					>
						<QuestionContainer>
							{!isKeyboardOpen && (
								<View style={{ marginBottom: 13 }}>
									<QuestionTitle>{heading}</QuestionTitle>
									<QuestionLabel
										textStyle={{
											...GeneralStyle.adult.questionLabel,
											...adjustQuestionSingleQuestionLabel(),
										}}
										customStyle={{ marginBottom: 7 }}
									>
										{questionLabel}
									</QuestionLabel>
									<QuestionSubLabel customStyle={{ marginBottom: 7 }}>{questionSubLabel}</QuestionSubLabel>
								</View>
							)}
							<View
								style={{
									maxHeight: verticalScale(400, device.screenHeight),
								}}
							>
								{children}
							</View>
						</QuestionContainer>
					</AnimatedView>
				</CenterMain>
				{!isKeyboardOpen && <Navigation>{buttonComponent !== null && buttonComponent}</Navigation>}
			</Main>
		</View>
	);
};

export default QuestionnaireAdultQuestionLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
