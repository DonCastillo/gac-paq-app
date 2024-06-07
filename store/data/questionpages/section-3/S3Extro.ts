import Screen from "constants/screen.enum";
import type { ExtroPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S3Extro: ExtroPayloadInterface = {
	ident: "work_extro",
	name: "Section 3 Extro",
	type: Screen.ExtroQuestion,
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
		"zh-CN": {
			heading: "部分完成!",
			subheading: "只剩下四个!",
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
		"es-MX": {
			heading: "¡Sección Completa!",
			subheading: "¡Solo faltan cuatro!",
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
		"fr-CA": {
			heading: "Section Complétée!",
			subheading: "Il ne reste que quatre questions!",
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
