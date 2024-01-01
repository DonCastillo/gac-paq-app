import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GeneralStyle } from "styles/general";
import { SettingContext } from "store/settings";
import { Slider } from "@rneui/themed";
import PhraseLabel from "constants/phrase_label";
import RadioOption from "./item/RadioOption";

interface QuestionSliderPropsInterface {
	onChange: (value: number | PhraseLabel.DontKnow | null) => void;
	selectedValue: number | PhraseLabel.DontKnow;
}

export default function QuestionSlider({
	onChange,
	selectedValue,
}: QuestionSliderPropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage, phrases } = settingCtx.settingState;
	const { color100, color200 } = colorTheme;
	const [value, setValue] = useState<number | PhraseLabel.DontKnow>(selectedValue ?? 0);
	const MAX_VALUE = 20;

	useEffect(() => {
		if (value !== selectedValue) {
			setValue(selectedValue);
		}
	}, [currentPage, selectedValue]);

	function changeHandler(value: number | PhraseLabel.DontKnow): void {
		setValue(value);
		onChange(value);
	}

	function isNumber(value: number | PhraseLabel.DontKnow): boolean {
		if (value === PhraseLabel.DontKnow) return false;
		return typeof value === "number" && Number.isInteger(value);
	}

	function isColor100(value: number | PhraseLabel.DontKnow): string {
		return isNumber(value) ? color100 : "#D8D8D8";
	}

	function isColor200(value: number | PhraseLabel.DontKnow): string {
		return isNumber(value) ? color200 : "#D8D8D8";
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
				maximumValue={MAX_VALUE}
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
		marginTop: GeneralStyle.adult.field.marginTop + 20,
	},
	tooltip: {
		bottom: 50,
		left: -5,
		height: 40,
		width: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: GeneralStyle.kid.field.borderRadius,
		padding: 3,
	},
	tooltipUnselected: {
		backgroundColor: "#D8D8D8",
	},
	tooltipText: {
		fontSize: GeneralStyle.adult.field.fontSize + 5,
		color: "#fff",
	},
	tooltipTextUnselected: {
		backgroundColor: "#D8D8D8",
	},
	trackStyle: {
		height: 5,
		borderRadius: GeneralStyle.adult.field.borderRadius,
	},
	trackStyleUnselected: {
		backgroundColor: "#D8D8D8",
	},
	thumbStyle: {
		height: 25,
		width: 25,
	},
	thumbStyleUnselected: {
		backgroundColor: "#D8D8D8",
	},
	textPressed: {
		color: "#fff",
	},
	textUnpressed: {
		color: "#D8D8D8",
	},
});
