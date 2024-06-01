import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionCheckboxPayloadInterface } from "interface/payload.type";

const ParentEthnicities: QuestionCheckboxPayloadInterface = {
	ident: "parent_ethnicity",
	name: "parent_ethnicity",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 27",
			label: "What is your ethnicity?",
			kid_label: "What is your ethnicity?",
			adult_label: "What is your ethnicity?",
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

export default ParentEthnicities;
