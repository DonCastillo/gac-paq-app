import { Icon } from "@rneui/themed";
import React from "react";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import { View, Text, StyleSheet } from "react-native";
import { GeneralStyle } from "styles/general";

const MenuKid = (): React.ReactElement => {
	return (
		<View style={styles.container}>
			<Menu>
				<MenuTrigger>
					<Icon
						accessibilityLabel="Toggle MenuKid"
						name="menu"
						size={GeneralStyle.general.icon.fontSize}
						type={"simple-line-icon"}
						color={"#000"}
						containerStyle={{}}
					/>
				</MenuTrigger>
				<MenuOptions>
					<MenuOption
						style={GeneralStyle.general.menuOption}
						onSelect={() => console.log("Opening pending submissions ...")}
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

export default MenuKid;

const styles = StyleSheet.create({
	container: {},
});
