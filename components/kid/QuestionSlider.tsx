import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { GeneralStyle } from "styles/general";
import { Slider } from "@rneui/themed";
import PhraseLabel from "constants/phrase_label.enum";
import { horizontalScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import { getPhrases, getColorTheme, getCurrentPage, getDevice } from "store/settings/settingsSlice";

interface PropsInterface {
	onChange: (value: number | PhraseLabel.DontKnow | null) => void;
	selectedValue: number | PhraseLabel.DontKnow;
	maxValue?: number;
}

const QuestionSlider = ({
	onChange,
	selectedValue,
	maxValue,
}: PropsInterface): React.ReactElement => {
	const currentPage = useSelector(getCurrentPage);
	const device = useSelector(getDevice);
	const colorTheme = useSelector(getColorTheme);
	const phrases = useSelector(getPhrases);
	const { color100, color200 } = colorTheme;
	const [value, setValue] = useState<number | PhraseLabel.DontKnow>(selectedValue ?? 0);
	const [maxVal, setMaxVal] = useState<number>(maxValue ?? 10);

	useEffect(() => {
		if (selectedValue === -1) {
			changeHandler(0);
		}
	});

	useEffect(() => {
		if (value !== selectedValue) {
			setValue(selectedValue);
		}
		if (maxValue !== maxVal) {
			setMaxVal(maxValue ?? 10);
		}
	}, [currentPage, selectedValue, maxValue]);

	const changeHandler = (value: number | PhraseLabel.DontKnow): void => {
		setValue(value);
		onChange(value);
	};

	const isNumber = (value: number | PhraseLabel.DontKnow): boolean => {
		if (value === PhraseLabel.DontKnow) return false;
		return typeof value === "number" && Number.isInteger(value);
	};

	const isColor100 = (value: number | PhraseLabel.DontKnow): string => {
		return isNumber(value) ? color100 : GeneralStyle.kid.inactiveField.borderColor;
	};

	const isColor200 = (value: number | PhraseLabel.DontKnow): string => {
		return isNumber(value) ? color200 : GeneralStyle.kid.inactiveField.borderColor;
	};

	const setSliderValue = (value: number | PhraseLabel.DontKnow): number | undefined => {
		if (value === PhraseLabel.DontKnow) return undefined;
		if (isNumber(value) && value >= 0) return value;
		return undefined;
	};

	const optionPressedStyle = {
		backgroundColor: color100,
		borderColor: color100,
	};

	return (
		<View style={styles.container}>
			{/** slider */}
			<Slider
				minimumValue={0}
				maximumValue={maxVal}
				step={1}
				value={setSliderValue(value)}
				onValueChange={changeHandler}
				onSlidingStart={changeHandler}
				minimumTrackTintColor={isColor200(value)}
				maximumTrackTintColor={isColor100(value)}
				trackStyle={styles.trackStyle}
				thumbStyle={{ backgroundColor: isColor200(value) }}
				thumbProps={{
					children: (
						<View
							style={[
								styles.tooltip,
								{
									backgroundColor: isColor200(value),
								},
							]}
						>
							<Text style={[styles.tooltipText, { color: isNumber(value) ? "#fff" : "#fff" }]}>
								{isNumber(value) ? value : 0}
							</Text>
						</View>
					),
				}}
			/>

			{/** i don't know */}
			<ScrollView style={{ marginTop: 20 }}>
				<Pressable
					style={[
						styles.optionContainer,
						{ maxWidth: device.isTablet ? horizontalScale(150, device.screenWidth) : "100%" },
						value === PhraseLabel.DontKnow ? optionPressedStyle : GeneralStyle.kid.inactiveField,
					]}
					onPress={() => {
						changeHandler(PhraseLabel.DontKnow);
					}}
				>
					<Text
						style={[
							styles.optionText,
							value === PhraseLabel.DontKnow ? styles.textPressed : GeneralStyle.kid.inactiveText,
						]}
					>
						{phrases?.dontKnow}
					</Text>
				</Pressable>
			</ScrollView>
		</View>
	);
};

export default QuestionSlider;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		maxHeight: "100%",
		position: "relative",
	},
	tooltip: {
		bottom: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: GeneralStyle.kid.optionContainer.borderRadius,
		paddingVertical: 6,
		paddingHorizontal: 4,
	},
	tooltipText: {
		fontSize: 23,
	},
	trackStyle: {
		height: 15,
		borderRadius: GeneralStyle.kid.optionContainer.borderRadius,
	},
	optionContainer: {
		...GeneralStyle.kid.optionContainer,
		width: "100%",
	},
	optionText: {
		...GeneralStyle.kid.optionText,
	},
	optionUnpressed: {
		backgroundColor: "#fff",
		borderColor: "#000",
	},
	textPressed: {
		color: "#fff",
	},
	textUnpressed: {
		color: "#000",
	},
});
