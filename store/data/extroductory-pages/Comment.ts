import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { LangQuestionTextareaPayloadInterface } from "interface/payload.type";

const Comment: LangQuestionTextareaPayloadInterface = {
	ident: "app_use_comment",
	name: "app_use_comment",
	type: Screen.SingleQuestion,
	column_name: "comment",
	audio_ident: "comment",
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
		"sv-SE": {
			type: Question.QuestionTextarea,
			heading: "Feedback",
			placeholder: "Skriv din kommentar här",
			label:
				"Har du några andra kommentarer eller förslag om appen eller frågorna som vi har ställt?",
			kid_label:
				"Har du några andra kommentarer eller förslag om appen eller frågorna som vi har ställt?",
			adult_label:
				"Har du några andra kommentarer eller förslag om appen eller frågorna som vi har ställt?",
			kid_sublabel: "Om ja, skriv dem nedan",
			adult_sublabel: "Om ja, skriv dem nedan",
		},
		"th-TH": {
			type: Question.QuestionTextarea,
			heading: "ข้อเสนอแนะ",
			placeholder: "ใส่ความคิดเห็นของคุณได้ที่นี่",
			label: "องมีข้อคิดเห็นหรือข้อเสนอแนะเกี่ยวกับแอปนี้ หรือเกี่ยวกับคำถามที่เราถามน้องไปหรือไม่",
			kid_label:
				"องมีข้อคิดเห็นหรือข้อเสนอแนะเกี่ยวกับแอปนี้ หรือเกี่ยวกับคำถามที่เราถามน้องไปหรือไม่",
			adult_label:
				"องมีข้อคิดเห็นหรือข้อเสนอแนะเกี่ยวกับแอปนี้ หรือเกี่ยวกับคำถามที่เราถามน้องไปหรือไม่",
			kid_sublabel: "ถ้ามี ขอให้พิมพ์ลงในช่องด้านล่าง",
			adult_sublabel: "ถ้ามี ขอให้พิมพ์ลงในช่องด้านล่าง",
		},
		"zh-CN": {
			type: Question.QuestionTextarea,
			heading: "反馈",
			placeholder: "请在此输入您的意见",
			label: "您对本应用或我们的问题有评论或建议吗?",
			kid_label: "您对本应用或我们的问题有评论或建议吗?",
			adult_label: "您对本应用或我们的问题有评论或建议吗?",
			kid_sublabel: "如有，请写在下面方框里",
			adult_sublabel: "如有，请写在下面方框里",
		},
		"es-MX": {
			type: Question.QuestionTextarea,
			heading: "Comentarios",
			placeholder: "Escribe tus comentarios aquí",
			label:
				"¿Tiene algún comentario o sugerencia acerca de la aplicación o el cuestionario que acaba de contestar? ",
			kid_label:
				"¿Tiene algún comentario o sugerencia acerca de la aplicación o el cuestionario que acaba de contestar? ",
			adult_label:
				"¿Tiene algún comentario o sugerencia acerca de la aplicación o el cuestionario que acaba de contestar? ",
			kid_sublabel: "Si es así por favor escríbalas en el siguiente cuadro",
			adult_sublabel: "Si es así por favor escríbalas en el siguiente cuadro",
		},
		"fr-CA": {
			type: Question.QuestionTextarea,
			heading: "Commentaires",
			placeholder: "Écris ton commentaire ici",
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
