import { NarrationProvider } from "@/contexts/common/NarrationContext";
import useCharacter from "@/hooks/useCharacter";
import LanguageIndicator from "components/LanguageIndicator";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { getDevice } from "store/settings/settingsSlice";
import { moderateScale } from "utils/responsive.utils";
import Audio from "./Audio";
import MenuButton from "./MenuButton";
import Title from "./Title";

const Toolbar = (): React.ReactElement => {
	const { language, pageName } = useCharacter();
	const device = useSelector(getDevice);

	return (
		<NarrationProvider>
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
						flex: 2,
					}}
				>
					<View style={{ height: "100%", paddingTop: 8 }}>
						<LanguageIndicator langCode={language} />
					</View>
					<Title />
				</View>
				<View
					style={{
						flexDirection: "row",
						flex: 1,
						justifyContent: "flex-end",
						gap: 20,
					}}
				>
					{pageName === "questionnaire" && <Audio />}
					<MenuButton />
				</View>
			</View>
		</NarrationProvider>
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
