import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView, Image } from "react-native";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { GeneralStyle } from "../../styles/general";
import { SettingContext } from "../../store/settings";
import { Images } from "../../styles/images";

QuestionRadioImage.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		}),
	).isRequired,
	onChange: PropTypes.func.isRequired,
};

export default function QuestionRadioImage({ options, onChange }): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(null);

	const optionPressedStyle = {
		backgroundColor: color100,
	};

	function selectHandler(value: string): void {
		if (value === selected) {
			setSelected(null);
			onChange(null);
		} else {
			setSelected(value);
			onChange(value);
		}
	}

	function renderImage(image: string, image_default: any): React.ReactElement {
		let ImageComponent = <></>;
		if (image !== "") {
			const url = `http://localhost:8055/assets/${image}?access_token=kaTCPGRRqTCp18GmHkECCKNeMcY5Vwa5`;
			ImageComponent = (
				<Image
					style={styles.optionImage}
					source={{ uri: url }}
					resizeMode="cover"
				/>
			);
		} else {
			ImageComponent = (
				<Image
					style={styles.optionImage}
					source={image_default.uri}
					resizeMode="cover"
				/>
			);
		}

		return ImageComponent;
	}

	function renderOption({ item }): React.ReactElement {
		const { image_adult, image_adult_default, text, value } = item.image_choices_id;

		return (
			<Pressable
				style={styles.optionContainer}
				onPress={() => {
					selectHandler(value);
				}}
			>
				<View style={styles.optionImageContainer}>
					{selected === value && <View style={[styles.imageFilter, optionPressedStyle]}></View>}
					{renderImage(image_adult, image_adult_default)}
				</View>
				<View style={styles.optionTextContainer}>
					<Text>{text}</Text>
				</View>
			</Pressable>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<FlatList
					style={[]}
					data={options}
					renderItem={renderOption}
					numColumns={2}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		// marginTop: 5,
	},
	imageFilter: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		opacity: 0.55,
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