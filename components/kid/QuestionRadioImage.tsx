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
import { horizontalScale } from "utils/responsive";
import { getOptionImage } from "utils/background";
import { hasOtherOption } from "utils/options";

interface QuestionRadioImagePropsInterface {
	options: any[];
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

export default function QuestionRadioImage({
	options,
	onChange,
	selectedValue,
}: QuestionRadioImagePropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage, device, mode } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(selectedValue);
	const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
	const otherInputRef = useRef<TextInput>(null);

	const numColumn = device.isTablet && device.orientation === "landscape" ? 3 : 2;

	const optionPressedStyle = {
		backgroundColor: color100,
		borderColor: color100,
	};

	useEffect(() => {
		if (selected !== selectedValue) {
			setSelected(selectedValue);
		}
	}, [currentPage, selectedValue]);

	useEffect(() => {
		setIsOtherSelected(selected?.toLowerCase() === "other");
	}, [selected]);

	useEffect(() => {
		if (isOtherSelected) {
			otherInputRef?.current?.focus();
		}
	}, [isOtherSelected]);

	function selectHandler(value: string | null): void {
		if (value !== "" && value !== null && value !== undefined) {
			setSelected(value);
			onChange(value);
		} else {
			setSelected(null);
			onChange(null);
		}
	}

	function renderImage(image: string | Svg): React.ReactElement {
		if (typeof image === "number") {
			// Other formats
			let ImageComponent = <></>;
			if (options.length <= 5) {
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
						style={GeneralStyle.general.inlineOptionImage}
						source={image}
						resizeMode="cover"
					/>
				);
			}

			return ImageComponent;
		} else {
			// SVGs
			const ImageComponent = image;
			if (options.length <= 5) {
				return <ImageComponent style={{ maxWidth: 100 }} />;
			} else {
				return <ImageComponent style={{ ...GeneralStyle.general.inlineOptionImage }} />;
			}
		}
	}

	function blockRenderOption({ item }): React.ReactElement {
		const { images, text, value } = item.image_choices_id;
		const imageWidth = horizontalScale(299, device.screenWidth) / numColumn;
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
				onPress={() => {
					selectHandler(value);
				}}
			>
				<View style={styles.blockOptionImageContainer}>
					{selected === value && <View style={[styles.imageFilter, optionPressedStyle]}></View>}
					{renderImage(imageByMode)}
				</View>
				<View style={styles.blockOptionLabelContainer}>
					<Text style={styles.blockOptionLabelText}>{text}</Text>
				</View>
			</Pressable>
		);
	}

	/** if the option contains value called "other", it will be displayed as a list */
	function listRenderOption({ item }): React.ReactElement {
		const { images, text, value } = item.image_choices_id;
		const imageByMode = getOptionImage(images, mode);

		return (
			<View
				style={{
					backgroundColor: "red",
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
							paddingVertical: 4,
							paddingHorizontal: GeneralStyle.kid.optionContainer.paddingHorizontal,
						},
						isOtherSelected && {
							borderBottomLeftRadius: 0,
							borderBottomRightRadius: 0,
						},
						selected === value ? { backgroundColor: color100 } : { backgroundColor: "#fff" },
					]}
					onPress={() => {
						selectHandler(value);
					}}
				>
					{renderImage(imageByMode)}
					<Text
						style={[
							styles.listOptionLabelText,
							{
								fontSize: GeneralStyle.kid.optionImageLabelText.fontSize,
							},
							selected === value ? { color: "#fff" } : { color: "#000" },
						]}
					>
						{text}
					</Text>
				</Pressable>

				{/* Other Field */}
				{value.toString().toLowerCase() === "other" && isOtherSelected && (
					<View style={{ backgroundColor: "white", overflow: "hidden" }}>
						<TextInput
							ref={otherInputRef}
							style={{
								paddingHorizontal: GeneralStyle.kid.field.paddingHorizontal,
								paddingVertical: GeneralStyle.kid.field.paddingVertical,
								fontSize: GeneralStyle.kid.field.fontSize,
							}}
							autoCapitalize="none"
							autoCorrect={false}
							onChangeText={() => console.log("entering other value")}
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
				{options.length <= 5 || !hasOtherOption(options) ? (
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
						contentContainerStyle={{ paddingBottom: 20 }}
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
		// backgroundColor: "green",
		flex: 1,
		flexWrap: "wrap",
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
