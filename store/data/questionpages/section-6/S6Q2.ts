import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S6Q2: QuestionRadioPayloadInterface = {
	ident: "play_2",
	name: "Question 22: In the past week, how many days per week did you do activities that make your muscles stronger?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 22",
			label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			kid_label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			adult_label:
				"In the past week, how many days per week did your child do activities that make their muscles stronger?",
			choices: [
				{
					label: "0 Days",
					value: "0",
				},
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

export default S6Q2;
