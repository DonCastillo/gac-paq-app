import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import type { Choice, ChoiceIcon } from "interface/payload.type";
import { useSelector } from "react-redux";
import { getCurrentPage, getCurrentPageNumber } from "store/settings/settingsSlice";
import { View } from "react-native-animatable";
import QuestionInput from "./QuestionInput";
import QuestionCheckbox from "./QuestionCheckbox";

interface PropsInterface {
	inputPlaceholder: string;
	inputLabel: string;
	inputLabelEn?: string;
	options: ChoiceIcon[] | Choice[];
	onSelect: (value: string | null) => void;
	selectedValue: string | null;
}

const QuestionCheckboxInput = ({
	inputPlaceholder,
	inputLabel,
	inputLabelEn,
	options,
	onSelect,
	selectedValue,
}: PropsInterface): React.ReactElement => {
	const currentPage = useSelector(getCurrentPage);
	const [inputValue, setInputValue] = useState<string | null>(null);
	const [checkboxValue, setCheckboxValue] = useState<string | null>(null);
	const currentPageNumber = useSelector(getCurrentPageNumber);

	useEffect(() => {
		if (selectedValue !== null && selectedValue.includes(`(${inputLabelEn})`)) {
			// if there is a tag, that means it is from the input field
			const value = selectedValue.replace(`(${inputLabelEn})`, "").trim();
			setInputValue(value);
			setCheckboxValue(null);
		} else {
			// otherwise, it is from the checkbox
			setCheckboxValue(selectedValue);
			setInputValue(null);
		}
	}, [currentPage, selectedValue]);

	return (
		<View>
			<Text style={{ fontSize: 20, marginBottom: 5 }}>{inputLabel}</Text>

			{/* Input */}
			<View style={{ marginBottom: 10 }}>
				<QuestionInput
					key={currentPageNumber + "input"}
					selectedValue={inputValue ?? ""}
					placeholder={inputPlaceholder}
					onChange={(value) => {
						if (value !== null || value !== undefined) {
							if (value !== "") {
								onSelect(`${value} (${inputLabelEn})`);
							} else {
								onSelect(value.replace(`(${inputLabelEn})`, "").trim());
							}
						}
					}}
				/>
			</View>

			{/* Checkbox */}
			<QuestionCheckbox
				key={currentPageNumber + "checkbox"}
				selectedValue={checkboxValue}
				options={options}
				onSelect={(value) => {
					if (value !== null) {
						onSelect(value);
					}
				}}
			/>
		</View>
	);
};

export default QuestionCheckboxInput;
