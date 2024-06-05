import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S6Extro: ExtroPayloadInterface = {
	ident: "play_extro",
	name: "Section 6 Extro",
	type: Screen.ExtroQuestion,
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
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "¡Solo falta una!",
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
		"fr-CA": {
			heading: "Section terminée!",
			subheading: "Il ne reste qu'une seule section!",
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
