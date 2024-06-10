import Screen from "constants/screen.enum";
import type { SectionPayloadInterface } from "interface/payload.type";

const S7Intro: SectionPayloadInterface = {
	ident: "outdoors_intro",
	heading: "Outdoors",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Outdoors",
			subheading: "Section 7",
		},
		"zh-CN": {
			heading: "室外",
			subheading: "第7部分",
		},
		"es-MX": {
			heading: "Al Aire Libre",
			subheading: "Sección 7",
		},
		"fr-CA": {
			heading: "Temps Passé Dehors",
			subheading: "Section 7",
		},
	},
};

export default S7Intro;
