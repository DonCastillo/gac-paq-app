import QuestionContainer from "@components/adults/QuestionContainer";
import ProgressBarAdult from "@components/adults/subcomponents/ProgressBarAdult";
import BGLinearGradient from "@components/BGLinearGradient";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import QuestionSubLabel from "@components/generic/QuestionSubLabel";
import QuestionTitle from "@components/generic/QuestionTitle";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import ImageBackdrop from "@components/ImageBackdrop";
import QuestionLabel from "@components/kid/QuestionLabel";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import CenterMain from "@components/orientation/CenterMain";
import { useQuestionContext } from "@contexts/common/QuestionContext";
import useCurrentPage from "@hooks/useCurrentPage";
import { ParentComponent } from "@interface/function.type";
import { getDevice, nextPage, prevPage } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { getImageBackground } from "@utils/background.utils";
import { verticalScale } from "@utils/responsive.utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const GenericQuestionnaireLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { currentPageNumber } = useCurrentPage();
	const device = useSelector(getDevice);
	const { isKeyboardOpen } = device;
	const { questionLabel, questionSubLabel, heading, selectedValue } = useQuestionContext();
	const backgroundImage = getImageBackground();

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			{backgroundImage !== undefined && backgroundImage !== null && backgroundImage !== "" && (
				<ImageBackdrop
					source={backgroundImage}
					key={currentPageNumber}
				/>
			)}
			<Main>
				{!isKeyboardOpen && <ProgressBarAdult />}
				{!isKeyboardOpen && <Toolbar />}
				<CenterMain>
					<QuestionContainer>
						<View style={{ marginBottom: 13 }}>
							{!isKeyboardOpen && <QuestionTitle>{heading}</QuestionTitle>}
							<QuestionLabel
								textStyle={GeneralStyle.adult.questionLabel}
								customStyle={{ marginBottom: 7 }}
							>
								{questionLabel}
							</QuestionLabel>
							{!isKeyboardOpen && <QuestionSubLabel customStyle={{ marginBottom: 7 }}>{questionSubLabel}</QuestionSubLabel>}
						</View>

						<View
							style={{
								maxHeight: verticalScale(300, device.screenHeight),
							}}
						>
							{children}
						</View>
					</QuestionContainer>
				</CenterMain>
				<Navigation>
					{selectedValue !== null ? (
						<BackAndNextNav
							key={"WithValue"}
							onPrev={() => dispatch(prevPage())}
							onNext={() => dispatch(nextPage())}
						/>
					) : (
						<BackAndNextNav
							key={"WithoutValue"}
							onPrev={() => dispatch(prevPage())}
						/>
					)}
				</Navigation>
			</Main>
		</View>
	);
};

export default GenericQuestionnaireLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
