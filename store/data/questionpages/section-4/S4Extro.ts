import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S4Extro: ExtroPayloadInterface = {
	ident: "transportation_extro",
	name: "Section 4 Extro",
	type: Screen.ExtroQuestion,
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
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "¡Solo faltan tres!",
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
		"fr-CA": {
			heading: "Section terminée!",
			subheading: "Il ne reste que trois sections!",
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
