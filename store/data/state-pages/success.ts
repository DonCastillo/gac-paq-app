import Screen from "constants/screen.enum";
import type { LangPagePayloadInterface } from "interface/payload.type";

const SuccessPage: LangPagePayloadInterface = {
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
		"sv-SE": {
			heading: "Det lyckades!",
			description:
				"Bra jobbat, du är klar med alla frågor och de har skickats iväg!\n\nTack för din hjälp!",
		},
		"th-TH": {
			heading: "สำเร็จ!",
			description:
				"เก่งมาก! คุณตอบแบบสอบถามเสร็จแล้ว คำตอบของคุณถูกส่งไปเป็นที่เรียบร้อย\n\nขอขอบคุณที่เข้าร่วมการตอบแบบสอบถามครั้งนี้",
		},
		"zh-CN": {
			heading: "成功!",
			description: "干得好！您已完成问卷调查。您的答案已成功发送。\n\n感谢您的帮助!",
		},
		"es-MX": {
			heading: "Éxito!",
			description:
				"¡Buen trabajo! Has terminado el cuestionario. Tus respuestas se han enviado correctamente.\n\nGracias por tu ayuda.",
		},
		"es-ES": {
			heading: "Éxito!",
			description:
				"Buen trabajo. Has terminado el cuestionario. Tus respuestas se han enviado correctamente.\n\nGracias por tu ayuda.",
		},
		"fr-CA": {
			heading: "Succès!",
			description:
				"Bon travail, tu as complété le questionnaire. Tes réponses ont bien été envoyées.\n\nMerci pour ton aide!",
		},
	},
};

export default SuccessPage;
