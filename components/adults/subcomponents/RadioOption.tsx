import { Pressable, StyleSheet, Text, View, Image, TextInput } from "react-native";
import { GeneralStyle } from "styles/general";
import React, { useRef } from "react";
import { isOtherOption } from "utils/options.utils";
import { useSelector } from "react-redux";
import { getColorTheme, getDevice, getPhrases } from "store/settings/settingsSlice";
import {
	adjustOptionListImageSizeNonSVGAdult,
	adjustOptionListImageSizeSVGAdult,
	adjustRadioOptionLabel,
	adjustRadioOptionSublabel,
	adjustTextAlignmentDirection,
	adjustWritingDirection,
} from "utils/style";

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

const RadioOption = ({
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
}: PropsInterface): React.ReactElement => {
	const colorTheme = useSelector(getColorTheme);
	const device = useSelector(getDevice);
	const phrases = useSelector(getPhrases);
	const { color100 } = colorTheme;
	const otherInputRef = useRef<TextInput>(null);

	return (
		<View style={styles.outerContainer}>
			{/* Option Container */}
			<Pressable
				style={{ ...styles.container }}
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
				<View style={[styles.labelContainer]}>
					{/* Icon */}
					{image !== undefined && image !== null && typeof image === "function" && (
						<View
							style={{
								...styles.svgImage,
								...adjustOptionListImageSizeSVGAdult(),
							}}
						>
							{image()}
						</View>
					)}
					{image !== undefined && image !== null && typeof image === "number" && (
						<Image
							source={image}
							style={{
								...styles.nonSvgImage,
								...adjustOptionListImageSizeNonSVGAdult(),
							}}
							resizeMode="contain"
						/>
					)}

					<View style={{ flex: 1 }}>
						{/* Label */}
						<Text
							style={{
								...styles.labelText,
								...adjustRadioOptionLabel(),
								writingDirection: adjustWritingDirection(),
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
									...adjustRadioOptionSublabel(),
									writingDirection: adjustWritingDirection(),
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
						placeholder={phrases?.specify}
						keyboardType={device.platform === "ios" ? "ascii-capable" : "visible-password"}
						textAlign={adjustTextAlignmentDirection()}
					/>
				</View>
			)}
		</View>
	);
};

export default RadioOption;

const styles = StyleSheet.create({
	outerContainer: {
		marginBottom: 0,
	},
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
