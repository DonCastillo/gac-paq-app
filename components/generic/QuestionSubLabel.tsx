import QuestionLabel from "components/kid/QuestionLabel";
import React, { memo } from "react";
import { GeneralStyle } from "styles/general";
import { moderateScale } from "utils/responsive.utils";
import { useSelector } from "react-redux";
import { getDevice } from "store/settings/settingsSlice";

interface PropsInterface {
	children: React.ReactNode;
	customStyle?: object;
	textStyle?: object;
}

const QuestionSubLabel = ({
	children,
	customStyle = {},
	textStyle = {},
}: PropsInterface): React.ReactElement => {
	const device = useSelector(getDevice);

	if (children !== null && children !== undefined && children !== "") {
		return (
			<QuestionLabel
				textStyle={{
					...GeneralStyle.adult.questionSubLabel,
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
};

export default memo(QuestionSubLabel);
