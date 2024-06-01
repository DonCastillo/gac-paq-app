import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S1Q1: QuestionRadioPayloadInterface = {
	ident: "school_1",
	name: "Question 1: Did you attend school in the past week?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 1",
			label: "Did you attend school in the past week?",
			kid_label: "Did you attend school in the past week?",
			adult_label: "Did your child attend school in the past week?",
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

export default S1Q1;
