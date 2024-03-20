import { View, StyleSheet, Pressable, FlatList, SafeAreaView, Image } from "react-native";
import type { ImageStyle, StyleProp } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { SettingContext } from "store/settings";
import { horizontalScale, verticalScale } from "utils/responsive";
import { getOptionImage } from "utils/background";

interface PropsInterface {
	options: any[];
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

export default function QuestionSatisfactionImage({
	options,
	onChange,
	selectedValue,
}: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage, device, mode } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(selectedValue);
	const numColumn = device.isTablet ? 5 : 3;

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
			ImageComponent = (
				<Image
					style={styles.optionImage as StyleProp<ImageStyle>}
					source={image}
					resizeMode="cover"
				/>
			);

			return ImageComponent;
		} else {
			// SVGs
			const ImageComponent = image;
			return (
				<ImageComponent
					style={{
						width: "100%",
						height: "100%",
						maxWidth:
							horizontalScale(device.orientation === "landscape" ? 190 : 210, device.screenWidth) /
							numColumn,
						maxHeight:
							horizontalScale(device.orientation === "landscape" ? 190 : 210, device.screenWidth) /
							numColumn,
						aspectRatio: 1 / 1,
					}}
				/>
			);
		}
	}

	function blockRenderOption({ item }): React.ReactElement {
		const { images, value } = item.image_choices_id;
		const imageByMode = getOptionImage(images, mode);

		return (
			<Pressable
				style={[
					styles.blockOptionContainer,
					{
						paddingHorizontal:
							horizontalScale(device.isTablet ? 3 : 0, device.screenWidth) / numColumn,
						paddingVertical:
							horizontalScale(device.isTablet ? 5 : 0, device.screenWidth) / numColumn,
					},
				]}
				onPress={() => {
					selectHandler(value);
				}}
			>
				<View
					style={[
						styles.blockOptionImageContainer,
						selected === value && { backgroundColor: color100 },
					]}
				>
					{renderImage(imageByMode)}
				</View>
			</Pressable>
		);
	}

	return (
		<SafeAreaView
			style={[styles.container, { maxHeight: verticalScale(300, device.screenHeight) }]}
		>
			<View style={{}}>
				<FlatList
					style={{ width: "100%" }}
					contentContainerStyle={{
						alignItems: "center",
					}}
					data={[...options]}
					renderItem={blockRenderOption}
					numColumns={numColumn}
					key={numColumn}
					bounces={false}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	blockOptionContainer: {
		alignItems: "center",
		justifyContent: "center",
		margin: 1,
	},
	container: {},
	blockOptionImageContainer: {
		padding: 5,
		borderRadius: 100,
		borderTopLeftRadius: 100,
		borderTopRightRadius: 100,
		borderBottomLeftRadius: 100,
		borderBottomRightRadius: 100,
	},
	optionImage: {},
});
