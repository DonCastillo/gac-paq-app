import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import Main from "components/Main";
import CenterMain from "components/orientation/CenterMain";

LoadingScreen.propTypes = {
	text: PropTypes.string,
	image: PropTypes.string,
	color: PropTypes.string,
};

export default function LoadingScreen({ text, image = "", color = "white" }): React.ReactElement {
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
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
		opacity: 0.5,
		justifyContent: "center",
		alignItems: "center",
	},
});
