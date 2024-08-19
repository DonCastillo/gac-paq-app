import Screen from "constants/screen.enum";
import type { LangExtroPayloadInterface } from "interface/payload.type";

const S4Extro: LangExtroPayloadInterface = {
	ident: "transportation_extro",
	name: "Section 4 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only three more to go!",
		},
		"pt-BR": {
			heading: "Seção Completa!",
			subheading: "Faltam apenas três!",
		},
		"sv-SE": {
			heading: "Du är klar med denna sektion!",
			subheading: "Bara tre kvar",
		},
		"th-TH": {
			heading: "ส่วนนี้เสร็จเรียบร้อย!",
			subheading: "เหลืออีกแค่ 3!",
		},
		"zh-CN": {
			heading: "此部分完成",
			subheading: "还有3项未完成",
		},
		"es-ES": {
			heading: "Sección Completa",
			subheading: "Sólo faltan tres",
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
