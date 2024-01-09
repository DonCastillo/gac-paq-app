import { View, StyleSheet } from "react-native";
import type { FlexStyle } from "react-native";
import { SettingContext } from "store/settings";
import React, { useContext, useEffect, useState } from "react";
import ButtonIcon from "components/buttons/ButtonIcon";
import ScreenType from "constants/screen_type";
import ButtonContainerWidth from "components/buttons/ButtonContainerWidth";
import BtnCntrWdthShadowed from "components/derived-buttons/BtnCntrWdthShadowed";

interface Props {
	onPrev?: () => void;
	onNext?: () => Promise<void>;
}

function BackAndSubmitNav({ onPrev, onNext }: Props): React.ReactElement {
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
					name="arrow-left"
					type="font-awesome"
					color={"#FFCB66"}
					onPress={() => onPrev !== undefined && onPrev()}
				/>
			)}

			{hasNext && (
				<BtnCntrWdthShadowed
					label={buttons?.complete}
					onPress={async () => onNext !== undefined && onNext()}
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
