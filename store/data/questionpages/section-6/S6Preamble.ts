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
		"fr-CA": {
			heading: "Jouer ou temps libre",
			subheading: "Section 6",
			description: {
				kid: "Cette section porte sur l'activité physique que tu fais durant tes temps libres. Cela n'inclus pas les activités organisées et les pauses à l'école. Pour répondre aux prochaines questions, n'inclus pas les activités que tu viens de mentionner.",
				adult:
					"Cela inclut toutes les activités physiques que votre enfant fait pendant son temps de jeu ou de loisir. C'est le moment où votre enfant décide comment l'utiliser. Pour les prochaines questions, n'inclus pas les activités dont tu viens de nous parler.",
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
		}
	},
};

export default S6Preamble;
