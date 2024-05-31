import QuestionType from "constants/question_type.enum";
import Screen from "constants/screen.enum";
import type { QuestionCheckboxPayloadInterface } from "interface/payload.type";

const ChildEthnicities: QuestionCheckboxPayloadInterface = {
	ident: "child_ethnicity",
	name: "child_ethnicity",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionCheckbox,
			heading: "Question 26",
			label: "What is your child's ethnicity?",
			kid_label: "What is your child's ethnicity?",
			adult_label: "What is your child's ethnicity?",
			choices: [
				{
					text: "Asian",
					value: "Asian",
				},
				{
					text: "Black or African American",
					value: "Black or African American",
				},
				{
					text: "Indigenous",
					value: "Indigenous",
				},
				{
					text: "Latin American",
					value: "Latin American",
				},
				{
					text: "White or Caucasian",
					value: "White or Caucasian",
				},
				{
					text: "Other",
					value: "Other",
				},
				{
					text: "Prefer not to say",
					value: "Prefer not to say",
				},
			],
		},
	},
};

export default ChildEthnicities;
