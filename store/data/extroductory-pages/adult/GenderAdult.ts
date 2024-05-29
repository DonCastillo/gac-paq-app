import ScreenType from "constants/screen_type.enum";
import QuestionType from "constants/question_type.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const GenderAdult: QuestionRadioPayloadInterface = {
	ident: "child_sex_entered_by_parent",
	name: "child_sex",
	type: ScreenType.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionRadio,
			heading: "Question 24",
			label: "What is your child's sex?",
			kid_label: "What is your child's sex?",
			adult_label: "What is your child's sex?",
			choices: [
				{
					text: "Female",
					value: "Female",
				},
				{
					text: "Male",
					value: "Male",
				},
				{
					text: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default GenderAdult;
