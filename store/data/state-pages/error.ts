import ScreenType from "constants/screen_type";
import type PagePayloadInterface from "interface/directus/page-payload";

const ErrorPage: PagePayloadInterface = {
	title: "Error Page",
	name: "Error Page",
	type: ScreenType.Page,
	translations: [
		{
			id: 1,
			pages_id: 1,
			heading: "Error",
			description: "Oh no, Your answers were not sent.\n\nPlease try again. ",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
		{
			id: 2,
			pages_id: 1,
			heading: "Error",
			description: "Oh no, tus respuestas no fueron enviadas.\n\nPor favor, inténtalo de nuevo.",
			languages_id: {
				name: "Spanish - Spain",
				lang_code: "es-ES",
			},
		},
		{
			id: 3,
			pages_id: 1,
			heading: "Erreur",
			description: "Oh non, vos réponses n'ont pas été envoyées.\n\nVeuillez réessayer.",
			languages_id: {
				name: "French - Canada",
				lang_code: "fr-CA",
			},
		},
	],
};

export default ErrorPage;
