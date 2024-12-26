import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { getLanguageOption } from "store/questions/questionsSlice";
import { useSelector } from "react-redux";
import type { LanguageInterface } from "interface/payload.type";
import { getDevice, getLanguage } from "store/settings/settingsSlice";

const LanguageIndicator = ({ langCode = "" }: { langCode: string }): React.ReactElement => {
	const languageSelected = useSelector(getLanguage);
	const languageOptions: LanguageInterface[] = useSelector(getLanguageOption) ?? [];
	const device = useSelector(getDevice);
	const [language, setLanguage] = useState<LanguageInterface | null>(null);

	useEffect(() => {
		if (languageOptions.length > 0 && langCode !== "") {
			const tempLanguage = languageOptions.find(
				(option: LanguageInterface) => option.lang_code === langCode,
			);
			setLanguage(tempLanguage ?? null);
		}
	}, [languageSelected, languageOptions]);

	if (language === null) {
		return <View />;
	}

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
