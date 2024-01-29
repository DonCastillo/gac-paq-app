import ScreenType from "constants/screen_type";
import type SectionPayloadInterface from "interface/directus/section-payload";
import Images from "styles/images";

const S2Intro: SectionPayloadInterface = {
	heading: "Household Chores",
	type: ScreenType.IntroQuestion,
	translations: [
		{
			id: 4,
			question_section_id: 3,
			heading: "Household Chores",
			subheading: "Section 2",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_2.phone,
					tablet: Images.kids.intro.section_2.tablet
				},
				adult: {
					phone: Images.adults.intro.section_2.phone,
					tablet: Images.adults.intro.section_2.tablet
				}
			}
		},
	],
};

export default S2Intro;
