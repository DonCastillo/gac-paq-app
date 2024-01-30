import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S5Q1: QuestionRadioPayloadInterface = {
	name: "Question 18:	Did you do any organized activities during the past week?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_radio_id: 8,
			heading: "Question 18",
			label: "Did you do any organized activities during the past week?",
			kid_label: "Did you do any organized activities during the past week?",
			adult_label: "Did your child do any organized activities during the past week?",
			choices: [
				{
					text: "Yes",
					value: "Yes",
				},
				{
					text: "No",
					value: "No",
				}
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S5Q1;
