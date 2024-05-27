import ScreenType from "constants/screen_type.enum";
import type ExtroPayloadInterface from "interface/directus/extro-payload";
import Images from "styles/images";

const S7Extro: ExtroPayloadInterface = {
	ident: "outdoors_extro",
	name: "Section 7 Extro",
	type: ScreenType.ExtroQuestion,
	translations: [
		{
			id: 1,
			extro_section_id: 1,
			heading: "Section Complete!",
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
				teen: {
					phone: Images.adults.extro.section_7.phone,
					tablet: Images.adults.extro.section_7.tablet,
				},
			},
		},
	],
};

export default S7Extro;
