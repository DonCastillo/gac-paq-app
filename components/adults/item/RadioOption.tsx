import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { GeneralStyle } from "styles/general";
import React, { useContext, useEffect, useState } from "react";
import { SettingContext } from "store/settings";

interface RadioOptionPropsInterface {
	label: string;
	value: string;
	image?: any;
	onPress: (value: string | null) => void;
	selected: boolean;
}

export default function RadioOption({
	label,
	value,
	image,
	onPress,
	selected = false,
}: RadioOptionPropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { color100 } = settingCtx.settingState.colorTheme;
	const [optionValue, setOptionValue] = useState<string>(value);
	console.log("image: ", image);

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
				{image !== undefined && image !== undefined && typeof image === "function" && (
					<View style={styles.svgImage}>{image()}</View>
				)}
				{image !== undefined && image !== undefined && typeof image === "number" && (
					<Image
						source={image}
						style={styles.nonSvgImage}
						resizeMode="contain"
					/>
				)}
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
		flexDirection: "row",
		width: "100%",
		flex: 1,
		...GeneralStyle.adult.radioText,
	},
	svgImage: {
		marginRight: 15,
		height: 50,
		width: 50,
	},
	nonSvgImage: {
		marginRight: 15,
		height: 50,
		width: 50,
	},
});
