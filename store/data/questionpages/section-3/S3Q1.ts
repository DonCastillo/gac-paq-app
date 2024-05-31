import ScreenType from "constants/screen_type.enum";
import QuestionType from "constants/question_type.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S3Q1: QuestionRadioPayloadInterface = {
	ident: "work_1",
	name: "Question 12: In the past week, did you volunteer or work?",
	type: ScreenType.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionRadio,
			heading: "Question 12",
			label: "In the past week, did you volunteer or work?",
			kid_label: "In the past week, did you volunteer or work?",
			adult_label: "In the past week, did your child volunteer or work?",
			choices: [
				{
					text: "Yes",
					value: "yes",
				},
				{
					text: "No",
					value: "no",
				},
			],
		},
	},
};

export default S3Q1;
