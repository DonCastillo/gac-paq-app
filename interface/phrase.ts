import type LanguageInterface from "interface/language";

export default interface PhraseInterface {
	id?: number;
	label: string;
	introduction_phrase_id?: number;
	agreement_phrase_id?: number;
	dont_know_phrase_id?: number;
	done_phrase_id?: number;
	try_again_phrase_id?: number;
	languages_id?: LanguageInterface | null;
}
