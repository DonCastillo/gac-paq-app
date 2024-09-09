import Screen from "constants/screen.enum";
import type { LangSectionPayloadInterface } from "interface/payload.type";

const S7Intro: LangSectionPayloadInterface = {
	ident: "outdoors_intro",
	heading: "Outdoors",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Outdoors",
			subheading: "Section 7",
		},
		"ne-NP": {
			heading: "बाहिरी गतिविधि",
			subheading: "खण्ड ७",
		},
		"pt-BR": {
			heading: "Atividades Ao Ar Livre",
			subheading: "Seção 7",
		},
		"sv-SE": {
			heading: "Utomhus",
			subheading: "Sektion 7",
		},
		"th-TH": {
			heading: "กิจกรรมกลางแจ้ง/กิจกรรมในที่โล่ง",
			subheading: "ส่วนที่ 7",
		},
		"zh-CN": {
			heading: "室外",
			subheading: "第7部分",
		},
		"es-ES": {
			heading: "Al Aire Libre",
			subheading: "Sección 7",
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
