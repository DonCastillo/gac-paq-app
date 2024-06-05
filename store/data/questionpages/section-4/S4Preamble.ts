import Screen from "constants/screen.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S4Preamble: PreamblePayloadInterface = {
	ident: "transportation_preamble",
	heading: "Transportation",
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Transportation",
			subheading: "Section 4",
			description: {
				kid: "This section is about how you go to different places.",
				adult: "This section is about how your child goes to different places.",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_4.phone,
					tablet: Images.kids.intro.section_4.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_4.phone,
					tablet: Images.adults.intro.section_4.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_4.phone,
					tablet: Images.adults.intro.section_4.tablet,
				},
			},
		},
		"fr-CA": {
			heading: "Transport",
			subheading: "Section 4",
			description: {
				kid: "Cette section porte sur comment tu vas à différents endroits.",
				adult:
					"Cette section porte sur les moyens que ton enfant utilise pour aller à différents endroits.",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_4.phone,
					tablet: Images.kids.intro.section_4.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_4.phone,
					tablet: Images.adults.intro.section_4.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_4.phone,
					tablet: Images.adults.intro.section_4.tablet,
				},
			},
		},
	},
};

export default S4Preamble;
