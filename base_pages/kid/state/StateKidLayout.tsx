import AnimatedView from "@components/AnimatedView";
import BackgroundYellowStroke from "@components/kid/background/question-pages/BackgroundYellowStroke";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import CenterMain from "@components/orientation/CenterMain";
import { useButtonContext } from "@contexts/common/ButtonContext";
import { ParentComponent } from "@interface/function.type";
import React from "react";
import { StyleSheet, View } from "react-native";

const StateKidLayout: ParentComponent = ({ children }) => {
	const { buttonComponent } = useButtonContext();

	return (
		<AnimatedView>
			<View style={styles.container}>
				<BackgroundYellowStroke />
				<Main>
					<CenterMain>{children}</CenterMain>
					<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
				</Main>
			</View>
		</AnimatedView>
	);
};

export default StateKidLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
});
