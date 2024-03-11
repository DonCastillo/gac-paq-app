import { StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { SettingContext } from "store/settings";
import type QuestionRadioItemInterface from "interface/question_radio_item";
import { GeneralStyle } from "styles/general";
import { verticalScale } from "utils/responsive";

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
	const { colorTheme, currentPageNumber, device } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [open, setOpen] = useState<boolean>(false);
	const [value, setValue] = useState<string | null>(selectedValue);
	const [items, setItems] = useState<QuestionRadioItemInterface[]>(options);

	useEffect(() => {
		if (items !== options) {
			setItems(options);
		}
	}, [currentPageNumber]);

	useEffect(() => {
		if (value !== selectedValue) {
			setValue(selectedValue);
		}
	}, [currentPageNumber, selectedValue]);

	return (
		<>
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
						minHeight: verticalScale(dropdownMinHeight, device.screenHeight) ?? 280,
					},
				]}
				listItemContainerStyle={[styles.listItemContainerStyle]}
				onChangeValue={(value: string) => onSelect(value)}
				// onSelectItem={(item) => onSelect(item.value ?? null)}
				textStyle={{
					...GeneralStyle.kid.dropdownPickerText,
				}}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		...GeneralStyle.kid.dropdownPickerContainer,
	},
	listItemContainerStyle: {
		...GeneralStyle.kid.dropdownPickerListItemContainer,
	},
	dropdownContainer: {
		marginTop: 10,
		...GeneralStyle.kid.dropdownPickerListContainer,
	},
	iconContainer: {},
	listItemLabelStyle: {
		...GeneralStyle.kid.dropdownPickerListLabel,
	},
	labelStyle: {
		...GeneralStyle.kid.dropdownPickerListLabelChosen,
	},
});
