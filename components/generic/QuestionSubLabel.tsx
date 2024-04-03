import QuestionLabel from "components/kid/QuestionLabel";
import React, { useContext } from "react";
import { SettingContext } from "store/settings";
import { GeneralStyle } from "styles/general";

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
					fontSize: device.isTablet ? 17 : 13,
					lineHeight: device.isTablet ? 21 : 17,
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
