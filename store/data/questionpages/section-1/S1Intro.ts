import ScreenType from "constants/screen_type";
import type SectionPayloadInterface from "interface/directus/section-payload";
import Images from "styles/images";

const S1Intro: SectionPayloadInterface = {
	ident: "school_intro",
	heading: "School Activities",
	type: ScreenType.IntroQuestion,
	translations: [
		{
			id: 2,
			heading: "School Activities",
			subheading: "Section 1",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
			images: {
				kid: {
					phone: "",
					tablet: "",
				},
				adult: {
					phone: "",
					tablet: "",
				},
				teen: {
					phone: "",
					tablet: "",
				},
			},
		},
	],
};

export default S1Intro;
