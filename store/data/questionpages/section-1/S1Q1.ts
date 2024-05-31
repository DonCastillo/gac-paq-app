import ScreenType from "constants/screen_type.enum";
import QuestionType from "constants/question_type.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S1Q1: QuestionRadioPayloadInterface = {
	ident: "school_1",
	name: "Question 1: Did you attend school in the past week?",
	type: ScreenType.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionRadio,
			heading: "Question 1",
			label: "Did you attend school in the past week?",
			kid_label: "Did you attend school in the past week?",
			adult_label: "Did your child attend school in the past week?",
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

export default S1Q1;
