import { FlatList } from "react-native";
import PropTypes from "prop-types";
import RadioOption from "./item/RadioOption";
import React, { useState } from "react";

QuestionRadio.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		}),
	).isRequired,
	onSelect: PropTypes.func.isRequired,
};

export default function QuestionRadio({ options, onSelect }): React.ReactElement {
	const [selectedValue, setSelectedValue] = useState<string | null>(null);

	function pressHandler(value: string): void {
		if (value !== "") {
			setSelectedValue(value);
			onSelect(value);
		}
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
