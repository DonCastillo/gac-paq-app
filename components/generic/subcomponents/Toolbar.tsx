import { StyleSheet, View } from "react-native";
import React from "react";
import { moderateScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import { getDevice, getLanguage } from "store/settings/settingsSlice";
import LanguageIndicator from "components/LanguageIndicator";
import MenuAdult from "components/adults/subcomponents/Toolbar/MenuAdult";

const Toolbar = (): React.ReactElement => {
	const language = useSelector(getLanguage);
	const device = useSelector(getDevice);

	return (
		<View
			style={{
				...styles.container,
				paddingVertical: moderateScale(5, device.screenWidth),
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
			</View>
			<View
				style={{
					flexDirection: "row",
					flex: 2,
					justifyContent: "flex-end",
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
		paddingHorizontal: 15,
		flexDirection: "row",
	},
	icon: {
		flex: 1,
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
