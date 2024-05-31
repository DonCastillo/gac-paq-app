import QuestionType from "constants/question_type.enum";
import Screen from "constants/screen.enum";
import type { QuestionTextareaPayloadInterface } from "interface/payload.type";

const Comment: QuestionTextareaPayloadInterface = {
	ident: "app_use_comment",
	name: "app_use_comment",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionTextarea,
			heading: "Feedback",
			placeholder: "Enter your comment here",
			label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			adult_label:
				"Do you have any comments or suggestions about the app or the questions that we asked?",
			kid_sublabel: "If yes, please write them in the box below",
			adult_sublabel: "If yes, please write them in the box below",
		},
	},
};

export default Comment;
