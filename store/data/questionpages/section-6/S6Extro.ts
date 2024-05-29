import ScreenType from "constants/screen_type.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S6Extro: ExtroPayloadInterface = {
	ident: "play_extro",
	name: "Section 6 Extro",
	type: ScreenType.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only one more to go!",
			images: {
				adult: {
					phone: Images.adults.extro.section_6.phone,
					tablet: Images.adults.extro.section_6.tablet,
				},
				teen: {
					phone: Images.adults.extro.section_6.phone,
					tablet: Images.adults.extro.section_6.tablet,
				},
			},
		},
	},
};

export default S6Extro;
