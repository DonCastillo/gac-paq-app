import Screen from "constants/screen.enum";
import type { LangSectionPayloadInterface } from "interface/payload.type";

const S3Intro: LangSectionPayloadInterface = {
	ident: "work_intro",
	heading: "Work",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Work",
			subheading: "Section 3",
		},
		"ar-AE": {
			heading: "العمل",
			subheading: "القسم الثالث (٣)",
		},
		"ne-NP": {
			heading: "काम",
			subheading: "खण्ड ३",
		},
		"pt-BR": {
			heading: "Trabalho",
			subheading: "Seção 3",
		},
		"sv-SE": {
			heading: "Arbete",
			subheading: "Sektion 3",
		},
		"th-TH": {
			heading: "การทำงาน",
			subheading: "ส่วนที่ 3",
		},
		"zh-CN": {
			heading: "工作",
			subheading: "第3部分",
		},
		"es-ES": {
			heading: "Trabajo",
			subheading: "Sección 3",
		},
		"es-MX": {
			heading: "Trabajo",
			subheading: "Sección 3",
		},
		"fr-CA": {
			heading: "Emploi",
			subheading: "Section 3",
		},
	},
};

export default S3Intro;
