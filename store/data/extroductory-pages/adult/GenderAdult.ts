import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const GenderAdult: QuestionRadioPayloadInterface = {
	name: "Gender Adult",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 4,
			question_radio_id: 2,
			heading: "",
			label: "What is your child's sex?",
			kid_label: "What is your child's sex?",
			adult_label: "What is your child's sex?",
			choices: [
				{
					text: "Female",
					value: "Female",
				},
				{
					text: "Male",
					value: "Male",
				},
				{
					text: "Other",
					value: "Other",
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

export default GenderAdult;
