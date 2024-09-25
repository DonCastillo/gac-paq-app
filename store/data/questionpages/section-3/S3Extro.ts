import Screen from "constants/screen.enum";
import type { LangExtroPayloadInterface } from "interface/payload.type";

const S3Extro: LangExtroPayloadInterface = {
	ident: "work_extro",
	name: "Section 3 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only four more to go!",
		},
		"en-AE": {
			heading: "Section Complete!",
			subheading: "Only four more to go!",
		},
		"ar-AE": {
			heading: "!تم اكمال القسم",
			subheading: "!لم يتبق سوى أربعة أسئلة فقط",
		},
		"ne-NP": {
			heading: "यो खण्ड सकियो!",
			subheading: "केवल चार वटा मात्रै बाकी छ !",
		},
		"pt-BR": {
			heading: "Seção Completa!",
			subheading: "Faltam apenas quatro!",
		},
		"sv-SE": {
			heading: "Du är klar med denna sektion!",
			subheading: "Bara fyra kvar",
		},
		"th-TH": {
			heading: "ส่วนนี้เสร็จเรียบร้อย!",
			subheading: "เหลืออีกแค่ 4!",
		},
		"zh-CN": {
			heading: "此部分完成",
			subheading: "还有4项未完成",
		},
		"es-ES": {
			heading: "Sección Completa",
			subheading: "Sólo faltan cuatro",
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
