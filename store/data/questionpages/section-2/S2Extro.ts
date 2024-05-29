import ScreenType from "constants/screen_type.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S2Extro: ExtroPayloadInterface = {
	ident: "household_extro",
	name: "Section 2 Extro",
	type: ScreenType.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only five more to go!",
			images: {
				adult: {
					phone: Images.adults.extro.section_2.phone,
					tablet: Images.adults.extro.section_2.tablet,
				},
				teen: {
					phone: Images.adults.extro.section_2.phone,
					tablet: Images.adults.extro.section_2.tablet,
				},
			},
		},
	},
};

export default S2Extro;
