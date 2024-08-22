export interface PhraseInterface {
	label: string;
}

export type LangPhraseInterface = Record<string, PhraseInterface>;

export interface PhrasePayloadInterface {
	back: string;
	complete: string;
	done: string;
	dontKnow: string;
	feedback: string;
	introduction: string;
	next: string;
	specify: string;
	select: string;
	tryAgain: string;
}
