import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S4Q3: QuestionRadioPayloadInterface = {
	ident: "transportation_3",
	name: "Question 15c: How long does it normally take you to go to school?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_radio_id: 5,
			heading: "Question 15c",
			label: "How long does it normally take you to go to school?",
			kid_label: "How long does it normally take you to go to school?",
			adult_label: "How long does it normally take your child to go to school?",
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

export default S4Q3;
