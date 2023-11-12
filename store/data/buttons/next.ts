import type ButtonInterface from "../../../interface/button";

const NextButton: ButtonInterface[] = [
	{
		id: 1,
		next_button_id: 1,
		label: "Next",
		languages_id: {
			name: "English - Canada",
			lang_code: "en-CA",
		},
	},
	{
		id: 2,
		next_button_id: 1,
		label: "Siguiente",
		languages_id: {
			name: "Spanish - Spain",
			lang_code: "es-ES",
		},
	},
	{
		id: 3,
		next_button_id: 1,
		label: "Suivant",
		languages_id: {
			name: "French - Canada",
			lang_code: "fr-CA",
		},
	},
];

export default NextButton;
