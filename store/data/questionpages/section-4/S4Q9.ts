import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q9: QuestionRadioPayloadInterface = {
	ident: "transportation_9",
	name: "Question 17c: On a normal day, how much time did you walk to places other than school or work?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17c",
			label: "On a normal day, how much time did you walk to places other than school or work?",
			kid_label: "On a normal day, how much time did you walk to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child walk to places other than school or work?",
			choices: [
				{
					text: "10 minutes or less",
					value: "10 minutes or less",
				},
				{
					text: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					text: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					text: "More than 30 minutes",
					value: "More than 30 minutes",
				},
			],
		},
	},
};

export default S4Q9;
