import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S5Q2: LangQuestionRadioPayloadInterface = {
	ident: "organized_2",
	name: "Question 19: How many days did you do these activities during the past week?",
	column_name: "19.0 Orga",
	audio_ident: "organized_2",
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
			heading: "Pergunta 19",
			label: "Na última semana, quantos dias você fez essas atividades?",
			kid_label: "Na última semana, quantos dias você fez essas atividades?",
			adult_label: "Na última semana, quantos dias o(a) seu(sua) filho(a) fez essas atividades?",
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
			heading: "Fråga 19",
			label: "Hur många dagar gick du på dessa aktiviteter under den senaste veckan?",
			kid_label: "Hur många dagar gick du på dessa aktiviteter under den senaste veckan?",
			adult_label:
				"Hur många dagar gjorde ditt barn på dessa aktiviteter under den senaste veckan?",
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
			heading: "คำถาม 19",
			label: "สัปดาห์ที่แล้ว น้องทำกิจกรรมดังกล่าวทั้งหมดกี่วัน?",
			kid_label: "สัปดาห์ที่แล้ว น้องทำกิจกรรมดังกล่าวทั้งหมดกี่วัน?",
			adult_label: "สัปดาห์ที่แล้ว บุตรหลานของคุณทำกิจกรรมดังกล่าวทั้งหมดกี่วัน?",
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
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 19",
			label: "¿Cuántos días realizaste estas actividades durante la semana pasada?",
			kid_label: "¿Cuántos días realizaste estas actividades durante la semana pasada?",
			adult_label:
				"¿Cuántos días realizó su hija o hijo estas actividades durante la semana pasada?",
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
			heading: "Pregunta 19",
			label: "¿Cuántos días realizaste estas actividades durante la semana pasada?",
			kid_label: "¿Cuántos días realizaste estas actividades durante la semana pasada?",
			adult_label:
				"¿Cuántos días realizó su hija o hijo estas actividades durante la semana pasada?",
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
			heading: "Question 19",
			label: "Combien de jours as-tu fait ces activités au cours de la dernière semaine?",
			kid_label: "Combien de jours as-tu fait ces activités au cours de la dernière semaine?",
			adult_label:
				"Combien de jours ton enfant a-t-il (elle) fait ces activités au cours de la dernière semaine?",
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

export default S5Q2;
