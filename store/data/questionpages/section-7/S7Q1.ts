import ScreenType from "constants/screen_type.enum";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S7Q1: QuestionRadioPayloadInterface = {
	ident: "outdoors_1",
	name: "Question 23:	In the past week, on a normal day, how much time do you spend outdoors?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_radio_id: 8,
			heading: "Question 23",
			label: "In the past week, on a normal day, how much time do you spend outdoors?",
			kid_label: "In the past week, on a normal day, how much time do you spend outdoors?",
			adult_label:
				"In the past week, on a normal day, how much time did your child spend outdoors?",
			choices: [
				{
					text: "None",
					value: "None",
				},
				{
					text: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					text: "1 to less than 2 hours per day",
					value: "1 to less than 2 hours per day",
				},
				{
					text: "2 to less than 3 hours per day",
					value: "2 to less than 3 hours per day",
				},
				{
					text: "3 to less than 4 hours per day",
					value: "3 to less than 4 hours per day",
				},
				{
					text: "4 hours or more per day",
					value: "4 hours or more per day",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S7Q1;
