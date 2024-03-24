import { FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import type QuestionRadioItemInterface from "interface/question_radio_item";
import { SettingContext } from "store/settings";
import CheckboxOption from "components/adults/subcomponents/CheckboxOption";

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
		return arr.map((item) => item.toString().toLowerCase()).includes("other");
	}

	function pressHandler(value: string | null): void {
		if (value === "" || value === null || value === undefined) return;

		// activate other field if "other" is selected
		if (value.toString().toLowerCase() === "other") {
			setAutoFocusOtherField(true);
		}

		const tempSelectedValue = initializeSelectedValue();
		if (tempSelectedValue.includes(value)) {
			onSelect(tempSelectedValue.filter((item) => item !== value).join(SEPARATOR));
		} else {
			onSelect([...tempSelectedValue, value].join(SEPARATOR));
		}
	}

	return (
		<FlatList
			removeClippedSubviews={false}
			horizontal={false}
			bounces={false}
			data={[...options, { label: "Other", value: "Other" }]}
			contentContainerStyle={{
				flexGrow: 1,
				justifyContent: "flex-start",
				flexDirection: "column",
				paddingBottom: 20,
			}}
			renderItem={({ item }) => (
				<CheckboxOption
					{...item}
					selected={selected !== null && selected.includes(item.value)}
					onPress={pressHandler}
					isOtherSelected={isOtherSelected}
					autofocusOtherField={autofocusOtherField}
				/>
			)}
			persistentScrollbar={true}
			showsVerticalScrollIndicator={true}
		/>
	);
}
