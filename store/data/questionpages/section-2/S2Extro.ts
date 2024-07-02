import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";

const S2Extro: ExtroPayloadInterface = {
	ident: "household_extro",
	name: "Section 2 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only five more to go!",
		},
		"zh-CN": {
			heading: "部分完成!",
			subheading: "只剩下五个!",
		},
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "¡Solo faltan cinco!",
		},
		"fr-CA": {
			heading: "Section Complétée!",
			subheading: "Il ne reste que cinq questions!",
		},
	},
};

export default S2Extro;
