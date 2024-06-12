import Screen from "constants/screen.enum";
import type { SectionPayloadInterface } from "interface/payload.type";

const SocialEconomicsIntroAdult: SectionPayloadInterface = {
	ident: "about_your_family",
	heading: "About You",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "About Your Family",
			subheading: "Section 8",
		},
		"zh-CN": {
			heading: "关于您的家庭",
			subheading: "第8部分",
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
