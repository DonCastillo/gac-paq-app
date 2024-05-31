import Screen from "constants/screen.enum";
import type { SectionPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S2Intro: SectionPayloadInterface = {
	ident: "household_intro",
	heading: "Household Chores",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Household Chores",
			subheading: "Section 2",
			images: {
				kid: {
					phone: Images.kids.intro.section_2.phone,
					tablet: Images.kids.intro.section_2.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_2.phone,
					tablet: Images.adults.intro.section_2.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_2.phone,
					tablet: Images.adults.intro.section_2.tablet,
				},
			},
		},
	},
};

export default S2Intro;
