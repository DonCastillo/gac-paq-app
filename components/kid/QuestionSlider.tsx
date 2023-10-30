import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GeneralStyle } from "../../styles/general";
import { SettingContext } from "../../store/settings";
import { Slider } from "@rneui/themed";

interface QuestionSliderPropsInterface {
	onChange: (value: number | null) => void;
	selectedValue: number;
}

export default function QuestionSlider({
	onChange,
	selectedValue,
}: QuestionSliderPropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [value, setValue] = useState<number>(selectedValue ?? 0);

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
});
