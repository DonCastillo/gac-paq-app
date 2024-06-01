import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S5Q2: QuestionRadioPayloadInterface = {
	ident: "organized_2",
	name: "Question 19: How many days did you do these activities during the past week?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 19",
			label: "How many days did you do these activities during the past week?",
			kid_label: "How many days did you do these activities during the past week?",
			adult_label: "How many days did your child do these activities during the past week?",
			choices: [
				{
					label: "1 Day",
					value: "1",
				},
				{
					label: "2 Days",
					value: "2",
				},
				{
					label: "3 Days",
					value: "3",
				},
				{
					label: "4 Days",
					value: "4",
				},
				{
					label: "5 Days",
					value: "5",
				},
				{
					label: "6 Days",
					value: "6",
				},
				{
					label: "7 Days",
					value: "7",
				},
			],
		},
	},
};

export default S5Q2;
