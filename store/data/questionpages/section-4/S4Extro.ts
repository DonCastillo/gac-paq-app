import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";

const S4Extro: ExtroPayloadInterface = {
	ident: "transportation_extro",
	name: "Section 4 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only three more to go!",
		},
		"zh-CN": {
			heading: "部分完成!",
			subheading: "只剩下三个!",
		},
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "¡Solo faltan tres!",
		},
		"fr-CA": {
			heading: "Section complétée!",
			subheading: "Plus que trois sections à faire!",
		},
	},
};

export default S4Extro;
