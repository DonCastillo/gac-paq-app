import Screen from "constants/screen.enum";
import type { SectionPayloadInterface } from "interface/payload.type";

const S2Intro: SectionPayloadInterface = {
	ident: "household_intro",
	heading: "Household Chores",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Household Chores",
			subheading: "Section 2",
		},
		"sv-SE": {
			heading: "Hushållssysslor",
			subheading: "Sektion 2",
		},
		"zh-CN": {
			heading: "家务",
			subheading: "第2部分",
		},
		"es-MX": {
			heading: "Tareas Del Hogar O Quehaceres",
			subheading: "Sección 2",
		},
		"fr-CA": {
			heading: "Tâches Ménagères",
			subheading: "Section 2",
		},
	},
};

export default S2Intro;
