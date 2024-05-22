import ScreenType from "constants/screen_type";
import type ExtroPayloadInterface from "interface/directus/extro-payload";
import Images from "styles/images";

const S2Extro: ExtroPayloadInterface = {
	ident: "household_extro",
	name: "Section 2 Extro",
	type: ScreenType.ExtroQuestion,
	translations: [
		{
			id: 1,
			extro_section_id: 1,
			heading: "Section Complete!",
			subheading: "Only five more to go!",
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

export default S2Extro;
