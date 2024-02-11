import ScreenType from "constants/screen_type";
import type ExtroPayloadInterface from "interface/directus/AppExtro-payload";
import Images from "styles/images";

const AppExtro: ExtroPayloadInterface = {
	name: "Survey AppExtro",
	type: ScreenType.ExtroQuestion,
	translations: [
		{
			id: 1,
			extro_section_id: 1,
			heading: "Thank you for completing the survey!",
			subheading: "",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
			images: {
				adult: {
					phone: Images.adults.extro.section_7.phone,
					tablet: Images.adults.extro.section_7.tablet,
				},
			},
		},
	],
};

export default AppExtro;
