import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView, Image } from "react-native";
import type { ImageStyle, StyleProp } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { GeneralStyle } from "styles/general";
import { SettingContext } from "store/settings";
import type { Svg } from "react-native-svg";

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
	const { colorTheme, currentPage } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(selectedValue);

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
		if (typeof image === "string") {
			// Other formats
			let ImageComponent = <></>;
			ImageComponent = (
				<Image
					style={styles.optionImage as StyleProp<ImageStyle>}
					source={image} // Convert the image to ImageSourcePropType
					resizeMode="cover"
				/>
			);
			return ImageComponent;
		} else {
			// SVGs
			const ImageComponent = image;
			if(options.length <= 4) {
				return <ImageComponent style={{ maxWidth: 100 }} />;
			}else{
				return <ImageComponent style={{ maxWidth: 50, minHeight: 50, marginRight: 10 }} />
			}

		}
	}

	function blockRenderOption({ item }): React.ReactElement {
		const { image, text, value } = item.image_choices_id;

		return (
			<Pressable
				style={[
					styles.blockOptionContainer,
					selected === value && { borderColor: color100, borderWidth: 1 },
				]}
				onPress={() => {
					selectHandler(value);
				}}
			>
				<View style={styles.optionImageContainer}>
					{selected === value && <View style={[styles.imageFilter, optionPressedStyle]}></View>}
					{renderImage(image)}
				</View>
				<View style={styles.optionTextContainer}>
					<Text>{text}</Text>
				</View>
			</Pressable>
		);
	}

	function listRenderOption({ item }): React.ReactElement {
		const { image, text, value } = item.image_choices_id;

		return (
			<View>
				<Pressable
					style={[
						styles.listOptionContainer,
						{ flexDirection: "row", flexWrap: "nowrap", alignItems: "center", paddingVertical: 3  },
						{ borderColor: color100 },
						selected === value ? { backgroundColor: color100 } : { backgroundColor: "#fff" },
					]}
					onPress={() => {
						selectHandler(value);
					}}
				>
					{renderImage(image)}
					<Text
						style={[styles.optionText, selected === value ? { color: "#fff" } : { color: "#000" }]}
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
				{options.length <= 4 ? (
					<FlatList
						style={[]}
						data={options}
						renderItem={blockRenderOption}
						numColumns={2}
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
	listOptionContainer: {
		borderWidth: GeneralStyle.kid.field.borderWidth,
		borderColor: GeneralStyle.kid.field.borderColor,
		borderRadius: GeneralStyle.kid.field.borderRadius,
		marginBottom: GeneralStyle.kid.field.marginBottom,
		paddingVertical: GeneralStyle.kid.field.paddingVertical,
		paddingHorizontal: GeneralStyle.kid.field.paddingHorizontal,
	},
	blockOptionContainer: {
		...GeneralStyle.adult.optionImageContainer,
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

	optionImage: {
		borderTopLeftRadius: GeneralStyle.adult.optionImageContainer.borderRadius,
		borderTopRightRadius: GeneralStyle.adult.optionImageContainer.borderRadius,
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
	},
	optionText: {
		fontWeight: GeneralStyle.kid.field.fontWeight,
		fontSize: GeneralStyle.kid.field.fontSize,
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
		color: "#fff",
	},
	textUnpressed: {
		color: "#000",
	},
});
