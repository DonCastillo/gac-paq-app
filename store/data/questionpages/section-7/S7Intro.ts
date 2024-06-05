import Screen from "constants/screen.enum";
import type { SectionPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S7Intro: SectionPayloadInterface = {
	ident: "outdoors_intro",
	heading: "Outdoors",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Outdoors",
			subheading: "Section 7",
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
		"es-MX": {
			heading: "Aire Libre",
			subheading: "Sección 7",
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

export default S7Intro;
