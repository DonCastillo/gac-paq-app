import {
	View,
	Text,
	StyleSheet,
	Pressable,
	FlatList,
	SafeAreaView,
	Image,
	TextInput,
} from "react-native";
import type { ImageStyle, StyleProp } from "react-native";
import React, { useContext, useState, useEffect, useRef } from "react";
import { GeneralStyle } from "styles/general";
import { SettingContext } from "store/settings";
import type { Svg } from "react-native-svg";
import { horizontalScale, moderateScale } from "utils/responsive";
import { getOptionImage, getOptionSubLabel, getOptionText } from "utils/background";
import {
	getUserSpecifiedOther,
	hasOtherOption,
	isOtherOption,
	isOtherWithSpecifiedValue,
} from "utils/options";

interface PropsInterface {
	options: any[];
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

export default function QuestionRadioImage({
	options,
	onChange,
	selectedValue,
}: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage, device, mode } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(selectedValue);
	const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
	const [autofocusOtherField, setAutoFocusOtherField] = useState<boolean>(false);
	const otherInputRef = useRef<TextInput>(null);
	const numColumn = device.isTablet && device.orientation === "landscape" ? 4 : 2;

	const optionPressedStyle = {
		backgroundColor: color100,
		borderColor: color100,
	};

	useState(() => {
		setAutoFocusOtherField(false);
	});

	useEffect(() => {
		if (selected !== selectedValue) {
			setSelected(selectedValue);
		}
	}, [currentPage, selectedValue]);

	useEffect(() => {
		if (isOtherOption(selected)) {
			setIsOtherSelected(true);
		} else {
			setIsOtherSelected(false);
		}
	}, [selected]);

	function selectHandler(value: string | null): void {
		if (value === "" || value === null || value === undefined) return;

		if (isOtherOption(value)) {
			setAutoFocusOtherField(true);
		}

		// check if the other option in the format "other" or "other (xxxxx)" is selected
		if (isOtherOption(value)) {
			// if "Other" or "other" is selected
			if (value.toString().toLowerCase() === "other") {
				if (isOtherOption(selected)) {
					// if "Other", "other", "other (xxxx)" is already selected, remove all
					onChange(null);
					return;
				} else {
					// if not add it
					onChange(value);
					return;
				}
			}

			// if "other (xxxxx)" is selected
			if (isOtherWithSpecifiedValue(value)) {
				const specificValue = getUserSpecifiedOther("", value);

				// if there is a value specified with "other" and it is not empty
				if (specificValue.trim() !== "") {
					// add it
					onChange(value);
				} else {
					// add "Other"
					onChange("Other");
				}
			}
		} else {
			if (selected === value) {
				onChange(null);
			} else {
				onChange(value);
			}
		}
	}

	function renderImage(image: string | Svg): React.ReactElement {
		if (typeof image === "number") {
			// Other formats
			let ImageComponent = <></>;
			if (options.length <= 4) {
				ImageComponent = (
					<Image
						style={styles.optionImage as StyleProp<ImageStyle>}
						source={image}
						resizeMode="cover"
					/>
				);
			} else {
				ImageComponent = (
					<Image
						style={{
							...GeneralStyle.general.inlineOptionImage,
							maxWidth: moderateScale(
								device.isTablet ? 30 : 30,
								device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
							),
							minHeight: moderateScale(
								device.isTablet ? 30 : 30,
								device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
							),
						}}
						source={image}
						resizeMode="cover"
					/>
				);
			}

			return ImageComponent;
		} else {
			// SVGs
			const ImageComponent = image;
			if (options.length <= 4) {
				return <ImageComponent style={{ maxWidth: 100 }} />;
			} else {
				return (
					<ImageComponent
						style={{
							...GeneralStyle.general.inlineOptionImage,
							maxWidth: moderateScale(
								device.isTablet ? 50 : 50,
								device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
							),
							minHeight: moderateScale(
								device.isTablet ? 50 : 50,
								device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
							),
						}}
					/>
				);
			}
		}
	}

	function blockRenderOption({ item }): React.ReactElement {
		const { images, text, value } = item.image_choices_id;
		const imageWidth = horizontalScale(280, device.screenWidth) / numColumn;
		const imageByMode = getOptionImage(images, mode);

		return (
			<Pressable
				style={[
					styles.blockOptionContainer,
					{
						maxWidth: imageWidth,
						aspectRatio: 1 / 1,
					},
					selected === value && { borderColor: color100, borderWidth: 1 },
				]}
				onPress={() => selectHandler(value)}
			>
				<View style={styles.blockOptionImageContainer}>
					{selected === value && <View style={[styles.imageFilter, optionPressedStyle]}></View>}
					{renderImage(imageByMode)}
				</View>
				<View style={styles.blockOptionLabelContainer}>
					<Text
						style={{
							...styles.blockOptionLabelText,
							fontSize: moderateScale(
								device.isTablet ? 12 : 14,
								device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
							),
							lineHeight: moderateScale(
								device.isTablet ? 17 : 19,
								device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
							),
						}}
					>
						{text}
					</Text>
				</View>
			</Pressable>
		);
	}

	/** if the option contains value called "other", it will be displayed as a list */
	function listRenderOption({ item }): React.ReactElement {
		const { images, text, value, sublabel, text_mode } = item.image_choices_id;
		const imageByMode = getOptionImage(images, mode);
		const isSelected = value === selected || (isOtherOption(value) && isOtherOption(selected));
		const optionText = getOptionText(text, text_mode, mode);
		const optionSublabel = getOptionSubLabel(sublabel, mode);

		return (
			<View
				style={{
					borderWidth: GeneralStyle.kid.optionContainer.borderWidth,
					borderRadius: GeneralStyle.kid.optionContainer.borderRadius,
					marginRight: GeneralStyle.kid.optionContainer.marginRight,
					marginBottom: GeneralStyle.kid.optionContainer.marginBottom,
					borderColor: color100,
					overflow: "hidden",
				}}
			>
				{/* Option Button */}
				<Pressable
					style={[
						{
							flexDirection: "row",
							flexWrap: "nowrap",
							alignItems: "center",

							paddingVertical: moderateScale(5, device.screenHeight),
							paddingHorizontal: moderateScale(20, device.screenWidth),
						},
						isOtherSelected && {
							borderBottomLeftRadius: 0,
							borderBottomRightRadius: 0,
						},
						isSelected ? { backgroundColor: color100 } : { backgroundColor: "#fff" },
					]}
					onPress={() => selectHandler(value)}
				>
					{renderImage(imageByMode)}
					<View
						style={{
							flex: 1,
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						{optionText !== null && (
							<Text
								style={[
									styles.listOptionLabelText,
									{
										fontSize: moderateScale(
											device.isTablet ? 14 : 14,
											device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
										),
										lineHeight: moderateScale(
											device.isTablet ? 18 : 18,
											device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
										),
									},
									isSelected ? { color: "#fff" } : { color: "#000" },
								]}
							>
								{optionText}
							</Text>
						)}
						{optionSublabel !== null && (
							<Text
								style={[
									styles.listOptionSubLabelText,
									{
										fontSize: moderateScale(
											device.isTablet ? 12 : 12,
											device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
										),
										lineHeight: moderateScale(
											device.isTablet ? 16 : 16,
											device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
										),
									},
									isSelected ? { color: "#fff" } : { color: "#000" },
								]}
							>
								{optionSublabel}
							</Text>
						)}
					</View>
				</Pressable>

				{/* Other Field */}
				{isOtherOption(value) && isOtherSelected && (
					<View
						style={{
							backgroundColor: "white",
							overflow: "hidden",
							display: "flex",
							paddingHorizontal: GeneralStyle.kid.field.paddingHorizontal,
						}}
					>
						<TextInput
							ref={otherInputRef}
							style={{
								fontSize: GeneralStyle.kid.field.fontSize,
								paddingVertical: GeneralStyle.kid.field.paddingVertical,
							}}
							onLayout={(event) => {
								if (autofocusOtherField) {
									otherInputRef?.current?.focus();
								}
							}}
							autoCapitalize="none"
							autoCorrect={false}
							onChangeText={(value) => {
								selectHandler(`other (${value})`);
							}}
							defaultValue={getUserSpecifiedOther(value, selected)}
							placeholder="Please Specify"
						/>
					</View>
				)}
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View>
				{options.length <= 4 || !hasOtherOption(options) ? (
					<FlatList
						initialNumToRender={4}
						data={[...options]}
						renderItem={blockRenderOption}
						numColumns={numColumn}
						key={numColumn}
						bounces={false}
					/>
				) : (
					<FlatList
						horizontal={false}
						removeClippedSubviews={false}
						data={[...options]}
						renderItem={listRenderOption}
						bounces={false}
					/>
				)}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	listOptionContainer: {
		...GeneralStyle.kid.optionContainer,
		overflow: "hidden",
	},
	blockOptionContainer: {
		...GeneralStyle.kid.blockOptionContainer,
	},
	container: {
		flex: 1,
		maxHeight: "100%",
		overflow: "hidden",
	},
	imageFilter: {
		...GeneralStyle.general.imageFilter,
	},
	blockOptionImageContainer: {
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		flex: 1,
		...GeneralStyle.kid.blockOptionImageContainer,
	},

	optionImage: {
		...GeneralStyle.kid.optionImage,
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
	},
	optionText: {
		...GeneralStyle.kid.optionText,
	},
	blockOptionLabelContainer: {
		...GeneralStyle.kid.blockImageLabelContainer,
	},
	listOptionLabelText: {
		...GeneralStyle.kid.optionImageLabelText,
		flexWrap: "wrap",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	listOptionSubLabelText: {
		...GeneralStyle.kid.optionImageSubLabelText,
		flexWrap: "wrap",
		flexDirection: "column",
		alignItems: "center",
	},
	blockOptionLabelText: {
		...GeneralStyle.kid.optionImageLabelText,
	},
	optionUnpressed: {
		backgroundColor: "#fff",
	},
	textPressed: {
		color: "#fff",
	},
	textUnpressed: {
		color: "#000",
	},
});
