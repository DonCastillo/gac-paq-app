import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S6Q1: QuestionRadioPayloadInterface = {
	ident: "play_1",
	name: "Question 21:	In the past week, on a normal day, how much time did you spend playing actively, just for fun?",
	type: Screen.SingleQuestion,
	column_name: "21.0 Play",
	audio_ident: "play_1",
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 21",
			label:
				"In the past week, on a normal day, how much time did you spend playing actively, just for fun?",
			kid_label:
				"In the past week, on a normal day, how much time did you spend playing actively, just for fun?",
			adult_label:
				"In the past week, on a normal day, how much time did your child spend playing actively, just for fun?",
			choices: [
				{
					label: "None",
					value: "None",
				},
				{
					label: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 to less than 2 hours per day",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 to less than 3 hours per day",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 to less than 4 hours per day",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 hours or more per day",
					value: "4 hours or more per day",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 21",
			label:
				"Hur mycket tid rörde du dig, på din fritid (ej sport) under en vanlig dag den senaste veckan?",
			kid_label:
				"Hur mycket tid rörde du dig, på din fritid (ej sport) under en vanlig dag den senaste veckan?",
			adult_label:
				"Hur mycket tid var ditt barn aktiv på fritiden (ej organiserat idrott eller transport) under en vanlig dag den senaste veckan?",
			choices: [
				{
					label: "Ingen",
					value: "None",
				},
				{
					label: "Mindre än 1 timme per dag",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 till mindre än 2 timmar per dag",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 till mindre än 3 timmar per dag",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 till mindre än 4 timmar per dag",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 timmar eller mer per dag",
					value: "4 hours or more per day",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "第二十一题",
			label: "在过去一周里，你每天仅仅是为了玩耍而进行的活动平均有多长时间？",
			kid_label: "在过去一周里，你每天仅仅是为了玩耍而进行的活动平均有多长时间？",
			adult_label: "在过去的一周里，你的孩子在一个正常的日子里，玩得开心的时间有多少？",
			choices: [
				{
					label: "没有",
					value: "None",
				},
				{
					label: "每天少于1小时",
					value: "Less than 1 hour per day",
				},
				{
					label: "每天1-2 小时",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "每天2-3 小时 ",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "每天3-4小时",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "每天4 小时及以上",
					value: "4 hours or more per day",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 21",
			label:
				"En la última semana, en un día normal, ¿cuánto tiempo pasaste jugando activamente, solo por diversión?",
			kid_label:
				"En la última semana, en un día normal, ¿cuánto tiempo pasaste jugando activamente, solo por diversión?",
			adult_label:
				"En la última semana, en un día normal, ¿cuánto tiempo pasó su hija o hijo jugando activamente, solo por diversión?",
			choices: [
				{
					label: "Nada",
					value: "None",
				},
				{
					label: "Menos de 1 hora al día",
					value: "Less than 1 hour per day",
				},
				{
					label: "De 1 a menos de 2 horas al día",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "De 2 a menos de 3 horas al día",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "De 3 a menos de 4 horas al día",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 horas o más al día",
					value: "4 hours or more per day",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 21",
			label:
				"Durant la dernière semaine, lors d'une journée normale, combien de temps as-tu passé à jouer activement, juste pour le plaisir?",
			kid_label:
				"Durant la dernière semaine, lors d'une journée normale, combien de temps as-tu passé à jouer activement, juste pour le plaisir?",
			adult_label:
				"Durant la dernière semaine, lors d'une journée normale, combien de temps ton enfant a-t-il (elle) passé à jouer activement, juste pour le plaisir?",
			choices: [
				{
					label: "Pas du tout",
					value: "None",
				},
				{
					label: "Moins d'une heure par jour",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 à moins de 2 heures par jour",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 à moins de 3 heures par jour",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 à moins de 4 heures par jour",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 heures ou plus par jour",
					value: "4 hours or more per day",
				},
			],
		},
	},
};

export default S6Q1;
