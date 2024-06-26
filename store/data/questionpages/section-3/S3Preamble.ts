import Screen from "constants/screen.enum";
import type { PreamblePayloadInterface } from "interface/payload.type";

const S3Preamble: PreamblePayloadInterface = {
	ident: "work_preamble",
	heading: "Work",
	audio_ident: "work_preamble",
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
		},
		"zh-CN": {
			heading: "工作",
			subheading: "第3部分",
			description: {
				kid: "本部分是关于一些在家之外所做的工作（非家务）或志愿服务的问题。工作是指为自己或家人赚钱。志愿服务是无偿帮助他人或组织(没有收入)。工作和志愿服务可以在商店、农场、餐馆等地方进行。请将工作和志愿服务的情况合并起来回答。",
				adult:
					"本部分是关于一些您的孩子在家之外所做的工作（非家务）或志愿服务的问题。工作是指为自己或家人赚钱。志愿服务是无偿帮助他人或组织(没有收入)。请将工作和志愿服务的情况合并起来回答。",
			},
		},
		"es-MX": {
			heading: "Trabajo",
			subheading: "Sección 3",
			description: {
				kid: "Esta sección se trata del trabajo o el voluntariado fuera de casa, no incluye las tareas del hogar o quehaceres. Trabajar es ganar dinero para ti o para tu familia. El voluntariado es ayudar a otras personas o a una organización de forma gratuita (sin dinero). El trabajo y el voluntariado pueden llevarse a cabo en lugares como una tienda, una granja, un restaurante, etc. Por favor, responde sobre estas dos actividades (trabajo y voluntariado) a la vez.",
				adult:
					"Esta sección se trata del trabajo o el voluntariado que hace su hijo o hija fuera de casa, no incluye las tareas del hogar o quehaceres. Trabajar es cuando su hija o hijo gana dinero para sí mismo o para su familia. El voluntariado es ayudar a otras personas o a una organización de forma gratuita (sin dinero). El trabajo y el voluntariado pueden llevarse a cabo en lugares como una tienda, una granja, un restaurante, etc. Por favor, responda a estas dos actividades (trabajo y voluntariado) a la vez.",
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
		},
	},
};

export default S3Preamble;
