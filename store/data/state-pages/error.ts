import Screen from "constants/screen.enum";
import type { PagePayloadInterface } from "interface/payload.type";

const ErrorPage: PagePayloadInterface = {
	ident: "error_page",
	title: "Error Page",
	name: "Error Page",
	type: Screen.Page,
	translations: {
		"en-CA": {
			heading: "Error",
			description: "Oh no, Your answers were not sent.\n\nPlease try again. ",
		},
		"th-TH": {
			heading: "ข้อผิดพลาด",
			description: "อ๊ะ คำตอบของคุณไม่ถูกส่ง\n\nกรุณาลองอีกครั้ง",
		},
		"zh-CN": {
			heading: "错误",
			description: "哦，您的答案未发送。\n\n请重试。",
		},
		"es-MX": {
			heading: "Error",
			description: "Oh no, tus respuestas no fueron enviadas.\n\nPor favor, inténtalo de nuevo.",
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
