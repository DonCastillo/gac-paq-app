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

export default function QuestionCheckbox({
	options,
	onChange,
	selectedValue,
}: PropsInterface): React.ReactElement {
	const SEPARATOR = " | ";
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage, device } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [selected, setSelected] = useState<string[]>(initializeSelectedValue());
	const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
	const [autofocusOtherField, setAutoFocusOtherField] = useState<boolean>(false);

	useState(() => {
		setAutoFocusOtherField(false);
	});

	useEffect(() => {
		if (JSON.stringify(selected) !== JSON.stringify(selectedValue)) {
			setSelected(initializeSelectedValue());
		}
	}, [currentPage, selectedValue]);

	useEffect(() => {
		if (arrayHasOther(selected)) {
			setIsOtherSelected(true);
		} else {
			setIsOtherSelected(false);
		}
	}, [selected]);

	function initializeSelectedValue(): string[] {
		return selectedValue === "" || selectedValue === null ? [] : selectedValue.split(SEPARATOR);
	}

	function arrayHasOther(arr: string[]): boolean {
		return arr.map((item) => item.toString().toLowerCase()).includes("other");
	}

	function selectHandler(value: string): void {
		if (value === "" || value === null || value === undefined) return;

		// activate other field if "other" is selected
		if (value.toString().toLowerCase() === "other") {
			setAutoFocusOtherField(true);
		}

		const tempSelectedValue = initializeSelectedValue();
		if (tempSelectedValue.includes(value)) {
			onChange(tempSelectedValue.filter((item) => item !== value).join(SEPARATOR));
		} else {
			onChange([...tempSelectedValue, value].join(SEPARATOR));
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
								selected={selected !== null && selected?.includes(item.value)}
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
