import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GeneralStyle } from "../../../styles/general";
import React, { useContext, useEffect, useState } from "react";
import { SettingContext } from "../../../store/settings";
import { Svg } from "react-native-svg";

interface RadioOptionPropsInterface {
	label: string;
	value: string;
	icon?: React.ReactElement;
	onPress: (value: string | null) => void;
	selected: boolean;
}

export default function RadioOption({
	label,
	value,
	icon,
	onPress,
	selected = false,
}: RadioOptionPropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { color100 } = settingCtx.settingState.colorTheme;
	const [optionValue, setOptionValue] = useState<string>(value);


	console.log("option value: ", value);
	console.log("option optionValue: ", optionValue);

	function pressHandler(): void {
		if (selected) {
			onPress(null);
		} else {
			onPress(optionValue);
		}
	}

	useEffect(() => {
		if(optionValue !== value) {
			setOptionValue(value);
		}
	},[value])

	return (
		<Pressable
			style={styles.container}
			onPress={pressHandler}
		>
			<View
				style={[
					styles.radioButton,
					selected && {
						backgroundColor: color100,
					},
				]}
			></View>
			<View style={styles.labelContainer}>
				{icon !== undefined && icon !== null && <View style={styles.labelImage}>{icon()}</View>}
				<Text style={styles.labelText}>{label}</Text>
			</View>
		</Pressable>
	);
}
const styles = StyleSheet.create({
	container: {
		...GeneralStyle.adult.optionContainer,
		alignItems: "center",
		flexDirection: "row",
	},
	radioButton: {
		height: 25,
		width: 25,
		marginRight: 15,
		borderRadius: 25 / 2,
		borderColor: "#D8D8D8",
		borderWidth: 2,
	},

	labelContainer: {
		width: "100%",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "nowrap",
	},
	labelText: {
		...GeneralStyle.adult.optionText,
		flexWrap: "wrap",
		flex: 1,
	},

	labelImage: {
		marginRight: 10,
	},
});
