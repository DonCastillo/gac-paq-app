import QuestionLabel from "components/kid/QuestionLabel";
import React, { useContext } from "react";
import { SettingContext } from "store/settings";
import { GeneralStyle } from "styles/general";

interface PropsInterface {
	children: React.ReactNode;
}

export default function QuestionSubLabel({ children }: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { device } = settingCtx.settingState;

	if (children !== null && children !== undefined && children !== "") {
		return (
			<QuestionLabel
				textStyle={{
					...GeneralStyle.adult.questionLabel,
					fontSize: device.isTablet ? 17 : 14,
					lineHeight: device.isTablet ? 21 : 18,
				}}
				customStyle={{
					marginTop: 10,
					marginBottom: 20,
				}}
			>
				{children}
			</QuestionLabel>
		);
	} else {
		return <></>;
	}
}
