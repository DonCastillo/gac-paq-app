import type Mode from "constants/mode.enum";
import type Section from "constants/section.enum";
import type Screen from "constants/screen.enum";
import type {
	ExtroPayloadInterface,
	QuestionDropdownLanguageInterface,
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
	QuestionDropdownInterface,
	QuestionInputInterface,
	QuestionCheckboxInterface,
	QuestionRadioInterface,
	QuestionTextareaInterface,
	QuestionRadioImageInterface,
	QuestionSliderInterface,
	LangPagePayloadInterface,
	LangQuestionDropdownPayloadInterface,
	LangQuestionDropdownPayloadLanguageInterface,
	LangQuestionInputPayloadInterface,
	LangSectionPayloadInterface,
	LangQuestionRadioPayloadInterface,
	LangQuestionCheckboxPayloadInterface,
	LangQuestionRadioImagePayloadInterface,
	LangQuestionTextareaPayloadInterface,
	LangExtroPayloadInterface,
	LangPreamblePayloadInterface,
	LangQuestionSliderPayloadInterface,
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

export type LangIntroductoryPageType =
	| LangPagePayloadInterface
	| LangQuestionDropdownPayloadInterface
	| LangQuestionDropdownPayloadLanguageInterface
	| LangQuestionInputPayloadInterface;
export type LangIntroductoryPagesType = LangIntroductoryPageType[];

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

export type LangQuestionPageType =
	| LangSectionPayloadInterface
	| LangPreamblePayloadInterface
	| LangQuestionRadioPayloadInterface
	| LangQuestionSliderPayloadInterface
	| LangQuestionRadioImagePayloadInterface
	| LangQuestionCheckboxPayloadInterface
	| LangExtroPayloadInterface;
export type LangQuestionPagesType = LangQuestionPageType[];

// kid extroductory page
export type KidExtroductoryPageType = SectionPayloadInterface | QuestionRadioPayloadInterface;
export type KidExtroductoryPagesType = KidExtroductoryPageType[];

export type LangKidExtroductoryPageType =
	| LangSectionPayloadInterface
	| LangQuestionRadioPayloadInterface;
export type LangKidExtroductoryPagesType = LangKidExtroductoryPageType[];

// adult extroductory page
export type AdultExtroductoryPageType =
	| SectionPayloadInterface
	| QuestionRadioPayloadInterface
	| QuestionCheckboxPayloadInterface;
export type AdultExtroductoryPagesType = AdultExtroductoryPageType[];

export type LangAdultExtroductoryPageType =
	| LangSectionPayloadInterface
	| LangQuestionRadioPayloadInterface
	| LangQuestionCheckboxPayloadInterface;
export type LangAdultExtroductoryPagesType = LangAdultExtroductoryPageType[];

// extroductory page
export type ExtroductoryPageType = KidExtroductoryPageType | AdultExtroductoryPageType;
export type ExtroductoryPagesType = ExtroductoryPageType[];

export type FeedbackExtroductoryPageType =
	| QuestionRadioImagePayloadInterface
	| QuestionTextareaPayloadInterface
	| ExtroPayloadInterface;
export type FeedbackExtroductoryPagesType = FeedbackExtroductoryPageType[];

export type LangFeedbackExtroductoryPageType =
	| LangQuestionRadioImagePayloadInterface
	| LangQuestionTextareaPayloadInterface
	| LangExtroPayloadInterface;
export type LangFeedbackExtroductoryPagesType = LangFeedbackExtroductoryPageType[];

// all pages
export type AllPageType =
	| IntroductoryPageType
	| QuestionPageType
	| ExtroductoryPageType
	| FeedbackExtroductoryPageType;
export type AllPagesType = AllPageType[];

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

export type FinalResponseType =
	| Record<string, string | string[]>
	| Record<string, Record<string, string | string[]>>;
