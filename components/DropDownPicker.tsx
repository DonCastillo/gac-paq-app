import { StyleSheet, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { SettingContext } from "../store/settings";
import type QuestionRadioItemInterface from "../interface/question_radio_item";

const FONT_SIZE = 16;
const BORDER_WIDTH = 2;

interface DropDownSelectorPropsInterface {
	options: QuestionRadioItemInterface[];
	selectedValue: string | null;
	onSelect: (value: string) => void;
	dropdownMinHeight?: number;
}

export default function DropDownSelector({
	options,
	selectedValue,
	onSelect,
	dropdownMinHeight = 280,
}: DropDownSelectorPropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [open, setOpen] = useState<boolean>(false);
	const [value, setValue] = useState<string | null>(selectedValue);
	const [items, setItems] = useState<QuestionRadioItemInterface[]>(options);

	useEffect(() => {
		if (items !== options) {
			setItems(options);
		}
		
	}, [currentPage]);

	useEffect(() => {
		if (value !== selectedValue) {
			setValue(selectedValue);
		}
	}, [currentPage, selectedValue]);

	// console.log("selected value: ", selectedValue)
	// console.log("value: ", value);


	return (
		<>
			<Text>{selectedValue}</Text>
			<DropDownPicker
				style={[styles.container, { borderColor: color100 }]}
				showTickIcon={true}
				placeholder="Select"
				open={open}
				value={value}
				items={items}
				setOpen={setOpen}
				setValue={setValue}
				setItems={setItems}
				listItemLabelStyle={styles.listItemLabelStyle}
				labelStyle={styles.labelStyle}
				iconContainerStyle={styles.iconContainer}
				dropDownContainerStyle={[
					styles.dropdownContainer,
					{
						borderColor: color100,
						minHeight: dropdownMinHeight ?? 280,
					},
				]}
				listItemContainerStyle={styles.listItemContainerStyle}
				onChangeValue={(value: string) => onSelect(value)}
				// onSelectItem={(item) => onSelect(item.value ?? null)}
				textStyle={{
					fontSize: FONT_SIZE,
					fontWeight: "bold",
				}}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderWidth: BORDER_WIDTH,
		borderRadius: 10,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		minHeight: 60,
		fontSize: FONT_SIZE,
	},
	listItemContainerStyle: {
		height: 60,
	},
	dropdownContainer: {
		marginTop: 5,
		borderWidth: BORDER_WIDTH,
		// minHeight: 280,
	},
	headingContainer: {
		marginBottom: 60,
	},
	iconContainer: {},
	listItemLabelStyle: {
		fontWeight: "400",
		fontSize: FONT_SIZE,
	},
	labelStyle: {
		fontWeight: "400",
		fontSize: FONT_SIZE,
	},
});
