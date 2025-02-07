import Screen from "constants/screen.enum";
import type { LangPreamblePayloadInterface } from "interface/payload.type";

const GSHSPreamble_Sleep: LangPreamblePayloadInterface = {
	ident: "gshs_preamble_sleep",
	heading: "",
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
	},
};

export default GSHSPreamble_Sleep;
