import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionCheckboxPayloadInterface } from "interface/payload.type";

const Difficulties: QuestionCheckboxPayloadInterface = {
	ident: "child_difficulties",
	name: "child_difficulties",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 25",
			label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			adult_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_sublabel: "Select all that apply",
			adult_sublabel: "Select all that apply",
			choices: [
				{
					label: "Hearing",
					value: "Hearing",
				},
				{
					label: "Seeing",
					value: "Seeing",
				},
				{
					label: "Speech",
					value: "Speech",
				},
				{
					label: "Mobility",
					value: "Mobility",
				},
				{
					label: "Agility",
					value: "Agility",
				},
				{
					label: "Pain",
					value: "Pain",
				},
				{
					label: "Memory",
					value: "Memory",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to say",
					value: "Prefer not to say",
				},
				{
					label: "None of the above, they don't have difficulties",
					value: "None of the above",
				},
			],
		},
	},
};

export default Difficulties;
