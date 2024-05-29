import ScreenType from "constants/screen_type.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S4Extro: ExtroPayloadInterface = {
	ident: "transportation_extro",
	name: "Section 4 Extro",
	type: ScreenType.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only three more to go!",
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
	},
};

export default S4Extro;
