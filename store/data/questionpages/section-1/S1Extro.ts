import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";

const S1Extro: ExtroPayloadInterface = {
	ident: "school_extro",
	name: "Section 1 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only six more to go!",
		},
		"sv-SE": {
			heading: "Du är klar med denna sektion!",
			subheading: "Bara sex stycken kvar",
		},
		"zh-CN": {
			heading: "部分完成!",
			subheading: "只剩下六个!",
		},
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "¡Solo faltan seis!",
		},
		"fr-CA": {
			heading: "Section complétée!",
			subheading: "Plus que six sections à faire!",
		},
	},
};

export default S1Extro;
