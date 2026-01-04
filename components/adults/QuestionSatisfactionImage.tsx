import { getOptionImage } from "@utils/background.utils";
import { horizontalScale, verticalScale } from "@utils/responsive.utils";
import React, { useEffect, useState } from "react";
import type { ImageStyle, StyleProp } from "react-native";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import type { ChoiceImage } from "@interface/payload.type";
import { getColorTheme, getCurrentPage, getDevice } from "@store/settings/settingsSlice";

interface PropsInterface {
	options: ChoiceImage[];
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

const QuestionSatisfactionImage = ({ options, onChange, selectedValue }: PropsInterface): React.ReactElement => {
	const currentPage = useSelector(getCurrentPage);
	const device = useSelector(getDevice);
	const colorTheme = useSelector(getColorTheme);
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(selectedValue);
	const numColumn = device.isTablet ? 5 : 3;
	const dissatisfiedOptions = options.filter((option) => option.image_ident === "dissatisfied" || option.image_ident === "very_dissatisfied");
	const neutralOptions = options.filter((option) => option.image_ident === "neutral");
	const satisfiedOptions = options.filter((option) => option.image_ident === "satisfied" || option.image_ident === "very_satisfied");

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
						maxWidth: horizontalScale(device.isTablet ? 230 : 230, device.screenWidth) / numColumn,
						maxHeight: horizontalScale(device.isTablet ? 230 : 230, device.screenWidth) / numColumn,
						aspectRatio: 1,
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
						paddingHorizontal: horizontalScale(device.isTablet ? 3 : 0, device.screenWidth) / numColumn,
						paddingVertical: horizontalScale(device.isTablet ? 5 : 0, device.screenWidth) / numColumn,
					},
				]}
				onPress={() => {
					selectHandler(value);
				}}
			>
				<View style={[styles.blockOptionImageContainer, selected === value && { backgroundColor: color100, ...styles.blockOptionImageContainer }]}>
					{renderImage(imageByMode)}
				</View>
			</Pressable>
		);
	};

	return (
		<View style={[styles.container, { maxHeight: verticalScale(300, device.screenHeight) }]}>
			<View style={{ width: "100%" }}>
				{device.isTablet ? (
					<View>
						<FlatList
							style={{ width: "100%" }}
							contentContainerStyle={{
								alignItems: "center",
							}}
							data={[...options]}
							renderItem={({ item }) => blockRenderOption(item)}
							numColumns={numColumn}
							key={"single-row" + numColumn}
							bounces={false}
						/>
					</View>
				) : (
					<View>
						<FlatList
							style={{}}
							contentContainerStyle={{
								alignItems: "center",
							}}
							data={[...dissatisfiedOptions]}
							renderItem={({ item }) => blockRenderOption(item)}
							numColumns={numColumn}
							key={"dissatisfied" + numColumn}
							bounces={false}
						/>
						<FlatList
							style={{}}
							contentContainerStyle={{
								alignItems: "center",
							}}
							data={[...neutralOptions]}
							renderItem={({ item }) => blockRenderOption(item)}
							numColumns={numColumn}
							key={"neutral" + numColumn}
							bounces={false}
						/>
						<FlatList
							style={{}}
							contentContainerStyle={{
								alignItems: "center",
							}}
							data={[...satisfiedOptions]}
							renderItem={({ item }) => blockRenderOption(item)}
							numColumns={numColumn}
							key={"satisfied" + numColumn}
							bounces={false}
						/>
					</View>
				)}
			</View>
		</View>
	);
};

export default QuestionSatisfactionImage;

const styles = StyleSheet.create({
	blockOptionContainer: {
		alignItems: "center",
		justifyContent: "center",
		margin: 1,
		borderRadius: "100%",
	},
	container: {},
	blockOptionImageContainer: {
		padding: 5,
		borderRadius: "100%",
	},
	optionImage: {},
});
