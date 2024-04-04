import { StyleSheet, View, Text } from "react-native";
import { Icon } from "@rneui/themed";
import React, { useContext, useState, useEffect } from "react";
import { SettingContext } from "store/settings";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive";

const ICON_SIZE = 30;

interface PropsInterface {
	sectionTitle?: string;
}

export default function Toolbar({ sectionTitle }: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { currentPageNumber, currentPage, sectionTitles, device } = settingCtx.settingState;
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
		<View style={{ ...styles.container, paddingVertical: moderateScale(5, device.screenWidth) }}>
			<Text
				style={[
					GeneralStyle.kid.topHeaderSectionTitle,
					{
						fontSize: moderateScale(
							device.isTablet ? 13 : 13,
							device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
						),
						lineHeight: moderateScale(
							device.isTablet ? 16 : 16,
							device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
						),
					},
				]}
			>
				{title}
			</Text>
			<Icon
				name="volume-2"
				size={ICON_SIZE}
				type={"simple-line-icon"}
				color={"#000"}
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
	safearea: {},
	icon: {},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
