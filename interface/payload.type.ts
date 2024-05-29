import type QuestionType from "constants/question_type.enum";
import type ScreenType from "constants/screen_type.enum";
import type { ImageDeviceInterface } from "interface/images";

export interface Choice {
	text: string;
	value: string;
	text_mode?: {
		kid: string;
		adult: string;
	};
}

export interface ChoiceImage {
	text: string;
	value: string;
	images: {
		kid: string;
		adult: string;
	};
	sublabel?: {
		kid: string;
		adult: string;
	};
	text_mode?: {
		kid: string;
		adult: string;
	};
}

export interface PageInterface {
	heading: string;
	description: string | null;
}

export interface BasePayloadInterface {
	label: string;
	kid_label: string;
	adult_label: string;
	kid_sublabel?: string;
	adult_sublabel?: string;
}

/** Page Block */
export interface QuestionDropdownInterface extends BasePayloadInterface {
	type: QuestionType.QuestionDropdown;
	heading: string;
	choices: Choice[];
	images?: ImageDeviceInterface;
}

export interface QuestionDropdownLanguageInterface extends BasePayloadInterface {
	heading: string;
	images?: ImageDeviceInterface;
}

export interface QuestionInputInterface extends BasePayloadInterface {
	type: QuestionType.QuestionInput;
	heading: string;
	placeholder: string;
	images?: ImageDeviceInterface;
}

export interface QuestionCheckboxInterface extends BasePayloadInterface{
	type: QuestionType.QuestionCheckbox;
	heading: string;
	choices: Choice[];
}

export interface QuestionRadioInterface extends BasePayloadInterface{
	type: QuestionType.QuestionRadio;
	heading: string;
	choices: Choice[];
}

export interface QuestionTextareaInterface extends BasePayloadInterface { 
	type: QuestionType.QuestionTextarea;
	heading: string;
	placeholder?: string;
	images?: ImageDeviceInterface;
}

export interface QuestionRadioImageInterface extends BasePayloadInterface {
	type: QuestionType.QuestionSatisfactionImage;
	heading: string;
	choices: ChoiceImage[];
}

export interface SectionInterface {
	heading: string;
	subheading: string;
	images?: ImageDeviceInterface;
}

export interface ExtroInterface {
	heading: string;
	subheading: string | null;
	images?: ImageDeviceInterface;
}


/** Translations */
export type LangPageInterface = Record<string, PageInterface>;
export type LangQuestionDropdownInterface = Record<string, QuestionDropdownInterface>;
export type LangQuestionDropdownLanguageInterface = Record<string, QuestionDropdownLanguageInterface>;
export type LangQuestionInputInterface = Record<string, QuestionInputInterface>;
export type LangQuestionCheckboxInterface = Record<string, QuestionCheckboxInterface>;
export type LangQuestionRadioInterface = Record<string, QuestionRadioInterface>;
export type LangQuestionTextareaInterface = Record<string, QuestionTextareaInterface>;
export type LangQuestionRadioImageInterface = Record<string, QuestionRadioImageInterface>;
export type LangSectionInterface = Record<string, SectionInterface>;
export type LangExtroInterface = Record<string, ExtroInterface>;

/** Payload */
export interface PagePayloadInterface {
	ident: string;
	title: string;
	name: string;
	type: ScreenType.Page;
	translations: LangPageInterface;
}

export interface QuestionDropdownPayloadInterface {
	ident: string;
	name: string;
	type: ScreenType.SingleQuestion;
	translations: LangQuestionDropdownInterface;
}

export interface QuestionDropdownPayloadLanguageInterface {
	ident: string;
	name: string;
	type: ScreenType.Language;
	translations: LangQuestionDropdownLanguageInterface;
}

export interface QuestionInputPayloadInterface {
	ident: string;
	name: string;
	type: ScreenType.SingleQuestion;
	translations: LangQuestionInputInterface;
}

export interface QuestionCheckboxPayloadInterface {
	ident: string;
	name: string;
	type: ScreenType.SingleQuestion;
	translations: LangQuestionCheckboxInterface;
}

export interface QuestionRadioPayloadInterface {
	ident: string;
	name: string;
	type: ScreenType.SingleQuestion;
	translations: LangQuestionRadioInterface;
}

export interface QuestionTextareaPayloadInterface {
	ident: string;
	name: string;
	type: ScreenType.SingleQuestion;
	translations: LangQuestionTextareaInterface;
}

export interface QuestionRadioImagePayloadInterface {
	ident: string;
	name: string;
	type: ScreenType.SingleQuestion;
	translations: LangQuestionRadioImageInterface;
}


export interface SectionPayloadInterface {
	ident: string;
	heading: string;
	type: ScreenType.IntroQuestion;
	translations: LangSectionInterface;
}

export interface ExtroPayloadInterface {
	ident: string;
	name: string;
	isFinal?: boolean;
	type: ScreenType.ExtroQuestion;
	translations: LangExtroInterface;
}

