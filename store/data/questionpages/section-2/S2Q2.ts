import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S2Q2: LangQuestionRadioPayloadInterface = {
	ident: "household_2",
	name: "Question 9: How many days did you do chores during the past week?",
	column_name: "09.0 Hous",
	audio_ident: "household_2",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 9",
			label: "How many days did you do chores during the past week?",
			kid_label: "How many days did you do chores during the past week?",
			adult_label: "How many days did your child do chores during the past week?",
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
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 9",
			label: "How many days did you do chores during the past week?",
			kid_label: "How many days did you do chores during the past week?",
			adult_label: "How many days did your child do chores during the past week?",
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
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "السؤال ٩",
			label: "خلال الأسبوع الماضي، كم عدد الأيام التي قمت فيها بالأعمال المنزلية؟",
			kid_label: "خلال الأسبوع الماضي، كم عدد الأيام التي قمت فيها بالأعمال المنزلية؟",
			adult_label: "خلال الأسبوع الماضي، كم عدد الأيام التي قام فيها طفلك بالأعمال المنزلية؟",
			choices: [
				{
					label: "يوم واحد (١)",
					value: "1",
				},
				{
					label: "يومين (٢)",
					value: "2",
				},
				{
					label: "ثلاثة أيام (٣)",
					value: "3",
				},
				{
					label: "أربعة أيام (٤)",
					value: "4",
				},
				{
					label: "خمسة أيام (٥)",
					value: "5",
				},
				{
					label: "ستة أيام  (٦)",
					value: "6",
				},
				{
					label: "سبعة أيام (٧)",
					value: "7",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न ९",
			label: "तपाईंले पछिल्लो (गएको/ बितेको) हप्तामा कति दिन घरायसी कामकाज गर्नुभयो?",
			kid_label: "तपाईंले पछिल्लो (गएको/ बितेको) हप्तामा कति दिन घरायसी कामकाज गर्नुभयो?",
			adult_label:
				"तपाईंको छोरा वा छोरीले पछिल्लो (गएको/ बितेको) हप्तामा कति दिन घरायसी कामकाज गर्नुभयो?",
			choices: [
				{
					label: "१ दिन",
					value: "1",
				},
				{
					label: "२ दिन",
					value: "2",
				},
				{
					label: "३ दिन",
					value: "3",
				},
				{
					label: "४ दिन",
					value: "4",
				},
				{
					label: "५ दिन",
					value: "5",
				},
				{
					label: "६ दिन",
					value: "6",
				},
				{
					label: "७ दिन",
					value: "7",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 9",
			label: "Na última semana, quantos dias você fez atividades ou tarefas domésticas?",
			kid_label: "Na última semana, quantos dias você fez atividades ou tarefas domésticas?",
			adult_label:
				"Na última semana, quantos dias o(a) seu(sua) filho(a) fez atividades ou tarefas domésticas?",
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
			heading: "Fråga 9",
			label: "Hur många dagar gjorde du hushållssysslor den senaste veckan?",
			kid_label: "Hur många dagar gjorde du hushållssysslor den senaste veckan?",
			adult_label: "Hur många dagar gjorde ditt barn hushållssysslor den senaste veckan?",
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
			heading: "คำถาม 9",
			label:
				"สัปดาห์ที่แล้ว น้องทำงานบ้านหรือทำงานที่ได้รับมอบหมายหน้าที่จากครอบครัวทั้งหมดกี่วัน?",
			kid_label:
				"สัปดาห์ที่แล้ว น้องทำงานบ้านหรือทำงานที่ได้รับมอบหมายหน้าที่จากครอบครัวทั้งหมดกี่วัน?",
			adult_label:
				"สัปดาห์ที่แล้ว บุตรหลานของคุณทำงานบ้านหรือทำงานที่ได้รับมอบหมายหน้าที่จากครอบครัวทั้งหมดกี่วัน?",
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
			heading: "问题 9",
			label: "在过去一周里，你有几天在做家务活？",
			kid_label: "在过去一周里，你有几天在做家务活？",
			adult_label: "在过去一周里，您的孩子有几天在做家务活？",
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
			heading: "Pregunta 9",
			label: "¿Cuántos días de la semana pasada realizaste tareas  del hogar o quehaceres?",
			kid_label: "¿Cuántos días de la semana pasada realizaste tareas  del hogar o quehaceres?",
			adult_label:
				"¿Cuántos días de la semana pasada realizó su hija o hijo tareas del hogar o quehaceres?",
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
			heading: "Pregunta 9",
			label: "¿Cuántos días de la semana pasada realizaste tareas  del hogar o quehaceres?",
			kid_label: "¿Cuántos días de la semana pasada realizaste tareas  del hogar o quehaceres?",
			adult_label:
				"¿Cuántos días de la semana pasada realizó su hija o hijo tareas del hogar o quehaceres?",
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
			heading: "Question 9",
			label: "Durant combien de jours as-tu fait des tâches au cours de la dernière semaine?",
			kid_label: "Durant combien de jours as-tu fait des tâches au cours de la dernière semaine?",
			adult_label:
				"Durant combien de jours ton enfant a-t-il (elle) fait des tâches au cours de la dernière semaine?",
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

export default S2Q2;
