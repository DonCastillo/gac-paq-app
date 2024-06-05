import Screen from "constants/screen.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S5Preamble: PreamblePayloadInterface = {
	ident: "organized_preamble",
	heading: "Organized Activities",
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Organized Activities",
			subheading: "Section 5",
			description: {
				kid: "This section is about physically active organized activities and sports. They include activities that you do outside the school day (for example, some schools have sport leagues or extracurricular activities). They also include any sport leagues and lessons for activities like swimming, gymnastics, dance, and karate outside of school.",
				adult:
					"This section is about physically active organized activities and sports. They include activities that you do outside the school day (for example, some schools have sport leagues or extracurricular activities). They also include any sport leagues and lessons for activities like swimming, gymnastics, dance, and karate outside of school.",
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
		"fr-CA": {
			heading: "Activités Organisées",
			subheading: "Section 5",
			description: {
				kid: "Cette section porte sur les activités physiques organisées et les sports. Cela inclus les activités que tu fais avant ou après l'école (par exemple, certaines écoles ont des ligues sportives ou des activités parascolaires). Cela inclus également les ligues sportives et les cours pour des activités comme la natation, la gymnastique, la dance et le karaté en dehors de l'école.",
				adult:
					"Cette section porte sur les activités physiques organisées et les sports. Cela inclus les activités que ton enfant fait avant ou après l'école (par exemple, certaines écoles ont des ligues sportives ou des activités parascolaires). Cela inclus également les ligues sportives et les cours pour des activités comme la natation, la gymnastique, la dance et le karaté en dehors de l'école.",
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
	},
};

export default S5Preamble;
