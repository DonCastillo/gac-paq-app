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
					text: "Hearing",
					value: "Hearing",
				},
				{
					text: "Seeing",
					value: "Seeing",
				},
				{
					text: "Speech",
					value: "Speech",
				},
				{
					text: "Mobility",
					value: "Mobility",
				},
				{
					text: "Agility",
					value: "Agility",
				},
				{
					text: "Pain",
					value: "Pain",
				},
				{
					text: "Memory",
					value: "Memory",
				},
				{
					text: "Other",
					value: "Other",
				},
				{
					text: "Prefer not to say",
					value: "Prefer not to say",
				},
				{
					text: "None of the above, they don't have difficulties",
					value: "None of the above",
				},
			],
		},
	},
};

export default Difficulties;
