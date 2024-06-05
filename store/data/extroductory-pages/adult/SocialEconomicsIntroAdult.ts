import Screen from "constants/screen.enum";
import type { SectionPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const SocialEconomicsIntroAdult: SectionPayloadInterface = {
	ident: "about_your_family",
	heading: "About You",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "About Your Family",
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
		"fr-CA": {
			heading: "À propos de votre famille",
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

export default SocialEconomicsIntroAdult;
