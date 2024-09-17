import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q8: LangQuestionRadioPayloadInterface = {
	ident: "transportation_8",
	name: "Question 17b: How many days did you walk to places other than school or work in the past week?",
	type: Screen.SingleQuestion,
	column_name: "17.B Tran",
	audio_ident: "transportation_8",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17b - Walking",
			label: "How many days did you walk to places other than school or work in the past week?",
			kid_label: "How many days did you walk to places other than school or work in the past week?",
			adult_label:
				"How many days did your child walk to places other than school or work in the past week?",
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
			heading: "Pergunta 17b - Andando",
			label:
				"Na última semana, quantos dias você caminhou para outros lugares além da escola ou trabalho?",
			kid_label:
				"Na última semana, quantos dias você caminhou para outros lugares além da escola ou trabalho?",
			adult_label:
				"Na última semana, quantos dias o(a) seu(sua) filho(a) caminhou para outros lugares além da escola ou trabalho?",
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
			heading: "Fråga 17b - Gående",
			label:
				"Hur många dagar gick du till andra platser än skolan eller arbetet under sen senaste veckan?",
			kid_label:
				"Hur många dagar gick du till andra platser än skolan eller arbetet under sen senaste veckan?",
			adult_label:
				"Hur många dagar gick ditt barn till andra platser än skolan eller arbetet under sen senaste veckan?",
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
			heading: "คำถาม 17b - เดิน",
			label:
				"สัปดาห์ที่แล้ว น้องเดิน เพื่อไปสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงานทั้งหมดกี่วัน?",
			kid_label:
				"สัปดาห์ที่แล้ว น้องเดิน เพื่อไปสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงานทั้งหมดกี่วัน?",
			adult_label:
				"สัปดาห์ที่แล้ว บุตรหลานของคุณเดิน เพื่อไปสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงานทั้งหมดกี่วัน?",
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
			heading: "问题 17b - 步行",
			label: "在过去一周里，除了上学或工作，你有多少天步行去别的地方？",
			kid_label: "在过去一周里，除了上学或工作，你有多少天步行去别的地方？",
			adult_label: "在过去一周里，您的孩子有多少天步行去除了学校或工作以外的地方？",
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
			heading: "Pregunta 17b - Caminando",
			label:
				"¿Cuántos días caminaste para llegar a lugares distintos al trabajo o voluntariado, escuela o colegio durante la semana pasada?",
			kid_label:
				"¿Cuántos días caminaste para llegar a lugares distintos al trabajo o voluntariado, escuela o colegio durante la semana pasada?",
			adult_label:
				"¿Cuántos días su hija o hijo caminó para llegar a lugares distintos al trabajo o voluntariado, escuela o colegio la semana pasada?",
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
			heading: "Pregunta 17b - Caminando",
			label:
				"¿Cuántos días caminaste para llegar a lugares distintos al trabajo, escuela o colegio en la última semana?",
			kid_label:
				"¿Cuántos días caminaste para llegar a lugares distintos al trabajo, escuela o colegio en la última semana?",
			adult_label:
				"¿Cuántos días su hija o hijo caminó para llegar a lugares distintos al trabajo, escuela o colegio en la última semana?",
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
			heading: "Question 17b - Marche",
			label:
				"Combien de jours as-tu marché pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
			kid_label:
				"Combien de jours as-tu marché pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
			adult_label:
				"Combien de jours ton enfant a-t-il (elle) marché pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
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

export default S4Q8;
