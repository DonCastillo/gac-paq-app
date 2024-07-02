import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";

const AppExtro: ExtroPayloadInterface = {
	ident: "survey_app_extro",
	name: "Survey AppExtro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Thank you for completing the survey!",
			subheading: "",
		},
		"zh-CN": {
			heading: "感谢您完成调查！",
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
