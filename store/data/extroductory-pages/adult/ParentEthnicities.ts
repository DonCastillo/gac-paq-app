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

export default ParentEthnicities;
