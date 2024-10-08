import Screen from "constants/screen.enum";
import type { LangExtroPayloadInterface } from "interface/payload.type";

const S6Extro: LangExtroPayloadInterface = {
	ident: "play_extro",
	name: "Section 6 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only one more to go!",
		},
		"en-AE": {
			heading: "Section Complete!",
			subheading: "Only one more to go!",
		},
		"ar-AE": {
			heading: "تم اكمال القسم" + "!",
			subheading: "لم يتبق سوى سؤال واحد فقط" + "!",
		},
		"ne-NP": {
			heading: "यो खण्ड सकियो!",
			subheading: "केवल एउटा मात्रै बाकी छ !",
		},
		"pt-BR": {
			heading: "Seção Completa!",
			subheading: "Falta apenas um!",
		},
		"sv-SE": {
			heading: "Du är klar med denna sektion!",
			subheading: "Bara en kvar",
		},
		"th-TH": {
			heading: "ส่วนนี้เสร็จเรียบร้อย!",
			subheading: "เหลืออีกแค่ 1!",
		},
		"zh-CN": {
			heading: "此部分完成",
			subheading: "还有1项未完成",
		},
		"es-ES": {
			heading: "Sección Completa",
			subheading: "Sólo falta uno",
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
