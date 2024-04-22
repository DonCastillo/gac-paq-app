import ScreenType from "constants/screen_type";
import type QuestionTextareaPayloadInterface from "interface/directus/question-textarea-payload";

const Comment: QuestionTextareaPayloadInterface = {
	ident: "app_use_comment",
	name: "app_use_comment",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_textarea_id: 8,
			heading: "Feedback",
			label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			adult_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			placeholder: "Enter your comment here",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default Comment;
