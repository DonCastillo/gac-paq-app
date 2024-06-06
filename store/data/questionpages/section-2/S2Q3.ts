import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S2Q3: QuestionRadioPayloadInterface = {
	ident: "household_3",
	name: "Question 10: On the days when you did chores during the past week, how much time did you spend doing chores throughout the day?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 10",
			label:
				"On the days when you did chores during the past week, how much time did you spend doing chores throughout the day?",
			kid_label:
				"On the days when you did chores during the past week, how much time did you spend doing chores throughout the day?",
			adult_label:
				"On the days when your child did chores during the past week, how much time did they spend doing chores throughout the day?",
			choices: [
				{
					label: "15 minutes or less per day",
					value: "15 minutes or less per day",
				},
				{
					label: "16 - 30 minutes per day",
					value: "16 - 30 minutes per day",
				},
				{
					label: "31 - 60 minutes per day",
					value: "31 - 60 minutes per day",
				},
				{
					label: "Over 60 minutes per day",
					value: "Over 60 minutes per day",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Question 10",
			label:
				"En los días que hiciste tareas del hogar o quehaceres durante la semana pasada, ¿cuánto tiempo pasaste haciéndolas a lo largo del día?",
			kid_label:
				"En los días que hiciste tareas del hogar o quehaceres durante la semana pasada, ¿cuánto tiempo pasaste haciéndolas a lo largo del día?",
			adult_label:
				"En los días que su hija o hijo realizó tareas del hogar o quehaceres durante la semana pasada, ¿cuánto tiempo pasó haciéndolas a lo largo del día?",
			choices: [
				{
					label: "15 minutos o menos al día",
					value: "15 minutes or less per day",
				},
				{
					label: "16 - 30 minutos al día",
					value: "16 - 30 minutes per day",
				},
				{
					label: "31 - 60 minutos al día",
					value: "31 - 60 minutes per day",
				},
				{
					label: "Más de 60 minutos al día",
					value: "Over 60 minutes per day",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 10",
			label:
				"Lors des journées où tu as fait des tâches dans la dernière semaine, combien de temps y as-tu accordé chaque jour?",
			kid_label:
				"Lors des journées où tu as fait des tâches dans la dernière semaine, combien de temps y as-tu accordé chaque jour?",
			adult_label:
				"Lors des journées où ton enfant a fait des tâches dans la dernière semaine, combien de temps y a-t-il (elle) accordé chaque jour?",
			choices: [
				{
					label: "15 minutes ou moins par jour",
					value: "15 minutes or less per day",
				},
				{
					label: "16 - 30 minutes par jour",
					value: "16 - 30 minutes per day",
				},
				{
					label: "31 - 60 minutes par jour",
					value: "31 - 60 minutes per day",
				},
				{
					label: "Plus de 60 minutes par jour",
					value: "Over 60 minutes per day",
				},
			],
		},
	},
};

export default S2Q3;
