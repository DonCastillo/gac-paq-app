import type Mode from "constants/mode.enum";
import type Section from "constants/section.enum";
import type Screen from "constants/screen.enum";
import type PageInterface from "interface/page";
import type {
	ExtroPayloadInterface,
	QuestionDropdownLanguageInterface,
	LangQuestionDropdownLanguageInterface,
	PagePayloadInterface,
	PreamblePayloadInterface,
	QuestionCheckboxPayloadInterface,
	QuestionDropdownPayloadInterface,
	QuestionDropdownPayloadLanguageInterface,
	QuestionInputPayloadInterface,
	QuestionRadioImagePayloadInterface,
	QuestionRadioPayloadInterface,
	QuestionSliderPayloadInterface,
	QuestionTextareaPayloadInterface,
	SectionPayloadInterface,
	LangPageInterface,
	QuestionDropdownInterface,
	LangQuestionDropdownInterface,
	LangQuestionInputInterface,
	LangQuestionCheckboxInterface,
	LangQuestionRadioInterface,
	LangQuestionTextareaInterface,
	LangQuestionRadioImageInterface,
	LangQuestionSliderInterface,
	LangSectionInterface,
	LangPreambleInterface,
	LangExtroInterface,
	QuestionInputInterface,
	QuestionCheckboxInterface,
	QuestionRadioInterface,
	QuestionTextareaInterface,
	QuestionRadioImageInterface,
	QuestionSliderInterface,
	SectionInterface,
	PreambleInterface,
	ExtroInterface,
} from "interface/payload.type";
import type Question from "constants/question.enum";
import type Device from "constants/device.enum";

export type ModeType = Mode | undefined;
export type SectionType = Section | null;
export type ScreenType = Screen | null;
export type QuestionType = Question | null;
export type DeviceType = Device | null;
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

// translations
export type TranslationType =
	| LangPageInterface
	| LangQuestionDropdownInterface
	| LangQuestionDropdownLanguageInterface
	| LangQuestionInputInterface
	| LangQuestionCheckboxInterface
	| LangQuestionRadioInterface
	| LangQuestionTextareaInterface
	| LangQuestionRadioImageInterface
	| LangQuestionSliderInterface
	| LangSectionInterface
	| LangPreambleInterface
	| LangExtroInterface;

// export type TranslatedIntroductoryPageType =
// 	| PageInterface
// 	| QuestionDropdownInterface
// 	| QuestionDropdownLanguageInterface
// 	| QuestionInputInterface;

// export type TranslatedQuestionPageType =
// 	| SectionInterface
// 	| PreambleInterface
// 	| QuestionCheckboxInterface
// 	| QuestionRadioInterface
// 	| QuestionSliderInterface
// 	| QuestionRadioImageInterface
// 	| ExtroInterface;

// export type TranslatedKidExtroductoryPageType = SectionInterface | QuestionRadioInterface;
// export type TranslatedAdultExtroductoryPageType =
// 	| SectionInterface
// 	| QuestionRadioInterface
// 	| QuestionCheckboxInterface;
// export type TranslatedExtroductoryPageType =
// 	| TranslatedKidExtroductoryPageType
// 	| TranslatedAdultExtroductoryPageType;
// export type TranslatedFeedbackExtroductoryPageType =
// 	| QuestionRadioImageInterface
// 	| QuestionTextareaInterface
// 	| ExtroInterface;

export type TranslatedIntroQuestionType =
	| QuestionDropdownInterface
	| QuestionInputInterface
	| QuestionDropdownLanguageInterface;

export type TranslatedQuestionQuestionType =
	| QuestionCheckboxInterface
	| QuestionRadioInterface
	| QuestionSliderInterface
	| QuestionRadioImageInterface
	| QuestionSliderInterface
	| QuestionInputInterface
	| QuestionTextareaInterface;

export type TranslatedPageType =
	| PageInterface
	| QuestionDropdownInterface
	| QuestionDropdownLanguageInterface
	| QuestionInputInterface
	| QuestionCheckboxInterface
	| QuestionRadioInterface
	| QuestionTextareaInterface
	| QuestionRadioImageInterface
	| QuestionSliderInterface
	| SectionInterface
	| PreambleInterface
	| ExtroInterface;

export type FinalResponseType =
	| Record<string, string | string[]>
	| Record<string, Record<string, string | string[]>>;

export type TranslationArrType =
	| PageInterface[]
	| QuestionDropdownInterface[]
	| QuestionDropdownLanguageInterface[];

export type TranslateFuncType =
	| PageInterface
	| QuestionDropdownInterface
	| QuestionDropdownLanguageInterface
	| null;
