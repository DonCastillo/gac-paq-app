import ScreenType from "constants/screen_type.enum";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S6Q2: QuestionRadioPayloadInterface = {
	ident: "play_2",
	name: "Question 22: In the past week, how many days per week did you do activities that make your muscles stronger?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 1,
			question_radio_id: 2,
			heading: "Question 22",
			label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			kid_label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			adult_label:
				"In the past week, how many days per week did your child do activities that make their muscles stronger?",
			choices: [
				{
					text: "0 Days",
					value: "0",
				},
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
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S6Q2;
