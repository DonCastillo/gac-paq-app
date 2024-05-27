import ScreenType from "constants/screen_type.enum";
import type PreamblePayloadInterface from "interface/directus/preamble-payload";
import Images from "styles/images";

const S5Preamble: PreamblePayloadInterface = {
	ident: "organized_preamble",
	heading: "Organized Activities",
	type: ScreenType.Preamble,
	translations: [
		{
			id: 4,
			question_section_id: 3,
			heading: "Organized Activities",
			subheading: "Section 5",
			description: {
				kid: "This section is about physically active organized activities and sports. They include activities that you do outside the school day (for example, some schools have sport leagues or extracurricular activities). They also include any sport leagues and lessons for activities like swimming, gymnastics, dance, and karate outside of school.",
				adult:
					"This section is about physically active organized activities and sports. They include activities that you do outside the school day (for example, some schools have sport leagues or extracurricular activities). They also include any sport leagues and lessons for activities like swimming, gymnastics, dance, and karate outside of school.",
			},
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_5.phone,
					tablet: Images.kids.intro.section_5.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_5.phone,
					tablet: Images.adults.intro.section_5.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_5.phone,
					tablet: Images.adults.intro.section_5.tablet,
				},
			},
		},
	],
};

export default S5Preamble;
