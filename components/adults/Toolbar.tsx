import { Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import { Icon } from "@rneui/themed";
import React, { useContext } from "react";
import { SettingContext } from "../../store/settings";

const ICON_SIZE = 30;

export default function Toolbar(): React.ReactElement {
	const settingCtx = useContext(SettingContext);

	function backHandler(): void {
		console.log("back pressed from the toolbar");
		settingCtx.prevPage();
	}

	function audioHandler(): void {
		console.log("audio pressed from the toolbar");
	}

	return (
		<SafeAreaView style={styles.safearea}>
			<View style={styles.container}>
				<Pressable
					style={styles.button}
					onPress={backHandler}
				>
					<Icon
						name="west"
						size={ICON_SIZE}
						color={"#fff"}
						containerStyle={styles.icon}
					/>
				</Pressable>

				<Pressable
					style={styles.button}
					onPress={audioHandler}
				>
					<Icon
						name="volume-up"
						size={ICON_SIZE}
						color={"#fff"}
						containerStyle={styles.icon}
					/>
				</Pressable>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
	},
	safearea: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		zIndex: 99,
	},
	icon: {},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
