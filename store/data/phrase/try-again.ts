import type PhraseInterface from "../../../interface/phrase";

const TryAgainPhrase: PhraseInterface[] = [
	{
		id: 1,
		try_again_phrase_id: 1,
		label: "Try Again",
		languages_id: {
			name: "English - Canada",
			lang_code: "en-CA",
		},
	},
	{
		id: 2,
		try_again_phrase_id: 1,
		label: "Inténtalo de nuevo.",
		languages_id: {
			name: "Spanish - Spain",
			lang_code: "es-ES",
		},
	},
	{
		id: 3,
		try_again_phrase_id: 1,
		label: "Essaye encore",
		languages_id: {
			name: "French - Canada",
			lang_code: "fr-CA",
		},
	},
];

export default TryAgainPhrase;
