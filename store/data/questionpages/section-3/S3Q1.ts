import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S3Q1: QuestionRadioPayloadInterface = {
	ident: "work_1",
	name: "Question 12: In the past week, did you volunteer or work?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 12",
			label: "In the past week, did you volunteer or work?",
			kid_label: "In the past week, did you volunteer or work?",
			adult_label: "In the past week, did your child volunteer or work?",
			choices: [
				{
					label: "Yes",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
	},
};

export default S3Q1;
