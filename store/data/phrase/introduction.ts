import type PhraseInterface from "interface/phrase";

const IntroductionPhrase: PhraseInterface[] = [
	{
		id: 1,
		introduction_phrase_id: 1,
		label: "Introduction",
		languages_id: {
			name: "English - Canada",
			lang_code: "en-CA",
		},
	},
	{
		id: 2,
		introduction_phrase_id: 1,
		label: "Introducción",
		languages_id: {
			name: "Spanish - Spain",
			lang_code: "es-ES",
		},
	},
	{
		id: 3,
		introduction_phrase_id: 1,
		label: "Introduction",
		languages_id: {
			name: "French - Canada",
			lang_code: "fr-CA",
		},
	},
];

export default IntroductionPhrase;
