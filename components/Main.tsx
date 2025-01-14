import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
}

const Main = ({ children, customStyle = {} }: PropsInterface): React.ReactElement => {
	return (
		<SafeAreaView>
			<View style={[styles.container, customStyle]}>{children}</View>
		</SafeAreaView>
	);
};

export default Main;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		paddingVertical: 0,
		paddingHorizontal: 10,
		minWidth: "100%",
		height: "100%",
	},
});
