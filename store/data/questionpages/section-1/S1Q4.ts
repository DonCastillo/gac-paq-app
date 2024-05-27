import ScreenType from "constants/screen_type.enum";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S1Q4: QuestionRadioPayloadInterface = {
	ident: "school_4",
	name: "Question 4: How long are your physical education classes?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_radio_id: 5,
			heading: "Question 4",
			label: "How long are your physical education classes?",
			kid_label: "How long are your physical education classes?",
			adult_label: "How long are your child's physical education classes?",
			choices: [
				{
					text: "Less than 30 minutes per class",
					value: "Less than 30 minutes per class",
				},
				{
					text: "30 - 45 minutes per class",
					value: "30 - 45 minutes per class",
				},
				{
					text: "46 - 60 minutes per class",
					value: "46 - 60 minutes per class",
				},
				{
					text: "Over 60 minutes per class",
					value: "Over 60 minutes per class",
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

export default S1Q4;
