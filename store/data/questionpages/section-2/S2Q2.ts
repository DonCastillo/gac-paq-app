import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S2Q2: QuestionRadioPayloadInterface = {
	ident: "household_2",
	name: "Question 9: How many days did you do chores during the past week?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 9",
			label: "How many days did you do chores during the past week?",
			kid_label: "How many days did you do chores during the past week?",
			adult_label: "How many days did your child do chores during the past week?",
			choices: [
				{
					label: "1 Day",
					value: "1",
				},
				{
					label: "2 Days",
					value: "2",
				},
				{
					label: "3 Days",
					value: "3",
				},
				{
					label: "4 Days",
					value: "4",
				},
				{
					label: "5 Days",
					value: "5",
				},
				{
					label: "6 Days",
					value: "6",
				},
				{
					label: "7 Days",
					value: "7",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Question 9",
			label: "¿Cuántos días de la semana pasada realizaste tareas  del hogar o quehaceres?",
			kid_label: "¿Cuántos días de la semana pasada realizaste tareas  del hogar o quehaceres?",
			adult_label:
				"¿Cuántos días de la semana pasada realizó su hija o hijo tareas del hogar o quehaceres?",
			choices: [
				{
					label: "1 día",
					value: "1",
				},
				{
					label: "2 días",
					value: "2",
				},
				{
					label: "3 días",
					value: "3",
				},
				{
					label: "4 días",
					value: "4",
				},
				{
					label: "5 días",
					value: "5",
				},
				{
					label: "6 días",
					value: "6",
				},
				{
					label: "7 días",
					value: "7",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 9",
			label: "Durant combien de jours as-tu fait des tâches au cours de la dernière semaine?",
			kid_label: "Durant combien de jours as-tu fait des tâches au cours de la dernière semaine?",
			adult_label:
				"Durant combien de jours ton enfant a-t-il (elle) fait des tâches au cours de la dernière semaine?",
			choices: [
				{
					label: "1 jour",
					value: "1",
				},
				{
					label: "2 jours",
					value: "2",
				},
				{
					label: "3 jours",
					value: "3",
				},
				{
					label: "4 jours",
					value: "4",
				},
				{
					label: "5 jours",
					value: "5",
				},
				{
					label: "6 jours",
					value: "6",
				},
				{
					label: "7 jours",
					value: "7",
				},
			],
		},
	},
};

export default S2Q2;
