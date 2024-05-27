import ScreenType from "constants/screen_type.enum";
import type PreamblePayloadInterface from "interface/directus/preamble-payload";
import Images from "styles/images";

const S3Preamble: PreamblePayloadInterface = {
	ident: "work_preamble",
	heading: "Work",
	type: ScreenType.Preamble,
	translations: [
		{
			id: 4,
			question_section_id: 3,
			heading: "Work",
			subheading: "Section 3",
			description: {
				kid: "This section is about work or volunteering away from your home - different from chores. Working would be when you make money for you or your family. Volunteering would be helping others or an organization for free (no money). Work and volunteering can take place at location such as a store, farm, restaurant, etc. Please answer both together.",
				adult:
					"This section is about work or volunteering away from your home - different from chores. Working would be when your child makes money for them or for your family. Volunteering would be helping others or an organization for free (no money). Please answer both together.",
			},
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
				teen: {
					phone: Images.adults.intro.section_3.phone,
					tablet: Images.adults.intro.section_3.tablet,
				},
			},
		},
	],
};

export default S3Preamble;
