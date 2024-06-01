import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q11: QuestionRadioPayloadInterface = {
	ident: "transportation_11",
	name: "Question 17e: On a normal day, how much time did you wheel to places other than school or work?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17e",
			label: "On a normal day, how much time did you wheel to places other than school or work?",
			kid_label:
				"On a normal day, how much time did you wheel to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child wheel to places other than school or work?",
			choices: [
				{
					label: "10 minutes or less",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					label: "More than 30 minutes",
					value: "More than 30 minutes",
				},
			],
		},
	},
};

export default S4Q11;
