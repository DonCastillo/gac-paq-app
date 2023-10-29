import { View, StyleSheet } from "react-native";
import ButtonContainerWidth from "../../buttons/ButtonContainerWidth";
import { SettingContext } from "../../../store/settings";
import React, { useContext } from "react";

interface BackAndNextNavProps {
	onPrev?: () => void;
	onNext?: () => void;
}

export default function BackAndNextNav({
	onPrev,
	onNext,
}: BackAndNextNavProps): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme, buttons } = settingCtx.settingState;
	const { color100 } = colorTheme;

	return (
		<View style={styles.bottomNavigation}>
			<ButtonContainerWidth
				onPress={onPrev}
				borderColor={color100}
				bgColor={"#fff"}
				textColor={color100}
			>
				{buttons?.back}
			</ButtonContainerWidth>

			<ButtonContainerWidth
				onPress={onNext}
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
		backgroundColor: "pink",
	},
});
