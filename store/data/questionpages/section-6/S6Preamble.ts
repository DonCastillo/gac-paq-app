import Screen from "constants/screen.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";

const S6Preamble: PreamblePayloadInterface = {
	ident: "play_preamble",
	heading: "Play or Free Time",
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Play or Free Time",
			subheading: "Section 6",
			description: {
				kid: "This includes all the physical activity that you do during your play or free time. This does not include organized activities or break times in school. For the next questions, do not include the activities that you just told us about.",
				adult:
					"This includes all the physical activity that your child does during their play or free time. This is the time that your child decides how to use. For the next questions, do not include the activities that you just told us about.",
			},
		},
		"zh-CN": {
			heading: "自由活动或玩耍的时间",
			subheading: "第6部分",
			description: {
				kid: "本部分是关于一些你在学校外玩耍或空闲时间所做的所有身体活动的问题。这不包括有组织的活动或学校的休息时间。",
				adult:
					"本部分是关于一些您的孩子在学校外玩耍或空闲时间所做的所有身体活动的问题。这部分时间是由您的孩子决定如何使用的。",
			},
		},
		"es-MX": {
			heading: "Juego O Tiempo Libre",
			subheading: "Sección 6",
			description: {
				kid: "Esto incluye toda la actividad física que realizas durante tu tiempo de juego o tiempo libre. No incluye las actividades organizadas ni los recreos en la escuela o colegio. Para las siguientes preguntas, no incluyas las actividades que acabas de informar.",
				adult:
					"Esto incluye toda la actividad física que realiza su hija o hijo durante su tiempo de juego o tiempo libre. No incluye las actividades organizadas ni los recreos en la escuela o colegio. Para las siguientes preguntas, no incluya las actividades que acaba de informar.",
			},
		},
		"fr-CA": {
			heading: "Jeu ou temps libres",
			subheading: "Section 6",
			description: {
				kid: "Cette section porte sur l'activité physique que tu fais durant tes temps libres. Cela n'inclus pas les activités organisées et les pauses à l'école. Pour répondre aux prochaines questions, n'inclus pas les activités que tu viens de mentionner.",
				adult:
					"Cette section porte sur l'activité physique que ton enfant fait durant ses temps libres. Ce sont des moments qu'il (elle) peux occuper à sa guise. Pour répondre aux prochaines questions, n'inclus pas les activités que tu viens de mentionner.",
			},
		},
	},
};

export default S6Preamble;
