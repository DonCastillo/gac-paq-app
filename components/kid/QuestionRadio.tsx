import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GeneralStyle } from "styles/general";
import { SettingContext } from "store/settings";
import type { OptionInterface } from "utils/options";

interface QuestionRadioPropsInterface {
	options: OptionInterface[];
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

export default function QuestionRadio({
	options,
	onChange,
	selectedValue,
}: QuestionRadioPropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(selectedValue);

	useEffect(() => {
		if (selected !== selectedValue) {
			setSelected(selectedValue);
		}
	}, [currentPage, selectedValue]);

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

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<FlatList
					data={options}
					renderItem={({ item }) => {
						return (
							<View>
								<Pressable
									style={[
										styles.optionContainer,
										{ borderColor: color100 },
										selected === item.value ? optionPressedStyle : styles.optionUnpressed,
									]}
									onPress={() => {
										selectHandler(item.value);
									}}
								>
									<Text
										style={[
											styles.optionText,
											selected === item.value ? styles.textPressed : styles.textUnpressed,
										]}
									>
										{item.text}
									</Text>
								</Pressable>
							</View>
						);
					}}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: "orange",
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
		backgroundColor: "#FFF",
	},
	textPressed: {
		color: "#fff",
	},
	textUnpressed: {
		color: "#000",
	},
});
