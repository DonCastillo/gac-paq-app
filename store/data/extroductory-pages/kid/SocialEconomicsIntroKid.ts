import Screen from "constants/screen.enum";
import type { SectionPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const SocialEconomicsIntroKid: SectionPayloadInterface = {
	ident: "about_you",
	heading: "About You",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "About You",
			subheading: "Section 8",
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
		"zh-CN": {
			heading: "关于你",
			subheading: "第8部分",
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
			heading: "Acerca de ti",
			subheading: "Sección 8",
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
			heading: "À propos de vous",
			subheading: "Section 8",
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

export default SocialEconomicsIntroKid;
