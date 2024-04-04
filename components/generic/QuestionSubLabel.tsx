import QuestionLabel from "components/kid/QuestionLabel";
import React, { useContext } from "react";
import { SettingContext } from "store/settings";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
	textStyle?: object;
}

export default function QuestionSubLabel({
	children,
	customStyle = {},
	textStyle = {},
}: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { device } = settingCtx.settingState;

	if (children !== null && children !== undefined && children !== "") {
		return (
			<QuestionLabel
				textStyle={{
					...GeneralStyle.adult.questionSubLabel,
					// fontSize: device.isTablet ? 17 : 13,
					// lineHeight: device.isTablet ? 21 : 17,
					fontSize: moderateScale(
						device.isTablet ? 12 : 12,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
					lineHeight: moderateScale(
						device.isTablet ? 16 : 16,
						device.orientation === "portrait" ? device.screenWidth : device.screenHeight,
					),
					...textStyle,
				}}
				customStyle={{
					...customStyle,
				}}
			>
				{children}
			</QuestionLabel>
		);
	} else {
		return <></>;
	}
}
