import ScreenType from "constants/screen_type.enum";
import type { PagePayloadInterface } from "interface/payload.type";

const ErrorPage: PagePayloadInterface = {
	ident: "error_page",
	title: "Error Page",
	name: "Error Page",
	type: ScreenType.Page,
	translations: {
		"en-CA": {
			heading: "Error",
			description: "Oh no, Your answers were not sent.\n\nPlease try again. ",
		},
		"es-ES": {
			heading: "Error",
			description: "Oh no, tus respuestas no fueron enviadas.\n\nPor favor, inténtalo de nuevo.",
		},
		"fr-CA": {
			heading: "Erreur",
			description: "Oh non, vos réponses n'ont pas été envoyées.\n\nVeuillez réessayer.",
		},
	},
};

export default ErrorPage;
