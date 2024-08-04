import { FlagIcons } from "styles/flags";
import Languages from "store/data/languages";
import { store } from "store/store";
import { setButtons, setPhrases } from "store/settings/settingsSlice";
import ButtonLabel from "constants/button_label.enum";
import PhraseLabel from "constants/phrase_label.enum";
import type { LanguageInterface } from "interface/payload.type";

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

const loadButtons = (): void => {
	const backButton = store.getState().questions.backButton;
	const completeButton = store.getState().questions.completeButton;
	const continueButton = store.getState().questions.continueButton;
	const goButton = store.getState().questions.goButton;
	const nextButton = store.getState().questions.nextButton;
	const startedButton = store.getState().questions.startedButton;

	store.dispatch(
		setButtons({
			back: backButton.label ?? ButtonLabel.Back,
			complete: completeButton.label ?? ButtonLabel.Complete,
			continue: continueButton.label ?? ButtonLabel.Continue,
			go: goButton.label ?? ButtonLabel.Go,
			next: nextButton.label ?? ButtonLabel.Next,
			started: startedButton.label ?? ButtonLabel.Started,
		}),
	);
};

const loadPhrases = (): void => {
	const agreementPhrase = store.getState().questions.agreementPhrase;
	const donePhrase = store.getState().questions.donePhrase;
	const dontKnowPhrase = store.getState().questions.dontKnowPhrase;
	const introductionPhrase = store.getState().questions.introductionPhrase;
	const tryAgainPhrase = store.getState().questions.tryAgainPhrase;
	const feedbackPhrase = store.getState().questions.feedbackPhrase;
	const selectPhrase = store.getState().questions.selectPhrase;
	const pleaseSpecifyPhrase = store.getState().questions.pleaseSpecifyPhrase;

	store.dispatch(
		setPhrases({
			agreement: agreementPhrase.label ?? PhraseLabel.Agreement,
			done: donePhrase.label ?? PhraseLabel.Done,
			dontKnow: dontKnowPhrase.label ?? PhraseLabel.DontKnow,
			introduction: introductionPhrase.label ?? PhraseLabel.Introduction,
			tryAgain: tryAgainPhrase.label ?? PhraseLabel.TryAgain,
			feedback: feedbackPhrase.label ?? PhraseLabel.Feedback,
			select: selectPhrase.label ?? PhraseLabel.Select,
			specify: pleaseSpecifyPhrase.label ?? PhraseLabel.PleaseSpecify,
		}),
	);
};

export { loadLanguagesOffline, loadButtons, loadPhrases };
