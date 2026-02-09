import { getDevice } from "@/store/settings/settingsSlice";
import FlagIcons, { FlagCodeType } from "@/styles/flags";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

const LanguageIndicator = ({ countryCode = null }: { countryCode: string | null }): React.ReactElement => {
	const device = useSelector(getDevice);
	if (!countryCode) return <></>;

	console.log("countryCode in LanguageIndicator: ", countryCode);
	const Flag = countryCode && FlagIcons[countryCode.toLowerCase() as FlagCodeType];

	if (countryCode && Flag) {
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
