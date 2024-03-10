import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { DefaultStyle, GeneralStyle } from "styles/general";
import { SettingContext } from "store/settings";
import { Slider } from "@rneui/themed";
import PhraseLabel from "constants/phrase_label";
import RadioOption from "components/adults/item/RadioOption";

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
		return isNumber(value) ? color100 : GeneralStyle.adult.inactiveField.borderColor;
	}

	function isColor200(value: number | PhraseLabel.DontKnow): string {
		return isNumber(value) ? color200 : GeneralStyle.adult.inactiveField.borderColor;
	}

	function setSliderValue(value: number | PhraseLabel.DontKnow): number | undefined {
		if (value === PhraseLabel.DontKnow) return undefined;
		if (isNumber(value) && value >= 0) return value;
		return undefined;
	}

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
				trackStyle={[styles.trackStyle, !isNumber(value) && styles.trackStyleUnselected]}
				thumbStyle={[
					styles.thumbStyle,
					{ backgroundColor: color200 },
					!isNumber(value) && styles.thumbStyleUnselected,
				]}
				thumbProps={{
					children: (
						<View
							style={[
								styles.tooltip,
								{ backgroundColor: color200 },
								!isNumber(value) && styles.tooltipUnselected,
							]}
						>
							<Text style={[styles.tooltipText]}>{isNumber(value) ? value : 0}</Text>
						</View>
					),
				}}
			/>

			{/** i don't know */}
			<View style={{ marginTop: 20 }}>
				<FlatList
					scrollEnabled={true}
					data={[{ label: phrases?.dontKnow, value: PhraseLabel.DontKnow }]}
					renderItem={({ item }) => (
						<RadioOption
							{...item}
							selected={value === item.value}
							onPress={() => changeHandler(item.value)}
						/>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
	},
	tooltip: {
		bottom: 50,
		left: -8,
		height: 40,
		width: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: GeneralStyle.kid.optionContainer.borderRadius,
		padding: 3,
	},
	tooltipUnselected: {
		backgroundColor: DefaultStyle.inactiveColor,
	},
	tooltipText: {
		fontSize: 23,
		color: "#fff",
	},
	tooltipTextUnselected: {
		backgroundColor: DefaultStyle.inactiveColor,
	},
	trackStyle: {
		height: 5,
		borderRadius: GeneralStyle.kid.optionContainer.borderRadius,
	},
	trackStyleUnselected: {
		backgroundColor: DefaultStyle.inactiveColor,
	},
	thumbStyle: {
		height: 25,
		width: 25,
	},
	thumbStyleUnselected: {
		backgroundColor: DefaultStyle.inactiveColor,
	},
	textPressed: {
		color: "#fff",
	},
	textUnpressed: {
		color: DefaultStyle.inactiveColor,
	},
});
