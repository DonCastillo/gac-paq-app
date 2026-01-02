import ButtonIcon from "@components/buttons/ButtonIcon";
import BtnCntrWdthShadowed from "@components/derived-buttons/BtnCntrWdthShadowed";
import { getPhrases } from "@store/settings/settingsSlice";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

interface Props {
	onPrev: () => void;
	onNext: () => Promise<void>;
	colorTheme?: string;
}

const BackAndTryAgainNav = ({ onPrev, onNext, colorTheme }: Props): React.ReactElement => {
	const phrases = useSelector(getPhrases);

	return (
		<View style={[styles.bottomNavigation, { justifyContent: "space-between" }]}>
			<ButtonIcon
				name="arrow-left"
				type="font-awesome"
				color={colorTheme ?? "#fff"}
				onPress={() => onPrev !== undefined && onPrev()}
				accessibilityLabel="Go to the previous page"
			/>

			<BtnCntrWdthShadowed
				label={phrases?.tryAgain}
				onPress={async () => onPrev !== undefined && onNext()}
				colorTheme={"#FFCB66"}
			/>
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

export default BackAndTryAgainNav;
