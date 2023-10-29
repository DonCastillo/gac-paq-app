import { View, StyleSheet } from "react-native";
import ButtonContainerWidth from "../../buttons/ButtonContainerWidth";
import { SettingContext } from "../../../store/settings";
import React, { useContext } from "react";

export default function BackAndNextNav(): React.ReactElement {
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
				borderColor={color100}
				bgColor={"#fff"}
				textColor={color100}
			>
				{buttons?.back}
			</ButtonContainerWidth>

			<ButtonContainerWidth
				onPress={nextPage}
				borderColor={color100}
				bgColor={color100}
				textColor={"#fff"}
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
