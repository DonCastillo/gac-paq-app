import { View, StyleSheet } from "react-native";
import ButtonContainerWidth from "components/buttons/ButtonContainerWidth";
import { SettingContext } from "store/settings";
import React, { useContext } from "react";

export default function BackAndGoNav(): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme, buttons } = settingCtx.settingState;
	const { color100 } = colorTheme;

	function prevPage(): void {
		settingCtx.prevPage();
	}

	function nextPage(): void {
		settingCtx.nextPage();
	}

	return (
		<View style={styles.bottomNavigation}>
			<ButtonContainerWidth
				onPress={prevPage}
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
				onPress={nextPage}
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
}

const styles = StyleSheet.create({
	bottomNavigation: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
