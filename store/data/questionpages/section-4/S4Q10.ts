import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q10: LangQuestionRadioPayloadInterface = {
	ident: "transportation_10",
	name: "Question 17d: How many days did you wheel to places other than school or work in the past week?",
	column_name: "17.D Tran",
	audio_ident: "transportation_10",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17d",
			label: "How many days did you wheel to places other than school or work in the past week?",
			kid_label:
				"How many days did you wheel to places other than school or work in the past week?",
			adult_label:
				"How many days did your child wheel to places other than school or work in the past week?",
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
			heading: "Fråga 17d",
			label:
				"Hur många dagar cyklade (eller åkte rullstol, e-cykel, sparkcykel eller rollerblades) du till andra platser än skolan eller arbetet under den senaste veckan?",
			kid_label:
				"Hur många dagar cyklade (eller åkte rullstol, e-cykel, sparkcykel eller rollerblades) du till andra platser än skolan eller arbetet under den senaste veckan?",
			adult_label:
				"Hur många dagar cyklade ditt barn (eller åkte rullstol, e-cykel, sparkcykel eller rollerblades) till andra platser än skolan eller arbetet under den senaste veckan?",
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
			heading: "คำถาม 17d",
			label: "สัปดาห์ที่แล้ว คุณใช้รถที่มีล้อไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงานกี่วัน?",
			kid_label:
				"สัปดาห์ที่แล้ว คุณใช้รถที่มีล้อไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงานกี่วัน?",
			adult_label:
				"สัปดาห์ที่แล้ว บุตรหลานของคุณใช้รถที่มีล้อไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงานกี่วัน?",
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
			heading: "问题 17d",
			label: "在过去一周里，除了上学或工作，您有多少天骑自行车去其他地方？",
			kid_label: "在过去一周里，除了上学或工作，您有多少天骑自行车去其他地方？",
			adult_label: "在过去一周里，除了上学或工作，您的孩子有多少天骑自行车去其他地方？",
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
			heading: "Pregunta 17d",
			label:
				"¿Cuántos días te desplazaste sobre ruedas para llegar a lugares distintos al trabajo, escuela o colegio en la última semana?",
			kid_label:
				"¿Cuántos días te desplazaste sobre ruedas para llegar a lugares distintos al trabajo, escuela o colegio en la última semana?",
			adult_label:
				"¿Cuántos días su hija o hijo se desplazó sobre ruedas para llegar a lugares distintos al trabajo, escuela o colegio en la última semana?",
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
			heading: "Question 17d",
			label:
				"Combien de jours as-tu roulé pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
			kid_label:
				"Combien de jours as-tu roulé pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
			adult_label:
				"Combien de jours ton enfant a-t-il (elle) roulé pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
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

export default S4Q10;
