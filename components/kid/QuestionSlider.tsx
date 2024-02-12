import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GeneralStyle } from "styles/general";
import { SettingContext } from "store/settings";
import { Slider } from "@rneui/themed";
import PhraseLabel from "constants/phrase_label";

interface QuestionSliderPropsInterface {
	onChange: (value: number | PhraseLabel.DontKnow | null) => void;
	selectedValue: number | PhraseLabel.DontKnow;
	maxValue?: number;
}

export default function QuestionSlider({
	onChange,
	selectedValue,
	maxValue,
}: QuestionSliderPropsInterface): React.ReactElement {
	console.log("slider ...");
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage, phrases } = settingCtx.settingState;
	const { color100, color200 } = colorTheme;
	const [value, setValue] = useState<number | PhraseLabel.DontKnow>(selectedValue ?? 0);
	const [maxVal, setMaxVal] = useState<number>(maxValue ?? 10);

	useEffect(() => {
		if (value !== selectedValue) {
			setValue(selectedValue);
		}
		if (maxValue !== maxVal) {
			setMaxVal(maxValue ?? 10);
		}
	}, [currentPage, selectedValue, maxValue]);

	function changeHandler(value: number | PhraseLabel.DontKnow): void {
		setValue(value);
		onChange(value);
	}

	function isNumber(value: number | PhraseLabel.DontKnow): boolean {
		if (value === PhraseLabel.DontKnow) return false;
		return typeof value === "number" && Number.isInteger(value);
	}

	function isColor100(value: number | PhraseLabel.DontKnow): string {
		return isNumber(value) ? color100 : GeneralStyle.kid.inactiveField.borderColor;
	}

	function isColor200(value: number | PhraseLabel.DontKnow): string {
		return isNumber(value) ? color200 : GeneralStyle.kid.inactiveField.borderColor;
	}

	function setSliderValue(value: number | PhraseLabel.DontKnow): number | undefined {
		if (value === PhraseLabel.DontKnow) return undefined;
		if (isNumber(value) && value >= 0) return value;
		return undefined;
	}

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
			<View style={{ marginTop: 20 }}>
				<Pressable
					style={[
						styles.optionContainer,
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
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: GeneralStyle.kid.field.marginTop + 20,
	},
	tooltip: {
		bottom: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: GeneralStyle.kid.field.borderRadius,
		paddingVertical: 6,
		paddingHorizontal: 4,
	},
	tooltipText: {
		fontSize: GeneralStyle.kid.field.fontSize + 5,
	},
	trackStyle: {
		height: 15,
		borderRadius: GeneralStyle.kid.field.borderRadius,
	},
	optionContainer: {
		borderWidth: GeneralStyle.kid.field.borderWidth,
		borderColor: GeneralStyle.kid.field.borderColor,
		borderRadius: GeneralStyle.kid.field.borderRadius,
		marginBottom: GeneralStyle.kid.field.marginBottom,
		paddingVertical: GeneralStyle.kid.field.paddingVertical,
		paddingHorizontal: GeneralStyle.kid.field.paddingHorizontal,
	},
	optionText: {
		fontWeight: GeneralStyle.kid.field.fontWeight,
		fontSize: GeneralStyle.kid.field.fontSize,
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
