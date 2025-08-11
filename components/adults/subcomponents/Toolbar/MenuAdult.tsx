import { Icon } from "@rneui/themed";
import React from "react";
import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import { View, Text, StyleSheet } from "react-native";
import { GeneralStyle } from "styles/general";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
	getDrawerOpened,
	getMode,
	getNumPendingSubmissions,
	getPhrases,
	setDrawerOpened,
} from "store/settings/settingsSlice";
import Mode from "constants/mode.enum";

const MenuAdult = (): React.ReactElement => {
	const navigation = useNavigation();
	const mode = useSelector(getMode);
	const dispatch = useDispatch();
	const drawerOpened = useSelector(getDrawerOpened);
	const phrases = useSelector(getPhrases);
	const route = useRoute();
	const { page_name } = (route.params as { page_name: string }) ?? "";
	const numPendingSubmissions = useSelector(getNumPendingSubmissions);

	return (
		<View style={styles.container}>
			<Menu>
				<MenuTrigger style={{ flexDirection: "row" }}>
					<Icon
						accessibilityLabel="Toggle MenuAdult"
						name="menu"
						size={GeneralStyle.general.icon.fontSize}
						color={mode === Mode.Kid || drawerOpened ? "#000" : "#fff"}
					/>
					{numPendingSubmissions !== undefined &&
						numPendingSubmissions !== null &&
						numPendingSubmissions > 0 && (
							<View style={styles.notificationContainer}>
								<Text style={styles.notificationText}>{numPendingSubmissions}</Text>
							</View>
						)}
				</MenuTrigger>
				<MenuOptions>
					{/*  BACK */}
					{page_name !== "questionPage" && (
						<MenuOption
							style={GeneralStyle.general.menuOption}
							onSelect={() => {
								dispatch(setDrawerOpened(false));
								navigation.navigate("RegularPageScreen");
							}}
						>
							<Text style={GeneralStyle.general.menuText}>{phrases?.back}</Text>
						</MenuOption>
					)}

					{/* PENDING SUBMISSIONS */}
					{page_name !== "genericPendingSubmissionPage" && (
						<MenuOption
							style={[
								GeneralStyle.general.menuOption,
								{
									flexDirection: "row",
								},
							]}
							onSelect={() => {
								dispatch(setDrawerOpened(true));
								navigation.navigate("GenericPendingSubmissions");
							}}
						>
							<Text style={[GeneralStyle.general.menuText, { flex: 1 }]}>
								{phrases?.pendingSubmissions}
							</Text>
							{numPendingSubmissions !== undefined &&
								numPendingSubmissions !== null &&
								numPendingSubmissions > 0 && (
									<View
										style={[
											styles.notificationContainer,
											{ position: "relative", right: 0, top: 0 },
										]}
									>
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

export default MenuAdult;

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
