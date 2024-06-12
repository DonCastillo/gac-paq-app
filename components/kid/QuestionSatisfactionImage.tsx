import { View, StyleSheet, Pressable, FlatList, SafeAreaView, Image } from "react-native";
import type { ImageStyle, StyleProp } from "react-native";
import React, { useState, useEffect } from "react";
import { GeneralStyle } from "styles/general";
import { horizontalScale } from "utils/responsive.utils";
import { getOptionImage } from "utils/background.utils";
import { useSelector } from "react-redux";
import { getColorTheme, getCurrentPage, getDevice } from "store/settings/settingsSlice";
import type { ChoiceImage } from "interface/payload.type";

interface PropsInterface {
	options: ChoiceImage[];
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

const QuestionSatisfactionImage = ({
	options,
	onChange,
	selectedValue,
}: PropsInterface): React.ReactElement => {
	const currentPage = useSelector(getCurrentPage);
	const device = useSelector(getDevice);
	const colorTheme = useSelector(getColorTheme);
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(selectedValue);
	const numColumn = device.isTablet ? 5 : 3;

	useEffect(() => {
		if (selected !== selectedValue) {
			setSelected(selectedValue);
		}
	}, [currentPage, selectedValue]);

	const selectHandler = (value: string | null): void => {
		if (value !== "" && value !== null && value !== undefined) {
			setSelected(value);
			onChange(value);
		} else {
			setSelected(null);
			onChange(null);
		}
	};

	const renderImage = (image: string | Svg): React.ReactElement => {
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
						maxWidth: horizontalScale(250, device.screenWidth) / numColumn,
						maxHeight: horizontalScale(250, device.screenWidth) / numColumn,
						aspectRatio: 1 / 1,
					}}
				/>
			);
		}
	};

	const blockRenderOption = (item: ChoiceImage): React.ReactElement => {
		const { image_ident, value } = item;
		const imageByMode = getOptionImage(image_ident);

		return (
			<Pressable
				style={[
					styles.blockOptionContainer,
					{
						paddingHorizontal:
							horizontalScale(device.isTablet ? 10 : 0, device.screenWidth) / numColumn,
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
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={{}}>
				<FlatList
					style={{ width: "100%", flex: 1 }}
					contentContainerStyle={{
						alignItems: "center",
					}}
					data={[...options]}
					renderItem={({ item }) => blockRenderOption(item)}
					numColumns={numColumn}
					key={numColumn}
					bounces={false}
				/>
			</View>
		</SafeAreaView>
	);
};

export default QuestionSatisfactionImage;

const styles = StyleSheet.create({
	listOptionContainer: {
		...GeneralStyle.kid.optionContainer,
	},
	blockOptionContainer: {
		alignItems: "center",
		justifyContent: "center",
		margin: 5,
	},
	container: {
		flex: 1,
		maxHeight: "100%",
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		marginTop: 20,
	},
	imageFilter: {
		...GeneralStyle.general.imageFilter,
	},
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
