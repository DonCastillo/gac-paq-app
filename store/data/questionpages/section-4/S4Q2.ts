import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S4Q2: QuestionRadioPayloadInterface = {
	ident: "transportation_2",
	name: "Question 15b: How many days did you use this mode in the past week?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 1,
			question_radio_id: 2,
			heading: "Question 15b",
			label: "How many days did you use this mode in the past week?",
			kid_label: "How many days did you use this mode in the past week?",
			adult_label: "How many days did your child use this mode in the past week?",
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
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S4Q2;
