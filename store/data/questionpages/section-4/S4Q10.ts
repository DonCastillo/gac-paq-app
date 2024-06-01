import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q10: QuestionRadioPayloadInterface = {
	ident: "transportation_10",
	name: "Question 17d: How many days did you wheel to places other than school or work in the past week?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17d",
			label: "How many days did you wheel to places other than school or work in the past week?",
			kid_label:
				"How many days did you wheel to places other than school or work in the past week?",
			adult_label:
				"How many days did your child wheel to places other than school or work in the past week?",
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

export default S4Q10;
