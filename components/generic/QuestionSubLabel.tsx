import QuestionLabel from "components/kid/QuestionLabel";
import React, { memo } from "react";
import { GeneralStyle } from "styles/general";
import { adjustQuestionSublabel } from "utils/style";

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
	if (children !== null && children !== undefined && children !== "") {
		return (
			<QuestionLabel
				textStyle={{
					...GeneralStyle.adult.questionSubLabel,
					...adjustQuestionSublabel(),
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
