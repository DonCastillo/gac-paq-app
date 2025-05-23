import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { DefaultStyle, GeneralStyle } from "styles/general";
import { Icon, Slider } from "@rneui/themed";
import PhraseLabel from "constants/phrase_label.enum";
import RadioOption from "components/adults/subcomponents/RadioOption";
import { useSelector } from "react-redux";

import { getPhrases, getColorTheme, getCurrentPage } from "store/settings/settingsSlice";
import { adjustWritingDirection } from "utils/style";
import { optionNumber } from "utils/options.utils";

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

	const displayValue = (value: number | PhraseLabel.DontKnow): string => {
		let displayNumber = optionNumber(0);
		if (value === PhraseLabel.DontKnow) {
			displayNumber = optionNumber(0);
		} else {
			displayNumber = optionNumber(value);
		}

		return displayNumber;
	};

	const isColor100 = (value: number | PhraseLabel.DontKnow): string => {
		return isNumber(value) ? color100 : GeneralStyle.adult.inactiveField.borderColor;
	};

	const isColor200 = (value: number | PhraseLabel.DontKnow): string => {
		return isNumber(value) ? color200 : GeneralStyle.adult.inactiveField.borderColor;
	};

	const setSliderValue = (value: number | PhraseLabel.DontKnow): number | undefined => {
		if (value === PhraseLabel.DontKnow) return undefined;
		if (isNumber(value) && value >= 0) return value;
		return undefined;
	};

	const displayLeftArrow = (value: number | undefined): React.ReactElement => {
		if (value !== undefined && value > 0) {
			return (
				<Icon
					name="chevron-left"
					color={color200}
					containerStyle={{
						justifyContent: "center",
						alignItems: "center",
					}}
				/>
			);
		} else {
			return <></>;
		}
	};

	const displayRightArrow = (value: number | undefined, maxVal: number): React.ReactElement => {
		if (value !== undefined && value >= 0 && value < maxVal) {
			return (
				<Icon
					name="chevron-right"
					color={color200}
					containerStyle={{
						justifyContent: "center",
						alignItems: "center",
					}}
				/>
			);
		} else {
			return <></>;
		}
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
				trackStyle={[styles.trackStyle, !isNumber(value) && styles.trackStyleUnselected]}
				allowTouchTrack={true}
				thumbStyle={[
					styles.thumbStyle,
					{ backgroundColor: color200 },
					!isNumber(value) && styles.thumbStyleUnselected,
				]}
				thumbProps={{
					children: (
						<View
							style={{
								position: "relative",
								bottom: 45,
							}}
						>
							<View
								style={{
									flex: 1,
									justifyContent: "center",
									flexDirection: "row",
									alignItems: "center",
									position: "absolute",
									left: -3,
								}}
							>
								<View
									style={{
										...styles.arrowContainer,
										left: -30,
									}}
								>
									{displayLeftArrow(setSliderValue(value))}
								</View>
								<View
									style={[
										styles.tooltip,
										{ backgroundColor: color200 },
										!isNumber(value) && styles.tooltipUnselected,
									]}
								>
									<Text style={[styles.tooltipText]}>
										{displayValue(isNumber(value) ? value : 0)}
									</Text>
								</View>
								<View
									style={{
										...styles.arrowContainer,
										right: -30,
									}}
								>
									{displayRightArrow(setSliderValue(value), maxVal)}
								</View>
							</View>
						</View>
					),
				}}
			/>

			{/** i don't know */}
			<View style={{ marginTop: 20 }}>
				<FlatList
					bounces={false}
					scrollEnabled={true}
					data={[{ label: phrases?.dontKnow, value: PhraseLabel.DontKnow }]}
					contentContainerStyle={{
						direction: adjustWritingDirection(),
					}}
					renderItem={({ item }) => (
						<RadioOption
							{...item}
							selected={value === item.value}
							onPress={() => changeHandler(item.value as PhraseLabel.DontKnow)}
						/>
					)}
				/>
			</View>
		</View>
	);
};

export default QuestionSlider;

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		paddingHorizontal: 10,
	},
	tooltip: {
		height: 40,
		width: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: GeneralStyle.kid.optionContainer.borderRadius,
		padding: 3,
		zIndex: 1,
	},
	tooltipUnselected: {
		backgroundColor: DefaultStyle.inactiveColor,
	},
	tooltipText: {
		fontSize: 23,
		color: "#fff",
	},
	arrowContainer: {
		height: "100%",
		width: "100%",
		position: "absolute",
		top: 0,
		justifyContent: "center",
		alignItems: "center",
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
