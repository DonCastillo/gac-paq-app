import Screen from "constants/screen.enum";
import type { LangExtroPayloadInterface } from "interface/payload.type";

const S2Extro: LangExtroPayloadInterface = {
	ident: "household_extro",
	name: "Section 2 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only five more to go!",
		},
		"ch-MW": {
			heading: "Gawo latha",
			subheading: "Tasala ndi magawo 5 okha kuti timalize",
		},
		"ma-IN": {
			heading: "विभाग पूर्ण!",
			subheading: "अजून फक्त पाच बाकी आहेत!",
		},
		"hi-IN": {
			heading: "भाग पूर्ण",
			subheading: "सिर्फ पांच और बाकी है",
		},
		"en-AE": {
			heading: "Section Complete!",
			subheading: "Only five more to go!",
		},
		"ar-AE": {
			heading: "تم اكمال القسم" + "!",
			subheading: "لم يتبق سوى خمسة أسئلة فقط" + "!",
		},
		"ne-NP": {
			heading: "यो खण्ड सकियो!",
			subheading: "केवल पाँच वटा मात्रै बाकी छ !",
		},
		"pt-BR": {
			heading: "Seção Completa!",
			subheading: "Faltam apenas cinco!",
		},
		"sv-SE": {
			heading: "Du är klar med denna sektion!",
			subheading: "Bara fem kvar",
		},
		"th-TH": {
			heading: "ส่วนนี้เสร็จเรียบร้อย!",
			subheading: "เหลืออีกแค่ 5!",
		},
		"zh-CN": {
			heading: "此部分完成",
			subheading: "还有5项未完成",
		},
		"es-ES": {
			heading: "Sección Completa",
			subheading: "Sólo faltan cinco",
		},
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "¡Solo faltan cinco!",
		},
		"fr-CA": {
			heading: "Section complétée!",
			subheading: "Plus que cinq sections à faire!",
		},
	},
};

export default S2Extro;
