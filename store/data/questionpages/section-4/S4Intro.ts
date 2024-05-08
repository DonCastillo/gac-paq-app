import ScreenType from "constants/screen_type";
import type SectionPayloadInterface from "interface/directus/section-payload";
import Images from "styles/images";

const S4Intro: SectionPayloadInterface = {
	ident: "transportation_intro",
	heading: "Transportation",
	type: ScreenType.IntroQuestion,
	translations: [
		{
			id: 4,
			question_section_id: 3,
			heading: "Transportation",
			subheading: "Section 4",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
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
	],
};

export default S4Intro;
