import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView, Image } from "react-native";
import type { ImageStyle, StyleProp } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GeneralStyle } from "styles/general";
import { SettingContext } from "store/settings";
import type QuestionRadioItemInterface from "interface/question_radio_item";
import type { Svg } from "react-native-svg";
import { getOptionImage } from "utils/background";
import { horizontalScale, verticalScale } from "utils/responsive";
import RadioOption from "./item/RadioOption";
import Mode from "constants/mode";

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
	const { colorTheme, currentPage, device, mode } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(selectedValue);
	const numColumn = device.isTablet ? 3 : 2;

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
		const imageWidth = horizontalScale(250, device.screenWidth) / numColumn;
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

	function listRenderOption({ item }): React.ReactElement {
		const { images, text, value } = item.image_choices_id;
		const imageByMode = getOptionImage(images, mode);

		return (
			<View style={{ backgroundColor: "white", paddingVertical: 2, marginBottom: 2 }}>
				<RadioOption
					label={text}
					value={value}
					onPress={() => selectHandler(value)}
					selected={selected === value}
					image={imageByMode}
				/>
			</View>
		);
	}

	return (
		<SafeAreaView style={[styles.container, {maxHeight: verticalScale(300, device.screenHeight)} ]}>
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
						horizontal={false}
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
	container: { },
	imageFilter: {
		...GeneralStyle.general.imageFilter,
	},
	optionImage: {
		...GeneralStyle.kid.optionImage,
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
	},
});
