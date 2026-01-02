import QuestionContainer from "@components/adults/QuestionContainer";
import ProgressBarAdult from "@components/adults/subcomponents/ProgressBarAdult";
import AnimatedView from "@components/AnimatedView";
import BGLinearGradient from "@components/BGLinearGradient";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import ImageBackdrop from "@components/ImageBackdrop";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import CenterMain from "@components/orientation/CenterMain";
import ScrollContainer from "@components/ScrollContainer";
import { useProceedContext } from "@contexts/common/ProceedContext";
import useCurrentPage from "@hooks/useCurrentPage";
import { ParentComponent } from "@interface/function.type";
import { getColorTheme, prevPage } from "@store/settings/settingsSlice";
import { getImageBackground } from "@utils/background.utils";
import { proceedPage } from "@utils/navigation.utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const PreambleAdultLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { currentPageNumber } = useCurrentPage();
	const colorTheme = useSelector(getColorTheme);
	const { color200 } = colorTheme;
	const backgroundImage = getImageBackground();
	const { proceed } = useProceedContext();

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
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
					<AnimatedView style={{ flex: 0 }}>
						<QuestionContainer customStyle={{ backgroundColor: color200 }}>
							<ScrollContainer
								scrollContainerStyle={{
									width: 3,
									backgroundColor: "#d6d4d2" + "99",
								}}
								scrollIndicatorStyle={{
									width: 3,
									backgroundColor: "#fff",
								}}
							>
								{children}
							</ScrollContainer>
						</QuestionContainer>
					</AnimatedView>
				</CenterMain>
				<Navigation>
					{proceed ? (
						<BackAndNextNav
							key={"Proceed"}
							onPrev={() => dispatch(prevPage())}
							onNext={() => proceedPage()}
						/>
					) : (
						<BackAndNextNav
							key={"DontProceed"}
							onPrev={() => dispatch(prevPage())}
						/>
					)}
				</Navigation>
			</Main>
		</View>
	);
};

export default PreambleAdultLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
});
