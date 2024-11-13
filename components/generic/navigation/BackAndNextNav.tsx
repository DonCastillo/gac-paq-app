import { View, StyleSheet } from "react-native";
import type { FlexStyle } from "react-native";
import React, { useEffect, useState } from "react";
import ButtonIcon from "components/buttons/ButtonIcon";

interface Props {
	onPrev?: () => void;
	onNext?: () => void;
	colorTheme?: string;
}

const BackAndNextNav = ({ onPrev, onNext, colorTheme }: Props): React.ReactElement => {
	const [hasPrev, setHasPrev] = useState<boolean>(false);
	const [hasNext, setHasNext] = useState<boolean>(false);
	const [justification, setJustification] = useState<FlexStyle["justifyContent"]>("space-between");

	// determine whether to show prev, next, or both buttons
	useEffect(() => {
		if (onPrev !== undefined && onPrev !== null) {
			setHasPrev(true);
		}
		if (onNext !== undefined && onNext !== null) {
			setHasNext(true);
		}
	}, [onPrev, onNext]);

	// determine the justification of the buttons
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
				<ButtonIcon
					name="arrow-left"
					type="font-awesome"
					color={colorTheme ?? "#fff"}
					onPress={() => onPrev !== undefined && onPrev()}
					accessibilityLabel="Go to the previous page"
				/>
			)}

			{hasNext && (
				<ButtonIcon
					name="arrow-right"
					type="font-awesome"
					color={colorTheme ?? "#fff"}
					onPress={() => onNext !== undefined && onNext()}
					accessibilityLabel="Go to the next page"
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	bottomNavigation: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

export default BackAndNextNav;
