import React from "react";
import type LanguageInterface from "interface/language";
import type QuestionRadioItemInterface from "interface/question_radio_item";
import type RegionInterface from "interface/region";
import { type QuestionRadioImageChoiceInterface } from "interface/question_radio_image";
const HAS_OTHER_REGEX = /other\s\((.*?)\)/;

export interface OptionInterface {
	text: string;
	value: string;
}

function optionText(options: OptionInterface[]): QuestionRadioItemInterface[] {
	return options.map(({ text, value }) => {
		return { label: text, value };
	});
}

function optionRegion(options: RegionInterface[]): QuestionRadioItemInterface[] {
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

function optionLanguage(options: LanguageInterface[]): QuestionRadioItemInterface[] {
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
	optionRegion,
	optionLanguage,
	hasOtherOption,
	isOtherOption,
	getUserSpecifiedOther,
	isOtherWithSpecifiedValue,
	extractUserSpecifiedOtherFromArray,
};
