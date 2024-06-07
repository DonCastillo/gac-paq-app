export interface PhraseInterface {
	label: string;
}

export type LangPhraseInterface = Record<string, PhraseInterface>;

export interface PhrasePayloadInterface {
	agreement: string;
	done: string;
	dontKnow: string;
	introduction: string;
	tryAgain: string;
}
