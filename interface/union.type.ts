import type Mode from "constants/mode";
import type SectionPayloadInterface from "interface/directus/section-payload";
import type ExtroPayloadInterface from "interface/directus/extro-payload";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";

export type ModeType = Mode.Adult | Mode.Teen | Mode.Kid | undefined;
export type RawPageType =
	| SectionPayloadInterface
	| ExtroPayloadInterface
	| QuestionRadioPayloadInterface
	| QuestionRadioImagePayloadInterface;
