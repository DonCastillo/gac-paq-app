import React from "react";
import type LanguageInterface from "interface/language";
import type QuestionRadioItemInterface from "interface/question_radio_item";
import type RegionInterface from "interface/region";
import { type QuestionRadioImageChoiceInterface } from "interface/question_radio_image";

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
						height={50}
						width={50}
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

export { optionText, optionRegion, optionLanguage, hasOtherOption };
