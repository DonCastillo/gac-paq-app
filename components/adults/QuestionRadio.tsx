import { FlatList } from "react-native";
import RadioOption from "components/adults/subcomponents/RadioOption";
import React, { useEffect, useState } from "react";
import type { ChoiceIcon, Choice } from "interface/payload.type";

import {
	getUserSpecifiedOther,
	isOtherOption,
	isOtherWithSpecifiedValue,
} from "utils/options.utils";
import { useSelector } from "react-redux";
import { getCurrentPage } from "store/settings/settingsSlice";

interface PropsInterface {
	options: ChoiceIcon[] | Choice[];
	onSelect: (value: string | null) => void;
	selectedValue: string | null;
}

export default function QuestionRadio({
	options,
	onSelect,
	selectedValue,
}: PropsInterface): React.ReactElement {
	const currentPage = useSelector(getCurrentPage);
	const [selected, setSelected] = useState<string | null>(selectedValue);
	const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
	const [autofocusOtherField, setAutoFocusOtherField] = useState<boolean>(false);

	useState(() => {
		setAutoFocusOtherField(false);
	});

	useEffect(() => {
		if (selected !== selectedValue) {
			setSelected(selectedValue);
		}
	}, [currentPage, selectedValue]);

	useEffect(() => {
		if (isOtherOption(selected)) {
			setIsOtherSelected(true);
		} else {
			setIsOtherSelected(false);
		}
	}, [selected]);

	function pressHandler(value: string | null): void {
		if (value === "" || value === null || value === undefined) return;

		if (isOtherOption(value)) {
			setAutoFocusOtherField(true);
		}

		// check if the other option in the format "other" or "other (xxxxx)" is selected
		if (isOtherOption(value)) {
			// if "Other" or "other" is selected
			if (value.toString().toLowerCase() === "other") {
				if (isOtherOption(selected)) {
					// if "Other", "other", "other (xxxx)" is already selected, remove all
					onSelect(null);
					return;
				} else {
					// if not add it
					onSelect(value);
					return;
				}
			}

			// if "other (xxxxx)" is selected
			if (isOtherWithSpecifiedValue(value)) {
				const specificValue = getUserSpecifiedOther("", value);

				// if there is a value specified with "other" and it is not empty
				if (specificValue.trim() !== "") {
					// add it
					onSelect(value);
				} else {
					// add "Other"
					onSelect("Other");
				}
			}
		} else {
			if (selected === value) {
				onSelect(null);
			} else {
				onSelect(value);
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
				<RadioOption
					{...item}
					selected={
						selected !== null &&
						(selected === item.value || (isOtherOption(item.value) && isOtherOption(selected)))
					}
					onPress={pressHandler}
					isOtherSelected={isOtherSelected}
					autofocusOtherField={autofocusOtherField}
					defaultOtherInputValue={getUserSpecifiedOther(item.value, selected)}
				/>
			)}
			persistentScrollbar={true}
			showsVerticalScrollIndicator={true}
		/>
	);
}
