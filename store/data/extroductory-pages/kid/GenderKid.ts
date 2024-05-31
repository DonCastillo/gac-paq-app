import Screen from "constants/screen.enum";
import QuestionType from "constants/question_type.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const GenderKid: QuestionRadioPayloadInterface = {
	ident: "child_sex_entered_by_child",
	name: "child_sex",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionRadio,
			heading: "Question 24",
			label: "Are you a…",
			kid_label: "Are you a…",
			adult_label: "Are you a…",
			choices: [
				{
					text: "Boy",
					value: "Boy",
				},
				{
					text: "Girl",
					value: "Girl",
				},
				{
					text: "Other",
					value: "Other",
				},
				{
					text: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default GenderKid;
