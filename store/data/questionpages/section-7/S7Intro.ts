import ScreenType from "constants/screen_type";
import type SectionPayloadInterface from "interface/directus/section-payload";
import Images from "styles/images";

const S7Intro: SectionPayloadInterface = {
	ident: "outdoors_intro",
	heading: "Outdoors",
	type: ScreenType.IntroQuestion,
	translations: [
		{
			id: 4,
			question_section_id: 3,
			heading: "Outdoors",
			subheading: "Section 7",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
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
	],
};

export default S7Intro;
