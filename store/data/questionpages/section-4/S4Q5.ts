import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q5: QuestionRadioPayloadInterface = {
	ident: "transportation_5",
	name: "Question 16b: How many days did you use this mode in the past week?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 16b",
			label: "How many days did you use this mode in the past week?",
			kid_label: "How many days did you use this mode in the past week?",
			adult_label: "How many days did your child use this mode in the past week?",
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
			heading: "Question 16b",
			label: "¿Cuántos días usaste este modo de transporte en la última semana?",
			kid_label: "¿Cuántos días usaste este modo de transporte en la última semana?",
			adult_label: "¿Cuántos días usó su hija o hijo este modo de transporte en la última semana?",
			choices: [
				{
					label: "1 Día",
					value: "1",
				},
				{
					label: "2 Días",
					value: "2",
				},
				{
					label: "3 Días",
					value: "3",
				},
				{
					label: "4 Días",
					value: "4",
				},
				{
					label: "5 Días",
					value: "5",
				},
				{
					label: "6 Días",
					value: "6",
				},
				{
					label: "7 Días",
					value: "7",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 16b",
			label:
				"Combien de jours as-tu utilisé ce moyen de transport au cours de la dernière semaine?",
			kid_label:
				"Combien de jours as-tu utilisé ce moyen de transport au cours de la dernière semaine?",
			adult_label:
				"Combien de jours ton enfant a-t-il (elle) utilisé ce moyen de transport au cours de la dernière semaine?",
			choices: [
				{
					label: "1 Jour",
					value: "1",
				},
				{
					label: "2 Jours",
					value: "2",
				},
				{
					label: "3 Jours",
					value: "3",
				},
				{
					label: "4 Jours",
					value: "4",
				},
				{
					label: "5 Jours",
					value: "5",
				},
				{
					label: "6 Jours",
					value: "6",
				},
				{
					label: "7 Jours",
					value: "7",
				},
			],
		},
	},
};

export default S4Q5;
