import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S1Q2: LangQuestionRadioPayloadInterface = {
	ident: "school_2",
	name: "Question 2: How many days did you attend school in the past week?",
	column_name: "02.0 Scho",
	audio_ident: "school_2",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 2",
			label: "How many days did you attend school in the past week?",
			kid_label: "How many days did you attend school in the past week?",
			adult_label: "How many days did your child attend school in the past week?",
			choices: [
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 2",
			label: "Hur många dagar har du varit i skolan den senaste veckan?",
			kid_label: "Hur många dagar har du varit i skolan den senaste veckan?",
			adult_label: "Hur många dagar har ditt barn varit i skolan den senaste veckan?",
			choices: [
				{
					label: "En dag",
					value: "1",
				},
				{
					label: "2 dagar",
					value: "2",
				},
				{
					label: "3 dagar",
					value: "3",
				},
				{
					label: "4 dagar",
					value: "4",
				},
				{
					label: "5 dagar",
					value: "5",
				},
				{
					label: "6 dagar",
					value: "6",
				},
				{
					label: "7 dagar",
					value: "7",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 2",
			label: "สัปดาห์ที่แล้วน้องไปโรงเรียนกี่วัน?",
			kid_label: "สัปดาห์ที่แล้วน้องไปโรงเรียนกี่วัน?",
			adult_label: "สัปดาห์ที่แล้วบุตรหลานของคุณไปโรงเรียนกี่วัน?",
			choices: [
				{
					label: "1 วัน",
					value: "1",
				},
				{
					label: "2 วัน",
					value: "2",
				},
				{
					label: "3 วัน",
					value: "3",
				},
				{
					label: "4 วัน",
					value: "4",
				},
				{
					label: "5 วัน",
					value: "5",
				},
				{
					label: "6 วัน",
					value: "6",
				},
				{
					label: "7 วัน",
					value: "7",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 2",
			label: "在过去一周里，你上了几天学？",
			kid_label: "在过去一周里，你上了几天学？",
			adult_label: "在过去一周里，您的孩子有几天上学？",
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
			heading: "Question 2",
			label: "¿Cuántos días fuiste a la escuela o colegio la semana pasada?",
			kid_label: "¿Cuántos días fuiste a la escuela o colegio la semana pasada?",
			adult_label: "¿Cuántos días fue su hija o hijo a la escuela o colegio la semana pasada?",
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
			heading: "Question 2",
			label: "Combien de jours es-tu allé.e à l'école durant la dernière semaine?",
			kid_label: "Combien de jours es-tu allé.e à l'école durant la dernière semaine?",
			adult_label:
				"Combien de jours ton enfant est-il (elle) allé à l'école durant la dernière semaine?",
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

export default S1Q2;
