import Screen from "constants/screen.enum";
import type { LangSectionPayloadInterface } from "interface/payload.type";

const SocialEconomicsIntroKid: LangSectionPayloadInterface = {
	ident: "about_you",
	heading: "About You",
	type: Screen.IntroQuestion,
	translations: {
		"en-CA": {
			heading: "About You",
			subheading: "Section 8",
		},
		"sv-SE": {
			heading: "Om dig",
			subheading: "Sektion 8",
		},
		"zh-CN": {
			heading: "关于你",
			subheading: "第8部分",
		},
		"es-MX": {
			heading: "Acerca de ti",
			subheading: "Sección 8",
		},
		"fr-CA": {
			heading: "À propos de vous",
			subheading: "Section 8",
		},
	},
};

export default SocialEconomicsIntroKid;
