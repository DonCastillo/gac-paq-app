import { StyleSheet, View, Text } from "react-native";
import { Icon } from "@rneui/themed";
import React, { useState, useEffect, memo } from "react";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive";
import { useSelector } from "react-redux";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getSectionTitles,
} from "store/settings/settingsSlice";

const ICON_SIZE = 30;

interface PropsInterface {
	sectionTitle?: string;
}

function Toolbar({ sectionTitle }: PropsInterface): React.ReactElement {
	const currentPage = useSelector(getCurrentPage);
	const device = useSelector(getDevice);
	const sectionTitles = useSelector(getSectionTitles);
	const currentPageNumber = useSelector(getCurrentPageNumber);

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
					GeneralStyle.adult.topHeaderSectionTitle,
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
				name="volume-up"
				size={ICON_SIZE}
				color={"#fff"}
				containerStyle={styles.icon}
				onPress={audioHandler}
			/>
		</View>
	);
}

export default memo(Toolbar);

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
	},
	icon: {},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
