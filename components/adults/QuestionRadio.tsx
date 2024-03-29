import { FlatList } from "react-native";
import RadioOption from "components/adults/item/RadioOption";
import React, { useContext, useEffect, useState } from "react";
import type QuestionRadioItemInterface from "interface/question_radio_item";
import { SettingContext } from "store/settings";

interface QuestionRadioPropsInterface {
	options: QuestionRadioItemInterface[];
	onSelect: (value: string | null) => void;
	selectedValue: string | null;
}

export default function QuestionRadio({
	options,
	onSelect,
	selectedValue,
}: QuestionRadioPropsInterface): React.ReactElement {
	const settingCtx = useContext(SettingContext);
	const { currentPage } = settingCtx.settingState;
	const [value, setValue] = useState<string | null>(selectedValue);

	function pressHandler(value: string | null): void {
		if (value !== "" && value !== null && value !== undefined) {
			setValue(value);
			onSelect(value);
		} else {
			setValue(null);
			onSelect(null);
		}
	}

	useEffect(() => {
		if (value !== selectedValue) {
			setValue(selectedValue);
		}
	}, [currentPage, selectedValue]);

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
					onPress={pressHandler}
					selected={item.value === value}
				/>
			)}
			persistentScrollbar={true}
			showsVerticalScrollIndicator={true}
		/>
	);
}
