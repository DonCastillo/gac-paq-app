import { View, StyleSheet } from "react-native";
import type { FlexStyle } from "react-native";
import { SettingContext } from "../../../store/settings";
import React, { useContext, useEffect, useState } from "react";
import ButtonIcon from "../../buttons/ButtonIcon";
import ScreenType from "../../../constants/screen_type";
import ButtonContainerWidth from "../../buttons/ButtonContainerWidth";

interface BackAndSubmitNavProps {
	onPrev?: () => void;
	onNext?: () => Promise<void>;
}

export default function BackAndSubmitNav({
	onPrev,
	onNext,
}: BackAndSubmitNavProps): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const [hasPrev, setHasPrev] = useState<boolean>(false);
	const [hasNext, setHasNext] = useState<boolean>(false);
	const [justification, setJustification] = useState<FlexStyle["justifyContent"]>("space-between");
	const [buttonColor, setButtonColor] = useState<string>("#fff");
	const { colorTheme, currentPageNumber, currentPage, buttons } = settingCtx.settingState;
	const { color100 } = colorTheme;

	// set button color dynamically
	useEffect(() => {
		const currentScreen: ScreenType | null = currentPage.screen ?? null;
		setButtonColor(color100);
		if (currentScreen === ScreenType.IntroQuestion) {
			setButtonColor("#fff");
		}
	}, [currentPageNumber, currentPage]);

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
					name="arrowleft"
					type="antdesign"
					color={buttonColor}
					onPress={() => onPrev !== undefined && onPrev()}
				/>
			)}

			{hasNext && (
				<ButtonContainerWidth
					onPress={() => onNext !== undefined && onNext()}
					borderColor={buttonColor}
					textColor={buttonColor}
					bgColor="#fff"
				>
					{buttons?.complete}
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
	},
});
