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
		"ar-AE": {
			heading: "!تم اكمال القسم",
			subheading: "!لم يتبق سوى سؤالين فقط",
		},
		"ne-NP": {
			heading: "यो खण्ड सकियो!",
			subheading: "केवल दुइ वटा मात्रै बाकी छ !",
		},
		"pt-BR": {
			heading: "Seção Completa!",
			subheading: "Faltam apenas dois!",
		},
		"sv-SE": {
			heading: "Du är klar med denna sektion!",
			subheading: "Bara två kvar",
		},
		"th-TH": {
			heading: "ส่วนนี้เสร็จเรียบร้อย!",
			subheading: "เหลืออีกแค่ 2!",
		},
		"zh-CN": {
			heading: "此部分完成",
			subheading: "还有2项未完成",
		},
		"es-ES": {
			heading: "Sección Completa",
			subheading: "Sólo faltan dos",
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
