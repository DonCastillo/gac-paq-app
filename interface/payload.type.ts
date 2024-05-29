import type QuestionType from "constants/question_type.enum";
import type ScreenType from "constants/screen_type.enum";
import type { ImageDeviceInterface } from "interface/images";

export interface Choice {
	text: string;
	value: string;
}

export interface PageInterface {
	heading: string;
	description: string | null;
}

/** Page Block */
export interface QuestionDropdownInterface {
	type: QuestionType.QuestionDropdown;
	heading: string;
	label: string;
	kid_label: string;
	adult_label: string;
	kid_sublabel?: string;
	adult_sublabel?: string;
	choices: Choice[];
	images?: ImageDeviceInterface;
}

export interface QuestionDropdownLanguageInterface {
	heading: string;
	label: string;
	kid_label: string;
	adult_label: string;
	kid_sublabel?: string;
	adult_sublabel?: string;
	images?: ImageDeviceInterface;
}

/** Translations */
export type LangPageInterface = Record<string, PageInterface>;
export type LangQuestionDropdownInterface = Record<string, QuestionDropdownInterface>;
export type LangQuestionDropdownLanguageInterface = Record<
	string,
	QuestionDropdownLanguageInterface
>;

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
