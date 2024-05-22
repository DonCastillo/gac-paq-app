import ScreenType from "constants/screen_type";
import type SectionPayloadInterface from "interface/directus/section-payload";
import Images from "styles/images";

const SocialEconomicsIntroKid: SectionPayloadInterface = {
	ident: "about_you",
	heading: "About You",

	type: ScreenType.IntroQuestion,
	translations: [
		{
			id: 4,
			question_section_id: 3,
			heading: "About You",
			subheading: "Section 8",
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

export default SocialEconomicsIntroKid;
