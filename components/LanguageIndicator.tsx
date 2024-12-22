import { View } from "react-native";
import React from "react";
import { getLanguageOption } from "store/questions/questionsSlice";
import { useSelector } from "react-redux";
import type { LanguageInterface } from "interface/payload.type";
import { getDevice } from "store/settings/settingsSlice";

const LanguageIndicator = ({ langCode }: { langCode: string }): React.ReactElement => {
	const languageOptions: LanguageInterface[] = useSelector(getLanguageOption);
	const device = useSelector(getDevice);
	const language = languageOptions.find(
		(option: LanguageInterface) => option.lang_code === langCode,
	);
	const Flag = language?.flag;
	return (
		<View>
			<Flag
				style={{
					maxWidth: device.isTablet ? 60 : 40,
					maxHeight: "100%",
					width: "100%",
					aspectRatio: 2 / 1,
					justifyContent: "flex-start",
					alignItems: "center",
				}}
			/>
		</View>
	);
};

export default LanguageIndicator;
