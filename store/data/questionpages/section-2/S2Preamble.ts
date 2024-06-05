import Screen from "constants/screen.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S2Preamble: PreamblePayloadInterface = {
	ident: "household_preamble",
	heading: "Household Chores",
	type: Screen.Preamble,
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
		"fr-CA": {
			heading: "Tâches Ménagères",
			subheading: "Section 2",
			description: {
				kid: "Cette section porte sur les tâches qui exigent que tu sois actif (active). Les exemples incluent faire le ménage, des travaux extérieurs, jardiner et d'autres tâches semblables.",
				adult:
					"Cette section porte sur les tâches qui exigent que ton enfant soit actif (active). Les exemples incluent faire le ménage, les travaux extérieurs, jardiner et d'autres tâches semblables.",
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
