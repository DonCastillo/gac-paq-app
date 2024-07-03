import Screen from "constants/screen.enum";
import type { SectionPayloadInterface } from "interface/payload.type";

const S4Intro: SectionPayloadInterface = {
	ident: "transportation_intro",
	heading: "Transportation",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Transportation",
			subheading: "Section 4",
		},
		"zh-CN": {
			heading: "交通",
			subheading: "第4部分",
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
