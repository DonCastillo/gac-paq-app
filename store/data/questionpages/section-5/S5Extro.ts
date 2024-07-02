import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";

const S5Extro: ExtroPayloadInterface = {
	ident: "organized_extro",
	name: "Section 5 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only two more to go!",
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
			heading: "Section complète!",
			subheading: "Il ne reste que deux sections!",
		},
	},
};

export default S5Extro;
