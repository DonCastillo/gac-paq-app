import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S5Extro: ExtroPayloadInterface = {
	ident: "organized_extro",
	name: "Section 5 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only two more to go!",
			images: {
				adult: {
					phone: Images.adults.extro.section_5.phone,
					tablet: Images.adults.extro.section_5.tablet,
				},
				teen: {
					phone: Images.adults.extro.section_5.phone,
					tablet: Images.adults.extro.section_5.tablet,
				},
			},
		},
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "¡Solo faltan dos!",
			images: {
				adult: {
					phone: Images.adults.extro.section_5.phone,
					tablet: Images.adults.extro.section_5.tablet,
				},
				teen: {
					phone: Images.adults.extro.section_5.phone,
					tablet: Images.adults.extro.section_5.tablet,
				},
			},
		},
		"fr-CA": {
			heading: "Section complète!",
			subheading: "Il ne reste que deux sections!",
			images: {
				adult: {
					phone: Images.adults.extro.section_5.phone,
					tablet: Images.adults.extro.section_5.tablet,
				},
				teen: {
					phone: Images.adults.extro.section_5.phone,
					tablet: Images.adults.extro.section_5.tablet,
				},
			},
		},
	},
};

export default S5Extro;
