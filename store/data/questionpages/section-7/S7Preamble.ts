import Screen from "constants/screen.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";

const S7Preamble: PreamblePayloadInterface = {
	ident: "outdoors_preamble",
	heading: "Outdoors",
	audio_ident: "outdoors_preamble",
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Outdoors",
			subheading: "Section 7",
			description: {
				kid: "This section is about the amount of time that you spend outdoors. This can be at school, during chores, work and volunteering, and transport, as well as in your free time. This also includes the time when you are outdoors, but not moving (for example, picnics, reading, sitting by a fire).",
				adult:
					"This section is about the amount of time that your child spends outdoors. This can be at school, during chores, work and volunteering, and transport, as well as in their free time. This also includes the time when your child is outdoors, but not moving (for example, picnics, reading, sitting by a fire).",
			},
		},
		"zh-CN": {
			heading: "室外",
			subheading: "第7部分",
			description: {
				kid: "本部分是关于一些你花在室外的时间的问题。这包括学校、家务、工作和志愿服务，交通，以及你的空闲时间，这也包括你在室外但不动的时间(如，野餐，阅读，以及坐在火旁)。",
				adult:
					"本部分是关于一些您的孩子花在室外的时间的问题。这包括学校、家务、工作和志愿服务，交通，以及他们的空闲时间，这也包括您的孩子在室外但不动的时间(如，野餐，阅读，以及坐在火旁)。",
			},
		},
		"es-MX": {
			heading: "Al Aire Libre",
			subheading: "Sección 7",
			description: {
				kid: "Esta sección trata sobre la cantidad de tiempo que pasas al aire libre. Puede ser en la escuela o colegio, durante las tareas del hogar o quehaceres, el trabajo y el voluntariado, el transporte, así como en tu tiempo libre. También incluye el tiempo que pasas al aire libre, pero sin moverte (por ejemplo, de picnic, leyendo, sentado junto a una fogata).",
				adult:
					"Esta sección trata sobre la cantidad de tiempo que pasa al aire libre su hija o hijo. Puede ser en la escuela o colegio, durante las tareas del hogar o quehaceres, el trabajo y el voluntariado, y el transporte, así como en su tiempo libre. También incluye el tiempo que pasa al aire libre, pero sin moverse (por ejemplo, de picnic, leyendo, sentado junto a una fogata).",
			},
		},
		"fr-CA": {
			heading: "Temps Passé Dehors",
			subheading: "Section 7",
			description: {
				kid: "Cette section porte sur la quantité de temps que tu passes dehors. Cela peut être à l'école, durant les tâches, le travail, le bénévolat, le transport et tes temps libres. Cela inclus également le temps que tu passes dehors, mais sans bouger (par exemple, en faisant des pique-niques, en lisant ou en étant assis près d'un feu de camp).",
				adult:
					"Cette section porte sur la quantité de temps que ton enfant passe dehors. Cela peut être à l'école, durant les tâches, le travail, le bénévolat, le transport et les temps libres. Cela inclus également le temps que ton enfant passe dehors, mais sans bouger (par exemple, en faisant des pique-niques, en lisant ou en étant assis près d'un feu de camp)",
			},
		},
	},
};

export default S7Preamble;
