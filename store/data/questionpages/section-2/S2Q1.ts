import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S2Q1: QuestionRadioPayloadInterface = {
	ident: "household_1",
	name: "Question 8: In the past week, did you do active chores or tasks?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_radio_id: 8,
			heading: "Question 8",
			label: "In the past week, did you do active chores or tasks?",
			kid_label: "In the past week, did you do active chores or tasks?",
			adult_label: "In the past week, did your child do active chores or tasks?",
			choices: [
				{
					text: "Yes",
					value: "yes",
				},
				{
					text: "No",
					value: "no",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S2Q1;
