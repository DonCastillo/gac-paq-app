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
					phone: "",
					tablet: "",
				},
				teen: {
					phone: "",
					tablet: "",
				},
			},
		},
	],
};

export default S4Extro;
