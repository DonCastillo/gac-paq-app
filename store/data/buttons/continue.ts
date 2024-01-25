import type ButtonInterface from "interface/button";

const ContinueButton: ButtonInterface[] = [
	{
		id: 1,
		continue_button_id: 1,
		label: "Continue",
		languages_id: {
			name: "English - Canada",
			lang_code: "en-CA",
		},
	},
	{
		id: 2,
		continue_button_id: 1,
		label: "Continuar",
		languages_id: {
			name: "Spanish - Spain",
			lang_code: "es-ES",
		},
	},
	{
		id: 3,
		continue_button_id: 1,
		label: "Continuer",
		languages_id: {
			name: "French - Canada",
			lang_code: "fr-CA",
		},
	},
];

export default ContinueButton;
