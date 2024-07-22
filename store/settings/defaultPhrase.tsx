import PhraseLabel from "constants/phrase_label.enum";
import type { PhrasePayloadInterface } from "interface/phrase";

const defaultPhrase: PhrasePayloadInterface = {
	agreement: PhraseLabel.Agreement,
	done: PhraseLabel.Done,
	dontKnow: PhraseLabel.DontKnow,
	introduction: PhraseLabel.Introduction,
	tryAgain: PhraseLabel.TryAgain,
	feedback: PhraseLabel.Feedback,
	select: PhraseLabel.Select,
	specify: PhraseLabel.PleaseSpecify,
};

export default defaultPhrase;
