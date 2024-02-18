import { Pressable, StyleSheet, Text, View } from "react-native";
import { GeneralStyle } from "styles/general";
import React, { useContext, useEffect, useState } from "react";
import { SettingContext } from "store/settings";

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

	function pressHandler(): void {
		if (selected) {
			onPress(null);
		} else {
			onPress(optionValue);
		}
	}

	useEffect(() => {
		if (optionValue !== value) {
			setOptionValue(value);
		}
	}, [value]);

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
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
		...GeneralStyle.adult.radioContainer,
	},
	radioButton: {
		...GeneralStyle.adult.radioButton,
	},

	labelContainer: {
		width: "100%",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "nowrap",
	},
	labelText: {
		flexWrap: "wrap",
		flex: 1,
		...GeneralStyle.adult.radioText,
	},
	labelImage: {
		marginRight: 10,
	},
});
