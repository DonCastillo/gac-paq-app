import {
	View,
	Text,
	StyleSheet,
	Pressable,
	SafeAreaView,
	Image,
	TextInput,
	FlatList,
} from "react-native";
import type { ImageStyle, StyleProp } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { GeneralStyle } from "styles/general";
import type { Svg } from "react-native-svg";
import { horizontalScale, moderateScale } from "utils/responsive.utils";
import { getOptionImage, getOptionSubLabel } from "utils/background.utils";
import {
	getUserSpecifiedOther,
	hasOtherOption,
	isOtherOption,
	isOtherWithSpecifiedValue,
	optionLetter,
} from "utils/options.utils";
import { useSelector } from "react-redux";

import {
	getMode,
	getColorTheme,
	getCurrentPage,
	getDevice,
	getPhrases,
} from "store/settings/settingsSlice";
import type { ChoiceImage } from "interface/payload.type";
import {
	adjustOptionListImageSizeNonSVGKid,
	adjustOptionListImageSizeSVGKid,
	adjustQuestionRadioImageListOptionLabelKid,
	adjustQuestionRadioImageListOptionSubLabelKid,
	adjustRadioImageAspectRatio,
	adjustRadioImageBlockText,
	adjustTextAlignmentDirection,
	adjustWritingDirection,
} from "utils/style";
import FlatListContainer from "components/FlatListContainer";

interface PropsInterface {
	options: ChoiceImage[];
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

const QuestionRadioImage = ({
	options,
	onChange,
	selectedValue,
}: PropsInterface): React.ReactElement => {
	const currentPage = useSelector(getCurrentPage);
	const device = useSelector(getDevice);
	const colorTheme = useSelector(getColorTheme);
	const mode = useSelector(getMode);
	const phrase = useSelector(getPhrases);
	const { color100, color200 } = colorTheme;
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

	const selectHandler = (value: string | null): void => {
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
	};

	const renderImage = (image: string | Svg): React.ReactElement => {
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
							...adjustOptionListImageSizeNonSVGKid(),
						}}
						source={image}
						resizeMode="cover"
					/>
				);
			}

			return ImageComponent;
		} else {
			// SVGs
			const ImageComponent = image as any;
			if (options.length <= 4) {
				return <ImageComponent style={{ maxWidth: 100 }} />;
			} else {
				return (
					<ImageComponent
						style={{
							...GeneralStyle.general.inlineOptionImage,
							...adjustOptionListImageSizeSVGKid(),
						}}
					/>
				);
			}
		}
	};

	const blockRenderOption = (item: ChoiceImage, index: number): React.ReactElement => {
		const { image_ident, label, value } = item;
		const imageWidth = horizontalScale(290, device.screenWidth) / numColumn;
		const imageByMode = getOptionImage(image_ident);

		return (
			<Pressable
				style={[
					styles.blockOptionContainer,
					{
						maxWidth: imageWidth,
						aspectRatio: adjustRadioImageAspectRatio(),
					},
					selected === value && { borderColor: color100, borderWidth: 1 },
				]}
				onPress={() => selectHandler(value)}
			>
				<View
					style={{
						...styles.blockOptionImageContainer,
						flex: 1,
						position: "relative",
					}}
				>
					{selected === value && <View style={[styles.imageFilter, optionPressedStyle]}></View>}
					{renderImage(imageByMode)}
				</View>
				<View style={{ ...styles.blockOptionLabelContainer }}>
					<Text
						style={{
							...styles.blockOptionLabelText,
							...adjustRadioImageBlockText(),
							writingDirection: adjustWritingDirection(),
						}}
					>
						{`${optionLetter(index)}.  ${label}`}
					</Text>
				</View>
			</Pressable>
		);
	};

	/** if the option contains value called "other", it will be displayed as a list */
	const listRenderOption = (item: ChoiceImage, index: number): React.ReactElement => {
		const { image_ident, label, value, sublabel } = item;
		const imageByMode = getOptionImage(image_ident);
		const isSelected = value === selected || (isOtherOption(value) && isOtherOption(selected));
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
						{label !== null && (
							<Text
								style={[
									styles.listOptionLabelText,
									{
										...adjustQuestionRadioImageListOptionLabelKid(),
									},
									isSelected ? { color: "#fff" } : { color: "#000" },
									{
										writingDirection: adjustWritingDirection(),
									},
								]}
							>
								{`${optionLetter(index)}.  ${label}`}
							</Text>
						)}
						{optionSublabel !== null && (
							<Text
								style={[
									styles.listOptionSubLabelText,
									{
										...adjustQuestionRadioImageListOptionSubLabelKid(),
									},
									isSelected ? { color: "#fff" } : { color: "#000" },
									{
										writingDirection: adjustWritingDirection(),
									},
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
							placeholder={phrase?.specify}
							keyboardType={device.platform === "ios" ? "ascii-capable" : "visible-password"}
							textAlign={adjustTextAlignmentDirection()}
						/>
					</View>
				)}
			</View>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View>
				{options.length <= 4 || !hasOtherOption(options) ? (
					<FlatList
						initialNumToRender={4}
						data={[...options]}
						renderItem={({ item, index }) => blockRenderOption(item, index)}
						numColumns={numColumn}
						key={numColumn}
						bounces={false}
						contentContainerStyle={{ direction: adjustWritingDirection() }}
					/>
				) : (
					<FlatListContainer
						horizontal={false}
						removeClippedSubviews={false}
						data={[...options]}
						renderItem={({ item, index }) => listRenderOption(item, index)}
						bounces={false}
						contentContainerStyle={{ direction: adjustWritingDirection() }}
						scrollContainerStyle={{
							...GeneralStyle.kid.flatListScrollContainer,
							backgroundColor: color100 + "26",
						}}
						scrollIndicatorStyle={{
							...GeneralStyle.kid.flatListScrollIndicator,
							backgroundColor: color200,
						}}
					/>
				)}
			</View>
		</SafeAreaView>
	);
};

export default QuestionRadioImage;

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
		...GeneralStyle.kid.blockOptionImageContainer,
	},

	optionImage: {
		...GeneralStyle.kid.optionImage,
		position: "relative",
		// top: 0,
		// left: 0,
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
