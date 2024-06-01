import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S1Q4: QuestionRadioPayloadInterface = {
	ident: "school_4",
	name: "Question 4: How long are your physical education classes?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
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
		},
	},
};

export default S1Q4;
