import { Pressable, StyleSheet, Text, View, Image, TextInput } from "react-native";
import { GeneralStyle } from "styles/general";
import React, { useContext, useEffect, useState, useRef } from "react";
import { SettingContext } from "store/settings";
import { G } from "react-native-svg";

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
	const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
	const otherInputRef = useRef<TextInput>(null);

	useEffect(() => {
		if (optionValue !== value) {
			setOptionValue(value);
		}
	}, [value]);

	useEffect(() => {
		setIsOtherSelected(selected && optionValue?.toLowerCase() === "other");
	}, [selected, optionValue]);

	function pressHandler(): void {
		if (selected) {
			onPress(null);
		} else {
			onPress(optionValue);
		}

		console.log("optionValue: ", optionValue);
		// automatically focus on other input field if "other" is selected
		if (optionValue?.toString().toLowerCase() === "other") {
			setIsOtherSelected(true);
			// console.log("otherInputRef: ", otherInputRef);
			otherInputRef?.current?.focus();
		} else {
			setIsOtherSelected(false);
		}
	}

	return (
		<View style={{ marginBottom: 0 }}>
			{/* Option Container */}
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
					{/* Icon */}
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

					{/* Label */}
					<Text style={styles.labelText}>{label}</Text>
				</View>
			</Pressable>

			{/* Other Field */}
			{optionValue.toString().toLowerCase() === "other" && (
				<View
					style={{
						overflow: "hidden",
						display: selected ? "flex" : "none",
						paddingHorizontal: GeneralStyle.adult.field.paddingHorizontal,
						borderWidth: GeneralStyle.adult.field.borderWidth,
						borderRadius: GeneralStyle.adult.field.borderRadius,
						borderColor: GeneralStyle.adult.field.borderColor,
						marginBottom: 5,
					}}
				>
					<TextInput
						ref={otherInputRef}
						style={{
							paddingVertical: GeneralStyle.adult.field.paddingVertical,
							fontSize: GeneralStyle.adult.field.fontSize,
							width: "100%",
							alignItems: "center",
							justifyContent: "center",
						}}
						autoCapitalize="none"
						autoCorrect={false}
						onChangeText={() => console.log("entering other value")}
						placeholder={"Please Specify"}
					/>
				</View>
			)}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
		height: "auto",
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
		maxHeight: "100%",
	},
	labelText: {
		flexDirection: "row",
		width: "100%",
		...GeneralStyle.adult.radioText,
	},
	svgImage: {
		...GeneralStyle.general.inlineOptionImage,
	},
	nonSvgImage: {
		...GeneralStyle.general.inlineOptionImage,
	},
});
