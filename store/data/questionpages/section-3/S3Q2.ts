import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S3Q2: QuestionRadioPayloadInterface = {
	ident: "work_2",
	name: "Question 13: In the past week, how many hours have you spent volunteering and/or working?",
	type: Screen.SingleQuestion,
	column_name: "13.0 Work",
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 13",
			label: "In the past week, how many hours have you spent volunteering and/or working?",
			kid_label: "In the past week, how many hours have you spent volunteering and/or working?",
			adult_label:
				"In the past week, how many hours did your child spend volunteering and/or working?",
			choices: [
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
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 13",
			label: "在过去一周里，你有多少小时做志愿服务和/或工作？",
			kid_label: "在过去一周里，你有多少小时做志愿服务和/或工作？",
			adult_label: "在过去一周里，您的孩子有多少小时做志愿服务和/或工作？",
			choices: [
				{
					label: "每天少于1小时 ",
					value: "Less than 1 hour per day",
				},
				{
					label: "每天1-2小时",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "每天2-3小时",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "每天3-4小时",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "每天4小时或以上",
					value: "4 hours or more per day",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Question 13",
			label: "¿Cuántas horas has pasado como voluntario y/o trabajando en la última semana?",
			kid_label: "¿Cuántas horas has pasado como voluntario y/o trabajando en la última semana?",
			adult_label:
				"¿Cuántas horas ha pasado su hija o hijo como voluntario y/o trabajando en la última semana?",
			choices: [
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
			heading: "Question 13",
			label:
				"Durant la dernière semaine, combien d'heures as-tu passées à faire du bénévolat et/ou à travailler?",
			kid_label:
				"Durant la dernière semaine, combien d'heures as-tu passées à faire du bénévolat et/ou à travailler?",
			adult_label:
				"Durant la dernière semaine, combien d'heures ton enfant a-t-il (elle) passées à faire du bénévolat et/ou à travailler?",
			choices: [
				{
					label: "Moins de 1 heure par jour",
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

export default S3Q2;
