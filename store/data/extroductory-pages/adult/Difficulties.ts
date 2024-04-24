import ScreenType from "constants/screen_type";
import type QuestionCheckboxPayloadInterface from "interface/directus/question-checkbox-payload";

const Difficulties: QuestionCheckboxPayloadInterface = {
	ident: "child_difficulties",
	name: "child_difficulties",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_checkbox_id: 8,
			heading: "Question 23",
			label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			adult_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_sublabel: "Select all that apply",
			adult_sublabel: "Select all that apply",
			choices: [
				{
					text: "Hearing",
					value: "Hearing",
				},
				{
					text: "Seeing",
					value: "Seeing",
				},
				{
					text: "Speech",
					value: "Speech",
				},
				{
					text: "Mobility",
					value: "Mobility",
				},
				{
					text: "Agility",
					value: "Agility",
				},
				{
					text: "Pain",
					value: "Pain",
				},
				{
					text: "Memory",
					value: "Memory",
				},
				{
					text: "Other",
					value: "Other",
				},
				{
					text: "Prefer not to say",
					value: "Prefer not to say",
				},
				{
					text: "None of the above, they don't have difficulties",
					value: "None of the above, they don't have difficulties",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default Difficulties;
