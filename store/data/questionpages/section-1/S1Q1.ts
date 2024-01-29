import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S1Q1: QuestionRadioPayloadInterface = {
	name: "Question 1: Did you attend school in the past week?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 3,
			question_radio_id: 3,
			heading: "Question 1",
			label: "Did you attend school in the past week?",
			kid_label: "Did you attend school in the past week?",
			adult_label: "Did your child attend school in the past week?",
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
			}
		}
	],
};

export default S1Q1;
