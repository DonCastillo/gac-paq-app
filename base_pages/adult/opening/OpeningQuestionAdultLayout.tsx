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
import { getDevice, nextPage, prevPage } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { verticalScale } from "@utils/responsive.utils";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const OpeningQuestionAdultLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { currentPageNumber } = useCurrentPage();
	const device = useSelector(getDevice);
	const { buttonComponent, setButtonComponent } = useButtonContext();
	const { proceed } = useProceedContext();
	const { heading, selectedValue, questionLabel, questionSubLabel } = useQuestionContext();

	// set button component dynamically
	useEffect(() => {
		if (currentPageNumber > 1) {
			setButtonComponent(
				<BackAndNextNav
					key={"both"}
					colorTheme="#FFF"
					onPrev={() => dispatch(prevPage())}
					onNext={() => dispatch(nextPage())}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"next"}
					colorTheme="#FFF"
					onNext={() => dispatch(nextPage())}
				/>,
			);
		}
	}, [currentPageNumber]);

	useEffect(() => {
		if (selectedValue !== null && proceed) {
			setButtonComponent(
				<BackAndNextNav
					key={"both"}
					colorTheme="#FFF"
					onPrev={() => dispatch(prevPage())}
					onNext={() => dispatch(nextPage())}
				/>,
			);
		} else {
			setButtonComponent(
				<BackAndNextNav
					key={"prev"}
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
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
					<AnimatedView
						key={currentPageNumber}
						style={{ flex: 0 }}
					>
						<QuestionContainer>
							<View style={{ marginBottom: 13 }}>
								<QuestionTitle>{heading}</QuestionTitle>
								<QuestionLabel
									textStyle={GeneralStyle.adult.questionLabel}
									customStyle={{ marginBottom: 7 }}
								>
									{questionLabel}
								</QuestionLabel>
								<QuestionSubLabel customStyle={{ marginBottom: 7 }}>{questionSubLabel}</QuestionSubLabel>
							</View>
							<View
								style={{
									maxHeight: verticalScale(300, device.screenHeight),
								}}
							>
								{children}
							</View>
						</QuestionContainer>
					</AnimatedView>
				</CenterMain>
				<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
			</Main>
		</View>
	);
};

export default OpeningQuestionAdultLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "green",
	},
});
