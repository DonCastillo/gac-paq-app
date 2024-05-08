import ScreenType from "constants/screen_type";
import type ExtroPayloadInterface from "interface/directus/extro-payload";
import Images from "styles/images";

const S4Extro: ExtroPayloadInterface = {
	ident: "transportation_extro",
	name: "Section 4 Extro",
	type: ScreenType.ExtroQuestion,
	translations: [
		{
			id: 1,
			extro_section_id: 1,
			heading: "Section Complete!",
			subheading: "Only three more to go!",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
			images: {
				adult: {
					phone: Images.adults.extro.section_4.phone,
					tablet: Images.adults.extro.section_4.tablet,
				},
				teen: {
					phone: Images.adults.extro.section_4.phone,
					tablet: Images.adults.extro.section_4.tablet,
				},
			},
		},
	],
};

export default S4Extro;
