import { Pressable, StyleSheet, Text, View, Image, TextInput } from "react-native";
import { GeneralStyle } from "styles/general";
import React, { useRef } from "react";
import { moderateScale } from "utils/responsive";
import { isOtherOption } from "utils/options";
import { useSelector } from "react-redux";
import { getColorTheme, getDevice } from "store/settings/settingsSlice";

interface PropsInterface {
	label: string;
	value: string;
	image?: any;
	onPress: (value: string | null) => void;
	selected: boolean;
	isOtherSelected?: boolean;
	autofocusOtherField?: boolean;
	defaultOtherInputValue?: string;
	optionLabel?: string;
	optionSublabel?: string;
}

export default function RadioOption({
	label,
	value,
	image,
	onPress,
	selected = false,
	isOtherSelected = false,
	autofocusOtherField = false,
	defaultOtherInputValue,
	optionLabel,
	optionSublabel,
}: PropsInterface): React.ReactElement {
	const colorTheme = useSelector(getColorTheme);
	const device = useSelector(getDevice);
	const { color100 } = colorTheme;
	const otherInputRef = useRef<TextInput>(null);

	return (
		<View style={{ marginBottom: 0 }}>
			{/* Option Container */}
			<Pressable
				style={styles.container}
				onPress={() => onPress(value)}
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
						<View
							style={{
								...styles.svgImage,
								maxWidth: moderateScale(
									device.isTablet ? 30 : 30,
									device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
								),
								maxHeight: moderateScale(
									device.isTablet ? 30 : 30,
									device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
								),
							}}
						>
							{image()}
						</View>
					)}
					{image !== undefined && image !== undefined && typeof image === "number" && (
						<Image
							source={image}
							style={{
								...styles.nonSvgImage,
								maxWidth: moderateScale(
									device.isTablet ? 30 : 30,
									device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
								),
								minHeight: moderateScale(
									device.isTablet ? 30 : 30,
									device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
								),
							}}
							resizeMode="contain"
						/>
					)}

					<View style={{ flex: 1 }}>
						{/* Label */}
						<Text
							style={{
								...styles.labelText,
								fontSize: moderateScale(
									device.isTablet ? 14 : 16,
									device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
								),
								lineHeight: moderateScale(
									device.isTablet ? 18 : 20,
									device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
								),
							}}
						>
							{optionLabel !== "" && optionLabel !== undefined && optionLabel !== null
								? optionLabel
								: label}
						</Text>

						{/* Sublabel */}
						{optionSublabel !== "" && optionSublabel !== undefined && optionSublabel !== null && (
							<Text
								style={{
									...styles.labelText,
									fontSize: moderateScale(
										device.isTablet ? 12 : 12,
										device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
									),
									lineHeight: moderateScale(
										device.isTablet ? 16 : 16,
										device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
									),
								}}
							>
								{optionSublabel}
							</Text>
						)}
					</View>
				</View>
			</Pressable>

			{/* Other Field */}
			{isOtherOption(value) && isOtherSelected && (
				<View
					style={{
						overflow: "hidden",
						display: "flex",
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
						onLayout={(event) => {
							if (autofocusOtherField) {
								otherInputRef?.current?.focus();
							}
						}}
						autoCapitalize="none"
						autoCorrect={false}
						onChangeText={(value) => {
							onPress(`other (${value})`);
						}}
						defaultValue={defaultOtherInputValue}
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
		flex: 1,
		...GeneralStyle.adult.radioText,
	},
	svgImage: {
		...GeneralStyle.general.inlineOptionImage,
	},
	nonSvgImage: {
		...GeneralStyle.general.inlineOptionImage,
	},
});
