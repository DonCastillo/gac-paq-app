import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const S4Preamble: LangPreamblePayloadInterface = {
	ident: "transportation_preamble",
	heading: "Transportation",
	type: Screen.Preamble,
	audio_ident: "transportation_preamble",
	translations: {
		"en-CA": {
			heading: "Transportation",
			subheading: "Section 4",
			description: {
				kid: "This section is about how you go to different places.",
				adult: "This section is about how your child goes to different places.",
			},
		},
		"pt-BR": {
			heading: "Transporte",
			subheading: "Seção 4",
			description: {
				kid: "Esta seção é sobre como você vai a diferentes lugares.",
				adult: "Esta seção é sobre como o(a) seu(sua) filho(a) vai a diferentes lugares.",
			},
		},
		"sv-SE": {
			heading: "Transport",
			subheading: "Sektion 4",
			description: {
				kid: "Den här delen handlar om hur du tar dig till platser.",
				adult: "Den här delen handlar om hur ditt barn tar sig till platser.",
			},
		},
		"th-TH": {
			heading: "การเดินทาง",
			subheading: "ส่วนที่ 4",
			description: {
				kid: "ส่วนนี้เป็นคำถามเกี่ยวกับวิธีที่น้องใช้เดินทางไปสถานที่ต่าง ๆ",
				adult: "ส่วนนี้เป็นคำถามเกี่ยวกับวิธีที่บุตรหลานของคุณใช้เดินทางไปสถานที่ต่าง ๆ",
			},
		},
		"zh-CN": {
			heading: "交通",
			subheading: "第4部分",
			description: {
				kid: "本部分是关于你去不同地方的交通方式的一些问题。",
				adult: "本部分是关于您的孩子去不同地方的交通方式的一些问题。",
			},
		},
		"es-MX": {
			heading: "Transporte",
			subheading: "Sección 4",
			description: {
				kid: "Esta sección se trata de cómo te desplazas a diferentes lugares.",
				adult: "Esta sección se trata de cómo su hija o hijo se desplaza a diferentes lugares.",
			},
		},
		"fr-CA": {
			heading: "Transport",
			subheading: "Section 4",
			description: {
				kid: "Cette section porte sur comment tu vas à différents endroits.",
				adult:
					"Cette section porte sur les moyens que ton enfant utilise pour aller à différents endroits.",
			},
		},
	},
};

export default S4Preamble;
