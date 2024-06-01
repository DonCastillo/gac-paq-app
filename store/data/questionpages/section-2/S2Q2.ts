import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S2Q2: QuestionRadioPayloadInterface = {
	ident: "household_2",
	name: "Question 9: How many days did you do chores during the past week?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 9",
			label: "How many days did you do chores during the past week?",
			kid_label: "How many days did you do chores during the past week?",
			adult_label: "How many days did your child do chores during the past week?",
			choices: [
				{
					text: "1 Day",
					value: "1",
				},
				{
					text: "2 Days",
					value: "2",
				},
				{
					text: "3 Days",
					value: "3",
				},
				{
					text: "4 Days",
					value: "4",
				},
				{
					text: "5 Days",
					value: "5",
				},
				{
					text: "6 Days",
					value: "6",
				},
				{
					text: "7 Days",
					value: "7",
				},
			],
		},
	},
};

export default S2Q2;
