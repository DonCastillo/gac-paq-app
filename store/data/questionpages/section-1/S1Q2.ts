import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S1Q2: QuestionRadioPayloadInterface = {
	ident: "school_2",
	name: "Question 2: How many days did you attend school in the past week?",
	column_name: "2.0 Scho",
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
					label: "1 Day",
					value: "1",
				},
				{
					label: "2 Days",
					value: "2",
				},
				{
					label: "3 Days",
					value: "3",
				},
				{
					label: "4 Days",
					value: "4",
				},
				{
					label: "5 Days",
					value: "5",
				},
				{
					label: "6 Days",
					value: "6",
				},
				{
					label: "7 Days",
					value: "7",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 2",
			label: "在过去一周里，你有几天上学？",
			kid_label: "在过去一周里，你有几天上学？",
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
