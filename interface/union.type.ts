import type Mode from "constants/mode.enum";
import type Section from "constants/section.enum";
import type Screen from "constants/screen.enum";
import type SectionPayloadInterface from "interface/directus/section-payload";
import type ExtroPayloadInterface from "interface/directus/extro-payload";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";
import type PageInterface from "interface/page";
import type QuestionDropdownInterface from "interface/question_dropdown";
import type QuestionDropdownLanguageInterface from "interface/question_dropdown_language";
import type {
	PagePayloadInterface,
	QuestionDropdownPayloadInterface,
	QuestionDropdownPayloadLanguageInterface,
	QuestionInputPayloadInterface,
} from "interface/payload.type";

export type ModeType = Mode | undefined;
export type SectionType = Section | null;
export type ScreenType = Screen | null;
export type IntroductoryPagesType = Array<
	| PagePayloadInterface
	| QuestionDropdownPayloadInterface
	| QuestionDropdownPayloadLanguageInterface
	| QuestionInputPayloadInterface
>;
export type FinalResponseType =
	| Record<string, string | string[]>
	| Record<string, Record<string, string | string[]>>;
export type RawPageType =
	| SectionPayloadInterface
	| ExtroPayloadInterface
	| QuestionRadioPayloadInterface
	| QuestionRadioImagePayloadInterface;
export type TranslationArrType =
	| PageInterface[]
	| QuestionDropdownInterface[]
	| QuestionDropdownLanguageInterface[];

export type TranslateFuncType =
	| PageInterface
	| QuestionDropdownInterface
	| QuestionDropdownLanguageInterface
	| null;
