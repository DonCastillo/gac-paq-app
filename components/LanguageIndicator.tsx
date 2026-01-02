import { LanguageInterface } from "@/interface/payload.type";
import { getLanguageOption } from "@/store/questions/questionsSlice";
import { getDevice } from "@/store/settings/settingsSlice";
import FlagIcons, { FlagCodeType } from "@/styles/flags";
import React, { useMemo } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

const LanguageIndicator = ({ langCode = "" }: { langCode: string }): React.ReactElement => {
	const device = useSelector(getDevice);
	const languageOptionsRaw = useSelector(getLanguageOption);
	const languageOptions: LanguageInterface[] = useMemo(() => languageOptionsRaw ?? [], [languageOptionsRaw]);

	const flagCode = useMemo(() => {
		return languageOptions.find((item) => item.lang_code === langCode)?.flag_code?.toLowerCase() as FlagCodeType;
	}, [langCode, languageOptions]);

	const Flag = flagCode && FlagIcons[flagCode];

	if (flagCode && Flag) {
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
	}

	return <></>;
};

export default LanguageIndicator;
