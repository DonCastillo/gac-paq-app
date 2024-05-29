import ScreenType from "constants/screen_type.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S2Preamble: PreamblePayloadInterface = {
	ident: "household_preamble",
	heading: "Household Chores",
	type: ScreenType.Preamble,
	translations: {
		"en-CA": {
			heading: "Household Chores",
			subheading: "Section 2",
			description: {
				kid: "This section is about chores or tasks that require you to be active. Examples of chores or tasks include housework, yard work, gardening, and other related tasks.",
				adult:
					"This section is about household chores or tasks that require your child to be active. Examples of chores or tasks include housework, yard work, gardening, and other related tasks.",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_2.phone,
					tablet: Images.kids.intro.section_2.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_2.phone,
					tablet: Images.adults.intro.section_2.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_2.phone,
					tablet: Images.adults.intro.section_2.tablet,
				},
			},
		},
	},
};

export default S2Preamble;
