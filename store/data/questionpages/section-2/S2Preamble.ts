import Screen from "constants/screen.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";

const S2Preamble: PreamblePayloadInterface = {
	ident: "household_preamble",
	heading: "Household Chores",
	audio_ident: "household_preamble",
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Household Chores",
			subheading: "Section 2",
			description: {
				kid: "This section is about chores or tasks that require you to be active. Examples of chores or tasks include housework, yard work, gardening, and other related tasks.",
				adult:
					"This section is about household chores or tasks that require your child to be active. Examples of chores or tasks include housework, yard work, gardening, and other related tasks.",
			},
		},
		"zh-CN": {
			heading: "家务",
			subheading: "第2部分",
			description: {
				kid: "本部分是关于一些需要你做的家务或在家干的活的问题，包括各种家务、打扫庭院、打理植物及其他与家务有关的需要身体活动的任务。",
				adult:
					"本部分是关于一些需要您的孩子做家务或在家干的活的问题，包括各种家务、打扫庭院、打理植物及其他与家务有关的需要身体活动的任务。",
			},
		},
		"es-MX": {
			heading: "Tareas Del Hogar O Quehaceres",
			subheading: "Sección 2",
			description: {
				kid: "Esta sección trata de las tareas o quehaceres del hogar que requieren actividad física. Ejemplos de tareas o quehaceres incluyen las tareas del hogar, el trabajo en el jardín, la jardinería y otras tareas relacionadas.",
				adult:
					"Esta sección trata de las tareas o quehaceres del hogar que requieren que su hija o hijo sea activo físicamente. Ejemplos de tareas o quehaceres incluyen las labores domésticas, el trabajo en el jardín, la jardinería y otras tareas relacionadas.",
			},
		},
		"fr-CA": {
			heading: "Tâches Ménagères",
			subheading: "Section 2",
			description: {
				kid: "Cette section porte sur les tâches qui exigent que tu sois actif (active). Les exemples incluent faire le ménage, des travaux extérieurs, jardiner et d'autres tâches semblables.",
				adult:
					"Cette section porte sur les tâches qui exigent que ton enfant soit actif (active). Les exemples incluent faire le ménage, les travaux extérieurs, jardiner et d'autres tâches semblables.",
			},
		},
	},
};

export default S2Preamble;
