import Screen from "constants/screen.enum";
import type { LangSectionPayloadInterface } from "interface/payload.type";

const GSHSIntro: LangSectionPayloadInterface = {
	ident: "gshs_intro",
	heading: "GSHS",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Global School-based Student Health Survey",
			subheading: "",
		},
		"fr-CA": {
			heading: "Enquête mondiale sur la santé des élèves en milieu scolaire",
			subheading: "",
		},
		"es-MX": {
			heading: "Encuesta global de salud escolar basada en estudiantes",
			subheading: "",
		},
		"en-NZ": {
			heading: "Global School-based Student Health Survey",
			subheading: "",
		},
		"en-MW": {
			heading: "Global School-based Student Health Survey",
			subheading: "",
		},
		"en-NG": {
			heading: "Global School-based Student Health Survey",
			subheading: "",
		},
		"en-AE": {
			heading: "Global School-based Student Health Survey",
			subheading: "",
		},
		"sv-SE": {
			heading: "Global skolbaserad undersökning om studenthälsa",
			subheading: "",
		},
		"zh-CN": {
			heading: "全球学校基础学生健康调查",
			subheading: "",
		},
	},
};

export default GSHSIntro;
