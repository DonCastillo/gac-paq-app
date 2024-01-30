import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S3Q2: QuestionRadioPayloadInterface = {
	name: "Question 13: In the past week, how many hours have you spent volunteering and/or working?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 11,
			question_radio_id: 9,
			heading: "Question 13",
			label: "In the past week, how many hours have you spent volunteering and/or working?",
			kid_label: "In the past week, how many hours have you spent volunteering and/or working?",
			adult_label: "In the past week, how many hours did your child spent volunteering and/or working?",
			choices: [
				{
					text: "0 hours per week",
					value: "0 hours per week",
				},
				{
					text: "1-9 hours per week",
					value: "1-9 hours per week",
				},
				{
					text: "10-19 hours per week",
					value: "10-19 hours per week",
				},
				{
					text: "20-29 hours per week",
					value: "20-29 hours per week",
				},
				{
					text: "30 or more per week",
					value: "30 or more per week",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S3Q2;
