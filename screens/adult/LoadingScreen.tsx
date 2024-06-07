import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";

interface LoadingScreenProps {
	text: string;
	image?: string;
	color?: string;
}

const LoadingScreen = ({
	text,
	image = "",
	color = "white",
}: LoadingScreenProps): React.ReactElement => {
	return (
		<View style={styles.container}>
			<Main>
				<CenterMain>
					<Text style={{ color }}>Don</Text>
					<ActivityIndicator
						size="large"
						color={color}
					/>
				</CenterMain>
			</Main>
		</View>
	);
};

export default LoadingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
		opacity: 0.5,
		justifyContent: "center",
		alignItems: "center",
	},
});
