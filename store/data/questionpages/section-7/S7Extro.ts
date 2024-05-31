import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S7Extro: ExtroPayloadInterface = {
	ident: "outdoors_extro",
	name: "Section 7 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "",
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
	},
};

export default S7Extro;
