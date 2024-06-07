import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import { getColorTheme, getCurrentPageNumber, getDevice } from "store/settings/settingsSlice";
import type { Choice, ChoiceIcon } from "interface/payload.type";

interface PropsInterface {
	options: ChoiceIcon[] | Choice[];
	selectedValue: string | null;
	onSelect: (value: string) => void;
	dropdownOpen: boolean;
	setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
	dropdownMinHeight?: number | "100%";
}

const DropDownSelector = ({
	options,
	selectedValue,
	onSelect,
	dropdownOpen,
	setDropdownOpen,
	dropdownMinHeight = "100%",
}: PropsInterface): React.ReactElement => {
	const colorTheme = useSelector(getColorTheme);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const device = useSelector(getDevice);
	const { color100 } = colorTheme;
	const [value, setValue] = useState<string | null>(selectedValue);
	const [items, setItems] = useState<ChoiceIcon[] | Choice[]>(options);

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
				open={dropdownOpen}
				value={value}
				items={items}
				setOpen={setDropdownOpen}
				setValue={setValue}
				setItems={setItems}
				listItemLabelStyle={styles.listItemLabelStyle}
				labelStyle={styles.labelStyle}
				iconContainerStyle={{
					...styles.iconContainer,
					height: moderateScale(
						device.isTablet ? 25 : 30,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
					width: moderateScale(
						device.isTablet ? 25 : 30,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
				}}
				dropDownContainerStyle={[
					styles.dropdownContainer,
					{
						borderColor: color100,
						minHeight: dropdownMinHeight,
						maxHeight: 250,
					},
				]}
				listItemContainerStyle={{
					...styles.listItemContainerStyle,
					height: moderateScale(
						device.isTablet ? 35 : 45,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
				}}
				onChangeValue={(value: string) => onSelect(value)}
				textStyle={{
					...GeneralStyle.kid.dropdownPickerText,
					fontSize: moderateScale(
						device.isTablet ? 12 : 16,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
					lineHeight: moderateScale(
						device.isTablet ? 16 : 20,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
				}}
			/>
		</>
	);
};

export default DropDownSelector;

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
