import { View, StyleSheet } from "react-native";
import ButtonContainerWidth from "components/buttons/ButtonContainerWidth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getButtons, getColorTheme, nextPage, prevPage } from "store/settings/settingsSlice";

const BackAndGoNav = (): React.ReactElement => {
	const dispatch = useDispatch();
	const colorTheme = useSelector(getColorTheme);
	const buttons = useSelector(getButtons);
	const { color100 } = colorTheme;

	return (
		<View style={styles.bottomNavigation}>
			<ButtonContainerWidth
				onPress={() => dispatch(prevPage())}
				customStyle={{
					borderColor: color100,
					backgroundColor: "#fff",
				}}
				textStyle={{
					color: color100,
				}}
			>
				{buttons?.back}
			</ButtonContainerWidth>

			<ButtonContainerWidth
				onPress={() => dispatch(nextPage())}
				customStyle={{
					borderColor: color100,
					backgroundColor: color100,
				}}
				textStyle={{
					color: "#fff",
				}}
			>
				{buttons?.next}
			</ButtonContainerWidth>
		</View>
	);
};

export default BackAndGoNav;

const styles = StyleSheet.create({
	bottomNavigation: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
