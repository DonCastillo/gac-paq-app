import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GeneralStyle } from "../../styles/general";
import { SettingContext } from "../../store/settings";
import { Slider } from "@rneui/themed";
import type PhraseLabel from "../../constants/phrase_label";

interface QuestionSliderPropsInterface {
	onChange: (value: number | PhraseLabel.DontKnow | null) => void;
	selectedValue: number | PhraseLabel.DontKnow;
}

export default function QuestionSlider({
	onChange,
	selectedValue,
}: QuestionSliderPropsInterface): React.ReactElement {
	console.log("slider ...");
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage, phrases } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [value, setValue] = useState<number | PhraseLabel.DontKnow>(selectedValue ?? 0);

	useEffect(() => {
		if (value !== selectedValue) {
			setValue(selectedValue);
		}
	}, [currentPage, selectedValue]);

	function changeHandler(value: number): void {
		setValue(value);
		onChange(value);
	}

	return (
		<View style={styles.container}>
			{/** slider */}
			<Slider
				minimumValue={0}
				maximumValue={20}
				step={1}
				value={value}
				onValueChange={changeHandler}
				minimumTrackTintColor={color100}
				maximumTrackTintColor={color100}
				trackStyle={styles.trackStyle}
				thumbStyle={{
					backgroundColor: color100,
				}}
				thumbProps={{
					children: (
						<View
							style={[
								styles.tooltip,
								{
									backgroundColor: color100,
								},
							]}
						>
							<Text style={styles.tooltipText}>{value}</Text>
						</View>
					),
				}}
			/>

			{/** i don't know */}
			<View style={{ marginTop: 20 }}>
				<Pressable
					style={[
						styles.optionContainer,
						// selected === item.value ? optionPressedStyle : styles.optionUnpressed,
					]}
					// onPress={() => {
					// 	selectHandler(item.value);
					// }}
				>
					<Text
						style={[
							styles.optionText,
							// selected === item.value ? styles.textPressed : styles.textUnpressed,
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
		backgroundColor: "orange",
	},
	tooltip: {
		bottom: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: GeneralStyle.kid.field.borderRadius,
		padding: 3,
	},
	tooltipText: {
		fontSize: GeneralStyle.kid.field.fontSize + 10,
		color: "#fff",
	},
	trackStyle: {
		height: 10,
		borderRadius: GeneralStyle.kid.field.borderRadius,
		borderColor: "#000",
		borderWidth: GeneralStyle.kid.field.borderWidth,
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
