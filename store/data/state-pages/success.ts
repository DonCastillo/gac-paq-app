import ScreenType from "constants/screen_type";
import type PagePayloadInterface from "../../../interface/directus/page-payload";

const SuccessPage: PagePayloadInterface = {
	title: "Success Page",
	name: "Success Page",
	type: ScreenType.Page,
	translations: [
		{
			id: 1,
			pages_id: 1,
			heading: "Success!",
			description:
				"Good Job, You finished the Questionnaire. Your answers have been sent successfully.\n\nThank you for your help!",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
		{
			id: 2,
			pages_id: 1,
			heading: "Éxito!",
			description:
				"Buen trabajo. Has terminado el cuestionario. Tus respuestas se han enviado correctamente.\n\nGracias por tu ayuda.",
			languages_id: {
				name: "Spanish - Spain",
				lang_code: "es-ES",
			},
		},
		{
			id: 3,
			pages_id: 1,
			heading: "Succès!",
			description:
				"Bon travail. Vous avez terminé le questionnaire. Vos réponses ont été envoyées avec succès.\n\nMerci pour votre aide.",
			languages_id: {
				name: "French - Canada",
				lang_code: "fr-CA",
			},
		},
	],
};

export default SuccessPage;
