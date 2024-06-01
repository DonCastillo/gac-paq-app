import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const Financial: QuestionRadioPayloadInterface = {
	ident: "difficulty_to_meet_financial_needs",
	name: "difficulty_to_meet_financial_needs",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "How difficult or easy is it for you to meet the financial needs of your family?",
			kid_label: "How difficult or easy is it for you to meet the financial needs of your family?",
			adult_label:
				"How difficult or easy is it for you to meet the financial needs of your family?",
			choices: [
				{
					label: "Very difficult",
					value: "Very difficult",
				},
				{
					label: "Difficult",
					value: "Difficult",
				},
				{
					label: "Neither easy nor difficult",
					value: "Neither easy nor difficult",
				},
				{
					label: "Easy",
					value: "Easy",
				},
				{
					label: "Very easy",
					value: "Very easy",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default Financial;
