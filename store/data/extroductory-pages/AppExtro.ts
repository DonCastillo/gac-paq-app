import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const AppExtro: ExtroPayloadInterface = {
	ident: "survey_app_extro",
	name: "Survey AppExtro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Thank you for completing the survey!",
			subheading: "",
			images: {
				adult: {
					phone: Images.adults.extro.section_7.phone,
					tablet: Images.adults.extro.section_7.tablet,
				},
				teen: {
					phone: Images.adults.extro.section_7.phone,
					tablet: Images.adults.extro.section_7.tablet,
				},
			},
		},
		"fr-CA": {
			heading: "Merci d'avoir rempli le sondage!",
			subheading: "",
			images: {
				adult: {
					phone: Images.adults.extro.section_7.phone,
					tablet: Images.adults.extro.section_7.tablet,
				},
				teen: {
					phone: Images.adults.extro.section_7.phone,
					tablet: Images.adults.extro.section_7.tablet,
				},
			},
		},
	},
};

export default AppExtro;
