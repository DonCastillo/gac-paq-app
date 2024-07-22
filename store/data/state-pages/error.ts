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
			description: "There is a problem submitting your response.\n\nPlease try again. ",
		},
		"th-TH": {
			heading: "ข้อผิดพลาด",
			description: "มีปัญหาในการส่งคำตอบของคุณ\n\nกรุณาลองอีกครั้ง",
		},
		"zh-CN": {
			heading: "错误",
			description: "提交您的回复时出现问题。\n\n请重试。",
		},
		"es-MX": {
			heading: "Error",
			description: "Hay un problema al enviar tu respuesta.\n\nPor favor, inténtalo de nuevo.",
		},
		"es-ES": {
			heading: "Error",
			description: "Hay un problema al enviar tu respuesta.\n\nPor favor, inténtalo de nuevo.",
		},
		"fr-CA": {
			heading: "Erreur",
			description: "Il y a un problème pour soumettre votre réponse.\n\nSVP essais une autre fois.",
		},
	},
};

export default ErrorPage;
