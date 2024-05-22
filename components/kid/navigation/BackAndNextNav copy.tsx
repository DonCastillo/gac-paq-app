import { View, StyleSheet } from "react-native";
import type { FlexStyle } from "react-native";
import ButtonContainerWidth from "components/buttons/ButtonContainerWidth";
import React, { useEffect, useState } from "react";
import { Icon } from "@rneui/themed";
import { useSelector } from "react-redux";
import { getButtons, getColorTheme } from "store/settings/settingsSlice";

interface BackAndNextNavProps {
	onPrev?: () => void;
	onNext?: () => void;
}

export default function BackAndNextNav({
	onPrev,
	onNext,
}: BackAndNextNavProps): React.ReactElement {
	const colorTheme = useSelector(getColorTheme);
	const buttons = useSelector(getButtons);

	const [hasPrev, setHasPrev] = useState<boolean>(false);
	const [hasNext, setHasNext] = useState<boolean>(false);
	const [justification, setJustification] = useState<FlexStyle["justifyContent"]>("space-between");
	const { color100 } = colorTheme;

	useEffect(() => {
		if (onPrev !== undefined && onPrev !== null) {
			setHasPrev(true);
		}
		if (onNext !== undefined && onNext !== null) {
			setHasNext(true);
		}
	}, [onPrev, onNext]);

	useEffect(() => {
		let tempJustification: FlexStyle["justifyContent"] = "space-between";
		if (hasPrev && hasNext) {
			tempJustification = "space-between";
		} else if (hasPrev) {
			tempJustification = "flex-start";
		} else if (hasNext) {
			tempJustification = "flex-end";
		}
		setJustification(tempJustification);
	}, [hasPrev, hasNext]);

	return (
		<View style={[styles.bottomNavigation, { justifyContent: justification }]}>
			{hasPrev && (
				<ButtonContainerWidth
					onPress={onPrev}
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
			)}

			{hasNext && (
				<ButtonContainerWidth
					onPress={onNext}
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
			)}
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
