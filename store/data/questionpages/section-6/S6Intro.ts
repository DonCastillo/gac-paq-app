import Screen from "constants/screen.enum";
import type { SectionPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S6Intro: SectionPayloadInterface = {
	ident: "play_intro",
	heading: "Play or Free Time",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Play or Free Time",
			subheading: "Section 6",
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
	},
};

export default S6Intro;
