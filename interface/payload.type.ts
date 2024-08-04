import type Question from "constants/question.enum";
import type Screen from "constants/screen.enum";
import { type ReactElement } from "react";
import { type Image } from "react-native";
import { type ScreenType, type SectionType, type ModeType, type AllPageType } from "./union.type";
import type { Svg } from "react-native-svg";


export interface Choice {
	label: string;
	value: string;
	label_mode?: {
		kid: string;
		adult: string;
	};
	sublabel?: {
		kid: string;
		adult: string;
	};
}

export interface ChoiceImage extends Choice {
	image_ident: string;
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
	description_mode?: {
		kid: string;
		adult: string;
	}
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
}

export interface QuestionDropdownLanguageInterface extends BasePayloadInterface {
	type: Question.QuestionLanguage;
	heading: string;
}

export interface QuestionInputInterface extends BasePayloadInterface {
	type: Question.QuestionInput;
	heading: string;
	placeholder: string;
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
}

export interface QuestionRadioImageInterface extends BasePayloadInterface {
	type: Question.QuestionSatisfactionImage | Question.QuestionRadioImage;
	heading: string;
	choices: ChoiceImage[];
}

export interface SectionInterface {
	heading: string;
	subheading: string;
}

export interface PreambleInterface {
	heading: string;
	subheading: string;
	description: {
		kid: string;
		adult: string;
	};
}

export interface ExtroInterface {
	heading: string;
	subheading: string | null;
}


/** Payload */
export interface BasePagePayloadInterface {
	ident: string;
	title: string;
	name: string;
	audio_ident?: string;
	type: Screen.Page;
}

// question dropdown payload
export interface BaseQuestionDropdownPayloadInterface {
	ident: string;
	name: string;
	audio_ident?: string;
	column_name: string;
	type: Screen.SingleQuestion;
}

// question dropdown language payload
export interface BaseQuestionDropdownPayloadLanguageInterface {
	ident: string;
	name: string;
	column_name: string;
	type: Screen.Language;
}

// question input payload
export interface BaseQuestionInputPayloadInterface {
	ident: string;
	name: string;
	audio_ident?: string;
	column_name: string;
	type: Screen.SingleQuestion;
}

// question checkbox payload
export interface BaseQuestionCheckboxPayloadInterface {
	ident: string;
	name: string;
	audio_ident?: string;
	column_name: string;
	type: Screen.SingleQuestion;
}

// question radio payload
export interface BaseQuestionRadioPayloadInterface {
	ident: string;
	name: string;
	audio_ident?: string;
	column_name: string;
	type: Screen.SingleQuestion;
}

// question slider payload
export interface BaseQuestionSliderPayloadInterface {
	ident: string;
	name: string;
	audio_ident?: string;
	column_name: string;
	type: Screen.SingleQuestion;
}

// question textarea payload
export interface BaseQuestionTextareaPayloadInterface {
	ident: string;
	name: string;
	audio_ident?: string;
	column_name: string;
	isFinal?: boolean;
	type: Screen.SingleQuestion;
}

// question radio image payload
export interface BaseQuestionRadioImagePayloadInterface {
	ident: string;
	name: string;
	audio_ident?: string;
	column_name: string;
	isFinal?: boolean;
	type: Screen.SingleQuestion;
}

// section payload
export interface BaseSectionPayloadInterface {
	ident: string;
	heading: string;
	type: Screen.IntroQuestion;
}

// preamble payload
export interface BasePreamblePayloadInterface {
	ident: string;
	heading: string;
	audio_ident?: string;
	type: Screen.Preamble;
}

// extro payload
interface BaseExtroPayloadInterface {
	ident: string;
	name: string;
	isFinal?: boolean;
	type: Screen.ExtroQuestion;
}

export interface PagePayloadInterface extends BasePagePayloadInterface {
	translations: PageInterface;
}

export interface LangPagePayloadInterface extends BasePagePayloadInterface {
	translations: Record<string, PageInterface>;
}

export interface QuestionDropdownPayloadInterface extends BaseQuestionDropdownPayloadInterface {
	translations: QuestionDropdownInterface;
}

export interface LangQuestionDropdownPayloadInterface extends BaseQuestionDropdownPayloadInterface {
	translations: Record<string, QuestionDropdownInterface>;
}

export interface QuestionDropdownPayloadLanguageInterface extends BaseQuestionDropdownPayloadLanguageInterface {
	translations: QuestionDropdownLanguageInterface;
}

export interface LangQuestionDropdownPayloadLanguageInterface extends BaseQuestionDropdownPayloadLanguageInterface {
	translations: Record<string, QuestionDropdownLanguageInterface>;
}

export interface QuestionInputPayloadInterface extends BaseQuestionInputPayloadInterface {
	translations: QuestionInputInterface;
}

export interface LangQuestionInputPayloadInterface extends BaseQuestionInputPayloadInterface {
	translations: Record<string, QuestionInputInterface>;
}

export interface QuestionCheckboxPayloadInterface extends BaseQuestionCheckboxPayloadInterface {
	translations: QuestionCheckboxInterface;
}

export interface LangQuestionCheckboxPayloadInterface extends BaseQuestionCheckboxPayloadInterface {
	translations: Record<string, QuestionCheckboxInterface>;
}

export interface QuestionRadioPayloadInterface extends BaseQuestionRadioPayloadInterface {
	translations: QuestionRadioInterface;
}

export interface LangQuestionRadioPayloadInterface extends BaseQuestionRadioPayloadInterface {
	translations: Record<string, QuestionRadioInterface>;
}

export interface QuestionSliderPayloadInterface extends BaseQuestionSliderPayloadInterface {
	translations: QuestionSliderInterface;
}

export interface LangQuestionSliderPayloadInterface extends BaseQuestionSliderPayloadInterface {
	translations: Record<string, QuestionSliderInterface>;
}

export interface QuestionTextareaPayloadInterface extends BaseQuestionTextareaPayloadInterface {
	translations: QuestionTextareaInterface;
}

export interface LangQuestionTextareaPayloadInterface extends BaseQuestionTextareaPayloadInterface {
	translations: Record<string, QuestionTextareaInterface>;
}

export interface QuestionRadioImagePayloadInterface extends BaseQuestionRadioImagePayloadInterface {
	translations: QuestionRadioImageInterface;
}

export interface LangQuestionRadioImagePayloadInterface extends BaseQuestionRadioImagePayloadInterface {
	translations: Record<string, QuestionRadioImageInterface>;
}

export interface SectionPayloadInterface extends BaseSectionPayloadInterface {
	translations: SectionInterface;
}

export interface LangSectionPayloadInterface extends BaseSectionPayloadInterface {
	translations: Record<string, SectionInterface>;
}

export interface PreamblePayloadInterface extends BasePreamblePayloadInterface {
	translations: PreambleInterface;
}

export interface LangPreamblePayloadInterface extends BasePreamblePayloadInterface {
	translations: Record<string, PreambleInterface>;
}

export interface ExtroPayloadInterface extends BaseExtroPayloadInterface {
	translations: ExtroInterface;
}

export interface LangExtroPayloadInterface extends BaseExtroPayloadInterface {
	translations: Record<string, ExtroInterface>;
}
