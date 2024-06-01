import type LanguageInterface from "interface/language";
import { FlagIcons } from "styles/flags";
import Regions from "store/data/regions";
import Languages from "store/data/languages";
import { store } from "store/store";
import { setButtons, setPhrases } from "store/settings/settingsSlice";
import { translateButton, translatePhrase } from "./translate.utils";
import ButtonLabel from "constants/button_label.enum";
import PhraseLabel from "constants/phrase_label.enum";
import type { RegionInterface } from "interface/payload.type";

const loadRegionsOffline = (): RegionInterface[] => {
	return Regions.map((region: RegionInterface) => {
		return {
			...region,
			flag: region.code !== "" ? FlagIcons[region.code.toLowerCase()] : null,
		};
	});
};

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
	const language = store.getState().settings.language ?? "en-CA";
	const backButton = store.getState().questions.backButton;
	const completeButton = store.getState().questions.completeButton;
	const continueButton = store.getState().questions.continueButton;
	const goButton = store.getState().questions.goButton;
	const nextButton = store.getState().questions.nextButton;
	const startedButton = store.getState().questions.startedButton;

	store.dispatch(
		setButtons({
			back: translateButton(backButton, language) ?? ButtonLabel.Back,
			complete: translateButton(completeButton, language) ?? ButtonLabel.Complete,
			continue: translateButton(continueButton, language) ?? ButtonLabel.Continue,
			go: translateButton(goButton, language) ?? ButtonLabel.Go,
			next: translateButton(nextButton, language) ?? ButtonLabel.Next,
			started: translateButton(startedButton, language) ?? ButtonLabel.Started,
		}),
	);
};

const loadPhrases = (): void => {
	const language = store.getState().settings.language ?? "en-CA";
	const agreementPhrase = store.getState().questions.agreementPhrase;
	const donePhrase = store.getState().questions.donePhrase;
	const dontKnowPhrase = store.getState().questions.dontKnowPhrase;
	const introductionPhrase = store.getState().questions.introductionPhrase;
	const tryAgainPhrase = store.getState().questions.tryAgainPhrase;

	store.dispatch(
		setPhrases({
			agreement: translatePhrase(agreementPhrase, language) ?? PhraseLabel.Agreement,
			done: translatePhrase(donePhrase, language) ?? PhraseLabel.Done,
			dontKnow: translatePhrase(dontKnowPhrase, language) ?? PhraseLabel.DontKnow,
			introduction: translatePhrase(introductionPhrase, language) ?? PhraseLabel.Introduction,
			tryAgain: translatePhrase(tryAgainPhrase, language) ?? PhraseLabel.TryAgain,
		}),
	);
};

export { loadRegionsOffline, loadLanguagesOffline, loadButtons, loadPhrases };
