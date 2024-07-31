import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";

const S6Extro: ExtroPayloadInterface = {
	ident: "play_extro",
	name: "Section 6 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only one more to go!",
		},
		"sv-SE": {
			heading: "Du är klar med denna sektion!",
			subheading: "Bara en kvar",
		},
		"zh-CN": {
			heading: "部分完成!",
			subheading: "只剩下一个!",
		},
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "¡Solo falta una!",
		},
		"fr-CA": {
			heading: "Section complétée!",
			subheading: "Plus qu'une section à faire!",
		},
	},
};

export default S6Extro;
