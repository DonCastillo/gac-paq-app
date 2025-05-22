import { Icon } from "@rneui/themed";
import React from "react";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import { View, Text, StyleSheet } from "react-native";
import { GeneralStyle } from "styles/general";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageNumber, getIsLoading, getMode } from "store/settings/settingsSlice";
import LoadingScreenAdult from "base_pages/adult/LoadingScreenAdult";
import Mode from "constants/mode.enum";

const MenuAdult = (): React.ReactElement => {
	const navigation = useNavigation();
	const isLoading = useSelector(getIsLoading);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const mode = useSelector(getMode);

	if (isLoading) {
		return <LoadingScreenAdult key={currentPageNumber} />;
	}

	return (
		<View style={styles.container}>
			<Menu>
				<MenuTrigger>
					<Icon
						accessibilityLabel="Toggle MenuAdult"
						name="menu"
						size={GeneralStyle.general.icon.fontSize}
						color={mode === Mode.Kid ? "#000" : "#fff"}
						containerStyle={{}}
					/>
				</MenuTrigger>
				<MenuOptions>
					<MenuOption
						style={GeneralStyle.general.menuOption}
						onSelect={() => navigation.navigate("RegularPageScreen")}
					>
						<Text style={GeneralStyle.general.menuText}>Home</Text>
					</MenuOption>
					<MenuOption
						style={GeneralStyle.general.menuOption}
						onSelect={() => navigation.navigate("GenericPendingSubmissions")}
					>
						<Text style={GeneralStyle.general.menuText}>Pending Submissions</Text>
					</MenuOption>
					{/* <MenuOption
						style={GeneralStyle.general.menuOption}
						onSelect={() => console.log("Opening logs ...")}
					>
						<Text style={GeneralStyle.general.menuText}>Logs</Text>
					</MenuOption> */}
				</MenuOptions>
			</Menu>
		</View>
	);
};

export default MenuAdult;

const styles = StyleSheet.create({
	container: {},
});
