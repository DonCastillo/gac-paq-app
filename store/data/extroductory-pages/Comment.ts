import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { QuestionTextareaPayloadInterface } from "interface/payload.type";

const Comment: QuestionTextareaPayloadInterface = {
	ident: "app_use_comment",
	name: "app_use_comment",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionTextarea,
			heading: "Feedback",
			placeholder: "Enter your comment here",
			label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			adult_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_sublabel: "If yes, please write them in the box below",
			adult_sublabel: "If yes, please write them in the box below",
		},
		"es-MX": {
			type: Question.QuestionTextarea,
			heading: "Comentarios",
			placeholder: "Escribe tus comentarios aquí",
			label:
				"¿Tienes algún comentario o sugerencia acerca de la aplicación o el cuestionario que acabas de contestar?",
			kid_label:
				"¿Tienes algún comentario o sugerencia acerca de la aplicación o el cuestionario que acabas de contestar?",
			adult_label:
				"¿Tienes algún comentario o sugerencia acerca de la aplicación o el cuestionario que acabas de contestar?",
			kid_sublabel: "Si es así escríbelas en el siguiente cuadro por favor.",
			adult_sublabel: "Si es así escríbelas en el siguiente cuadro por favor.",
		},
		"fr-CA": {
			type: Question.QuestionTextarea,
			heading: "Commentaires",
			placeholder: "Entrez votre commentaire ici",
			label:
				"As-tu des commentaires ou suggestions à propos de l'application ou à propos des questions que nous avons posées?",
			kid_label:
				"As-tu des commentaires ou suggestions à propos de l'application ou à propos des questions que nous avons posées?",
			adult_label:
				"Avez-vous des commentaires ou suggestions à propos de l'application ou des questions que nous avons posées?",
			kid_sublabel: "Si oui, veuillez les écrire dans la boîte ci-dessous.",
			adult_sublabel: "Si oui, veuillez les écrire dans la boîte ci-dessous.",
		},
	},
};

export default Comment;
