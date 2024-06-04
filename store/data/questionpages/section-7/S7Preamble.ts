import Screen from "constants/screen.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S7Preamble: PreamblePayloadInterface = {
	ident: "outdoors_preamble",
	heading: "Outdoors",
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
			images: {
				kid: {
					phone: Images.kids.intro.section_7.phone,
					tablet: Images.kids.intro.section_7.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_7.phone,
					tablet: Images.adults.intro.section_7.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_7.phone,
					tablet: Images.adults.intro.section_7.tablet,
				},
			},
		},
		"fr-CA": {
			heading: "Temps Passé Dehors",
			subheading: "Section 7",
			description: {
				kid: "Cette section porte sur la quantité de temps que tu passes dehors. Cela peut être à l’école, durant les tâches, le travail, le bénévolat, le transport et tes temps libres. Cela inclus également le temps que tu passes dehors, mais sans bouger (par exemple, en faisant des pique-niques, en lisant ou en étant assis près d’un feu de camp).",
				adult:
					"Cette section concerne le temps que votre enfant passe à l'extérieur. Cela peut être à l'école, pendant les tâches ménagères, le travail et le bénévolat, et le transport, ainsi que pendant son temps libre. Cela inclut également le temps où votre enfant est à l'extérieur, mais ne bouge pas (par exemple, les pique-niques, la lecture, assis près d'un feu).",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_7.phone,
					tablet: Images.kids.intro.section_7.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_7.phone,
					tablet: Images.adults.intro.section_7.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_7.phone,
					tablet: Images.adults.intro.section_7.tablet,
				},
			},
		},
	},
};

export default S7Preamble;
