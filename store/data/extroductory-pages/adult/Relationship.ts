import Screen from "constants/screen.enum";
import QuestionType from "constants/question_type.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const Relationship: QuestionRadioPayloadInterface = {
	ident: "relationship_to_the_child",
	name: "relationship_to_the_child",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionRadio,
			heading: "Question 28",
			label: "What is your relationship to the child?",
			kid_label: "What is your relationship to the child?",
			adult_label: "What is your relationship to the child?",
			choices: [
				{
					text: "Father",
					value: "Father",
				},
				{
					text: "Mother",
					value: "Mother",
				},
				{
					text: "Grandfather",
					value: "Grandfather",
				},
				{
					text: "Grandmother",
					value: "Grandmother",
				},
				{
					text: "Tutor or guardian",
					value: "Tutor or guardian",
				},
				{
					text: "Other",
					value: "Other",
				},
				{
					text: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default Relationship;
