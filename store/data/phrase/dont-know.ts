import type PhraseInterface from "../../../interface/phrase";

const DontKnow: PhraseInterface[] = [
	{
		id: 1,
		dont_know_id: 1,
		label: "I don't know",
		languages_id: {
			name: "English - Canada",
			lang_code: "en-CA",
		},
	},
	{
		id: 2,
		dont_know_id: 1,
		label: "No sé",
		languages_id: {
			name: "Spanish - Spain",
			lang_code: "es-ES",
		},
	},
	{
		id: 3,
		dont_know_id: 1,
		label: "Je ne sais pas",
		languages_id: {
			name: "French - Canada",
			lang_code: "fr-CA",
		},
	},
];

export default DontKnow;
