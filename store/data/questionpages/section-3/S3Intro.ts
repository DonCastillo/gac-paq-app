import Screen from "constants/screen.enum";
import type { SectionPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S3Intro: SectionPayloadInterface = {
	ident: "work_intro",
	heading: "Work",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "Work",
			subheading: "Section 3",
			images: {
				kid: {
					phone: Images.kids.intro.section_3.phone,
					tablet: Images.kids.intro.section_3.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_3.phone,
					tablet: Images.adults.intro.section_3.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_3.phone,
					tablet: Images.adults.intro.section_3.tablet,
				},
			},
		},
	},
};

export default S3Intro;
