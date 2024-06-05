import Screen from "constants/screen.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const S3Preamble: PreamblePayloadInterface = {
	ident: "work_preamble",
	heading: "Work",
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Work",
			subheading: "Section 3",
			description: {
				kid: "This section is about work or volunteering away from your home - different from chores. Working would be when you make money for you or your family. Volunteering would be helping others or an organization for free (no money). Work and volunteering can take place at location such as a store, farm, restaurant, etc. Please answer both together.",
				adult:
					"This section is about work or volunteering away from your home - different from chores. Working would be when your child makes money for them or for your family. Volunteering would be helping others or an organization for free (no money). Please answer both together.",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_3.phone,
					tablet: Images.kids.intro.section_3.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_3.phone,
					tablet: Images.adults.intro.section_3.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_3.phone,
					tablet: Images.adults.intro.section_3.tablet,
				},
			},
		},
		"es-MX": {
			heading: "Trabajo",
			subheading: "Sección 3",
			description: {
				kid: "Esta sección es sobre el trabajo o el voluntariado fuera de tu casa - diferente de las tareas domésticas. Trabajar sería cuando ganas dinero para ti o tu familia. El voluntariado sería ayudar a otros o a una organización de forma gratuita (sin dinero). El trabajo y el voluntariado pueden tener lugar en lugares como una tienda, granja, restaurante, etc. Por favor, responde ambos juntos.",
				adult:
					"Esta sección es sobre el trabajo o el voluntariado fuera de la casa de tu hijo - diferente de las tareas domésticas. Trabajar sería cuando tu hijo gana dinero para él o para tu familia. El voluntariado sería ayudar a otros o a una organización de forma gratuita (sin dinero). Por favor, responde ambos juntos.",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_3.phone,
					tablet: Images.kids.intro.section_3.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_3.phone,
					tablet: Images.adults.intro.section_3.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_3.phone,
					tablet: Images.adults.intro.section_3.tablet,
				},
			},
		},
		"fr-CA": {
			heading: "Emploi",
			subheading: "Section 3",
			description: {
				kid: "Cette section porte sur le travail ou le bénévolat à l'extérieur de ta maison - contrairement aux tâches ménagères. Le travail te permettrait de gagner de l'argent pour toi ou ta famille. Le bénévolat c'est aider d'autres personnes ou une organisation gratuitement (pas d'argent). Le travail et le bénévolat peuvent avoir lieu à des endroits comme un magasin, une ferme, un restaurant, etc. Nous te demandons de répondre pour le travail et le bénévolat en même temps.",
				adult:
					"Cette section porte sur le travail ou le bénévolat à l'extérieur de la maison de ton enfant - contrairement aux tâches ménagères. Le travail permettrait à ton enfant de gagner de l'argent. Le bénévolat impliquerait d'aider d'autres personnes ou une organisation gratuitement (pas d’argent). Nous te demandons de répondre pour le travail et le bénévolat en même temps.",
			},
			images: {
				kid: {
					phone: Images.kids.intro.section_3.phone,
					tablet: Images.kids.intro.section_3.tablet,
				},
				adult: {
					phone: Images.adults.intro.section_3.phone,
					tablet: Images.adults.intro.section_3.tablet,
				},
				teen: {
					phone: Images.adults.intro.section_3.phone,
					tablet: Images.adults.intro.section_3.tablet,
				},
			},
		},
	},
};

export default S3Preamble;
