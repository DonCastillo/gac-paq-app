import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const GSHSPreamble_Sleep: LangPreamblePayloadInterface = {
	ident: "gshs_preamble_sleep",
	heading: "GSHS - Sleep Preamble",
	type: Screen.Preamble,
	translations: {
		"en-CA": {
			heading: "Sleep",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next question asks about how much sleep you get.",
				adult: "The next question asks about how much sleep you get.",
			},
		},
		"pt-BR": {
			heading: "Dormir",
			subheading: "Pesquisa Global de Saúde de Estudantes em Escolas",
			description: {
				kid: "A próxima questão é sobre à quantidade de sono que você dorme por noite.",
				adult: "A próxima questão é sobre à quantidade de sono que você dorme por noite.",
			},
		},
		"es-ES": {
			heading: "Dormir",
			subheading: "Encuesta global de salud escolar basada en estudiantes",
			description: {
				kid: "La siguiente pregunta se refiere al tiempo que pasas durmiendo.",
				adult: "La siguiente pregunta se refiere al tiempo que pasas durmiendo.",
			},
		},
		"fr-CA": {
			heading: "Sommeil",
			subheading: "Enquête mondiale sur la santé des élèves en milieu scolaire",
			description: {
				kid: "La question qui suit porte sur ton temps de sommeil.",
				adult: "La question qui suit porte sur ton temps de sommeil.",
			},
		},
		"es-MX": {
			heading: "Dormir",
			subheading: "Encuesta global de salud escolar basada en estudiantes",
			description: {
				kid: "La siguiente pregunta se refiere al tiempo que pasas durmiendo.",
				adult: "La siguiente pregunta se refiere al tiempo que pasas durmiendo.",
			},
		},
		"en-NZ": {
			heading: "Sleep",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next question asks about how much sleep you get.",
				adult: "The next question asks about how much sleep you get.",
			},
		},
		"en-MW": {
			heading: "Sleep",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next question asks about how much sleep you get.",
				adult: "The next question asks about how much sleep you get.",
			},
		},
		"en-NG": {
			heading: "Sleep",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next question asks about how much sleep you get.",
				adult: "The next question asks about how much sleep you get.",
			},
		},
		"en-AE": {
			heading: "Sleep",
			subheading: "Global School-based Student Health Survey",
			description: {
				kid: "The next question asks about how much sleep you get.",
				adult: "The next question asks about how much sleep you get.",
			},
		},
		"sv-SE": {
			heading: "Sömn",
			subheading: "Global skolbaserad undersökning om studenthälsa",
			description: {
				kid: "Nästa fråga handlar om hur mycket du sover.",
				adult: "Nästa fråga handlar om hur mycket du sover.",
			},
		},
		"zh-CN": {
			heading: "睡眠",
			subheading: "全球在校学生健康调查",
			description: {
				kid: "下一问题是询问你睡觉的情况。",
				adult: "下一问题是询问你睡觉的情况。",
			},
		},
	},
};

export default GSHSPreamble_Sleep;
