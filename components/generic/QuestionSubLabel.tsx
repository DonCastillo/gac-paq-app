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
					...GeneralStyle.adult.questionLabel,
					fontSize: device.isTablet ? 17 : 14,
					lineHeight: device.isTablet ? 21 : 18,
					...textStyle,
				}}
				customStyle={{ ...customStyle, backgroundColor: "lightblue" }}
			>
				{children}
			</QuestionLabel>
		);
	} else {
		return <></>;
	}
}
