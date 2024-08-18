import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S1Q1: LangQuestionRadioPayloadInterface = {
	ident: "school_1",
	name: "Question 1: Did you attend school in the past week?",
	column_name: "01.0 Scho",
	audio_ident: "school_1",
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
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 1",
			label: "Har du varit i skolan den senaste veckan?",
			kid_label: "Har du varit i skolan den senaste veckan?",
			adult_label: "Har ditt barn varit i skolan den senaste veckan?",
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
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 1",
			label: "น้องไปโรงเรียนเมื่อสัปดาห์ที่แล้วหรือไม่?",
			kid_label: "น้องไปโรงเรียนเมื่อสัปดาห์ที่แล้วหรือไม่?",
			adult_label: "บุตรหลานของคุณไปโรงเรียนเมื่อสัปดาห์ที่แล้วหรือไม่?",
			choices: [
				{
					label: "ใช่ ได้ไป",
					value: "yes",
				},
				{
					label: "ไม่ ไม่ได้ไป",
					value: "no",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 1",
			label: "在过去一周里，你是否上过学？",
			kid_label: "在过去一周里，你是否上过学？",
			adult_label: "在过去一周里，您的孩子是否上过学？",
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
			heading: "Pregunta 1",
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
