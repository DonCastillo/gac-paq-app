import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const GenderKid: QuestionRadioPayloadInterface = {
	ident: "child_sex_entered_by_child",
	name: "child_sex",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 24",
			label: "Are you a…",
			kid_label: "Are you a…",
			adult_label: "Are you a…",
			choices: [
				{
					label: "Boy",
					value: "Boy",
				},
				{
					label: "Girl",
					value: "Girl",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default GenderKid;
