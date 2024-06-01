import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { QuestionCheckboxPayloadInterface } from "interface/payload.type";

const ChildEthnicities: QuestionCheckboxPayloadInterface = {
	ident: "child_ethnicity",
	name: "child_ethnicity",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 26",
			label: "What is your child's ethnicity?",
			kid_label: "What is your child's ethnicity?",
			adult_label: "What is your child's ethnicity?",
			choices: [
				{
					label: "Asian",
					value: "Asian",
				},
				{
					label: "Black or African American",
					value: "Black or African American",
				},
				{
					label: "Indigenous",
					value: "Indigenous",
				},
				{
					label: "Latin American",
					value: "Latin American",
				},
				{
					label: "White or Caucasian",
					value: "White or Caucasian",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to say",
					value: "Prefer not to say",
				},
			],
		},
	},
};

export default ChildEthnicities;
