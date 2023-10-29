import { StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import DropDownPicker from "react-native-dropdown-picker";
import { SettingContext } from "../store/settings";

const FONT_SIZE = 16;
const BORDER_WIDTH = 2;

export default function DropDownSelector({
	options,
	selectedValue,
	onSelect,
	dropdownMinHeight = 280,
}): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { colorTheme, currentPage } = settingCtx.settingState;
	const { color100 } = colorTheme;
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(selectedValue);
	const [items, setItems] = useState(options);

	useEffect(() => {
		if (items !== options) {
			setItems(options);
		}
	}, [currentPage]);

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
						minHeight: dropdownMinHeight || 280,
					},
				]}
				listItemContainerStyle={styles.listItemContainerStyle}
				onChangeValue={(value: string) => onSelect(value)}
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
