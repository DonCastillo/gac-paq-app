import Screen from "constants/screen.enum";
import type { LangPagePayloadInterface } from "interface/payload.type";

const ErrorPage: LangPagePayloadInterface = {
	ident: "error_page",
	title: "Error Page",
	name: "Error Page",
	type: Screen.Page,
	translations: {
		"en-CA": {
			heading: "Error",
			description: "There is a problem submitting your response.\n\nPlease try again.",
		},
		"en-AE": {
			heading: "Error",
			description: "There is a problem submitting your response.\n\nPlease try again.",
		},
		"ar-AE": {
			heading: "خطأ",
			description: "هناك مشكلة في إرسال إجابتك.\n\nيرجى المحاولة مرة أخرى.",
		},
		"ne-NP": {
			heading: "मिलेन",
			description: "तपाईंको उत्तर पठाउनमा समस्या छ।\n\nकृपया पुन: प्रयास गर्नुहोस्।",
		},
		"pt-BR": {
			heading: "Erro",
			description: "Há um problema ao enviar suas respostas.\n\nPor favor, tente novamente.",
		},
		"sv-SE": {
			heading: "Ett fel har uppstått",
			description: "Det uppstod ett problem när du skickade ditt svar.\n\nFörsök igen.",
		},
		"th-TH": {
			heading: "เกิดข้อผิดพลาด",
			description: "มีปัญหาในการส่งคำตอบของคุณ\n\nโปรดลองอีกครั้ง",
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
