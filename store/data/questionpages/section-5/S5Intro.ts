import Screen from "constants/screen.enum";
import type { LangSectionPayloadInterface } from "interface/payload.type";

const S5Intro: LangSectionPayloadInterface = {
	ident: "organized_intro",
	heading: "Organized Activities",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Organized Activities",
			subheading: "Section 5",
		},
		"pt-BR": {
			heading: "Atividades Organizadas e Esportes",
			subheading: "Seção 5",
		},
		"sv-SE": {
			heading: "Organiserade Aktiviteter",
			subheading: "Sektion 5",
		},
		"th-TH": {
			heading: "กิจกรรมที่จัดขึ้น",
			subheading: "ส่วนที่ 5",
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
