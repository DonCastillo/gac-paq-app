import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView } from "react-native";
import React, { useContext, useState } from "react";
import { GeneralStyle } from "../../styles/general";
import { SettingContext } from "../../store/settings";
import PropTypes from "prop-types";

QuestionRadio.propTypes = {
	options: PropTypes.array,
	onChange: PropTypes.func,
};

export default function QuestionRadio({ options, onChange }): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(null);

	const optionPressedStyle = {
		backgroundColor: color100,
		borderColor: color100,
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
										selected === item.value
											? optionPressedStyle
											: styles.optionUnpressed,
									]}
									onPress={() => {
										selectHandler(item.value);
									}}
								>
									<Text
										style={[
											styles.optionText,
											selected === item.value
												? styles.textPressed
												: styles.textUnpressed,
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
