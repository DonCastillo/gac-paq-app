import { View, StyleSheet } from "react-native";
import type { FlexStyle } from "react-native";
import { SettingContext } from "store/settings";
import React, { useContext, useEffect, useState } from "react";
import ButtonIcon from "components/buttons/ButtonIcon";
import BtnCntrWdthShadowed from "components/derived-buttons/BtnCntrWdthShadowed";

interface Props {
	onPrev?: () => void;
	onNext?: () => Promise<void>;
	colorTheme?: string;
}

function BackAndSubmitNav({ onPrev, onNext, colorTheme }: Props): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const [hasPrev, setHasPrev] = useState<boolean>(false);
	const [hasNext, setHasNext] = useState<boolean>(false);
	const [justification, setJustification] = useState<FlexStyle["justifyContent"]>("space-between");
	const { buttons } = settingCtx.settingState;

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
				/>
			)}

			{hasNext && (
				<BtnCntrWdthShadowed
					label={buttons?.complete}
					onPress={async () => onNext !== undefined && onNext()}
					colorTheme={colorTheme ?? "#fff"}
				/>
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
	},
});

export default BackAndSubmitNav;
