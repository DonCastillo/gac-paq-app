import PhraseLabel from "@constants/phrase_label.enum";
import type { PhrasePayloadInterface } from "@interface/phrase";

const defaultPhrase: PhrasePayloadInterface = {
	back: PhraseLabel.Back,
	complete: PhraseLabel.Complete,
	done: PhraseLabel.Done,
	dontKnow: PhraseLabel.DontKnow,
	feedback: PhraseLabel.Feedback,
	introduction: PhraseLabel.Introduction,
	next: PhraseLabel.Next,
	specify: PhraseLabel.PleaseSpecify,
	select: PhraseLabel.Select,
	tryAgain: PhraseLabel.TryAgain,
	submit: PhraseLabel.Submit,
	noPendingSubmissions: PhraseLabel.NoPendingSubmissions,
	nothingToSubmit: PhraseLabel.NothingToSubmit,
	pendingSubmissions: PhraseLabel.PendingSubmissions,
	responsesSubmitted: PhraseLabel.ResponsesSubmitted,
};

export default defaultPhrase;
