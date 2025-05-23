import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView, Image } from "react-native";
import type { ImageStyle, StyleProp } from "react-native";
import React, { useEffect, useState } from "react";
import { GeneralStyle } from "styles/general";
import type { Svg } from "react-native-svg";
import { getOptionImage, getOptionSubLabel } from "utils/background.utils";
import { verticalScale } from "utils/responsive.utils";
import RadioOption from "./subcomponents/RadioOption";
import {
	getUserSpecifiedOther,
	hasOtherOption,
	isOtherOption,
	isOtherWithSpecifiedValue,
	optionLetter,
} from "utils/options.utils";
import { useSelector } from "react-redux";
import { getColorTheme, getCurrentPage, getDevice, getMode } from "store/settings/settingsSlice";
import type { ChoiceImage } from "interface/payload.type";
import {
	adjustRadioImageAspectRatio,
	adjustRadioImageBlockText,
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
	const mode = useSelector(getMode);
	const currentPage = useSelector(getCurrentPage);
	const device = useSelector(getDevice);
	const colorTheme = useSelector(getColorTheme);
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(selectedValue);
	const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
	const [autofocusOtherField, setAutoFocusOtherField] = useState<boolean>(false);
	const numColumn = device.isTablet && device.orientation === "landscape" ? 4 : 2;

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
						style={GeneralStyle.general.inlineOptionImage as StyleProp<ImageStyle>}
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
				return <ImageComponent style={GeneralStyle.general.inlineOptionImage} />;
			}
		}
	};

	const blockRenderOption = (item: ChoiceImage, index: number): React.ReactElement => {
		const { image_ident, label, value } = item;
		const imageByMode = getOptionImage(image_ident);

		return (
			<Pressable
				style={[
					styles.blockOptionContainer,
					{
						maxWidth: "100%",
						width: "100%",
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
			<View style={{ paddingVertical: 2, marginBottom: 2 }}>
				<RadioOption
					label={`${optionLetter(index)}.  ${label}`}
					value={value}
					image={imageByMode}
					selected={isSelected}
					onPress={selectHandler}
					isOtherSelected={isOtherSelected}
					autofocusOtherField={autofocusOtherField}
					defaultOtherInputValue={getUserSpecifiedOther(value, selected)}
					optionLabel={`${optionLetter(index)}.  ${label}`}
					optionSublabel={optionSublabel ?? undefined}
				/>
			</View>
		);
	};

	return (
		<SafeAreaView
			style={[styles.container, { maxHeight: verticalScale(400, device.screenHeight) }]}
		>
			<View>
				{options.length <= 4 || !hasOtherOption(options) ? (
					<FlatList
						initialNumToRender={4}
						data={[...options]}
						renderItem={({ item, index }) => blockRenderOption(item, index)}
						numColumns={numColumn}
						key={numColumn}
						bounces={false}
						contentContainerStyle={{
							direction: adjustWritingDirection(),
						}}
					/>
				) : (
					<FlatListContainer
						removeClippedSubviews={false}
						horizontal={false}
						data={[...options]}
						renderItem={({ item, index }) => listRenderOption(item, index)}
						bounces={false}
						persistentScrollbar={true}
						showsVerticalScrollIndicator={true}
						contentContainerStyle={{ direction: adjustWritingDirection() }}
						scrollContainerStyle={GeneralStyle.adult.flatListScrollContainer}
						scrollIndicatorStyle={GeneralStyle.adult.flatListScrollIndicator}
					/>
				)}
			</View>
		</SafeAreaView>
	);
};

export default QuestionRadioImage;

const styles = StyleSheet.create({
	blockOptionContainer: {
		...GeneralStyle.adult.blockOptionContainer,
	},
	blockOptionImageContainer: {
		...GeneralStyle.adult.blockOptionImageContainer,
	},
	blockOptionLabelContainer: {
		...GeneralStyle.adult.blockImageLabelContainer,
	},
	blockOptionLabelText: {
		...GeneralStyle.adult.optionImageLabelText,
	},
	container: {
		justifyContent: "center",
	},
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
