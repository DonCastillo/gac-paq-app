import Screen from "constants/screen.enum";
import QuestionType from "constants/question_type.enum";
import type { QuestionCheckboxPayloadInterface } from "interface/payload.type";

const S4Q7: QuestionCheckboxPayloadInterface = {
	ident: "transportation_7",
	name: "Question 17:	In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionCheckbox,
			heading: "Question 17",
			label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			kid_label:
				"In the past week, did you walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			adult_label:
				"In the past week, did your child walk or wheel to go to places other than school or work (for example, a friend's house, a park, a shop)?",
			kid_sublabel: "Please select all responses that apply to you.",
			adult_sublabel: "Please select all responses that apply to your child.",
			choices: [
				{
					text: "Yes, I walked",
					value: "Walked",
					text_mode: {
						kid: "Yes, I walked",
						adult: "Yes, they walked",
					},
				},
				{
					text: "Yes, I wheeled",
					value: "Wheeled",
					text_mode: {
						kid: "Yes, I wheeled",
						adult: "Yes, they wheeled",
					},
				},
				{
					text: "No",
					value: "No",
				},
			],
		},
	},
};

export default S4Q7;
