import Screen from "@constants/screen.enum";
import type { LangPagePayloadInterface } from "@interface/payload.type";

const ErrorPage: LangPagePayloadInterface = {
	ident: "error_page",
	title: "Error Page",
	name: "Error Page",
	type: Screen.Page,
	translations: {
		"en-CA": {
			heading: "Error",
			description: {
				kid: "There is a problem submitting your response.\n\nPlease try again.",
				adult: "There is a problem submitting your response.\n\nPlease try again.",
			},
		},
		"en-IN": {
			heading: "Error",
			description: {
				kid: "There is a problem submitting your response.\n\nPlease try again.",
				adult: "There is a problem submitting your response.\n\nPlease try again.",
			},
		},
		"mi-NZ": {
			heading: "I puta he hapa",
			description: {
				kid: "He raru kei te tukuna i tāu whakautu.\n\nMe ngana ano.",
				adult: "He raru kei te tukuna i tāu whakautu.\n\nMe ngana ano.",
			},
		},
		"en-NZ": {
			heading: "Error",
			description: {
				kid: "There is a problem submitting your response.\n\nPlease try again.",
				adult: "There is a problem submitting your response.\n\nPlease try again.",
			},
		},
		"cz-CR": {
			heading: "Chyba",
			description: {
				kid: "Při odesílání vašich odpovědí došlo k problému.\n\nProsím, zkus to znovu.",
				adult: "Při odesílání vašich odpovědí došlo k problému.\n\nProsím, zkus to znovu.",
			},
		},
		"es-CO": {
			heading: "Error",
			description: {
				kid: "Hay un problema al enviar tu respuesta.\n\nPor favor, inténtalo de nuevo.",
				adult: "Hay un problema al enviar tu respuesta.\n\nPor favor, inténtalo de nuevo.",
			},
		},
		"es-CL": {
			heading: "Error",
			description: {
				kid: "Hay un problema al enviar tu respuesta.\n\nPor favor, inténtalo de nuevo.",
				adult: "Hay un problema al enviar tu respuesta.\n\nPor favor, inténtalo de nuevo.",
			},
		},
		"en-MW": {
			heading: "Error",
			description: {
				kid: "There is a problem submitting your response.\n\nPlease try again.",
				adult: "There is a problem submitting your response.\n\nPlease try again.",
			},
		},
		"en-NG": {
			heading: "Error",
			description: {
				kid: "There is a problem submitting your response.\n\nPlease try again.",
				adult: "There is a problem submitting your response.\n\nPlease try again.",
			},
		},
		"ch-MW": {
			heading: "Chinachake chalakwika",
			description: {
				kid: "Pali vuto kutumiza mayankho anu panopa.\n\nChonde yesaninso.",
				adult: "Pali vuto kutumiza mayankho anu panopa.\n\nChonde yesaninso.",
			},
		},
		"ma-IN": {
			heading: "चूक",
			description: {
				kid: "तुमचे प्रतिसाद पाठवताना समस्या येत आहे.\n\nकृपया पुन्हा प्रयत्न करा.",
				adult: "तुमचे प्रतिसाद पाठवताना समस्या येत आहे.\n\nकृपया पुन्हा प्रयत्न करा.",
			},
		},
		"hi-IN": {
			heading: "गलती",
			description: {
				kid: "आपके उत्तर भेजने में समस्या है।\n\nकृपया पुन: प्रयास करें।",
				adult: "आपके उत्तर भेजने में समस्या है।\n\nकृपया पुन: प्रयास करें।",
			},
		},
		"en-AE": {
			heading: "Error",
			description: {
				kid: "There is a problem submitting your response.\n\nPlease try again.",
				adult: "There is a problem submitting your response.\n\nPlease try again.",
			},
		},
		"ar-AE": {
			heading: "خطأ",
			description: {
				kid: "هناك مشكلة في إرسال إجابتك.\n\nيرجى المحاولة مرة أخرى.",
				adult: "هناك مشكلة في إرسال إجابتك.\n\nيرجى المحاولة مرة أخرى.",
			},
		},
		"ne-NP": {
			heading: "मिलेन",
			description: {
				kid: "तपाईंको उत्तर पठाउनमा समस्या छ।\n\nकृपया पुन: प्रयास गर्नुहोस्।",
				adult: "तपाईंको उत्तर पठाउनमा समस्या छ।\n\nकृपया पुन: प्रयास गर्नुहोस्।",
			},
		},
		"pt-BR": {
			heading: "Erro",
			description: {
				kid: "Há um problema ao enviar suas respostas.\n\nPor favor, tente novamente.",
				adult: "Há um problema ao enviar suas respostas.\n\nPor favor, tente novamente.",
			},
		},
		"sv-SE": {
			heading: "Ett fel har uppstått",
			description: {
				kid: "Det uppstod ett problem när du skickade ditt svar.\n\nFörsök igen.",
				adult: "Det uppstod ett problem när du skickade ditt svar.\n\nFörsök igen.",
			},
		},
		"th-TH": {
			heading: "เกิดข้อผิดพลาด",
			description: {
				kid: "มีปัญหาในการส่งคำตอบของคุณ\n\nโปรดลองอีกครั้ง",
				adult: "มีปัญหาในการส่งคำตอบของคุณ\n\nโปรดลองอีกครั้ง",
			},
		},
		"zh-CN": {
			heading: "错误",
			description: {
				kid: "提交您的回复时出现问题。\n\n请重试。",
				adult: "提交您的回复时出现问题。\n\n请重试。",
			},
		},
		"es-MX": {
			heading: "Error",
			description: {
				kid: "Hay un problema al enviar tu respuesta.\n\nPor favor, inténtalo de nuevo.",
				adult: "Hay un problema al enviar tu respuesta.\n\nPor favor, inténtalo de nuevo.",
			},
		},
		"es-ES": {
			heading: "Error",
			description: {
				kid: "Hay un problema al enviar tu respuesta.\n\nPor favor, inténtalo de nuevo.",
				adult: "Hay un problema al enviar tu respuesta.\n\nPor favor, inténtalo de nuevo.",
			},
		},
		"fr-CA": {
			heading: "Erreur",
			description: {
				kid: "Il y a un problème pour soumettre votre réponse.\n\nSVP essais une autre fois.",
				adult: "Il y a un problème pour soumettre votre réponse.\n\nSVP essais une autre fois.",
			},
		},
	},
};

export default ErrorPage;
