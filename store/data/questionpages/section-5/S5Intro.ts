import Screen from "constants/screen.enum";
import type { SectionPayloadInterface } from "interface/payload.type";

const S5Intro: SectionPayloadInterface = {
	ident: "organized_intro",
	heading: "Organized Activities",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Organized Activities",
			subheading: "Section 5",
		},
		"zh-CN": {
			heading: "有组织的活动",
			subheading: "第5部分",
		},
		"es-MX": {
			heading: "Actividades Organizadas",
			subheading: "Sección 5",
		},
		"fr-CA": {
			heading: "Activités Organisées",
			subheading: "Section 5",
		},
	},
};

export default S5Intro;
