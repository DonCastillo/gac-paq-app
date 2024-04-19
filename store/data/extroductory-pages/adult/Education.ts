import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const Education: QuestionRadioPayloadInterface = {
	name: "highest_level_of_education",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_radio_id: 8,
			heading: "Question 23",
			label: "What is the highest level of education completed by a member of your household?",
			kid_label: "What is the highest level of education completed by a member of your household?",
			adult_label:
				"What is the highest level of education completed by a member of your household?",
			choices: [
				{
					text: "No formal schooling",
					value: "No formal schooling",
				},
				{
					text: "Primary school",
					value: "Primary school",
				},
				{
					text: "Secondary or high school",
					value: "Secondary or high school",
				},
				{
					text: "Vocational/college education",
					value: "Vocational/college education",
				},
				{
					text: "Tertiary/university education",
					value: "Tertiary/university education",
				},
				{
					text: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default Education;
