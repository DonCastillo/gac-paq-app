import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const ChildEthnicitiesSE: LangQuestionRadioPayloadInterface = {
	ident: "child_sex_entered_by_parent",
	name: "child_sex",
	type: Screen.SingleQuestion,
	column_name: "sex",
	audio_ident: "child_sex",
	translations: {
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 26",
			label: "Vilket land är du född i?",
			kid_label: "Vilket land är du född i?",
			adult_label: "Vilket land är du född i?",
			choices: [
				{
					label: "Sverige",
					value: "Sweden",
				},
				{
					label: "Annat",
					value: "Other",
				},
				{
					label: "Föredrar att inte svara",
					value: "Prefer not to say",
				},
			],
		},
	},
};

export default ChildEthnicitiesSE;
