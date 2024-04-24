import ScreenType from "constants/screen_type";
import type SectionPayloadInterface from "interface/directus/section-payload";
import Images from "styles/images";

const S3Intro: SectionPayloadInterface = {
	ident: "work_intro",
	heading: "Work",
	type: ScreenType.IntroQuestion,
	translations: [
		{
			id: 4,
			question_section_id: 3,
			heading: "Work",
			subheading: "Section 3",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_3.phone,
					tablet: Images.kids.intro.section_3.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_3.phone,
					tablet: Images.adults.intro.section_3.tablet,
				},
			},
		},
	],
};

export default S3Intro;
