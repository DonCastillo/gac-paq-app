import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S1Q6: QuestionRadioPayloadInterface = {
	name: "Question 6: On a normal school day, how much break time do you have?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 9,
			question_radio_id: 7,
			heading: "Question 6",
			label: "On a normal school day, how much break time do you have?",
			kid_label: "On a normal school day, how much break time do you have?",
			adult_label: "On a normal school day, how much break time does your child have?",
			choices: [
				{
					text: "0 minutes",
					value: "0 minutes",
				},
				{
					text: "1-15 minutes",
					value: "1-15 minutes",
				},
				{
					text: "16-30 minutes",
					value: "16-30 minutes",
				},
				{
					text: "31-60 minutes",
					value: "31-60 minutes",
				},
				{
					text: "More than 60 minutes",
					value: "More than 60 minutes",
				},
				{
					text: "I don't know",
					value: "I don't know",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S1Q6;
