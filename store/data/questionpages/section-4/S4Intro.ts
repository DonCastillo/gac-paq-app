import Screen from "constants/screen.enum";
import type { SectionPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S4Intro: SectionPayloadInterface = {
	ident: "transportation_intro",
	heading: "Transportation",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Transportation",
			subheading: "Section 4",
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
		"es-MX": {
			heading: "Transporte",
			subheading: "Sección 4",
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

export default S4Intro;
