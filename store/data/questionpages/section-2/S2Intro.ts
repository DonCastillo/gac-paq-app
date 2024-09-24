import Screen from "constants/screen.enum";
import type { LangSectionPayloadInterface } from "interface/payload.type";

const S2Intro: LangSectionPayloadInterface = {
	ident: "household_intro",
	heading: "Household Chores",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Household Chores",
			subheading: "Section 2",
		},
		"en-AE": {
			heading: "Household Chores",
			subheading: "Section 2",
		},
		"ar-AE": {
			heading: "الواجبات المنزلية",
			subheading: "القسم الثاني (٢)",
		},
		"ne-NP": {
			heading: "घरायसी काम",
			subheading: "खण्ड २",
		},
		"pt-BR": {
			heading: "Atividades Ou Tarefas Domésticas",
			subheading: "Seção 2",
		},
		"sv-SE": {
			heading: "Hushållssysslor",
			subheading: "Sektion 2",
		},
		"th-TH": {
			heading: "งานบ้าน",
			subheading: "ส่วนที่ 2",
		},
		"zh-CN": {
			heading: "家务",
			subheading: "第2部分",
		},
		"es-ES": {
			heading: "Tareas del hogar o quehaceres",
			subheading: "Sección 2",
		},
		"es-MX": {
			heading: "Tareas del hogar o quehaceres",
			subheading: "Sección 2",
		},
		"fr-CA": {
			heading: "Tâches Ménagères",
			subheading: "Section 2",
		},
	},
};

export default S2Intro;
