import useCurrentPage from "@hooks/useCurrentPage";
import type { Choice, ChoiceIcon } from "@interface/payload.type";
import { getColorTheme, getDevice, getPhrases } from "@store/settings/settingsSlice";
import { GeneralStyle } from "@styles/general";
import { moderateScale } from "@utils/responsive.utils";
import { adjustDropdownIconSize, adjustDropdownLabelText, adjustWritingDirection } from "@utils/style";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useSelector } from "react-redux";

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
	const { currentPageNumber, currentPage } = useCurrentPage();
	const device = useSelector(getDevice);
	const { color100 } = colorTheme;
	const [value, setValue] = useState<string | null>(selectedValue);
	const [items, setItems] = useState<ChoiceIcon[] | Choice[]>(options);
	const phrases = useSelector(getPhrases);

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
				style={[
					styles.container,
					{
						borderColor: color100,
						width: "100%",
						direction: adjustWritingDirection(),
					},
				]}
				showTickIcon={true}
				placeholder={phrases?.select}
				open={dropdownOpen}
				value={value}
				items={items}
				schema={{
					label: "label",
					value: "value",
					icon: "icon",
				}}
				setOpen={setDropdownOpen}
				setValue={setValue}
				setItems={setItems}
				listItemLabelStyle={[styles.listItemLabelStyle, adjustDropdownLabelText()]}
				labelStyle={[styles.labelStyle, adjustDropdownLabelText()]}
				iconContainerStyle={{
					...styles.iconContainer,
					...adjustDropdownIconSize(),
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
					height: moderateScale(device.isTablet ? 35 : 45, device.orientation === "portrait" ? device.screenWidth : device.screenHeight),
					direction: adjustWritingDirection(),
				}}
				onChangeValue={(value: string) => onSelect(value)}
				textStyle={{
					...GeneralStyle.kid.dropdownPickerText,
					fontSize: moderateScale(
						device.isTablet
							? value === "ar-AE" && currentPage.page.ident !== "language_location"
								? 15
								: 12
							: value === "ar-AE" && currentPage.page.ident !== "language_location"
								? 19
								: 16,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
					lineHeight: moderateScale(
						device.isTablet
							? value === "ar-AE" && currentPage.page.ident !== "language_location"
								? 19
								: 16
							: value === "ar-AE" && currentPage.page.ident !== "language_location"
								? 23
								: 20,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
					writingDirection: adjustWritingDirection(),
					...adjustDropdownLabelText(),
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
