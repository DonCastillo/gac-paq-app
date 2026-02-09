import { GeneralStyle } from "@/styles/general";
import { getOptionSubLabel } from "@/utils/background.utils";
import { adjustWritingDirection } from "@/utils/style";
import Mode from "@constants/mode.enum";
import Section from "@constants/section.enum";
import type { Choice, ChoiceIcon } from "@interface/payload.type";
import { getCurrentPage, getMode } from "@store/settings/settingsSlice";
import { getUserSpecifiedOther, isOtherOption, isOtherWithSpecifiedValue, optionLetter } from "@utils/options.utils";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FlatListContainer from "../FlatListContainer";
import RadioOption from "./subcomponents/RadioOption";

interface PropsInterface {
	options: ChoiceIcon[] | Choice[];
	onSelect: (value: string | null) => void;
	selectedValue: string | null;
	enableRessetingValue?: boolean;
}

const QuestionRadio = ({ options, onSelect, selectedValue, enableRessetingValue = true }: PropsInterface): React.ReactElement => {
	const currentPage = useSelector(getCurrentPage);
	let mode = useSelector(getMode);
	const [selected, setSelected] = useState<string | null>(selectedValue);
	const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);

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

	const getLabel = (index: number, label: string): string => {
		return currentPage.section === Section.Question ||
			currentPage.section === Section.Extro ||
			currentPage.section === Section.Gshs ||
			currentPage.section === Section.Hbsc
			? `${optionLetter(index)}.  ${label}`
			: label;
	};

	const pressHandler = (value: string | null): void => {
		console.log("inside pressHandler, value:", value);
		if (value === "" || value === null || value === undefined) return;

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
				if (enableRessetingValue) {
					onSelect(null);
				} else {
					onSelect(value);
				}
			} else {
				onSelect(value);
			}
		}
	};

	// if on Mode page, set mode to Kid to enable getOptionSublabel
	if (currentPage.page.ident === "mode") {
		mode = Mode.Kid;
	}

	return (
		<FlatListContainer
			removeClippedSubviews={false}
			horizontal={false}
			bounces={false}
			data={[...options]}
			contentContainerStyle={{
				flexGrow: 1,
				justifyContent: "flex-start",
				flexDirection: "column",
				direction: adjustWritingDirection(),
			}}
			renderItem={({ item, index }) => (
				<RadioOption
					{...item}
					label={getLabel(index, item.label)}
					value={item.value}
					selected={selected !== null && (selected === item.value || (isOtherOption(item.value) && isOtherOption(selected)))}
					onPress={pressHandler}
					isOtherSelected={isOtherSelected}
					defaultOtherInputValue={getUserSpecifiedOther(item.value, selected)}
					optionSublabel={getOptionSubLabel(item.sublabel, mode) ?? undefined}
				/>
			)}
			persistentScrollbar={true}
			showsVerticalScrollIndicator={true}
			scrollContainerStyle={GeneralStyle.adult.flatListScrollContainer}
			scrollIndicatorStyle={GeneralStyle.adult.flatListScrollIndicator}
		/>
	);
};

export default QuestionRadio;
