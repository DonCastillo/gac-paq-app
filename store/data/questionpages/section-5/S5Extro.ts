import Screen from "constants/screen.enum";
import type { LangExtroPayloadInterface } from "interface/payload.type";

const S5Extro: LangExtroPayloadInterface = {
	ident: "organized_extro",
	name: "Section 5 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only two more to go!",
		},
		"sv-SE": {
			heading: "Du är klar med denna sektion!",
			subheading: "Bara två kvar",
		},
		"zh-CN": {
			heading: "部分完成!",
			subheading: "只剩下两个!",
		},
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "¡Solo faltan dos!",
		},
		"fr-CA": {
			heading: "Section complétée!",
			subheading: "Plus que deux sections à faire!",
		},
	},
};

export default S5Extro;
