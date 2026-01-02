import { useButtonContext } from "@/contexts/common/ButtonContext";
import AnimatedView from "@components/AnimatedView";
import BGLinearGradient from "@components/BGLinearGradient";
import ImageBackdrop from "@components/ImageBackdrop";
import Main from "@components/Main";
import Navigation from "@components/Navigation";
import CenterMain from "@components/orientation/CenterMain";
import { useStateContext } from "@contexts/specific/StateContext";
import { ParentComponent } from "@interface/function.type";
import { getImageBackgroundStatus } from "@utils/background.utils";
import React from "react";
import { StyleSheet, View } from "react-native";

const StateAdultLayout: ParentComponent = ({ children }) => {
	const { state } = useStateContext();
	const { buttonComponent } = useButtonContext();
	const backgroundImage = getImageBackgroundStatus(state);

	return (
		<AnimatedView>
			<View style={styles.container}>
				<BGLinearGradient />
				{backgroundImage !== undefined && backgroundImage !== null && backgroundImage !== "" && (
					<ImageBackdrop
						source={backgroundImage}
						opacity={0.7}
						key={state.toString()}
					/>
				)}
				<Main>
					<CenterMain>{children}</CenterMain>
					<Navigation>{buttonComponent !== null && buttonComponent}</Navigation>
				</Main>
			</View>
		</AnimatedView>
	);
};

export default StateAdultLayout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
	},
});
