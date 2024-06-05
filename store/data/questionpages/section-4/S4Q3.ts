import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q3: QuestionRadioPayloadInterface = {
	ident: "transportation_3",
	name: "Question 15c: How long does it normally take you to go to school?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 15c",
			label: "How long does it normally take you to go to school?",
			kid_label: "How long does it normally take you to go to school?",
			adult_label: "How long does it normally take your child to go to school?",
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
			heading: "Question 15c",
			label: "Combien de temps te faut-il, en général, pour aller de la maison jusqu'à l'école? ",
			kid_label:
				"Combien de temps te faut-il, en général, pour aller de la maison jusqu'à l'école? ",
			adult_label:
				"Combien de temps faut-il, en général, à ton enfant pour aller de la maison jusqu'à l'école?",
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
		},
	},
};

export default S4Q3;
