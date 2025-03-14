import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const GSHS4: LangQuestionRadioPayloadInterface = {
	ident: "gshs_4",
	name: "Question 28: During this school year, on how many days did you go to physical education (PE) class each week?",
	column_name: "GSHS 04",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			kid_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			adult_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
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
					label: "5 or more days",
					value: ">=5",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 28",
			label:
				"Ao longo deste ano escolar, quantos dias por semana você participou das aulas de Educação Física?",
			kid_label:
				"Ao longo deste ano escolar, quantos dias por semana você participou das aulas de Educação Física?",
			adult_label:
				"Ao longo deste ano escolar, quantos dias por semana você participou das aulas de Educação Física?",
			choices: [
				{
					label: "0 (nenhum dia)",
					value: "0",
				},
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
					label: "5 ou mais dias",
					value: ">=5",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 28",
			label:
				"En este curso académico, ¿cuántos días por semana fuiste a clase de educación física en el colegio?",
			kid_label:
				"En este curso académico, ¿cuántos días por semana fuiste a clase de educación física en el colegio?",
			adult_label:
				"En este curso académico, ¿cuántos días por semana fuiste a clase de educación física en el colegio?",
			choices: [
				{
					label: "0 días",
					value: "0",
				},
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
					label: "5 o más días",
					value: ">=5",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label:
				"Pendant l’année scolaire en cours, combien de jours par semaine as-tu suivi des cours d’éducation physique (EP)?",
			kid_label:
				"Pendant l’année scolaire en cours, combien de jours par semaine as-tu suivi des cours d’éducation physique (EP)?",
			adult_label:
				"Pendant l’année scolaire en cours, combien de jours par semaine as-tu suivi des cours d’éducation physique (EP)?",
			choices: [
				{
					label: "0 jour",
					value: "0",
				},
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
					label: "5 jours ou plus",
					value: ">=5",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 28",
			label:
				"En este año escolar, ¿cuántos días en la semana fuiste a clase de educación física en la escuela?",
			kid_label:
				"En este año escolar, ¿cuántos días en la semana fuiste a clase de educación física en la escuela?",
			adult_label:
				"En este año escolar, ¿cuántos días en la semana fuiste a clase de educación física en la escuela?",
			choices: [
				{
					label: "0 días",
					value: "0",
				},
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
					label: "5 o más días",
					value: ">=5",
				},
			],
		},
		"en-NZ": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			kid_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			adult_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
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
					label: "5 or more days",
					value: ">=5",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			kid_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			adult_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
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
					label: "5 or more days",
					value: ">=5",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			kid_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			adult_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
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
					label: "5 or more days",
					value: ">=5",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			kid_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			adult_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
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
					label: "5 or more days",
					value: ">=5",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 28",
			label: "Hur många dagar i veckan har du haft idrottslektion under det senaste skolåret?",
			kid_label: "Hur många dagar i veckan har du haft idrottslektion under det senaste skolåret?",
			adult_label:
				"Hur många dagar i veckan har du haft idrottslektion under det senaste skolåret?",
			choices: [
				{
					label: "0 dagar",
					value: "0",
				},
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
					label: "5 dagar eller fler",
					value: ">=5",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 28",
			label: "在本学年里，每周你有几天上体育课？",
			kid_label: "在本学年里，每周你有几天上体育课？",
			adult_label: "在本学年里，每周你有几天上体育课？",
			choices: [
				{
					label: "0天",
					value: "0",
				},
				{
					label: "1天",
					value: "1",
				},
				{
					label: "2天",
					value: "2",
				},
				{
					label: "3天",
					value: "3",
				},
				{
					label: "4天",
					value: "4",
				},
				{
					label: "5天或以上",
					value: ">=5",
				},
			],
		},
	},
};

export default GSHS4;
