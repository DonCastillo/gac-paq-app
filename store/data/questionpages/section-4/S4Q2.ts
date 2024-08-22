import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q2: LangQuestionRadioPayloadInterface = {
	ident: "transportation_2",
	name: "Question 15b: How many days did you use this mode in the past week?",
	type: Screen.SingleQuestion,
	column_name: "15.B Tran",
	audio_ident: "transportation_2",
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 15b",
			label: "How many days did you use this mode in the past week?",
			kid_label: "How many days did you use this mode in the past week?",
			adult_label: "How many days did your child use this mode in the past week?",
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
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Question 15b",
			label: "Na última semana, quantos dias você usou este meio de transporte para ir à escola?",
			kid_label:
				"Na última semana, quantos dias você usou este meio de transporte para ir à escola?",
			adult_label:
				"Na última semana, quantos dias o(a) seu(sua) filho(a) usou este meio de transporte para ir à escola?",
			choices: [
				{
					label: "1 dia",
					value: "1",
				},
				{
					label: "2 dias",
					value: "2",
				},
				{
					label: "3 dias",
					value: "3",
				},
				{
					label: "4 dias",
					value: "4",
				},
				{
					label: "5 dias",
					value: "5",
				},
				{
					label: "6 dias",
					value: "6",
				},
				{
					label: "7 dias",
					value: "7",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 15b",
			label: "Hur många dagar tog du dig till skolan på detta sätt under den senaste veckan?",
			kid_label: "Hur många dagar tog du dig till skolan på detta sätt under den senaste veckan?",
			adult_label:
				"Hur många dagar tog sig ditt barn till skolan på detta sätt den senaste veckan?",
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
			heading: "คำถาม 15b",
			label: "สัปดาห์ที่แล้ว น้องใช้วิธีการเดินทางดังกล่าวนี้กี่วัน?",
			kid_label: "สัปดาห์ที่แล้ว น้องใช้วิธีการเดินทางดังกล่าวนี้กี่วัน?",
			adult_label: "สัปดาห์ที่แล้ว บุตรหลานของคุณใช้วิธีการเดินทางดังกล่าวนี้กี่วัน?",
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
			heading: "问题 15b",
			label: "在过去一周里，你有多少天采用上述方式去学校?",
			kid_label: "在过去一周里，你有多少天采用上述方式去学校?",
			adult_label: "在过去一周里，您的孩子有多少天采用上述方式去学校?",
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
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 15b",
			label: "¿Cuántos días usaste este modo de transporte durante la semana pasada?",
			kid_label: "¿Cuántos días usaste este modo de transporte durante la semana pasada?",
			adult_label: "¿Cuántos días usó su hija o hijo este modo de transporte en la última semana?",
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
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 15b",
			label: "¿Cuántos días usaste este modo de transporte en la última semana?",
			kid_label: "¿Cuántos días usaste este modo de transporte en la última semana?",
			adult_label: "¿Cuántos días usó su hija o hijo este modo de transporte en la última semana?",
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
			heading: "Question 15b",
			label:
				"Combien de jours as-tu utilisé ce moyen de transport au cours de la dernière semaine?",
			kid_label:
				"Combien de jours as-tu utilisé ce moyen de transport au cours de la dernière semaine?",
			adult_label:
				"Combien de jours ton enfant a-t-il (elle) utilisé ce moyen de transport au cours de la dernière semaine?",
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

export default S4Q2;
