import ScreenType from "constants/screen_type";
import type QuestionCheckboxPayloadInterface from "interface/directus/question-checkbox-payload";

const S4Q7: QuestionCheckboxPayloadInterface = {
	name: "Question 17:	In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)? Please select all responses that apply to you.",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_checkbox_id: 8,
			heading: "Question 17",
			label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)? Please select all responses that apply to you.",
			kid_label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)? Please select all responses that apply to you.",
			adult_label:
				"In the past week, did your child walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)? Please select all responses that apply to your child.",
			choices: [
				{
					text: "Yes, I walked",
					value: "Yes, I walked",
				},
				{
					text: "Yes, I wheeled",
					value: "Yes, I wheeled",
				},
				{
					text: "No",
					value: "No",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S4Q7;
