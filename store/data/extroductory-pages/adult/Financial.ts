import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const Financial: QuestionRadioPayloadInterface = {
	name: "How difficult or easy is it for you to meet the financial needs of your family?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_radio_id: 8,
			heading: "Question 23",
			label: "How difficult or easy is it for you to meet the financial needs of your family?",
			kid_label: "How difficult or easy is it for you to meet the financial needs of your family?",
			adult_label:
				"How difficult or easy is it for you to meet the financial needs of your family?",
			choices: [
				{
					text: "Very difficult",
					value: "Very difficult",
				},
				{
					text: "Difficult",
					value: "Difficult",
				},
				{
					text: "Neither easy nor difficult",
					value: "Neither easy nor difficult",
				},
				{
					text: "Easy",
					value: "Easy",
				},
				{
					text: "Very easy",
					value: "Very easy",
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

export default Financial;
