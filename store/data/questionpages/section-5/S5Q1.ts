import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S5Q1: QuestionRadioPayloadInterface = {
	ident: "organized_1",
	name: "Question 18:	Did you do any organized activities during the past week?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 18",
			label: "Did you do any organized activities during the past week?",
			kid_label: "Did you do any organized activities during the past week?",
			adult_label: "Did your child do any organized activities during the past week?",
			choices: [
				{
					label: "Yes",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
	},
};

export default S5Q1;
