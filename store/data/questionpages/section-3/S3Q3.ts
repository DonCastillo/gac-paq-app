import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioImagePayloadInterface } from "interface/payload.type";

const S3Q3: QuestionRadioImagePayloadInterface = {
	ident: "work_3",
	name: "Question 14:	Which of the following images shows what you do most of the time while volunteering and/or working?",
	type: Screen.SingleQuestion,
	column_name: "14.0 Work",
	translations: {
		"en-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 14",
			label:
				"Which of the following pictures looks like what you do most of the time while volunteering and/or working?",
			kid_label:
				"Which of the following pictures looks like what you do most of the time while volunteering and/or working?",
			adult_label:
				"Which of the following images resembles what your child does most of the time while volunteering and/or working?",
			choices: [
				{
					label: "Not moving",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "Easy effort",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "Medium or hard effort",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "Don't know",
					value: "0",
					image_ident: "dont_know",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadioImage,
			heading: "问题 14",
			label: "以下哪一项显示了你在做志愿服务和/或工作时大部分时间在做的事情？",
			kid_label: "以下哪一项显示了你在做志愿服务和/或工作时大部分时间在做的事情？",
			adult_label: "以下哪一项显示了您的孩子在做志愿服务和/或工作时大部分时间在做的事情？",
			choices: [
				{
					label: "不动",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "低强度",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "中等或高强度",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "不知道",
					value: "0",
					image_ident: "dont_know",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadioImage,
			heading: "Question 14",
			label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo mientras eres voluntario y/o trabajas?",
			kid_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo mientras eres voluntario y/o trabajas?",
			adult_label:
				"¿Cuál de las siguientes opciones se parece más a lo que hace la mayor parte del tiempo su hija o hijo mientras es voluntario y/o trabaja?",
			choices: [
				{
					label: "Sin moverte",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "Esfuerzo fácil",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "Esfuerzo medio o fuerte",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "No sé",
					value: "0",
					image_ident: "dont_know",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 14",
			label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps lorsque tu fais du bénévolat et/ou travailles?",
			kid_label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps lorsque tu fais du bénévolat et/ou travailles?",
			adult_label:
				"Laquelle des images suivantes ressemble à ce que ton enfant fait la plupart du temps en travaillant et/ou en faisant du bénévolat?",
			choices: [
				{
					label: "Pas de mouvement",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "Peu d'effort",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "Un effort moyen ou intense",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "Je ne sais pas",
					value: "0",
					image_ident: "dont_know",
				},
			],
		},
	},
};

export default S3Q3;
