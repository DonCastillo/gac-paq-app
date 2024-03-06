import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GeneralStyle } from "styles/general";
import { SettingContext } from "store/settings";
import type { OptionInterface } from "utils/options";
import { horizontalScale } from "utils/responsive";

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
	const { colorTheme, currentPage, device } = settingCtx.settingState;
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

	const enableColumnWrap = device.isTablet && device.orientation === "landscape";
	const numColumn = enableColumnWrap ? 2 : 1;
	const adjustWidth = enableColumnWrap ? horizontalScale(150, device.screenWidth) : "100%";

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<FlatList
					horizontal={false}
					bounces={false}
					numColumns={numColumn}
					key={enableColumnWrap.toString()}
					data={[...options]}
					renderItem={({ item }) => {
						return (
							<View>
								<Pressable
									style={[
										styles.optionContainer,
										{
											borderColor: color100,
											width: adjustWidth,
										},
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
		flex: 1,
		maxHeight: "100%",
	},
	optionContainer: {
		...GeneralStyle.kid.optionContainer,
		width: "100%",
	},
	optionText: {
		...GeneralStyle.kid.optionText,
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
