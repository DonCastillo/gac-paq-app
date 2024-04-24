import ScreenType from "constants/screen_type";
import type ExtroPayloadInterface from "interface/directus/extro-payload";
import Images from "styles/images";

const S5Extro: ExtroPayloadInterface = {
	ident: "organized_extro",
	name: "Section 5 Extro",
	type: ScreenType.ExtroQuestion,
	translations: [
		{
			id: 1,
			extro_section_id: 1,
			heading: "Section Complete!",
			subheading: "Only two more to go!",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
			images: {
				adult: {
					phone: Images.adults.extro.section_5.phone,
					tablet: Images.adults.extro.section_5.tablet,
				},
			},
		},
	],
};

export default S5Extro;
