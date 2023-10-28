import { FlatList } from "react-native";
import QuestionRadioItemInterface from "../../interface/question_radio_item";
import RadioOption from "./item/RadioOption";
import { useState } from "react";

export default function QuestionRadio({ options, onSelect }) {
	const [selectedValue, setSelectedValue] = useState(null);

	function pressHandler(value: string) {
		setSelectedValue(value);
		onSelect(value);
	}

	return (
		<FlatList
			data={options}
			renderItem={({ item }) => (
				<RadioOption
					{...item}
					onPress={pressHandler}
					selected={item.value === selectedValue}
				/>
			)}
			persistentScrollbar={true}
			showsVerticalScrollIndicator={true}
		/>
	);
}
