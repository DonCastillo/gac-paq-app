import { StyleSheet, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import {
	getCurrentPage,
	getCurrentPageNumber,
	getDevice,
	getLanguage,
	getMode,
	getSectionTitles,
} from "store/settings/settingsSlice";
import { adjustToolbarHeadingText, adjustWritingDirection } from "utils/style";
import LanguageIndicator from "components/LanguageIndicator";
import MenuAdult from "components/adults/subcomponents/Toolbar/MenuAdult";
import Mode from "constants/mode.enum";

interface PropsInterface {
	sectionTitle?: string;
}

const Toolbar = ({ sectionTitle }: PropsInterface): React.ReactElement => {
	const currentPage = useSelector(getCurrentPage);
	const currentPageNumber = useSelector(getCurrentPageNumber);
	const sectionTitles = useSelector(getSectionTitles);
	const language = useSelector(getLanguage);
	const device = useSelector(getDevice);
	// const mode = useSelector(getMode);
	

	const [title, setTitle] = useState<string>(sectionTitle ?? "");

	useEffect(() => {
		if (title === sectionTitle) return;
		if (currentPage.sectionNumber !== null) {
			setTitle(sectionTitles[currentPage.sectionNumber] ?? "");
		} else {
			setTitle("");
		}
	}, [currentPageNumber, sectionTitles]);

	return (
		<View
			style={{
				...styles.container,
				paddingVertical: moderateScale(5, device.screenWidth),
				// backgroundColor: "red",
			}}
		>
			<View
				style={{
					justifyContent: "flex-start",
					alignItems: "flex-start",
					flexDirection: "row",
					flex: 7,
				}}
			>
				<View style={{ height: "100%", paddingTop: 8 }}>
					<LanguageIndicator langCode={language} />
				</View>
				{/* <Text
					style={[
						GeneralStyle.kid.topHeaderSectionTitle,
						{
							...adjustToolbarHeadingText(),
							direction: adjustWritingDirection(),
							flex: 1,
							marginHorizontal: 5,
							height: "100%",
							paddingTop: 7,
							color: mode === Mode.Kid ? "#000" : "#fff",
						},
					]}
				>
					{title}
				</Text> */}
			</View>
			<View
				style={{
					flexDirection: "row",
					flex: 2,
					justifyContent: "flex-end",
					// backgroundColor: "red"
				}}
			>
				<MenuAdult />
			</View>
		</View>
	);
};

export default Toolbar;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		paddingHorizontal: 20,
		flexDirection: "row",
		minHeight: 50,
		// backgroundColor: "red",
	},
	safearea: {},
	icon: {
		flex: 1,
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
