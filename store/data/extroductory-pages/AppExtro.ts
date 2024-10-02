import Screen from "constants/screen.enum";
import type { LangExtroPayloadInterface } from "interface/payload.type";

const AppExtro: LangExtroPayloadInterface = {
	ident: "survey_app_extro",
	name: "Survey AppExtro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Thank you for completing the survey!",
			subheading: "",
		},
		"en-AE": {
			heading: "Thank you for completing the survey!",
			subheading: "",
		},
		"ar-AE": {
			heading: "شكرًا لإكمالك الاستطلاع" + "!",
			subheading: "",
		},
		"ne-NP": {
			heading: "सर्वेको पूरा गर्नु भएकोमा धन्यवाद!",
			subheading: "",
		},
		"th-TH": {
			heading: "ขอบคุณที่ทำแบบสำรวจ!",
			subheading: "",
		},
		"sv-SE": {
			heading: "Tack för att du har fyllt i enkäten!",
			subheading: "",
		},
		"zh-CN": {
			heading: "感谢您完成调查",
			subheading: "",
		},
		"pt-BR": {
			heading: "Obrigado por completar a pesquisa!",
			subheading: "",
		},
		"es-ES": {
			heading: "Gracias por completar la encuesta",
			subheading: "",
		},
		"es-MX": {
			heading: "¡Gracias por completar la encuesta!",
			subheading: "",
		},
		"fr-CA": {
			heading: "Merci d'avoir rempli le sondage!",
			subheading: "",
		},
	},
};

export default AppExtro;
