import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q6: QuestionRadioPayloadInterface = {
	ident: "transportation_6",
	name: "Question 16c: How long does it normally take you to go to work?",
	column_name: "16.C Tran",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 16c",
			label: "How long does it normally take you to go to work?",
			kid_label: "How long does it normally take you to go to work?",
			adult_label: "How long does it normally take your child to go to work?",
			choices: [
				{
					label: "10 minutes or less",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "More than 60 minutes",
					value: "More than 60 minutes",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 16c",
			label: "通常情况下，你采用该交通方式到工作地点需要多长时间？",
			kid_label: "通常情况下，你采用该交通方式到工作地点需要多长时间？",
			adult_label: "通常情况下，您的孩子采用上述方式到工作地点需要多长时间？",
			choices: [
				{
					label: "少于或等于10分钟",
					value: "10 minutes or less",
				},
				{
					label: "11-20分钟",
					value: "11 - 20 minutes",
				},
				{
					label: "21-30分钟",
					value: "21 - 30 minutes",
				},
				{
					label: "31-60分钟",
					value: "31 - 60 minutes",
				},
				{
					label: "60分钟以上",
					value: "More than 60 minutes",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Question 16c",
			label: "¿Normalmente cuánto tiempo tardas en ir al trabajo?",
			kid_label: "¿Normalmente cuánto tiempo tardas en ir al trabajo?",
			adult_label: "¿Normalmente cuánto tiempo necesita su hija o hijo en ir al trabajo?",
			choices: [
				{
					label: "10 minutos o menos",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutos",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutos",
					value: "21 - 30 minutes",
				},
				{
					label: "31 - 60 minutos",
					value: "31 - 60 minutes",
				},
				{
					label: "Más de 60 minutos",
					value: "More than 60 minutes",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 16c",
			label: "Combien de temps te faut-il, en général, pour aller de la maison jusqu'au travail?",
			kid_label:
				"Combien de temps te faut-il, en général, pour aller de la maison jusqu'au travail?",
			adult_label:
				"Combien de temps faut-il, en général, à ton enfant pour se déplacer de la maison jusqu'au travail?",
			choices: [
				{
					label: "10 minutes ou moins",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "Plus de 60 minutes",
					value: "More than 60 minutes",
				},
			],
		},
	},
};

export default S4Q6;
