import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const GenderAdult: QuestionRadioPayloadInterface = {
	ident: "child_sex_entered_by_parent",
	name: "child_sex",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 24",
			label: "What is your child's sex?",
			kid_label: "What is your child's sex?",
			adult_label: "What is your child's sex?",
			choices: [
				{
					text: "Female",
					value: "Female",
				},
				{
					text: "Male",
					value: "Male",
				},
				{
					text: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default GenderAdult;
