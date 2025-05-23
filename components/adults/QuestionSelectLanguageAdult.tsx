import React, { useEffect, useLayoutEffect, useState } from "react";
import type { LanguageInterface } from "interface/payload.type";
import { useSelector } from "react-redux";
import { getLanguageOption } from "store/questions/questionsSlice";
import { SafeAreaView, StyleSheet, View, Text, Pressable } from "react-native";
import { horizontalScale, verticalScale } from "utils/responsive.utils";
import { getColorTheme, getCurrentPage, getDevice } from "store/settings/settingsSlice";
import { GeneralStyle } from "styles/general";
import { adjustWritingDirection } from "utils/style";
import FlatListContainer from "components/FlatListContainer";

interface PropsInterface {
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

const QuestionSelectLanguageAdult = ({
	onChange,
	selectedValue,
}: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);
	const colorTheme = useSelector(getColorTheme);
	const currentPage = useSelector(getCurrentPage);
	const { color100 } = colorTheme;
	const flatListRef = React.useRef<FlatList>(null);

	const [selected, setSelected] = useState<string | null>(selectedValue);
	const [optionRowIndex, setOptionRowIndex] = useState<number>(0);

	const options: LanguageInterface[] = useSelector(getLanguageOption);
	const questionContainerWidth = horizontalScale(
		device.orientation === "landscape" ? 250 : device.isTablet ? 290 : 340,
		device.screenWidth,
	);

	const numColumns = device.isTablet ? 3 : 2;
	let lastOptionMarginRight = 35;
	let optionMarginRight = 5;

	if (device.isTablet) {
		// margin
		if (options.length % 3 === 0) {
			lastOptionMarginRight = 3;
			optionMarginRight = 5;
		} else if (options.length % 3 === 1) {
			lastOptionMarginRight = 20;
			optionMarginRight = 5;
		} else if (options.length % 3 === 2) {
			lastOptionMarginRight = 15;
			optionMarginRight = 5;
		}
	} else {
		// margin
		if (options.length % 2 === 0) {
			lastOptionMarginRight = 3;
			optionMarginRight = 5;
		} else {
			lastOptionMarginRight = 15;
			optionMarginRight = 5;
		}
	}

	const questionContainerWidthPadding = GeneralStyle.adult.questionContainer.paddingHorizontal * 2;
	const optionHeight =
		(questionContainerWidth - questionContainerWidthPadding) / numColumns - optionMarginRight;

	const optionPressedStyle = {
		backgroundColor: color100,
	};

	const selectHandler = (value: string | null): void => {
		if (value === "" || value === null || value === undefined) return;

		onChange(value);
	};

	useEffect(() => {
		if (selected !== selectedValue) {
			setSelected(selectedValue);
		}
	}, [currentPage, selectedValue]);

	useEffect(() => {
		let index = options.findIndex((item) => item.lang_code === selected);
		index = Math.floor(index / numColumns);
		setOptionRowIndex(index);
	}, [selected]);

	useLayoutEffect(() => {
		flatListRef.current?.scrollToIndex({
			index: optionRowIndex >= 0 ? optionRowIndex : 0,
			animated: false,
			viewPosition: 0,
			viewOffset: 0,
		});
	}, [optionRowIndex]);

	const languageOption = (item: LanguageInterface, index: number): React.ReactElement => {
		const lastItem = index === options.length - 1;

		return (
			<Pressable
				style={[
					styles.blockOptionContainer,
					{
						width: "100%",
						// height: "100%",
						aspectRatio: device.isTablet ? 1 : 1,
						// height: optionHeight,
						flex: device.isTablet ? 1 / 3 : 1 / 2,
						marginBottom: 5,
						marginTop: 5,
						marginLeft: 5,
						marginRight: lastItem ? lastOptionMarginRight : optionMarginRight,
					},
					selected === item.lang_code && { borderColor: color100, borderWidth: 1 },
				]}
				onPress={() => selectHandler(item.lang_code)}
			>
				<View
					style={{
						...styles.blockOptionImageContainer,
						flex: 1,
						position: "relative",
						padding: 20,
					}}
				>
					{selected === item.lang_code && (
						<View style={[styles.imageFilter, optionPressedStyle]}></View>
					)}
					{item?.flag?.()}
				</View>
				<View
					style={[
						{
							flex: 1.1,
							marginBottom: 0,
							borderTopRightRadius: 0,
							borderTopLeftRadius: 0,
							justifyContent: "center",
						},
					]}
				>
					<View>
						<Text
							style={{
								...styles.blockOptionLabelText,
								writingDirection: adjustWritingDirection(),
								fontSize: device.isTablet ? 19 : 17,
								lineHeight: device.isTablet ? 23 : 17,
								textAlign: "center",
								paddingTop: 6,
							}}
						>
							{`${item.local_name}`}
						</Text>
					</View>

					<View>
						<Text
							style={{
								...styles.blockOptionLabelText,
								writingDirection: adjustWritingDirection(),
								fontSize: device.isTablet ? 17 : 13,
								lineHeight: device.isTablet ? 21 : 17,
								textAlign: "center",
								fontStyle: "italic",
							}}
						>
							{!["English", "Chichewa", "Czech"].includes(item.name ?? "") && `${item.name}`}
						</Text>
					</View>
				</View>
			</Pressable>
		);
	};

	return (
		<SafeAreaView
			style={[styles.container, { maxHeight: verticalScale(400, device.screenHeight) }]}
		>
			<View style={{ backgroundColor: "white" }}>
				{options.length > 0 && (
					<FlatListContainer
						ref={flatListRef}
						data={[...options]}
						renderItem={({ item, index }) => languageOption(item, index)}
						numColumns={numColumns}
						key={numColumns}
						bounces={false}
						keyExtractor={(item) => item.lang_code}
						refreshing={true}
						initialScrollIndex={optionRowIndex >= 0 ? optionRowIndex : 0}
						persistentScrollbar={true}
						showsVerticalScrollIndicator={true}
						initialNumToRender={6}
						getItemLayout={(data, index) => {
							return {
								length: optionHeight,
								offset: optionHeight * index,
								index,
							};
						}}
						scrollContainerStyle={GeneralStyle.adult.flatListScrollContainer}
						scrollIndicatorStyle={GeneralStyle.adult.flatListScrollIndicator}
					/>
				)}
			</View>
		</SafeAreaView>
	);
};

export default QuestionSelectLanguageAdult;

const styles = StyleSheet.create({
	blockOptionContainer: {
		...GeneralStyle.adult.blockOptionContainer,
	},
	blockOptionImageContainer: {
		...GeneralStyle.adult.blockOptionImageContainer,
		flex: 1 / 3,
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
