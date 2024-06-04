import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q6: QuestionRadioPayloadInterface = {
	ident: "transportation_6",
	name: "Question 16c: How long does it normally take you to go to work?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 16c",
			label: "How long does it normally take you to go to work?",
			kid_label: "How long does it normally take you to go to work?",
			adult_label: "How long does it normally take your child to go to work?",
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
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "More than 60 minutes",
					value: "More than 60 minutes",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 16c",
			label: "Combien de temps te faut-il, en général, pour aller de la maison jusqu'au travail?",
			kid_label: "Combien de temps te faut-il, en général, pour aller de la maison jusqu'au travail?",
			adult_label: "Combien de temps faut-il normalement pour aller au travail de votre enfant?",
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
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "Plus de 60 minutes",
					value: "More than 60 minutes",
				},
			],
		}
	},
};

export default S4Q6;
