import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S1Q4: QuestionRadioPayloadInterface = {
	name: "Question 4: How long are your physical education classes?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_radio_id: 5,
			heading: "Question 4",
			label: "How long are your physical education classes",
			kid_label: "How long are your physical education classes?",
			adult_label: "How long are your child's physical education classes?",
			choices: [
				{
					text: "Less than 30 minutes",
					value: "Less than 30 minutes",
				},
				{
					text: "30-45 minutes",
					value: "30-45 minutes",
				},
				{
					text: "46-60 minutes",
					value: "46-60 minutes",
				},
				{
					text: "Over 60 minutes",
					value: "Over 60 minutes",
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

export default S1Q4;
