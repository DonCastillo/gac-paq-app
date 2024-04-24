import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView, Image } from "react-native";
import type { ImageStyle, StyleProp } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GeneralStyle } from "styles/general";
import { SettingContext } from "store/settings";
import type { Svg } from "react-native-svg";
import { getOptionImage } from "utils/background";
import { horizontalScale, moderateScale, verticalScale } from "utils/responsive";
import RadioOption from "./subcomponents/RadioOption";
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
	const numColumn = device.isTablet ? 3 : 2;

	const optionPressedStyle = {
		backgroundColor: color100,
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
		const baseWidth = device.orientation === "landscape" || !device.isTablet ? 250 : 270;
		const imageWidth = horizontalScale(baseWidth, device.screenWidth) / numColumn;
		const imageByMode = getOptionImage(images, mode);

		return (
			<Pressable
				style={[
					styles.blockOptionContainer,
					{
						width: imageWidth,
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
								device.isTablet ? 10 : 12,
								device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
							),
							lineHeight: moderateScale(
								device.isTablet ? 13 : 15,
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

	function listRenderOption({ item }): React.ReactElement {
		const { images, text, value } = item.image_choices_id;
		const imageByMode = getOptionImage(images, mode);
		const isSelected = value === selected || (isOtherOption(value) && isOtherOption(selected));

		return (
			<View style={{ paddingVertical: 2, marginBottom: 2 }}>
				<RadioOption
					label={text}
					value={value}
					image={imageByMode}
					selected={isSelected}
					onPress={selectHandler}
					isOtherSelected={isOtherSelected}
					autofocusOtherField={autofocusOtherField}
					defaultOtherInputValue={getUserSpecifiedOther(value, selected)}
				/>
			</View>
		);
	}

	return (
		<SafeAreaView
			style={[styles.container, { maxHeight: verticalScale(300, device.screenHeight) }]}
		>
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
						removeClippedSubviews={false}
						horizontal={false}
						data={[...options]}
						renderItem={listRenderOption}
						bounces={false}
						persistentScrollbar={true}
						showsVerticalScrollIndicator={true}
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
	container: {},
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
