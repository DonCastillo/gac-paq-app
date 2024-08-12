import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CheckboxOption from "components/adults/subcomponents/CheckboxOption";
import type { Choice, ChoiceIcon } from "interface/payload.type";
import {
	extractUserSpecifiedOtherFromArray,
	getUserSpecifiedOther,
	isOtherOption,
	isOtherWithSpecifiedValue,
	optionLetter,
} from "utils/options.utils";
import { useSelector } from "react-redux";
import { getCurrentPage } from "store/settings/settingsSlice";
import Section from "constants/section.enum";

interface PropsInterface {
	options: ChoiceIcon[] | Choice[];
	onSelect: (value: string | null) => void;
	selectedValue: string | null;
}

const QuestionCheckbox = ({
	options,
	onSelect,
	selectedValue,
}: PropsInterface): React.ReactElement => {
	const SEPARATOR = " | ";
	const currentPage = useSelector(getCurrentPage);

	const [selected, setSelected] = useState<string[]>(initializeSelectedValue());
	const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
	const [autofocusOtherField, setAutoFocusOtherField] = useState<boolean>(false);

	useState(() => {
		setAutoFocusOtherField(false);
	});

	useEffect(() => {
		if (JSON.stringify(selected) !== JSON.stringify(selectedValue)) {
			setSelected(initializeSelectedValue());
		}
	}, [currentPage, selectedValue]);

	useEffect(() => {
		if (arrayHasOther(selected)) {
			setIsOtherSelected(true);
		} else {
			setIsOtherSelected(false);
		}
	}, [selected]);

	function initializeSelectedValue(): string[] {
		return selectedValue === "" || selectedValue === null ? [] : selectedValue.split(SEPARATOR);
	}

	const arrayHasOther = (arr: string[]): boolean => {
		return arr.some(isOtherOption);
	};

	const everyNotAnswer = (value: string): boolean => {
		const finalValue = value.toString().toLowerCase();
		const currentPageIdent = currentPage?.page.ident;
		if (currentPageIdent === "transportation_7" && finalValue === "no") {
			return false;
		}
		return !["prefer not to answer", "prefer not to say", "none of the above"].includes(finalValue);
	};

	const someNotAnswer = (value: string): boolean => {
		const finalValue = value.toString().toLowerCase();
		const currentPageIdent = currentPage?.page.ident;
		if (currentPageIdent === "transportation_7" && finalValue === "no") {
			return true;
		}
		return ["prefer not to answer", "prefer not to say", "none of the above"].includes(finalValue);
	};

	const pressHandler = (value: string | null): void => {
		let finalSelected = "";
		let existingSelectedValue = initializeSelectedValue();

		if (value === "" || value === null || value === undefined) return;

		// activate other field if "other" or "other (xxxxx)" is selected
		if (isOtherOption(value)) {
			setAutoFocusOtherField(true);
		}

		// if value is "prefer not to answer" or" prefer not to say" or "none of the above" reset existing value and add this
		if (someNotAnswer(value)) {
			finalSelected = value;
			onSelect(finalSelected);
			return;
		} else {
			// remove "prefer not to answer" or "prefer not to say" or "none of the above" if it is selected
			existingSelectedValue = existingSelectedValue.filter(everyNotAnswer);
		}

		// check if the other option in the format "other" or "other (xxxxx)" is selected
		if (isOtherOption(value)) {
			// if "Other" or "other" is selected
			if (value.toString().toLowerCase() === "other") {
				if (arrayHasOther(existingSelectedValue)) {
					// if "Other", "other", "other (xxxx)" is already selected, remove all
					finalSelected = existingSelectedValue
						.filter((item) => !isOtherOption(item))
						.join(SEPARATOR);
				} else {
					// if not add it
					finalSelected = [...existingSelectedValue, value].join(SEPARATOR);
				}
			}

			// if "other (xxxxx)" is selected
			if (isOtherWithSpecifiedValue(value)) {
				const withoutOther = existingSelectedValue.filter((item) => !isOtherOption(item));
				const specificValue = getUserSpecifiedOther("", value);

				// if there is a value specified with "other" and it is not empty
				if (specificValue.trim() !== "") {
					// add it
					finalSelected = [...withoutOther, value].join(SEPARATOR);
				} else {
					// add "Other"
					finalSelected = [...withoutOther, "Other"].join(SEPARATOR);
				}
			}
		} else {
			if (existingSelectedValue.includes(value)) {
				finalSelected = existingSelectedValue.filter((item) => item !== value).join(SEPARATOR);
			} else {
				finalSelected = [...existingSelectedValue, value].join(SEPARATOR);
			}
		}

		onSelect(finalSelected);
	};

	return (
		<FlatList
			removeClippedSubviews={false}
			horizontal={false}
			bounces={false}
			data={[...options]}
			contentContainerStyle={{
				flexGrow: 1,
				justifyContent: "flex-start",
				flexDirection: "column",
				paddingBottom: 20,
			}}
			renderItem={({ item, index }) => (
				<CheckboxOption
					{...item}
					label={
						currentPage.section === Section.Question
							? `${optionLetter(index)}.  ${item.label}`
							: item.label
					}
					selected={
						selected !== null &&
						(selected?.includes(item.value) ||
							(isOtherOption(item.value) && arrayHasOther(selected)))
					}
					onPress={pressHandler}
					isOtherSelected={isOtherSelected}
					autofocusOtherField={autofocusOtherField}
					defaultOtherInputValue={extractUserSpecifiedOtherFromArray(selected)}
				/>
			)}
			persistentScrollbar={true}
			showsVerticalScrollIndicator={true}
		/>
	);
};

export default QuestionCheckbox;
