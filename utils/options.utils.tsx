import React from "react";
import { type QuestionRadioImageChoiceInterface } from "interface/question_radio_image";
import type { ChoiceInterface } from "interface/question_checkbox";
import type { ChoiceIcon, RegionInterface, LanguageInterface } from "interface/payload.type";
import type { ModeType } from "interface/union.type";
import Mode from "constants/mode.enum";

const HAS_OTHER_REGEX = /other\s\((.*?)\)/;

export interface OptionInterface {
	text: string;
	value: string;
}

function optionTextMode(options: ChoiceInterface[], mode: ModeType): ChoiceInterface[] {
	if (mode === undefined) {
		return options;
	}

	const hasTextMode = options.some((option) => option.text_mode !== undefined);
	if (!hasTextMode) {
		return options;
	}

	if (mode === Mode.Adult) {
		return options.map((option) => {
			return { text: option.text_mode?.adult ?? option.text, value: option.value };
		});
	}

	if (mode === Mode.Kid || mode === Mode.Teen) {
		return options.map((option) => {
			return { text: option.text_mode?.kid ?? option.text, value: option.value };
		});
	}

	return options;
}

function optionRadioItemMode(options: ChoiceInterface[], mode: ModeType): ChoiceIcon[] {
	if (mode === undefined) {
		return options.map((option) => {
			return { ...option, label: option.text, value: option.value };
		});
	}

	const hasTextMode = options.some((option) => option.text_mode !== undefined);
	if (!hasTextMode) {
		return options.map((option) => {
			return { ...option, label: option.text, value: option.value };
		});
	}

	if (mode === Mode.Adult) {
		return options.map((option) => {
			return { ...option, label: option.text_mode?.adult ?? option.text, value: option.value };
		});
	}

	if (mode === Mode.Kid || mode === Mode.Teen) {
		return options.map((option) => {
			return { ...option, label: option.text_mode?.kid ?? option.text, value: option.value };
		});
	}

	return options.map((option) => {
		return { ...option, label: option.text, value: option.value };
	});
}

function optionText(options: OptionInterface[]): ChoiceIcon[] {
	return options.map(({ text, value }) => {
		return { label: text, value };
	});
}

function optionRegion(options: RegionInterface[]): ChoiceIcon[] {
	return options.map(({ title, code, flag }) => {
		const FlagComponent = flag;
		if (FlagComponent !== null || FlagComponent !== undefined) {
			return {
				label: title,
				value: title,
				icon: () => (
					<FlagComponent
						height={50}
						width={50}
						padding={0}
						margin={0}
					/>
				),
			};
		}
		return {
			label: title,
			value: title,
		};
	});
}

function optionLanguage(options: LanguageInterface[]): ChoiceIcon[] {
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
}

function hasOtherOption(radioImageOptions: QuestionRadioImageChoiceInterface[]): boolean {
	return radioImageOptions.some(
		(option) => option.image_choices_id.value.toString().toLowerCase() === "other",
	);
}

/**
 *
 * @param value
 * @description Check if the value follows format of "other (xxxxx)"
 * @returns
 */
function isOtherWithSpecifiedValue(value: string | null): boolean {
	if (value === null) return false;
	const lowerString = value?.toString().toLowerCase();
	return HAS_OTHER_REGEX.test(lowerString ?? "");
}

/**
 *
 * @param value
 * @description Check if the value is "other" or "other (xxxxx)"
 * @returns boolean
 */
function isOtherOption(value: string | null): boolean {
	const lowerString = value?.toString().toLowerCase();
	return isOtherWithSpecifiedValue(value) || lowerString === "other";
}

/**
 *
 * @param selected like ["option1", "option2", "other (xxxxx)"]
 * @description Extract the word from "other (xxxxx)"
 * @returns extracted word from "other (xxxxx)"
 */
function extractUserSpecifiedOtherFromArray(selected: string[]): string {
	if (selected === null || selected.length === 0) return "";
	const otherWithSpecifiedValue = selected.find(isOtherWithSpecifiedValue);
	const match = HAS_OTHER_REGEX.exec(otherWithSpecifiedValue ?? "");

	if (match === null) return "";
	return match[1];
}

function getUserSpecifiedOther(value: string | null, selected: string | null): string {
	if (value === null) return "";
	if (selected === null) return "";
	if (value === selected) return "";
	const match = HAS_OTHER_REGEX.exec(selected);

	if (match === null) return "";
	return match[1];
}

export {
	optionText,
	optionTextMode,
	optionRegion,
	optionLanguage,
	hasOtherOption,
	isOtherOption,
	getUserSpecifiedOther,
	isOtherWithSpecifiedValue,
	extractUserSpecifiedOtherFromArray,
	optionRadioItemMode,
};
