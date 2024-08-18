import Screen from "constants/screen.enum";
import type { LangSectionPayloadInterface } from "interface/payload.type";

const S1Intro: LangSectionPayloadInterface = {
	ident: "school_intro",
	heading: "School",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "School",
			subheading: "Section 1",
		},
		"pt-BR": {
			heading: "Escola",
			subheading: "Seção 1",
		},
		"sv-SE": {
			heading: "Skola",
			subheading: "Sektion 1",
		},
		"th-TH": {
			heading: "โรงเรียน",
			subheading: "ส่วนที่ 1",
		},
		"zh-CN": {
			heading: "学校",
			subheading: "第1部分",
		},
		"es-MX": {
			heading: "Escuela O Colegio",
			subheading: "Sección 1",
		},
		"fr-CA": {
			heading: "École",
			subheading: "Section 1",
		},
	},
};

export default S1Intro;
