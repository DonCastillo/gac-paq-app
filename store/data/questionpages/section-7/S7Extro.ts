import Screen from "constants/screen.enum";
import type { LangExtroPayloadInterface } from "interface/payload.type";

const S7Extro: LangExtroPayloadInterface = {
	ident: "outdoors_extro",
	name: "Section 7 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "",
		},
		"sv-SE": {
			heading: "Du är klar med denna sektion!",
			subheading: "",
		},
		"th-TH": {
			heading: "ส่วนนี้เสร็จเรียบร้อย!",
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
