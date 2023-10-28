import { View, Text, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import { GeneralStyle } from "../../styles/general";
import { SettingContext } from "../../store/settings";
import { Slider } from "@rneui/themed";

export default function QuestionSlider({ onChange }) {
	const settingCtx = useContext(SettingContext);
	const { colorTheme } = settingCtx.settingState;
	const { color100, color200 } = colorTheme;
	const [value, setValue] = useState(0);

	useEffect(() => {
		console.log("rendering question slider...");
		onChange(value);
	}, []);

	function changeHandler(value: number) {
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
				minimumTrackTintColor={color200}
				maximumTrackTintColor={color100}
				trackStyle={styles.trackStyle}
				thumbStyle={{
					backgroundColor: color200,
					height: 30,
					width: 30,
				}}
				thumbProps={{
					children: (
						<View
							style={[
								styles.tooltip,
								{
									backgroundColor: color200,
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
		left: -5,
		height: 40,
		width: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: GeneralStyle.kid.field.borderRadius,
		padding: 3,
	},
	tooltipText: {
		fontSize: GeneralStyle.kid.field.fontSize + 5,
		color: "#fff",
	},
	trackStyle: {
		height: 5,
		borderRadius: GeneralStyle.kid.field.borderRadius,
		// borderColor: "#000",
		// borderWidth: GeneralStyle.kid.field.borderWidth,
	},
});
