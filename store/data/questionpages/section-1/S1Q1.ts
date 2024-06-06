import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S1Q1: QuestionRadioPayloadInterface = {
	ident: "school_1",
	name: "Question 1: Did you attend school in the past week?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 1",
			label: "Did you attend school in the past week?",
			kid_label: "Did you attend school in the past week?",
			adult_label: "Did your child attend school in the past week?",
			choices: [
				{
					label: "Yes",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Question 1",
			label: "¿Fuiste a la escuela o colegio la semana pasada?",
			kid_label: "¿Fuiste a la escuela o colegio la semana pasada?",
			adult_label: "¿Fué su hija o hijo a la escuela o colegio la semana pasada?",
			choices: [
				{
					label: "Sí",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 1",
			label: "Es-tu allé.e à l'école au cours de la dernière semaine?",
			kid_label: "Es-tu allé.e à l'école au cours de la dernière semaine?",
			adult_label: "Ton enfant est-il (elle) allé(e) à l'école au cours de la dernière semaine?",
			choices: [
				{
					label: "Oui",
					value: "yes",
				},
				{
					label: "Non",
					value: "no",
				},
			],
		},
	},
};

export default S1Q1;
