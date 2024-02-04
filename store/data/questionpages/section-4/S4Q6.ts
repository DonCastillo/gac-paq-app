import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S4Q6: QuestionRadioPayloadInterface = {
	name: "Question 16c: How long does it normally take you to go to work?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_radio_id: 5,
			heading: "Question 16c",
			label: "How long does it normally take you to go to work?",
			kid_label: "How long does it normally take you to go to work?",
			adult_label: "How long does it normally take your child to go to work?",
			choices: [
				{
					text: "10 minutes or less",
					value: "10 minutes or less",
				},
				{
					text: "11-20 minutes",
					value: "11-20 minutes",
				},
				{
					text: "21-30 minutes",
					value: "21-30 minutes",
				},
				{
					text: "31-60 minutes",
					value: "31-60 minutes",
				},
				{
					text: "More than 60 minutes",
					value: "More than 60 minutes",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S4Q6;
