import { Icon } from "@rneui/themed";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GeneralStyle } from "styles/general";


const Menu = (): React.ReactElement => {
	return (
		<View style={styles.container}>
			<Icon
				accessibilityLabel="Toggle Menu"
				name="menu"
				size={GeneralStyle.general.icon.fontSize}
				color={"#fff"}
				onPress={() => console.log("openinjg menu ...")}
				containerStyle={{
					flex: 1,
					paddingHorizontal: 2,
				}}
			/>
		</View>
	);
};

export default Menu;

const styles = StyleSheet.create({
	container: {},
});
