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
export type IntroductoryPagesType = Array<
	| PagePayloadInterface
	| QuestionDropdownPayloadInterface
	| QuestionDropdownPayloadLanguageInterface
	| QuestionInputPayloadInterface
>;
export type QuestionPagesType = Array<
	| SectionPayloadInterface
	| PreamblePayloadInterface
	| QuestionCheckboxInterface
	| QuestionRadioPayloadInterface
	| QuestionSliderPayloadInterface
	| QuestionRadioImagePayloadInterface
	| QuestionCheckboxPayloadInterface
	| ExtroPayloadInterface
>;
export type KidExtroductoryPagesType = Array<
	SectionPayloadInterface | QuestionRadioPayloadInterface
>;
export type AdultExtroductoryPagesType = Array<
	SectionPayloadInterface | QuestionRadioPayloadInterface | QuestionCheckboxPayloadInterface
>;
export type ExtroductoryPagesType = Array<KidExtroductoryPagesType | AdultExtroductoryPagesType>;
export type FeedbackExtroductoryPagesType = Array<
	QuestionRadioImagePayloadInterface | QuestionTextareaPayloadInterface | ExtroPayloadInterface
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
