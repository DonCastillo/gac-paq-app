import ScreenType from "../../../constants/screen_type";
import type PagePayloadInterface from "../../../interface/directus/page-payload";

const GreatJobPage: PagePayloadInterface = {
	title: "Great Job",
	name: "Great Job",
	type: ScreenType.Page,
	translations: [
		{
			id: 7,
			pages_id: 3,
			heading: "Great Job",
			button_text: "Let's get started",
			description: null,
			languages_id: {
				name: "English",
				lang_code: "en-US",
			},
		},
		{
			id: 8,
			pages_id: 3,
			heading: " ¡Excelente trabajo!",
			button_text: "¡Comencemos!",
			description: null,
			languages_id: {
				name: "Spanish",
				lang_code: "es-ES",
			},
		},
		{
			id: 9,
			pages_id: 3,
			heading: "Excellent travail",
			button_text: "Commençons!",
			description: null,
			languages_id: {
				name: "French",
				lang_code: "fr-FR",
			},
		},
	],
};

export default GreatJobPage;
