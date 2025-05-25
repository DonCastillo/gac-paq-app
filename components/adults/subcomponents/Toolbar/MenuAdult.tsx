import { Icon } from "@rneui/themed";
import React from "react";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import { View, Text, StyleSheet } from "react-native";
import { GeneralStyle } from "styles/general";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getDrawerOpened, getMode, setDrawerOpened } from "store/settings/settingsSlice";
import Mode from "constants/mode.enum";

const MenuAdult = (): React.ReactElement => {
	const navigation = useNavigation();
	const mode = useSelector(getMode);
	const dispatch = useDispatch();
	const drawerOpened = useSelector(getDrawerOpened);

	return (
		<View style={styles.container}>
			<Menu>
				<MenuTrigger>
					<Icon
						accessibilityLabel="Toggle MenuAdult"
						name="menu"
						size={GeneralStyle.general.icon.fontSize}
						color={mode === Mode.Kid || drawerOpened ? "#000" : "#fff"}
					/>
				</MenuTrigger>
				<MenuOptions>
					<MenuOption
						style={GeneralStyle.general.menuOption}
						onSelect={() => {
							dispatch(setDrawerOpened(false));
							navigation.navigate("RegularPageScreen");
						}}
					>
						<Text style={GeneralStyle.general.menuText}>Home</Text>
					</MenuOption>
					<MenuOption
						style={GeneralStyle.general.menuOption}
						onSelect={() => {
							dispatch(setDrawerOpened(true));
							navigation.navigate("GenericPendingSubmissions");
						}}
					>
						<Text style={GeneralStyle.general.menuText}>Pending Submissions</Text>
					</MenuOption>
				</MenuOptions>
			</Menu>
		</View>
	);
};

export default MenuAdult;

const styles = StyleSheet.create({
	container: {},
});
