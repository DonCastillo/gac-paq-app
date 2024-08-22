import React from "react";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";

interface PropsInterface {
	color?: string;
}

const ProgressBar = ({ color }: PropsInterface): React.ReactElement => {
	return (
		<View style={styles.container}>
			<Progress.Bar
				width={200}
				height={10}
				indeterminate={true}
				color={color ?? "white"}
				borderWidth={2}
				borderRadius={6}
				useNativeDriver={true}
			/>
		</View>
	);
};

export default ProgressBar;

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		marginTop: 30,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});
