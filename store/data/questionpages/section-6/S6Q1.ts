import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S6Q1: QuestionRadioPayloadInterface = {
	ident: "play_1",
	name: "Question 21:	In the past week, on a normal day, how much time did you spend playing actively, just for fun?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 21",
			label:
				"In the past week, on a normal day, how much time did you spend playing actively, just for fun?",
			kid_label:
				"In the past week, on a normal day, how much time did you spend playing actively, just for fun?",
			adult_label:
				"In the past week, on a normal day, how much time did your child spend playing actively, just for fun?",
			choices: [
				{
					label: "None",
					value: "None",
				},
				{
					label: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 to less than 2 hours per day",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 to less than 3 hours per day",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 to less than 4 hours per day",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 hours or more per day",
					value: "4 hours or more per day",
				},
			],
		},
	},
};

export default S6Q1;
