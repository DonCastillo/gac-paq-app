import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S1Q1: LangQuestionRadioPayloadInterface = {
	ident: "school_1",
	name: "Question 1: Did you attend school in the past week?",
	column_name: "01.0 Scho",
	audio_ident: "school_1",
	audio_autoplay: true,
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
		"en-AE": {
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
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "السؤال 1",
			label: "هل ذهبت إلى المدرسة خلال الأسبوع الماضي؟",
			kid_label: "هل ذهبت إلى المدرسة خلال الأسبوع الماضي؟",
			adult_label: "هل ذهب طفلك للمدرسة خلال الأسبوع الماضي؟",
			choices: [
				{
					label: "نعم",
					value: "yes",
				},
				{
					label: "لا",
					value: "no",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १",
			label: "के तपाईं पछिल्लो (गएको/ बितेको) हप्तामा विध्यालय जानुभयो?",
			kid_label: "के तपाईं पछिल्लो (गएको/ बितेको) हप्तामा विध्यालय जानुभयो?",
			adult_label: "के तपाईंको छोरा वा छोरी पछिल्लो (गएको/ बितेको) हप्तामा विद्यालय जानुभयो?",
			choices: [
				{
					label: "गएँ",
					value: "yes",
				},
				{
					label: "गइनं",
					value: "no",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 1",
			label: "Na última semana, você foi à escola?",
			kid_label: "Na última semana, você foi à escola?",
			adult_label: "Na última semana, o(a) seu(sua) filho(a) foi à escola?",
			choices: [
				{
					label: "Sim",
					value: "yes",
				},
				{
					label: "Não",
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
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 1",
			label: "¿Fuiste a la escuela o colegio la semana pasada?",
			kid_label: "¿Fuiste a la escuela o colegio la semana pasada?",
			adult_label: "¿Fue su hija o hijo a la escuela o colegio la semana pasada?",
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
