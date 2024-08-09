import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S5Q1: LangQuestionRadioPayloadInterface = {
	ident: "organized_1",
	name: "Question 18:	Did you do any organized activities during the past week?",
	column_name: "18.0 Orga",
	audio_ident: "organized_1",
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
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 18",
			label:
				"Har du gått på någon organiserad idrott under den senaste veckan? (T.ex. fotboll, dans, hockey, ridning med mera)",
			kid_label:
				"Har du gått på någon organiserad idrott under den senaste veckan? (T.ex. fotboll, dans, hockey, ridning med mera)",
			adult_label:
				"Har ditt barn gått på någon organiserad idrott under den senaste veckan? (T.ex. fotboll, dans, hockey, ridning med mera)",
			choices: [
				{
					label: "Ja",
					value: "yes",
				},
				{
					label: "Nej",
					value: "no",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 18",
			label: "在过去一周里，你有参加有组织的活动吗?",
			kid_label: "在过去一周里，你有参加有组织的活动吗?",
			adult_label: "在过去一周里，您的孩子有参加有组织的活动吗?",
			choices: [
				{
					label: "是",
					value: "yes",
				},
				{
					label: "否",
					value: "no",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 18",
			label: "¿Realizaste alguna actividad organizada durante la semana pasada?",
			kid_label: "¿Realizaste alguna actividad organizada durante la semana pasada?",
			adult_label: "¿Su hija o hijo realizó alguna actividad organizada durante la semana pasada?",
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
