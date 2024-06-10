import type Question from "constants/question.enum";
import type Screen from "constants/screen.enum";
import { type ReactElement } from "react";
import { type Image } from "react-native";
import type { ImageDeviceInterface } from "interface/images";
import { type ScreenType, type SectionType, type ModeType, type AllPageType } from "./union.type";
import type { Svg } from "react-native-svg";


export interface Choice {
	label: string;
	value: string;
	label_mode?: {
		kid: string;
		adult: string;
	};
}

export interface ChoiceImage extends Choice {
	image_ident?: string;
	images: {
		kid: string;
		adult: string;
	};
	sublabel?: {
		kid: string;
		adult: string;
	};
}

export interface ChoiceIcon extends Choice {
	icon?: ReactElement<Image> | SVGElement | any;
}

export interface LanguageInterface {
	name: string;
	flag_code?: string;
	lang_code: string;
	flag?: Svg;
}

export interface ResponseInterface {
	ident: string;
	label: string;
	answer: string | null;
	pageNumber: number | null;
	mode: ModeType;
	section: string | null;
	sectionNumber: number | null;
	sectionPageNumber: number | null;
}

export interface PageIndexInterface {
	page: AllPageType;
	pageNumber: number;
	screen: ScreenType;
	section: SectionType;
	sectionNumber: number;
	sectionPageNumber: number;
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
	type: Question.QuestionDropdown;
	heading: string;
	choices: Choice[];
	images?: ImageDeviceInterface;
}

export interface QuestionDropdownLanguageInterface extends BasePayloadInterface {
	type: Question.QuestionLanguage;
	heading: string;
	images?: ImageDeviceInterface;
}

export interface QuestionInputInterface extends BasePayloadInterface {
	type: Question.QuestionInput;
	heading: string;
	placeholder: string;
	images?: ImageDeviceInterface;
}

export interface QuestionCheckboxInterface extends BasePayloadInterface{
	type: Question.QuestionCheckbox;
	heading: string;
	choices: Choice[];
}

export interface QuestionRadioInterface extends BasePayloadInterface{
	type: Question.QuestionRadio;
	heading: string;
	choices: Choice[];
}

export interface QuestionSliderInterface extends BasePayloadInterface{
	type: Question.QuestionSlider;
	heading: string;
	max_value: number;
}


export interface QuestionTextareaInterface extends BasePayloadInterface { 
	type: Question.QuestionTextarea;
	heading: string;
	placeholder: string;
	images?: ImageDeviceInterface;
}

export interface QuestionRadioImageInterface extends BasePayloadInterface {
	type: Question.QuestionSatisfactionImage | Question.QuestionRadioImage;
	heading: string;
	choices: ChoiceImage[];
}

export interface SectionInterface {
	heading: string;
	subheading: string;
	images?: ImageDeviceInterface;
}

export interface PreambleInterface {
	heading: string;
	subheading: string;
	description: {
		kid: string;
		adult: string;
	};
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
export type LangQuestionSliderInterface = Record<string, QuestionSliderInterface>;
export type LangSectionInterface = Record<string, SectionInterface>;
export type LangPreambleInterface = Record<string, PreambleInterface>;
export type LangExtroInterface = Record<string, ExtroInterface>;

/** Payload */
export interface PagePayloadInterface {
	ident: string;
	title: string;
	name: string;
	type: Screen.Page;
	translations: LangPageInterface;
}

export interface QuestionDropdownPayloadInterface {
	ident: string;
	name: string;
	type: Screen.SingleQuestion;
	translations: LangQuestionDropdownInterface;
}

export interface QuestionDropdownPayloadLanguageInterface {
	ident: string;
	name: string;
	type: Screen.Language;
	translations: LangQuestionDropdownLanguageInterface;
}

export interface QuestionInputPayloadInterface {
	ident: string;
	name: string;
	type: Screen.SingleQuestion;
	translations: LangQuestionInputInterface;
}

export interface QuestionCheckboxPayloadInterface {
	ident: string;
	name: string;
	type: Screen.SingleQuestion;
	translations: LangQuestionCheckboxInterface;
}

export interface QuestionRadioPayloadInterface {
	ident: string;
	name: string;
	type: Screen.SingleQuestion;
	translations: LangQuestionRadioInterface;
}

export interface QuestionSliderPayloadInterface {
	ident: string;
	name: string;
	type: Screen.SingleQuestion;
	translations: LangQuestionSliderInterface;
}

export interface QuestionTextareaPayloadInterface {
	ident: string;
	name: string;
	isFinal?: boolean;
	type: Screen.SingleQuestion;
	translations: LangQuestionTextareaInterface;
}

export interface QuestionRadioImagePayloadInterface {
	ident: string;
	name: string;
	isFinal?: boolean;
	type: Screen.SingleQuestion;
	translations: LangQuestionRadioImageInterface;
}

export interface SectionPayloadInterface {
	ident: string;
	heading: string;
	type: Screen.IntroQuestion;
	translations: LangSectionInterface;
}

export interface PreamblePayloadInterface {
	ident: string;
	heading: string;
	type: Screen.Preamble;
	translations: LangPreambleInterface;
}

export interface ExtroPayloadInterface {
	ident: string;
	name: string;
	isFinal?: boolean;
	type: Screen.ExtroQuestion;
	translations: LangExtroInterface;
}



