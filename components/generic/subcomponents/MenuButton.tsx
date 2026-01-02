import useCharacter from "@/hooks/useCharacter";
import { Icon } from "@rneui/base";
import Mode from "constants/mode.enum";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { useDispatch, useSelector } from "react-redux";
import { getDrawerOpened, getNumPendingSubmissions, getPhrases, setDrawerOpened } from "store/settings/settingsSlice";
import { GeneralStyle } from "styles/general";

const MenuButton = (): React.ReactElement => {
	const { mode, pageName } = useCharacter();
	const dispatch = useDispatch();
	const drawerOpened = useSelector(getDrawerOpened);
	const phrases = useSelector(getPhrases);
	const numPendingSubmissions = useSelector(getNumPendingSubmissions);

	return (
		<View style={styles.container}>
			<Menu>
				<MenuTrigger style={{ flexDirection: "row" }}>
					<Icon
						accessibilityLabel="Toggle MenuButton"
						name="menu"
						size={GeneralStyle.general.icon.fontSize}
						color={mode === Mode.Kid || drawerOpened ? "#000" : "#fff"}
					/>
					{numPendingSubmissions !== undefined && numPendingSubmissions !== null && numPendingSubmissions > 0 && (
						<View style={styles.notificationContainer}>
							<Text style={styles.notificationText}>{numPendingSubmissions}</Text>
						</View>
					)}
				</MenuTrigger>
				<MenuOptions customStyles={{}}>
					{pageName !== "questionnaire" && (
						<MenuOption
							style={GeneralStyle.general.menuOption}
							onSelect={() => {
								dispatch(setDrawerOpened(false));
								router.replace("/questionnaire");
							}}
						>
							<Text style={GeneralStyle.general.menuText}>{phrases?.back}</Text>
						</MenuOption>
					)}

					{pageName !== "pending" && (
						<MenuOption
							style={[
								GeneralStyle.general.menuOption,
								{
									flexDirection: "row",
								},
							]}
							onSelect={() => {
								dispatch(setDrawerOpened(true));
								router.replace("/pending");
							}}
						>
							<Text style={[GeneralStyle.general.menuText, { flex: 1 }]}>{phrases?.pendingSubmissions}</Text>
							{numPendingSubmissions !== undefined && numPendingSubmissions !== null && numPendingSubmissions > 0 && (
								<View style={[styles.notificationContainer, { position: "relative", right: 0, top: 0 }]}>
									<Text style={[styles.notificationText]}>{numPendingSubmissions}</Text>
								</View>
							)}
						</MenuOption>
					)}
				</MenuOptions>
			</Menu>
		</View>
	);
};

export default MenuButton;

const styles = StyleSheet.create({
	container: {},
	notificationContainer: {
		backgroundColor: "red",
		position: "absolute",
		right: -7,
		top: -7,
		height: 25,
		width: 25,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	notificationText: { color: "white", fontSize: 15, fontWeight: "bold" },
});
