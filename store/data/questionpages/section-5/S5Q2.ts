import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S5Q2: QuestionRadioPayloadInterface = {
	ident: "organized_2",
	name: "Question 19: How many days did you do these activities during the past week?",
	column_name: "19.0 Orga",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 19",
			label: "How many days did you do these activities during the past week?",
			kid_label: "How many days did you do these activities during the past week?",
			adult_label: "How many days did your child do these activities during the past week?",
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
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 19",
			label: "在过去一周里，你有几天参与上述这些活动？",
			kid_label: "在过去一周里，你有几天参与上述这些活动？",
			adult_label: "在过去一周里，您的孩子有几天参与上述这些活动？",
			choices: [
				{
					label: "1 天",
					value: "1",
				},
				{
					label: "2 天",
					value: "2",
				},
				{
					label: "3 天",
					value: "3",
				},
				{
					label: "4 天",
					value: "4",
				},
				{
					label: "5 天",
					value: "5",
				},
				{
					label: "6 天",
					value: "6",
				},
				{
					label: "7 天",
					value: "7",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 19",
			label: "¿Cuántos días realizaste estas actividades durante la semana pasada?",
			kid_label: "¿Cuántos días realizaste estas actividades durante la semana pasada?",
			adult_label:
				"¿Cuántos días realizó su hija o hijo estas actividades durante la semana pasada?",
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
			heading: "Question 19",
			label: "Combien de jours as-tu fait ces activités au cours de la dernière semaine?",
			kid_label: "Combien de jours as-tu fait ces activités au cours de la dernière semaine?",
			adult_label:
				"Combien de jours ton enfant a-t-il (elle) fait ces activités au cours de la dernière semaine?",
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

export default S5Q2;
