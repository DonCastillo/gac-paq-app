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
		"hi-IN": {
			heading: "परिवहन",
			subheading: "भाग 4",
			description: {
				kid: "यह अनुभाग इस बारे में है कि आप विभिन्न स्थानों पर कैसे जाते हैं।",
				adult: "यह अनुभाग इस बारे में है कि आपका बच्चा विभिन्न स्थानों पर कैसे जाता है।",
			},
		},
		"en-AE": {
			heading: "Transportation",
			subheading: "Section 4",
			description: {
				kid: "This section is about how you go to different places.",
				adult: "This section is about how your child goes to different places.",
			},
		},
		"ar-AE": {
			heading: "المواصلات",
			subheading: "القسم الرابع (٤)",
			description: {
				kid: "يحتوي هذا القسم على أسئلة حول التنقل وكيفية الذهاب إلى أماكن مختلفة.",
				adult: "يحتوي هذا القسم على أسئلة حول التنقل وكيفية الذهاب إلى أماكن مختلفة.",
			},
		},
		"ne-NP": {
			heading: "यातायात",
			subheading: "खण्ड ४",
			description: {
				kid: "यो खन्ड, तपाइ विभिन्न ठाउमा कसरि जानु हुन्छ भन्ने सँग सम्बन्धि छ l",
				adult: "यो खन्ड, तपाईंको छोरा वा छोरी विभिन्न ठाउमा कसरि जानु हुन्छ भन्ने सँग सम्बन्धि छ l",
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
		"es-ES": {
			heading: "Transporte",
			subheading: "Sección 4",
			description: {
				kid: "Esta sección trata de cómo te desplazas a diferentes lugares.",
				adult: "Esta sección trata de cómo su hija o hijo se desplaza a diferentes lugares.",
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
