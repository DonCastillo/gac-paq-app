import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S2Q1: QuestionRadioPayloadInterface = {
	ident: "household_1",
	name: "Question 8: In the past week, did you do active chores or tasks?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 8",
			label: "In the past week, did you do active chores or tasks?",
			kid_label: "In the past week, did you do active chores or tasks?",
			adult_label: "In the past week, did your child do active chores or tasks?",
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
			heading: "Question 8",
			label: "¿Realizaste tareas del hogar o quehaceres activos la semana pasada?",
			kid_label: "¿Realizaste tareas del hogar o quehaceres activos la semana pasada?",
			adult_label: "¿En la última semana, tu hijo realizó tareas activas?",
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
			heading: "Question 8",
			label: "Au cours de la dernière semaine, as-tu effectué des tâches actives?",
			kid_label: "Au cours de la dernière semaine, as-tu effectué des tâches actives?",
			adult_label:
				"Au cours de la dernière semaine, ton enfant a-t-il (elle) effectué des tâches actives?",
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

export default S2Q1;
