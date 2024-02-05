import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const Comment: QuestionRadioPayloadInterface = {
	name: "Comment",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_radio_id: 8,
			heading: "Question 23",
			label: "Comment",
			kid_label: "Comment",
			adult_label: "Comment",
			choices: [
				{
					text: "Asian",
					value: "Asian",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default Comment;
