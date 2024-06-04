import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S7Q1: QuestionRadioPayloadInterface = {
	ident: "outdoors_1",
	name: "Question 23:	In the past week, on a normal day, how much time do you spend outdoors?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 23",
			label: "In the past week, on a normal day, how much time do you spend outdoors?",
			kid_label: "In the past week, on a normal day, how much time do you spend outdoors?",
			adult_label:
				"In the past week, on a normal day, how much time did your child spend outdoors?",
			choices: [
				{
					label: "None",
					value: "None",
				},
				{
					label: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 to less than 2 hours per day",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 to less than 3 hours per day",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 to less than 4 hours per day",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 hours or more per day",
					value: "4 hours or more per day",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 23",
			label:
				"Durant la dernière semaine, lors d'une journée normale, combien de temps as-tu passé dehors?",
			kid_label:
				"Durant la dernière semaine, lors d'une journée normale, combien de temps as-tu passé dehors?",
			adult_label:
				"Au cours de la dernière semaine, en moyenne, combien de temps votre enfant passe-t-il à l'extérieur?",
			choices: [
				{
					label: "Pas du tout",
					value: "None",
				},
				{
					label: "Moins d'une heure par jour",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 à moins de 2 heures par jour",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 à moins de 3 heures par jour",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 à moins de 4 heures par jour",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 heures ou plus par jour",
					value: "4 hours or more per day",
				},
			],
		},
	},
};

export default S7Q1;
