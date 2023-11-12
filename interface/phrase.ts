import type LanguageInterface from "./language";

export default interface PhraseInterface {
	id?: number;
	label: string;
	introduction_phrase_id?: number;
	agreement_phrase_id?: number;
	dont_know_id?: number;
	languages_id?: LanguageInterface | null;
}
