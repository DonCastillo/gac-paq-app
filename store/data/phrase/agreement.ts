import type PhraseInterface from "../../../interface/phrase";

const Agreement: PhraseInterface[] = [
	{
		id: 1,
		agreement_phrase_id: 1,
		label: "Yes, I Understand & Agree. ",
		languages_id: {
			name: "English - Canada",
			lang_code: "en-CA",
		},
	},
	{
		id: 2,
		agreement_phrase_id: 1,
		label: "Sí, entiendo y estoy de acuerdo.",
		languages_id: {
			name: "Spanish - Spain",
			lang_code: "es-ES",
		},
	},
	{
		id: 3,
		agreement_phrase_id: 1,
		label: "Oui, je comprends et j'accepte.",
		languages_id: {
			name: "French - Canada",
			lang_code: "fr-CA",
		},
	},
];

export default Agreement;
