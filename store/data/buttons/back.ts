import type ButtonInterface from "../../../interface/button";

const BackButton: ButtonInterface[] = [
	{
		id: 1,
		back_button_id: 1,
		label: "Back",
		languages_id: {
			name: "English",
			lang_code: "en-US",
		},
	},
	{
		id: 2,
		back_button_id: 1,
		label: "Volver",
		languages_id: {
			name: "Spanish",
			lang_code: "es-ES",
		},
	},
	{
		id: 3,
		back_button_id: 1,
		label: "Retour",
		languages_id: {
			name: "French",
			lang_code: "fr-FR",
		},
	},
];

export default BackButton;
