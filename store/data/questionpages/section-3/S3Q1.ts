import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S3Q1: QuestionRadioPayloadInterface = {
	ident: "work_1",
	name: "Question 12: In the past week, did you volunteer or work?",
	type: Screen.SingleQuestion,
	column_name: "12.0 Work",
	audio_ident: "work_1",
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 12",
			label: "In the past week, did you volunteer or work?",
			kid_label: "In the past week, did you volunteer or work?",
			adult_label: "In the past week, did your child volunteer or work?",
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
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 12",
			label: "在过去一周里，你是否有参加志愿服务或工作？",
			kid_label: "在过去一周里，你是否有参加志愿服务或工作？",
			adult_label: "在过去一周里，您的孩子是否有参加志愿服务或工作？",
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
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Question 12",
			label: "En la última semana, ¿fuiste voluntario o trabajaste?",
			kid_label: "En la última semana, ¿fuiste voluntario o trabajaste?",
			adult_label: "En la última semana, ¿fue su hija o hijo voluntario o trabajó?",
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
			heading: "Question 12",
			label: "Durant la dernière semaine, as-tu fait du bénévolat ou un travail?",
			kid_label: "Durant la dernière semaine, as-tu fait du bénévolat ou un travail?",
			adult_label:
				"Durant la dernière semaine, ton enfant a-t-il (elle) fait du bénévolat ou un travail?",
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

export default S3Q1;
