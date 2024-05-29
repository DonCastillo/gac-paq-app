import ScreenType from "constants/screen_type.enum";
import type { SectionPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S5Intro: SectionPayloadInterface = {
	ident: "organized_intro",
	heading: "Organized Activities",
	type: ScreenType.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Organized Activities",
			subheading: "Section 5",
			images: {
				kid: {
					phone: Images.kids.intro.section_5.phone,
					tablet: Images.kids.intro.section_5.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_5.phone,
					tablet: Images.adults.intro.section_5.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_5.phone,
					tablet: Images.adults.intro.section_5.tablet,
				},
			},
		},
	},
};

export default S5Intro;
