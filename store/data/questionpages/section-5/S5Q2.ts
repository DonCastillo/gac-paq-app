import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S5Q2: QuestionRadioPayloadInterface = {
	name: "Question 19: How many days did you do these activities during the past week?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 6,
			question_radio_id: 4,
			heading: "Question 19",
			label: "How many days did you do these activities during the past week?",
			kid_label: "How many days did you do these activities during the past week?",
			adult_label: "How many days did your child do these activities during the past week? ",
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

export default S5Q2;
