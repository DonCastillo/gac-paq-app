import Screen from "constants/screen.enum";
import type { LangSectionPayloadInterface } from "interface/payload.type";

const S4Intro: LangSectionPayloadInterface = {
	ident: "transportation_intro",
	heading: "Transportation",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Transportation",
			subheading: "Section 4",
		},
		"en-AE": {
			heading: "Transportation",
			subheading: "Section 4",
		},
		"ar-AE": {
			heading: "المواصلات",
			subheading: "القسم الرابع (٤)",
		},
		"ne-NP": {
			heading: "यातायात",
			subheading: "खण्ड ४",
		},
		"pt-BR": {
			heading: "Transporte",
			subheading: "Seção 4",
		},
		"sv-SE": {
			heading: "Transport",
			subheading: "Sektion 4",
		},
		"th-TH": {
			heading: "การเดินทาง",
			subheading: "ส่วนที่ 4",
		},
		"zh-CN": {
			heading: "交通",
			subheading: "第4部分",
		},
		"es-ES": {
			heading: "Transporte",
			subheading: "Sección 4",
		},
		"es-MX": {
			heading: "Transporte",
			subheading: "Sección 4",
		},
		"fr-CA": {
			heading: "Transport",
			subheading: "Section 4",
		},
	},
};

export default S4Intro;
