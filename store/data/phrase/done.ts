import type PhraseInterface from "../../../interface/phrase";

const Introduction: PhraseInterface[] = [
	{
		id: 1,
		done_id: 1,
		label: "Done",
		languages_id: {
			name: "English - Canada",
			lang_code: "en-CA",
		},
	},
	{
		id: 2,
		done_id: 1,
		label: "Hecho",
		languages_id: {
			name: "Spanish - Spain",
			lang_code: "es-ES",
		},
	},
	{
		id: 3,
		done_id: 1,
		label: "Terminé",
		languages_id: {
			name: "French - Canada",
			lang_code: "fr-CA",
		},
	},
];

export default Introduction;
