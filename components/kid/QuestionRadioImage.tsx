import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView, Image } from "react-native";
import type { ImageStyle, StyleProp } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { GeneralStyle } from "styles/general";
import { SettingContext } from "store/settings";
import type { Svg } from "react-native-svg";
import { horizontalScale, verticalScale } from "utils/responsive";
import { getOptionImage } from "utils/background";

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
				return <ImageComponent style={GeneralStyle.general.inlineOptionImage} />;
			}
		}
	}

	function blockRenderOption({ item }): React.ReactElement {
		const { images, text, value } = item.image_choices_id;
		console.log("image width: ", device.screenWidth / numColumn);
		const imageWidth = horizontalScale(300, device.screenWidth) / numColumn;
		const imageByMode = getOptionImage(images, mode);
		// const imageHeight = verticalScale(300, device.screenWidth) / numColumn;
		// imageWidth = horizontalScale(imageWidth, device.screenWidth);
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

	function listRenderOption({ item }): React.ReactElement {
		const { images, text, value } = item.image_choices_id;
		const imageByMode = getOptionImage(images, mode);

		return (
			<View>
				<Pressable
					style={[
						styles.listOptionContainer,
						{ flexDirection: "row", flexWrap: "nowrap", alignItems: "center", paddingVertical: 3 },
						{ borderColor: color100 },
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
							selected === value ? { color: "#fff" } : { color: "#000" },
						]}
					>
						{text}
					</Text>
				</Pressable>
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View>
				{options.length <= 5 ? (
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
	},
	blockOptionContainer: {
		...GeneralStyle.kid.blockOptionContainer,
	},
	container: {
		flex: 1,
		maxHeight: "100%",
		// backgroundColor: "pink",
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
