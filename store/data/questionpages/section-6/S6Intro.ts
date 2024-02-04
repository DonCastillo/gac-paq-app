import ScreenType from "constants/screen_type";
import type SectionPayloadInterface from "interface/directus/section-payload";
import Images from "styles/images";

const S6Intro: SectionPayloadInterface = {
	heading: "Play or Free Time",
	type: ScreenType.IntroQuestion,
	translations: [
		{
			id: 4,
			question_section_id: 3,
			heading: "Play or Free Time",
			subheading: "Section 6",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_6.phone,
					tablet: Images.kids.intro.section_6.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_6.phone,
					tablet: Images.adults.intro.section_6.tablet,
				},
			},
		},
	],
};

export default S6Intro;
