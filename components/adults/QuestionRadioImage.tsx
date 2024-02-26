import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView, Image } from "react-native";
import type { ImageStyle, StyleProp } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GeneralStyle } from "styles/general";
import { SettingContext } from "store/settings";
import type QuestionRadioItemInterface from "interface/question_radio_item";
import type { Svg } from "react-native-svg";
import { getOptionImage } from "utils/background";
import { horizontalScale, verticalScale } from "utils/responsive";

interface QuestionRadioImagePropsInterface {
	options: QuestionRadioItemInterface[];
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

export default function QuestionRadioImage({
	options,
	onChange,
	selectedValue,
}: QuestionRadioImagePropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage, currentPageNumber, device, mode } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(selectedValue);
	const numColumn = device.isTablet && device.orientation === "landscape" ? 3 : 2;

	const optionPressedStyle = {
		backgroundColor: color100,
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
						source={image} // Convert the image to ImageSourcePropType
						resizeMode="cover"
					/>
				);
			} else {
				ImageComponent = (
					<Image
						style={{ height: 50, width: 50, marginRight: 10 }}
						source={image} // Convert the image to ImageSourcePropType
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
				return <ImageComponent style={{ maxWidth: 50, minHeight: 50, marginRight: 10 }} />;
			}
		}
	}

	function blockRenderOption({ item }): React.ReactElement {
		const { images, text, value } = item.image_choices_id;
		const imageWidth = horizontalScale(260, device.screenWidth) / numColumn;
		const imageByMode = getOptionImage(images, mode);

		return (
			<Pressable
				style={[
					styles.blockOptionContainer,
					{
						maxWidth: imageWidth, 
						aspectRatio: 1 / 1,
						marginTop: verticalScale(10, device.screenHeight),
						marginBottom: 0,
						marginLeft: 0,
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
			// <View>
			// 	<Pressable
			// 		style={[
			// 			styles.listOptionContainer,
			// 			{ flexDirection: "row", flexWrap: "nowrap", alignItems: "center", paddingVertical: 3 },
			// 			{ borderColor: color100 },
			// 			selected === value ? { backgroundColor: color100 } : { backgroundColor: "#fff" },
			// 		]}
			// 		onPress={() => {
			// 			selectHandler(value);
			// 		}}
			// 	>
			// 		{renderImage(imageByMode)}
			// 		<Text
			// 			style={[
			// 				styles.listOptionLabelText,
			// 				selected === value ? { color: "#fff" } : { color: "#000" },
			// 			]}
			// 		>
			// 			{text}
			// 		</Text>
			// 	</Pressable>
			// </View>
			<></>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View>
				{options.length <= 5 ? (
					<FlatList
						data={options}
						renderItem={blockRenderOption}
						numColumns={numColumn}
						key={numColumn}
					/>
				) : (
					<FlatList
						data={options}
						renderItem={listRenderOption}
					/>
				)}
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	blockOptionContainer: {
		...GeneralStyle.adult.blockOptionContainer,
	},
	blockOptionImageContainer: {
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		flex: 1,
		...GeneralStyle.adult.blockOptionImageContainer,
	},
	blockOptionLabelContainer: {
		...GeneralStyle.adult.blockImageLabelContainer,
	},
	blockOptionLabelText: {
		...GeneralStyle.adult.optionImageLabelText,
	},
	container: {
		// marginTop: 5,
		// backgroundColor: "pink",
	},
	imageFilter: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		opacity: 0.75,
		zIndex: 1,
	},
	optionImageContainer: {
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		flex: 1,
		borderTopLeftRadius: GeneralStyle.adult.optionImageContainer.borderRadius,
		borderTopRightRadius: GeneralStyle.adult.optionImageContainer.borderRadius,
	},
	optionContainer: {
		...GeneralStyle.adult.optionImageContainer,
	},
	optionImage: {
		borderTopLeftRadius: GeneralStyle.adult.optionImageContainer.borderRadius,
		borderTopRightRadius: GeneralStyle.adult.optionImageContainer.borderRadius,
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
	},
	optionTextContainer: {
		borderBottomLeftRadius: GeneralStyle.adult.optionImageContainer.borderRadius,
		borderBottomRightRadius: GeneralStyle.adult.optionImageContainer.borderRadius,
		paddingVertical: 5,
		paddingHorizontal: 7,
		minHeight: 60,
	},
	optionUnpressed: {
		backgroundColor: "#fff",
	},
	textPressed: {
		// color: "#fff",
	},
	textUnpressed: {
		// color: "#000",
	},
});
