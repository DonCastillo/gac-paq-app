import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S1Q6: QuestionRadioPayloadInterface = {
	ident: "school_6",
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
			kid_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
			adult_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
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
					text: "Don't know",
					value: "Don't know",
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
