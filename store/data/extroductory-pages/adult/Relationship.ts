import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const Relationship: QuestionRadioPayloadInterface = {
	ident: "relationship_to_the_child",
	name: "relationship_to_the_child",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label: "What is your relationship to the child?",
			kid_label: "What is your relationship to the child?",
			adult_label: "What is your relationship to the child?",
			choices: [
				{
					label: "Father",
					value: "Father",
				},
				{
					label: "Mother",
					value: "Mother",
				},
				{
					label: "Grandfather",
					value: "Grandfather",
				},
				{
					label: "Grandmother",
					value: "Grandmother",
				},
				{
					label: "Tutor or guardian",
					value: "Tutor or guardian",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default Relationship;
