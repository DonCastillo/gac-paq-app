import ScreenType from "constants/screen_type.enum";
import type SectionPayloadInterface from "interface/directus/section-payload";
import Images from "styles/images";

const S5Intro: SectionPayloadInterface = {
	ident: "organized_intro",
	heading: "Organized Activities",
	type: ScreenType.IntroQuestion,
	translations: [
		{
			id: 4,
			question_section_id: 3,
			heading: "Organized Activities",
			subheading: "Section 5",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
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
	],
};

export default S5Intro;
