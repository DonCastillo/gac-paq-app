import ScreenType from "constants/screen_type";
import type PreamblePayloadInterface from "interface/directus/preamble-payload";
import Images from "styles/images";

const S1Preamble: PreamblePayloadInterface = {
	ident: "school_preamble",
	heading: "School Activities",
	type: ScreenType.Preamble,
	translations: [
		{
			id: 2,
			heading: "School Activities",
			subheading: "Section 1",
			description: {
				kid: "This section is about what you do during normal school hours, for example during physical education classes, recess, and lunch time.",
				adult:
					"This section is about what your child does during normal school hours, for example during physical education classes, recess, and lunch time.",
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

export default S1Preamble;
