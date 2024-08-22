import Screen from "constants/screen.enum";
import type { LangSectionPayloadInterface } from "interface/payload.type";

const SocialEconomicsIntroAdult: LangSectionPayloadInterface = {
	ident: "about_your_family",
	heading: "About You",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "About Your Family",
			subheading: "Section 8",
		},
		"pt-BR": {
			heading: "Sobre Sua Família",
			subheading: "Seção 8",
		},
		"sv-SE": {
			heading: "Om din familj",
			subheading: "Sektion 8",
		},
		"th-TH": {
			heading: "เกี่ยวกับครอบครัวของคุณ",
			subheading: "ส่วนที่ 8",
		},
		"zh-CN": {
			heading: "关于您的家庭",
			subheading: "第8部分",
		},
		"es-ES": {
			heading: "Sobre tu familia",
			subheading: "Sección 8",
		},
		"es-MX": {
			heading: "Acerca de tu familia",
			subheading: "Sección 8",
		},
		"fr-CA": {
			heading: "À propos de votre famille",
			subheading: "Section 8",
		},
	},
};

export default SocialEconomicsIntroAdult;
