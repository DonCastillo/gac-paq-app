import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GeneralStyle } from "styles/general";
import { SettingContext } from "store/settings";
import type { OptionInterface } from "utils/options";
import { horizontalScale } from "utils/responsive";
import Option from "./subcomponents/Option";

interface PropsInterface {
	options: OptionInterface[];
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

export default function QuestionRadio({
	options,
	onChange,
	selectedValue,
}: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage, device } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string | null>(selectedValue);
	const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
	const [autofocusOtherField, setAutoFocusOtherField] = useState<boolean>(false);

	useState(() => {
		setAutoFocusOtherField(false);
	});

	useEffect(() => {
		if (selected !== selectedValue) {
			setSelected(selectedValue);
		}
	}, [currentPage, selectedValue]);

	useEffect(() => {
		if (selected?.toString().toLowerCase() === "other") {
			setIsOtherSelected(true);
		} else {
			setIsOtherSelected(false);
		}
	}, [selected]);

	function selectHandler(value: string): void {
		if (value?.toString().toLowerCase() === "other") {
			setAutoFocusOtherField(true);
		}

		if (selectedValue === value) {
			onChange(null);
		} else {
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
					removeClippedSubviews={false}
					horizontal={false}
					bounces={false}
					numColumns={numColumn}
					key={enableColumnWrap.toString()}
					data={[...options]}
					contentContainerStyle={{ paddingBottom: 20 }}
					renderItem={({ item }) => {
						return (
							<Option
								text={item.text}
								value={item.value}
								selected={selected === item.value}
								selectHandler={selectHandler}
								color={color100}
								width={adjustWidth}
								isOtherSelected={isOtherSelected}
								autofocusOtherField={autofocusOtherField}
							/>
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
