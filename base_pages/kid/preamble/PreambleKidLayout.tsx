import AnimatedView from "@components/AnimatedView";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import BackgroundPreamble from "@components/kid/background/question-pages/BackgroundPreamble";
import ProgressBarKid from "@components/kid/subcomponents/ProgressBarKid";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import CenterMain from "@components/orientation/CenterMain";
import ScrollContainer from "@components/ScrollContainer";
import { useProceedContext } from "@contexts/common/ProceedContext";
import { ParentComponent } from "@interface/function.type";
import { getColorTheme, prevPage } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { proceedPage } from "@utils/navigation.utils";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const PreambleKidLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const colorTheme = useSelector(getColorTheme);
	const { color100, color200 } = colorTheme;
	const { proceed } = useProceedContext();

	return (
		<View style={styles.container}>
			<BackgroundPreamble fillColor={(color100 ?? "#fff") + "B3"} />
			<Main>
				<ProgressBarKid />
				<Toolbar />
				<CenterMain>
					<AnimatedView style={{ flex: 0 }}>
						<ScrollContainer
							scrollContainerStyle={{
								...GeneralStyle.kid.scrollContainer,
								backgroundColor: color100 + "26",
							}}
							scrollIndicatorStyle={{
								...GeneralStyle.kid.scrollIndicator,
								backgroundColor: color200,
							}}
						>
							{children}
						</ScrollContainer>
					</AnimatedView>
				</CenterMain>
				<Navigation>
					{proceed ? (
						<BackAndNextNav
							key={"Proceed"}
							colorTheme={color200}
							onPrev={() => dispatch(prevPage())}
							onNext={() => proceedPage()}
						/>
					) : (
						<BackAndNextNav
							key={"DontProceed"}
							colorTheme={color200}
							onPrev={() => dispatch(prevPage())}
						/>
					)}
				</Navigation>
			</Main>
		</View>
	);
};

export default PreambleKidLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
});
