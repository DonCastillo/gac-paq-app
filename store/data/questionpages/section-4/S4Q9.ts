import ScreenType from "constants/screen_type.enum";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S4Q9: QuestionRadioPayloadInterface = {
	ident: "transportation_9",
	name: "Question 17c: On a normal day, how much time did you walk to places other than school or work?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_radio_id: 5,
			heading: "Question 17c",
			label: "On a normal day, how much time did you walk to places other than school or work?",
			kid_label: "On a normal day, how much time did you walk to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child walk to places other than school or work?",
			choices: [
				{
					text: "10 minutes or less",
					value: "10 minutes or less",
				},
				{
					text: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					text: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					text: "More than 30 minutes",
					value: "More than 30 minutes",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S4Q9;
