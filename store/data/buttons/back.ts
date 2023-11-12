import type ButtonInterface from "../../../interface/button";

const BackButton: ButtonInterface[] = [
	{
		id: 1,
		back_button_id: 1,
		label: "Back",
		languages_id: {
			name: "English - Canada",
			lang_code: "en-CA",
		},
	},
	{
		id: 2,
		back_button_id: 1,
		label: "Volver",
		languages_id: {
			name: "Spanish - Spain",
			lang_code: "es-ES",
		},
	},
	{
		id: 3,
		back_button_id: 1,
		label: "Retour",
		languages_id: {
			name: "French - Canada",
			lang_code: "fr-CA",
		},
	},
];

export default BackButton;
