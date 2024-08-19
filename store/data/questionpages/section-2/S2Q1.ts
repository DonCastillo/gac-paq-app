import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S2Q1: LangQuestionRadioPayloadInterface = {
	ident: "household_1",
	name: "Question 8: In the past week, did you do active chores or tasks?",
	column_name: "08.0 Hous",
	audio_ident: "household_1",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 8",
			label: "In the past week, did you do active chores or tasks?",
			kid_label: "In the past week, did you do active chores or tasks?",
			adult_label: "In the past week, did your child do active chores or tasks?",
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
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Pergunta 8",
			label: "Na última semana, você realizou ativamente atividades ou tarefas domésticas?",
			kid_label: "Na última semana, você realizou ativamente atividades ou tarefas domésticas?",
			adult_label:
				"Na última semana, o(a) seu(sua) filho(a) realizou ativamente atividades ou tarefas domésticas?",
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
			heading: "Fråga 8",
			label:
				"Har du gjort några aktiva hushållssysslor eller uppgifter i hemmet under den senaste veckan?",
			kid_label:
				"Har du gjort några aktiva hushållssysslor eller uppgifter i hemmet under den senaste veckan?",
			adult_label:
				"Har ditt barn gjort några aktiva hushållssysslor eller uppgifter i hemmet under den senaste veckan?",
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
			heading: "คำถาม 8",
			label:
				"สัปดาห์ที่แล้ว น้องได้ทำงานบ้านหรือทำงานที่ได้รับมอบหมายหน้าที่จากครอบครัวที่ต้องออกแรงบ้างหรือไม่?",
			kid_label:
				"สัปดาห์ที่แล้ว น้องได้ทำงานบ้านหรือทำงานที่ได้รับมอบหมายหน้าที่จากครอบครัวที่ต้องออกแรงบ้างหรือไม่?",
			adult_label:
				"สัปดาห์ที่แล้ว บุตรหลานของคุณได้ทำงานบ้านหรือทำงานที่ได้รับมอบหมายหน้าที่จากครอบครัวที่ต้องออกแรงบ้างหรือไม่?",
			choices: [
				{
					label: "ใช่ ได้ทำ",
					value: "yes",
				},
				{
					label: "ไม่ ไม่ได้ทำ",
					value: "no",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 8",
			label: "在过去一周里，你有参与做家务活吗？",
			kid_label: "在过去一周里，你有参与做家务活吗？",
			adult_label: "在过去一周里，您的孩子有参与做家务活吗？",
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
			heading: "Pregunta 8",
			label: "¿Realizaste tareas del hogar o quehaceres activos la semana pasada?",
			kid_label: "¿Realizaste tareas del hogar o quehaceres activos la semana pasada?",
			adult_label:
				"¿Realizó su hija o hijo tareas del hogar o quehaceres activos la semana pasada?",
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
			heading: "Pregunta 8",
			label: "¿Realizaste tareas del hogar o quehaceres activos la semana pasada?",
			kid_label: "¿Realizaste tareas del hogar o quehaceres activos la semana pasada?",
			adult_label:
				"En la última semana ¿realizó su hija o hijo tareas del hogar o quehaceres activos?",
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
			heading: "Question 8",
			label: "Au cours de la dernière semaine, as-tu effectué des tâches actives?",
			kid_label: "Au cours de la dernière semaine, as-tu effectué des tâches actives?",
			adult_label:
				"Au cours de la dernière semaine, ton enfant a-t-il (elle) effectué des tâches actives?",
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

export default S2Q1;
