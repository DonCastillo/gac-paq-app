import ScreenType from "constants/screen_type";
import type PreamblePayloadInterface from "interface/directus/preamble-payload";
import Images from "styles/images";

const S2Preamble: PreamblePayloadInterface = {
	ident: "household_preamble",
	heading: "Household Chores",
	type: ScreenType.Preamble,
	translations: [
		{
			id: 4,
			question_section_id: 3,
			heading: "Household Chores",
			subheading: "Section 2",
			description: {
				kid: "This section is about chores or tasks that require you to be active. Examples of chores or tasks include housework, yard work, gardening, and other related tasks.",
				adult:
					"This section is about household chores or tasks that require your child to be active. Examples of chores or tasks include housework, yard work, gardening, and other related tasks.",
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

export default S2Preamble;
