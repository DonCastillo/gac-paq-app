import Screen from "constants/screen.enum";
import QuestionType from "constants/question_type.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q3: QuestionRadioPayloadInterface = {
	ident: "transportation_3",
	name: "Question 15c: How long does it normally take you to go to school?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionRadio,
			heading: "Question 15c",
			label: "How long does it normally take you to go to school?",
			kid_label: "How long does it normally take you to go to school?",
			adult_label: "How long does it normally take your child to go to school?",
			choices: [
				{
					text: "10 minutes or less",
					value: "10 minutes or less",
				},
				{
					text: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					text: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					text: "More than 30 minutes",
					value: "More than 30 minutes",
				},
			],
		},
	},
};

export default S4Q3;
