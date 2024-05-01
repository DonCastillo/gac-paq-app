import ScreenType from "constants/screen_type";
import type QuestionCheckboxPayloadInterface from "interface/directus/question-checkbox-payload";

const ParentEthnicities: QuestionCheckboxPayloadInterface = {
	ident: "parent_ethnicity",
	name: "parent_ethnicity",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_checkbox_id: 8,
			heading: "Question 27",
			label: "What is your ethnicity?",
			kid_label: "What is your ethnicity?",
			adult_label: "What is your ethnicity?",
			choices: [
				{
					text: "Asian",
					value: "Asian",
				},
				{
					text: "Black or African American",
					value: "Black or African American",
				},
				{
					text: "Indigenous",
					value: "Indigenous",
				},
				{
					text: "Latin American",
					value: "Latin American",
				},
				{
					text: "White or Caucasian",
					value: "White or Caucasian",
				},
				{
					text: "Other",
					value: "Other",
				},
				{
					text: "Prefer not to say",
					value: "Prefer not to say",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default ParentEthnicities;
