import Screen from "constants/screen.enum";
import type { SectionPayloadInterface } from "interface/payload.type";

const S3Intro: SectionPayloadInterface = {
	ident: "work_intro",
	heading: "Work",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Work",
			subheading: "Section 3",
		},
		"zh-CN": {
			heading: "工作",
			subheading: "第3部分",
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
