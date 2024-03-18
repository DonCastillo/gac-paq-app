import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView, TextInput } from "react-native";
import React, { useContext, useEffect, useState, useRef } from "react";
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
	const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
	const otherInputRef = useRef<TextInput>(null);

	useEffect(() => {
		if (selected !== selectedValue) {
			setSelected(selectedValue);
		}
	}, [currentPage, selectedValue]);

	useEffect(() => {
		setIsOtherSelected(selected?.toLowerCase() === "other");
	}, [selected]);

	useEffect(() => {
		if (isOtherSelected) {
			otherInputRef?.current?.focus();
		}
	}, [isOtherSelected]);

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
					contentContainerStyle={{ paddingBottom: 20 }}
					renderItem={({ item }) => {
						return (
							<View>
								<View
									style={{
										width: adjustWidth,
										borderWidth: GeneralStyle.kid.optionContainer.borderWidth,
										borderRadius: GeneralStyle.kid.optionContainer.borderRadius,
										marginRight: GeneralStyle.kid.optionContainer.marginRight,
										marginBottom: GeneralStyle.kid.optionContainer.marginBottom,
										borderColor: color100,
										overflow: "hidden",
									}}
								>
									{/* Option Container */}
									<Pressable
										style={[
											{
												paddingHorizontal: GeneralStyle.kid.optionContainer.paddingHorizontal,
												paddingVertical: GeneralStyle.kid.optionContainer.paddingVertical,
												backgroundColor: selected === item.value ? color100 : "#fff",
											},
											isOtherSelected && {
												borderBottomLeftRadius: 0,
												borderBottomRightRadius: 0,
											},
										]}
										onPress={() => {
											selectHandler(item.value);
										}}
									>
										<Text
											style={{
												...styles.optionText,
												color: selected === item.value ? "#fff" : "#000",
											}}
										>
											{item.text}
										</Text>
									</Pressable>
									{/* Other Fields */}
									{item.value.toString().toLowerCase() === "other" && isOtherSelected && (
										<View
											style={{
												backgroundColor: "white",
												overflow: "hidden",
											}}
										>
											<TextInput
												ref={otherInputRef}
												style={{
													paddingHorizontal: GeneralStyle.kid.field.paddingHorizontal,
													paddingVertical: GeneralStyle.kid.field.paddingVertical,
													fontSize: GeneralStyle.kid.field.fontSize,
												}}
												autoCapitalize="none"
												autoCorrect={false}
												onChangeText={() => console.log("entering other value")}
												placeholder="Please Specify"
											/>
										</View>
									)}
								</View>
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
		// backgroundColor: "orange",
	},
	optionContainer: {
		...GeneralStyle.kid.optionContainer,
		width: "100%",
	},
	optionText: {
		...GeneralStyle.kid.optionText,
	},
	optionUnpressed: {
		// backgroundColor: "#FFF",
	},
	textPressed: {
		color: "#fff",
	},
	textUnpressed: {
		color: "#000",
	},
});
