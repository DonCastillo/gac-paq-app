import React from "react";
import type { Choice, ChoiceIcon, ChoiceImage, LanguageInterface } from "interface/payload.type";
import type { ModeType } from "interface/union.type";
import Mode from "constants/mode.enum";
import { store } from "store/store";
import {
	Household_1_Options,
	Household_4_Options,
	Numbered_Options,
	Outdoors_1_Options,
	School_4_Options,
	School_7_Options,
	Transportation_1_Options,
	Transportation_3_Options,
	Transportation_4_Options,
	Transportation_6_Options,
	Transportation_9_11_Options,
	Work_1_Options,
	Work_3_Options,
} from "store/data/options/others";

const HAS_OTHER_REGEX = /other\s\((.*?)\)/;

export interface OptionInterface {
	text: string;
	value: string;
}

const choiceMode = (choices: Choice[] | ChoiceIcon[], mode: ModeType): Choice[] | ChoiceIcon[] => {
	if (mode === undefined) {
		return choices.map((choice: Choice | ChoiceIcon) => {
			return { ...choice, label: choice.label, value: choice.value };
		});
	}

	const hasTextMode = choices.some((choice) => choice.label_mode !== undefined);
	if (!hasTextMode) {
		return choices.map((choice: Choice | ChoiceIcon) => {
			return { ...choice, label: choice.label, value: choice.value };
		});
	}

	if (mode === Mode.Adult) {
		return choices.map((choice: Choice | ChoiceIcon) => {
			return { ...choice, label: choice.label_mode?.adult ?? choice.label, value: choice.value };
		});
	}

	if (mode === Mode.Kid || mode === Mode.Teen) {
		return choices.map((choice: Choice | ChoiceIcon) => {
			return { ...choice, label: choice.label_mode?.kid ?? choice.label, value: choice.value };
		});
	}

	return choices.map((choice: Choice | ChoiceIcon) => {
		return { ...choice, label: choice.label, value: choice.value };
	});
};

const optionLanguage = (options: LanguageInterface[]): ChoiceIcon[] => {
	return options.map(({ name, lang_code, flag }) => {
		const FlagComponent = flag;
		if (FlagComponent !== null || FlagComponent !== undefined) {
			return {
				label: name,
				value: lang_code,
				icon: () => (
					<FlagComponent
						height={"100%"}
						width={"100%"}
						padding={0}
						margin={0}
					/>
				),
			};
		}
		return {
			label: name,
			value: lang_code,
		};
	});
};

const hasOtherOption = (radioImageOptions: ChoiceImage[]): boolean => {
	return radioImageOptions.some((option) => option.value.toString().toLowerCase() === "other");
};

/**
 *
 * @param value
 * @description Check if the value follows format of "other (xxxxx)"
 * @returns
 */
const isOtherWithSpecifiedValue = (value: string | null): boolean => {
	if (value === null) return false;
	const lowerString = value?.toString().toLowerCase();
	return HAS_OTHER_REGEX.test(lowerString ?? "");
};

/**
 *
 * @param value
 * @description Check if the value is "other" or "other (xxxxx)"
 * @returns boolean
 */
const isOtherOption = (value: string | null): boolean => {
	const lowerString = value?.toString().toLowerCase();
	return isOtherWithSpecifiedValue(value) || lowerString === "other";
};

/**
 *
 * @param selected like ["option1", "option2", "other (xxxxx)"]
 * @description Extract the word from "other (xxxxx)"
 * @returns extracted word from "other (xxxxx)"
 */
const extractUserSpecifiedOtherFromArray = (selected: string[]): string => {
	if (selected === null || selected.length === 0) return "";
	const otherWithSpecifiedValue = selected.find(isOtherWithSpecifiedValue);
	const match = HAS_OTHER_REGEX.exec(otherWithSpecifiedValue ?? "");

	if (match === null) return "";
	return match[1];
};

const getUserSpecifiedOther = (value: string | null, selected: string | null): string => {
	if (value === null) return "";
	if (selected === null) return "";
	if (value === selected) return "";
	const match = HAS_OTHER_REGEX.exec(selected);

	if (match === null) return "";
	return match[1];
};

const optionNumber = (index: number): string => {
	const numbers = store.getState().questions.optionNumbers;
	return numbers[index % numbers.length];
};

const optionOthers = (
	index: number,
	options: Record<string, Record<string, string[]>>,
	language: string,
	mode: ModeType,
	defaultOptions: string[],
): string => {
	let optionMode = "kid_options";
	if (mode === Mode.Kid) {
		optionMode = "kid_options";
	} else if (mode === Mode.Teen) {
		optionMode = "teen_options";
	} else if (mode === Mode.Adult) {
		optionMode = "adult_options";
	} else {
		optionMode = "kid_options";
	}

	const newOptions: Record<string, string[]> = options[language];
	const finalNewOptions: string[] = newOptions?.[optionMode] ?? defaultOptions;
	return finalNewOptions[index % finalNewOptions.length];
};

const optionLetter = (index: number): string => {
	const letters = store.getState().questions.optionLetters;
	const language = store.getState().settings.language;
	const currentPageIdent = store.getState().settings.currentPage.page.ident;
	const mode = store.getState().settings.mode;

	// display numeric labels for some questions in the ma-IN version
	if (language === "ma-IN") {
		let ident = ["school_4"];
		if (ident.includes(currentPageIdent)) {
			return optionOthers(index, School_4_Options, language, mode, letters);
		}

		ident = ["school_7"];
		if (ident.includes(currentPageIdent)) {
			return optionOthers(index, School_7_Options, language, mode, letters);
		}

		ident = ["household_1"];
		if (ident.includes(currentPageIdent)) {
			return optionOthers(index, Household_1_Options, language, mode, letters);
		}

		ident = ["household_4"];
		if (ident.includes(currentPageIdent)) {
			return optionOthers(index, Household_4_Options, language, mode, letters);
		}

		ident = ["transportation_1"];
		if (ident.includes(currentPageIdent)) {
			return optionOthers(index, Transportation_1_Options, language, mode, letters);
		}

		ident = ["transportation_3"];
		if (ident.includes(currentPageIdent)) {
			return optionOthers(index, Transportation_3_Options, language, mode, letters);
		}

		ident = ["transportation_4"];
		if (ident.includes(currentPageIdent)) {
			return optionOthers(index, Transportation_4_Options, language, mode, letters);
		}

		ident = ["transportation_6"];
		if (ident.includes(currentPageIdent)) {
			return optionOthers(index, Transportation_6_Options, language, mode, letters);
		}

		ident = ["transportation_9", "transportation_11"];
		if (ident.includes(currentPageIdent)) {
			return optionOthers(index, Transportation_9_11_Options, language, mode, letters);
		}

		ident = ["outdoors_1"];
		if (ident.includes(currentPageIdent)) {
			return optionOthers(index, Outdoors_1_Options, language, mode, letters);
		}

		ident = ["work_1"];
		if (ident.includes(currentPageIdent)) {
			return optionOthers(index, Work_1_Options, language, mode, letters);
		}

		ident = ["work_3"];
		if (ident.includes(currentPageIdent)) {
			return optionOthers(index, Work_3_Options, language, mode, letters);
		}

		ident = [
			"child_sex_entered_by_parent",
			"child_difficulties",
			"child_ethnicity",
			"parent_ethnicity",
			"relationship_to_the_child",
			"highest_level_of_education",
			"difficulty_to_meet_financial_needs",
		];
		if (ident.includes(currentPageIdent)) {
			return optionOthers(index, Numbered_Options, language, mode, letters);
		}
	}
	return letters[index % letters.length];
};

export {
	optionLanguage,
	hasOtherOption,
	isOtherOption,
	getUserSpecifiedOther,
	isOtherWithSpecifiedValue,
	extractUserSpecifiedOtherFromArray,
	choiceMode,
	optionLetter,
	optionNumber,
};
