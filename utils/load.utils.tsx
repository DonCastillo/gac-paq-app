import { FlagIcons } from "styles/flags";
import Languages from "store/data/languages";
import { store } from "store/store";
import { addSectionTitle, resetSectionTitles, setPhrases } from "store/settings/settingsSlice";
import PhraseLabel from "constants/phrase_label.enum";
import type { LanguageInterface } from "interface/payload.type";
import { translateSectionHeading } from "./translate.utils";

const loadLanguagesOffline = (): LanguageInterface[] => {
	return Languages.map((language: LanguageInterface) => {
		return {
			...language,
			flag:
				language.flag_code !== "" && language.flag_code !== undefined
					? FlagIcons[language.flag_code.toLowerCase()]
					: null,
		};
	});
};

const loadPhrases = (): void => {
	const backPhrase = store.getState().questions.backPhrase;
	const completePhrase = store.getState().questions.completePhrase;
	const donePhrase = store.getState().questions.donePhrase;
	const dontKnowPhrase = store.getState().questions.dontKnowPhrase;
	const feedbackPhrase = store.getState().questions.feedbackPhrase;
	const introductionPhrase = store.getState().questions.introductionPhrase;
	const nextPhrase = store.getState().questions.nextPhrase;
	const pleaseSpecifyPhrase = store.getState().questions.pleaseSpecifyPhrase;
	const selectPhrase = store.getState().questions.selectPhrase;
	const tryAgainPhrase = store.getState().questions.tryAgainPhrase;
	const submitPhrase = store.getState().questions.submitPhrase;
	const noPendingSubmissionsPhrase = store.getState().questions.noPendingSubmissionsPhrase;
	const nothingToSubmitPhrase = store.getState().questions.nothingToSubmitPhrase;
	const pendingSubmissionsPhrase = store.getState().questions.pendingSubmissionsPhrase;
	const responsesSubmittedPhrase = store.getState().questions.responsesSubmittedPhrase;

	store.dispatch(
		setPhrases({
			back: backPhrase.label ?? PhraseLabel.Back,
			complete: completePhrase.label ?? PhraseLabel.Complete,
			done: donePhrase.label ?? PhraseLabel.Done,
			dontKnow: dontKnowPhrase.label ?? PhraseLabel.DontKnow,
			feedback: feedbackPhrase.label ?? PhraseLabel.Feedback,
			introduction: introductionPhrase.label ?? PhraseLabel.Introduction,
			next: nextPhrase.label ?? PhraseLabel.Next,
			specify: pleaseSpecifyPhrase.label ?? PhraseLabel.PleaseSpecify,
			select: selectPhrase.label ?? PhraseLabel.Select,
			tryAgain: tryAgainPhrase.label ?? PhraseLabel.TryAgain,
			submit: submitPhrase.label ?? PhraseLabel.Submit,
			noPendingSubmissions: noPendingSubmissionsPhrase.label ?? PhraseLabel.NoPendingSubmissions,
			nothingToSubmit: nothingToSubmitPhrase.label ?? PhraseLabel.NothingToSubmit,
			pendingSubmissions: pendingSubmissionsPhrase.label ?? PhraseLabel.PendingSubmissions,
			responsesSubmitted: responsesSubmittedPhrase.label ?? PhraseLabel.ResponsesSubmitted,
		}),
	);
};

const loadSectionTitles = (): void => {
	const phrases = store.getState().settings.phrases;
	const translatedSectionTitles = translateSectionHeading();

	// reset section titles
	store.dispatch(resetSectionTitles());

	// add introduction
	store.dispatch(addSectionTitle({ sectionNumber: 0, sectionTitle: phrases?.introduction }));

	// add the rest of the section titles
	for (const [key, value] of Object.entries(translatedSectionTitles)) {
		store.dispatch(addSectionTitle({ sectionNumber: parseInt(key), sectionTitle: value }));
	}
};

export { loadLanguagesOffline, loadPhrases, loadSectionTitles };
