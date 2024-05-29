import ScreenType from "constants/screen_type.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S3Extro: ExtroPayloadInterface = {
	ident: "work_extro",
	name: "Section 3 Extro",
	type: ScreenType.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only four more to go!",
			images: {
				adult: {
					phone: Images.adults.extro.section_3.phone,
					tablet: Images.adults.extro.section_3.tablet,
				},
				teen: {
					phone: Images.adults.extro.section_3.phone,
					tablet: Images.adults.extro.section_3.tablet,
				},
			},
		},
	},
};

export default S3Extro;
