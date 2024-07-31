import Screen from "constants/screen.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";

const S4Preamble: PreamblePayloadInterface = {
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
		"sv-SE": {
			heading: "Transport",
			subheading: "Sektion 4",
			description: {
				kid: "Den här delen handlar om hur du tar dig till platser.",
				adult: "Den här delen handlar om hur ditt barn tar sig till platser.",
			},
		},
		"zh-CN": {
			heading: "交通",
			subheading: "第4部分",
			description: {
				kid: "本部分是关于一些你如何去不同的地方的问题。",
				adult: "本部分是关于一些您的孩子如何去不同的地方的问题。",
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
