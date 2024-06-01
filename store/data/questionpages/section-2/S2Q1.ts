import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S2Q1: QuestionRadioPayloadInterface = {
	ident: "household_1",
	name: "Question 8: In the past week, did you do active chores or tasks?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 8",
			label: "In the past week, did you do active chores or tasks?",
			kid_label: "In the past week, did you do active chores or tasks?",
			adult_label: "In the past week, did your child do active chores or tasks?",
			choices: [
				{
					text: "Yes",
					value: "yes",
				},
				{
					text: "No",
					value: "no",
				},
			],
		},
	},
};

export default S2Q1;
