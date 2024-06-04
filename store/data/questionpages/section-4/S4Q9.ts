import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q9: QuestionRadioPayloadInterface = {
	ident: "transportation_9",
	name: "Question 17c: On a normal day, how much time did you walk to places other than school or work?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17c",
			label: "On a normal day, how much time did you walk to places other than school or work?",
			kid_label: "On a normal day, how much time did you walk to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child walk to places other than school or work?",
			choices: [
				{
					label: "10 minutes or less",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					label: "More than 30 minutes",
					value: "More than 30 minutes",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17c",
			label: " Lors d'une journée normale, combien de temps as-tu marché pour aller à des endroits autres que l'école ou le travail? ",
			kid_label: " Lors d'une journée normale, combien de temps as-tu marché pour aller à des endroits autres que l'école ou le travail? ",
			adult_label:
				"En une journée normale, combien de temps votre enfant a-t-il marché pour aller ailleurs que l'école ou le travail?",
			choices: [
				{
					label: "10 minutes ou moins",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					label: "Plus de 30 minutes",
					value: "More than 30 minutes",
				},
			],
		}
	},
};

export default S4Q9;
