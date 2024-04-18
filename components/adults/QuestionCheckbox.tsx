import { FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import type QuestionRadioItemInterface from "interface/question_radio_item";
import { SettingContext } from "store/settings";
import CheckboxOption from "components/adults/subcomponents/CheckboxOption";
import {
	extractUserSpecifiedOtherFromArray,
	getUserSpecifiedOther,
	isOtherOption,
	isOtherWithSpecifiedValue,
} from "utils/options";

interface PropsInterface {
	options: QuestionRadioItemInterface[];
	onSelect: (value: string | null) => void;
	selectedValue: string | null;
}

export default function QuestionCheckbox({
	options,
	onSelect,
	selectedValue,
}: PropsInterface): React.ReactElement {
	const SEPARATOR = " | ";
	const settingCtx = useContext(SettingContext);
	const { currentPage } = settingCtx.settingState;
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

	function arrayHasOther(arr: string[]): boolean {
		return arr.some(isOtherOption);
	}

	function pressHandler(value: string | null): void {
		if (value === "" || value === null || value === undefined) return;

		// activate other field if "other" is selected
		if (isOtherOption(value)) {
			setAutoFocusOtherField(true);
		}

		const existingSelectedValue = initializeSelectedValue();

		// check if the other option in the format "other" or "other (xxxxx)" is selected
		if (isOtherOption(value)) {
			// if "Other" or "other" is selected
			if (value.toString().toLowerCase() === "other") {
				if (arrayHasOther(existingSelectedValue)) {
					// if "Other", "other", "other (xxxx)" is already selected, remove all
					onSelect(existingSelectedValue.filter((item) => !isOtherOption(item)).join(SEPARATOR));
					return;
				} else {
					// if not add it
					onSelect([...existingSelectedValue, value].join(SEPARATOR));
					return;
				}
			}

			// if "other (xxxxx)" is selected
			if (isOtherWithSpecifiedValue(value)) {
				const withoutOther = existingSelectedValue.filter((item) => !isOtherOption(item));
				const specificValue = getUserSpecifiedOther("", value);

				// if there is a value specified with "other" and it is not empty
				if (specificValue.trim() !== "") {
					// add it
					onSelect([...withoutOther, value].join(SEPARATOR));
				} else {
					// add "Other"
					onSelect([...withoutOther, "Other"].join(SEPARATOR));
				}
			}
		} else {
			if (existingSelectedValue.includes(value)) {
				onSelect(existingSelectedValue.filter((item) => item !== value).join(SEPARATOR));
			} else {
				onSelect([...existingSelectedValue, value].join(SEPARATOR));
			}
		}
	}

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
			renderItem={({ item }) => (
				<CheckboxOption
					{...item}
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
}
