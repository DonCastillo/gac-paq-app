import type Mode from "constants/mode.enum";
import type Section from "constants/section.enum";
import type Screen from "constants/screen.enum";
import type PageInterface from "interface/page";
import type QuestionDropdownInterface from "interface/question_dropdown";
import type QuestionDropdownLanguageInterface from "interface/question_dropdown_language";
import type {
	ExtroPayloadInterface,
	PagePayloadInterface,
	PreamblePayloadInterface,
	QuestionCheckboxInterface,
	QuestionCheckboxPayloadInterface,
	QuestionDropdownPayloadInterface,
	QuestionDropdownPayloadLanguageInterface,
	QuestionInputPayloadInterface,
	QuestionRadioImagePayloadInterface,
	QuestionRadioPayloadInterface,
	QuestionSliderPayloadInterface,
	QuestionTextareaPayloadInterface,
	SectionPayloadInterface,
} from "interface/payload.type";

export type ModeType = Mode | undefined;
export type SectionType = Section | null;
export type ScreenType = Screen | null;

// introductory pages
export type IntroductoryPageType =
	| PagePayloadInterface
	| QuestionDropdownPayloadInterface
	| QuestionDropdownPayloadLanguageInterface
	| QuestionInputPayloadInterface;
export type IntroductoryPagesType = IntroductoryPageType[];

// question pages
export type QuestionPageType =
	| SectionPayloadInterface
	| PreamblePayloadInterface
	| QuestionCheckboxPayloadInterface
	| QuestionRadioPayloadInterface
	| QuestionSliderPayloadInterface
	| QuestionRadioImagePayloadInterface
	| QuestionCheckboxPayloadInterface
	| ExtroPayloadInterface;
export type QuestionPagesType = QuestionPageType[];

// kid extroductory page
export type KidExtroductoryPageType = SectionPayloadInterface | QuestionRadioPayloadInterface;
export type KidExtroductoryPagesType = KidExtroductoryPageType[];

// adult extroductory page
export type AdultExtroductoryPageType =
	| SectionPayloadInterface
	| QuestionRadioPayloadInterface
	| QuestionCheckboxPayloadInterface;
export type AdultExtroductoryPagesType = AdultExtroductoryPageType[];

// extroductory page
export type ExtroductoryPageType = KidExtroductoryPageType | AdultExtroductoryPageType;
export type ExtroductoryPagesType = ExtroductoryPageType[];

export type FeedbackExtroductoryPageType =
	| QuestionRadioImagePayloadInterface
	| QuestionTextareaPayloadInterface
	| ExtroPayloadInterface;
export type FeedbackExtroductoryPagesType = FeedbackExtroductoryPageType[];

// all pages
export type AllPageType =
	| IntroductoryPageType
	| QuestionPageType
	| ExtroductoryPageType
	| FeedbackExtroductoryPageType;
export type AllPagesType = AllPageType[];

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
