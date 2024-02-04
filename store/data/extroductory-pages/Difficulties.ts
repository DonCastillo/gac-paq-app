import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const Difficulties: QuestionRadioPayloadInterface = {
	name: "Please indicate if your child has difficulties with any of the following in their daily activities (select all that apply)",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_radio_id: 8,
			heading: "Question 23",
			label:
				"Please indicate if your child has difficulties with any of the following in their daily activities (select all that apply)",
			kid_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities (select all that apply)",
			adult_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities (select all that apply)",
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
