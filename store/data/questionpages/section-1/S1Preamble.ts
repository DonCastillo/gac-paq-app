import ScreenType from "constants/screen_type";
import type SectionPayloadInterface from "interface/directus/section-payload";
import Images from "styles/images";

const S1Intro: SectionPayloadInterface = {
	ident: "school_preamble",
	heading: "School Activities",
	type: ScreenType.IntroQuestion,
	translations: [
		{
			id: 2,
			heading: "School Activities",
			subheading: "Section 1",
			description: "This section is about what you do during normal school hours, for example during physical education classes, recess, and lunch time.",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
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
	],
};

export default S1Intro;
