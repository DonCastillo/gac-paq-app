import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";

const S7Extro: ExtroPayloadInterface = {
	ident: "outdoors_extro",
	name: "Section 7 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "",
		},
		"zh-CN": {
			heading: "部分完成!",
			subheading: "",
		},
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "",
		},
		"fr-CA": {
			heading: "Section complétée!",
			subheading: "",
		},
	},
};

export default S7Extro;
