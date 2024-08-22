import { View, StyleSheet } from "react-native";
import ButtonContainerWidth from "components/buttons/ButtonContainerWidth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhrases, getColorTheme, nextPage, prevPage } from "store/settings/settingsSlice";

const BackAndGoNav = (): React.ReactElement => {
	const dispatch = useDispatch();
	const colorTheme = useSelector(getColorTheme);
	const phrases = useSelector(getPhrases);
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
				{phrases?.back}
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
				{phrases?.next}
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
