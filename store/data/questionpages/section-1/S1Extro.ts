import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S1Extro: ExtroPayloadInterface = {
	ident: "school_extro",
	name: "Section 1 Extro",
	type: Screen.ExtroQuestion,
	translations: {
		"en-CA": {
			heading: "Section Complete!",
			subheading: "Only six more to go!",
			images: {
				adult: {
					phone: Images.adults.extro.section_1.phone,
					tablet: Images.adults.extro.section_1.tablet,
				},
				teen: {
					phone: Images.adults.extro.section_1.phone,
					tablet: Images.adults.extro.section_1.tablet,
				},
			},
		},
		"zh-CN": {
			heading: "部分完成!",
			subheading: "只剩下六个!",
			images: {
				adult: {
					phone: Images.adults.extro.section_1.phone,
					tablet: Images.adults.extro.section_1.tablet,
				},
				teen: {
					phone: Images.adults.extro.section_1.phone,
					tablet: Images.adults.extro.section_1.tablet,
				},
			},
		},
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "¡Solo faltan seis!",
			images: {
				adult: {
					phone: Images.adults.extro.section_1.phone,
					tablet: Images.adults.extro.section_1.tablet,
				},
				teen: {
					phone: Images.adults.extro.section_1.phone,
					tablet: Images.adults.extro.section_1.tablet,
				},
			},
		},
		"fr-CA": {
			heading: "Section Complète!",
			subheading: "Il ne reste que six sections!",
			images: {
				adult: {
					phone: Images.adults.extro.section_1.phone,
					tablet: Images.adults.extro.section_1.tablet,
				},
				teen: {
					phone: Images.adults.extro.section_1.phone,
					tablet: Images.adults.extro.section_1.tablet,
				},
			},
		},
	},
};

export default S1Extro;
