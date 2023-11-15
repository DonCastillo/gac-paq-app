import { View, StyleSheet } from "react-native";
import type { FlexStyle } from "react-native";
import { SettingContext } from "../../../store/settings";
import React, { useContext, useEffect, useState } from "react";
import ButtonIcon from "../../buttons/ButtonIcon";
import ScreenType from "../../../constants/screen_type";
import SectionType from "../../../constants/section_type";

interface BackAndNextNavProps {
	onPrev?: () => void | null;
	onNext?: () => void | null;
}

export default function BackAndNextNav({
	onPrev,
	onNext,
}: BackAndNextNavProps): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const [hasPrev, setHasPrev] = useState<boolean>(false);
	const [hasNext, setHasNext] = useState<boolean>(false);
	const [justification, setJustification] = useState<FlexStyle["justifyContent"]>("space-between");
	const [buttonColor, setButtonColor] = useState<string>("#fff");
	const { colorTheme, currentPageNumber, currentPage } = settingCtx.settingState;
	const { color100, color200 } = colorTheme;

	// set button color dynamically
	useEffect(() => {
		const currentScreen: ScreenType | null = currentPage.screen ?? null;
		const currentSection: SectionType | null = currentPage.section ?? null;
		setButtonColor(color200);
		if (currentSection === SectionType.Intro) {
			setButtonColor("#fff");
			return;
		}
		if (currentScreen === ScreenType.IntroQuestion) {
			setButtonColor("#fff");
			return;
		}
		if (currentScreen === ScreenType.ExtroQuestion) {
			setButtonColor("#FFCB66");
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
					name="arrow-left"
					type="font-awesome-5"
					color={buttonColor}
					size={40}
					onPress={() => onPrev !== undefined && onPrev()}
				/>
			)}

			{hasNext && (
				<ButtonIcon
					name="arrow-right"
					type="font-awesome-5"
					color={buttonColor}
					size={40}
					onPress={() => onNext !== undefined && onNext()}
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
