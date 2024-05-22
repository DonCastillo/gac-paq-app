import ScreenType from "constants/screen_type";
import type PreamblePayloadInterface from "interface/directus/preamble-payload";
import Images from "styles/images";

const S4Preamble: PreamblePayloadInterface = {
	ident: "transportation_preamble",
	heading: "Transportation",
	type: ScreenType.Preamble,
	translations: [
		{
			id: 4,
			question_section_id: 3,
			heading: "Transportation",
			subheading: "Section 4",
			description: {
				kid: "This section is about how you go to different places.",
				adult: "This section is about how your child goes to different places.",
			},
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

export default S4Preamble;
