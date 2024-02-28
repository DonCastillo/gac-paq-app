import { Pressable, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Icon } from "@rneui/themed";
import React, { useContext, useState, useEffect } from "react";
import { SettingContext } from "store/settings";
import { GeneralStyle } from "styles/general";

const ICON_SIZE = 30;

interface PropsInterface {
	sectionTitle?: string;
}

export default function Toolbar({ sectionTitle }: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { currentPageNumber, currentPage, sectionTitles } = settingCtx.settingState;
	const [title, setTitle] = useState<string>(sectionTitle ?? "");

	useEffect(() => {
		if (title === sectionTitle) return;
		if (currentPage.sectionNumber !== null) {
			setTitle(sectionTitles[currentPage.sectionNumber] ?? "");
		} else {
			setTitle("");
		}
	}, [currentPageNumber]);


	function audioHandler(): void {
		console.log("audio pressed from the toolbar");
	}

	return (
		<View style={styles.container}>
			<Text style={GeneralStyle.adult.topHeaderSectionTitle}>{title}</Text>
			<Icon
				name="volume-up"
				size={ICON_SIZE}
				color={"#fff"}
				containerStyle={styles.icon}
				onPress={audioHandler}
			/>
		</View>
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
		// position: "absolute",
		// top: 0,
		// left: 0,
		// right: 0,
		// zIndex: 99,
	},
	icon: {},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
