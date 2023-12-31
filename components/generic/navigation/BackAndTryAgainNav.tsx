import { View, StyleSheet } from "react-native";
import { SettingContext } from "store/settings";
import React, { useContext } from "react";
import ButtonIcon from "../../buttons/ButtonIcon";
import BtnCntrWdthShadowed from "../../derived-buttons/BtnCntrWdthShadowed";

interface Props {
	onPrev: () => void;
	onNext: () => Promise<void>;
}

function BackAndTryAgainNav({ onPrev, onNext }: Props): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { phrases } = settingCtx.settingState;

	return (
		<View style={[styles.bottomNavigation, { justifyContent: "space-between" }]}>
			<ButtonIcon
				name="arrowleft"
				type="antdesign"
				color={"#FFCB66"}
				onPress={() => onPrev !== undefined && onPrev()}
			/>

			<BtnCntrWdthShadowed
				label={phrases?.tryAgain}
				onPress={async () => onPrev !== undefined && onNext()}
			/>
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

export default BackAndTryAgainNav;
