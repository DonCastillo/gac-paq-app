import Screen from "constants/screen.enum";
import type { PagePayloadInterface } from "interface/payload.type";

const SuccessPage: PagePayloadInterface = {
	ident: "success_page",
	title: "Success Page",
	name: "Success Page",
	type: Screen.Page,
	translations: {
		"en-CA": {
			heading: "Success!",
			description:
				"Good Job, You finished the Questionnaire. Your answers have been sent successfully.\n\nThank you for your help!",
		},
		"es-ES": {
			heading: "Éxito!",
			description:
				"Buen trabajo. Has terminado el cuestionario. Tus respuestas se han enviado correctamente.\n\nGracias por tu ayuda.",
		},
		"fr-CA": {
			heading: "Succès!",
			description:
				"Bon travail. Vous avez terminé le questionnaire. Vos réponses ont été envoyées avec succès.\n\nMerci pour votre aide.",
		},
	},
};

export default SuccessPage;
