import React from "react";
import type { ChoiceIcon, LanguageInterface } from "interface/payload.type";
import QuestionRadio from "components/adults/QuestionRadio";
import { optionLanguage } from "utils/options.utils";
import { useSelector } from "react-redux";
import { getLanguageOption } from "store/questions/questionsSlice";

interface PropsInterface {
	onChange: (value: string | null) => void;
	selectedValue: string | null;
}

const QuestionSelectLanguageAdult = ({
	onChange,
	selectedValue,
}: PropsInterface): React.ReactElement => {
	const options: LanguageInterface[] = useSelector(getLanguageOption);
	const itemsRaw: ChoiceIcon[] = optionLanguage(options);

	const selectHandler = (value: string | null): void => {
		onChange(value);
	};

	return (
		<QuestionRadio
			options={itemsRaw}
			selectedValue={selectedValue}
			onSelect={selectHandler}
		/>
	);
};

export default QuestionSelectLanguageAdult;
