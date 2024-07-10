import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";

const S3Extro: ExtroPayloadInterface = {
	ident: "work_extro",
	name: "Section 3 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only four more to go!",
		},
		"zh-CN": {
			heading: "部分完成!",
			subheading: "只剩下四个!",
		},
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "¡Solo faltan cuatro!",
		},
		"fr-CA": {
			heading: "Section complétée!",
			subheading: "Plus que quatre sections à faire!",
		},
	},
};

export default S3Extro;
