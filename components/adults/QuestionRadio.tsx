import { FlatList } from "react-native";
import RadioOption from "components/adults/subcomponents/RadioOption";
import React, { useContext, useEffect, useState } from "react";
import type QuestionRadioItemInterface from "interface/question_radio_item";
import { SettingContext } from "store/settings";

interface PropsInterface {
	options: QuestionRadioItemInterface[];
	onSelect: (value: string | null) => void;
	selectedValue: string | null;
}

export default function QuestionRadio({
	options,
	onSelect,
	selectedValue,
}: PropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { currentPage } = settingCtx.settingState;
	const [selected, setSelected] = useState<string | null>(selectedValue);
	const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
	const [autofocusOtherField, setAutoFocusOtherField] = useState<boolean>(true);

	useState(() => {
		setAutoFocusOtherField(false);
	});

	useEffect(() => {
		if (selected !== selectedValue) {
			setSelected(selectedValue);
		}
	}, [currentPage, selectedValue]);

	useEffect(() => {
		if (selected?.toString().toLowerCase() === "other") {
			setIsOtherSelected(true);
		} else {
			setIsOtherSelected(false);
		}
	}, [selected]);

	function pressHandler(value: string | null): void {
		if (value?.toString().toLowerCase() === "other") {
			setAutoFocusOtherField(true);
		}

		if (selectedValue === value) {
			onSelect(null);
		} else {
			onSelect(value);
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
					selected={selected !== null && item.value === selected}
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
