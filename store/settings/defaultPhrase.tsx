import PhraseLabel from "constants/phrase_label.enum";

export interface PhraseInterface {
	agreement: string;
	done: string;
	dontKnow: string;
	introduction: string;
	tryAgain: string;
}

const defaultPhrase: PhraseInterface = {
	agreement: PhraseLabel.Agreement,
	done: PhraseLabel.Done,
	dontKnow: PhraseLabel.DontKnow,
	introduction: PhraseLabel.Introduction,
	tryAgain: PhraseLabel.TryAgain,
};

export default defaultPhrase;
