import Screen from "constants/screen.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S1Preamble: PreamblePayloadInterface = {
	ident: "school_preamble",
	heading: "School Activities",
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "School Activities",
			subheading: "Section 1",
			description: {
				kid: "This section is about what you do during normal school hours, for example during physical education classes, recess, and lunch time.",
				adult:
					"This section is about what your child does during normal school hours, for example during physical education classes, recess, and lunch time.",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_1.phone,
					tablet: Images.kids.intro.section_1.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_1.phone,
					tablet: Images.adults.intro.section_1.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_1.phone,
					tablet: Images.adults.intro.section_1.tablet,
				},
			},
		},
		"fr-CA": {
			heading: "Activités Scolaires",
			subheading: "Section 1",
			description: {
				kid: "Cette section porte sur les activités que tu fais durant les heures d'école normales, par exemple dans les cours d'éducation physique, les récréations et l'heure du dîner.",
				adult:
					"Cette section porte sur les activités que ton enfant fait durant les heures d'école normales, par exemple dans les cours d'éducation physique, les récréations et l'heure du dîner.",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_1.phone,
					tablet: Images.kids.intro.section_1.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_1.phone,
					tablet: Images.adults.intro.section_1.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_1.phone,
					tablet: Images.adults.intro.section_1.tablet,
				},
			},
		},
	},
};

export default S1Preamble;
