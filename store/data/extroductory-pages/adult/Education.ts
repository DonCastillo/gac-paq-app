import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const Education: QuestionRadioPayloadInterface = {
	ident: "highest_level_of_education",
	name: "highest_level_of_education",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label: "What is the highest level of education completed by a member of your household?",
			kid_label: "What is the highest level of education completed by a member of your household?",
			adult_label:
				"What is the highest level of education completed by a member of your household?",
			choices: [
				{
					label: "No formal schooling",
					value: "No formal schooling",
				},
				{
					label: "Primary school",
					value: "Primary school",
				},
				{
					label: "Secondary or high school",
					value: "Secondary or high school",
				},
				{
					label: "Vocational/college education",
					value: "Vocational/college education",
				},
				{
					label: "Tertiary/university education",
					value: "Tertiary/university education",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default Education;
