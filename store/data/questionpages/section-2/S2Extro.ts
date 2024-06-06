import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S2Extro: ExtroPayloadInterface = {
	ident: "household_extro",
	name: "Section 2 Extro",
	type: Screen.ExtroQuestion,
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
		"zh-CN": {
			heading: "部分完成!",
			subheading: "只剩下五个!",
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
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "¡Solo faltan cinco!",
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
		"fr-CA": {
			heading: "Section Complétée!",
			subheading: "Il ne reste que cinq questions!",
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
