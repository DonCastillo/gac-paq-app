import Screen from "constants/screen.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";
import Images from "styles/images";

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
			images: {
				kid: {
					phone: Images.kids.intro.section_6.phone,
					tablet: Images.kids.intro.section_6.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_6.phone,
					tablet: Images.adults.intro.section_6.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_6.phone,
					tablet: Images.adults.intro.section_6.tablet,
				},
			},
		},
		"es-MX": {
			heading: "Juego O Tiempo Libre",
			subheading: "Sección 6",
			description: {
				kid: "Esta sección incluye toda la actividad física que haces durante tu tiempo libre o de juego. Esto no incluye actividades organizadas o tiempos de descanso en la escuela. Para las próximas preguntas, no incluyas las actividades que acabas de mencionar.",
				adult:
					"Esta sección incluye toda la actividad física que tu hijo hace durante su tiempo libre o de juego. Este es el tiempo que tu hijo decide cómo usar. Para las próximas preguntas, no incluyas las actividades que acabas de mencionar.",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_6.phone,
					tablet: Images.kids.intro.section_6.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_6.phone,
					tablet: Images.adults.intro.section_6.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_6.phone,
					tablet: Images.adults.intro.section_6.tablet,
				},
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
			images: {
				kid: {
					phone: Images.kids.intro.section_6.phone,
					tablet: Images.kids.intro.section_6.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_6.phone,
					tablet: Images.adults.intro.section_6.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_6.phone,
					tablet: Images.adults.intro.section_6.tablet,
				},
			},
		},
	},
};

export default S6Preamble;
