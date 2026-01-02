import QuestionContainer from "@components/adults/QuestionContainer";
import ProgressBarAdult from "@components/adults/subcomponents/ProgressBarAdult";
import AnimatedView from "@components/AnimatedView";
import BGLinearGradient from "@components/BGLinearGradient";
import BackAndNextNav from "@components/generic/navigation/BackAndNextNav";
import Toolbar from "@components/generic/subcomponents/Toolbar";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import CenterMain from "@components/orientation/CenterMain";
import { useLanguageContext } from "@contexts/common/LanguageContext";
import { ParentComponent } from "@interface/function.type";
import { nextPage } from "@store/settings/settingsSlice";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

const LanguageAdultLayout: ParentComponent = ({ children }) => {
	const dispatch = useDispatch();
	const { selectedValue } = useLanguageContext();

	return (
		<View style={styles.container}>
			<BGLinearGradient />
			<Main>
				<ProgressBarAdult />
				<Toolbar />
				<CenterMain>
					<AnimatedView style={{ flex: 0 }}>
						<QuestionContainer>{children}</QuestionContainer>
					</AnimatedView>
				</CenterMain>
				<Navigation>
					{selectedValue !== null && (
						<BackAndNextNav
							colorTheme={"#FFF"}
							onNext={() => dispatch(nextPage())}
						/>
					)}
				</Navigation>
			</Main>
		</View>
	);
};

export default LanguageAdultLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
