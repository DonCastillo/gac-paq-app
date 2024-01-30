import ScreenType from "constants/screen_type";
import type ExtroPayloadInterface from "interface/directus/extro-payload";
import Images from "styles/images";

const S3Extro: ExtroPayloadInterface = {
	name: "Section 3 Extro",
	type: ScreenType.ExtroQuestion,
	translations: [
		{
			id: 1,
			extro_section_id: 1,
			heading: "Section Complete!",
			subheading: "Only six more to go!",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
			images: {
				adult: {
					phone: Images.adults.extro.section_3.phone,
					tablet: Images.adults.extro.section_3.tablet,
				},
			},
		}
	],
};

export default S3Extro;
