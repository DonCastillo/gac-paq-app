import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S5Q1: QuestionRadioPayloadInterface = {
	ident: "organized_1",
	name: "Question 18:	Did you do any organized activities during the past week?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 18",
			label: "Did you do any organized activities during the past week?",
			kid_label: "Did you do any organized activities during the past week?",
			adult_label: "Did your child do any organized activities during the past week?",
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
			heading: "Pregunta 18",
			label: "¿Realizaste alguna actividad organizada durante la semana pasada?",
			kid_label: "¿Realizaste alguna actividad organizada durante la semana pasada?",
			adult_label: "¿Tu hijo participó en alguna actividad organizada durante la última semana?",
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
			heading: "Question 18",
			label: "As-tu participé à une activité organisée au cours de la dernière semaine?",
			kid_label: "As-tu participé à une activité organisée au cours de la dernière semaine?",
			adult_label:
				"Ton enfant a-t-il (elle) participé à une activité organisée au cours de la dernière semaine?",
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

export default S5Q1;
