import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S6Q2: LangQuestionRadioPayloadInterface = {
	ident: "play_2",
	name: "Question 22: In the past week, how many days per week did you do activities that make your muscles stronger?",
	type: Screen.SingleQuestion,
	column_name: "22.0 Play",
	audio_ident: "play_2",
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 22",
			label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			kid_label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			adult_label:
				"In the past week, how many days per week did your child do activities that make their muscles stronger?",
			kid_sublabel:
				"Examples include gymnastics, climbing, push-ups, weightlifting, or using monkey bars.",
			adult_sublabel:
				"Examples include gymnastics, climbing, push-ups, weightlifting, or using monkey bars.",
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
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 22",
			label:
				"Hur många dagar gjorde du någon aktivitet som gör att dina muskler blir starkare under den senaste veckan?",
			kid_label:
				"Hur många dagar gjorde du någon aktivitet som gör att dina muskler blir starkare under den senaste veckan?",
			adult_label:
				"Hur många dagar gjorde ditt barn någon aktivitet som gör musklerna starkare under den senaste veckan?",
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
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "第二十二题",
			label: "在过去一周里，你有几天会做一些能让你变得更强壮的活动？",
			kid_label: "在过去一周里，你有几天会做一些能让你变得更强壮的活动？",
			adult_label: "在过去一周里，您的孩子有几天是做一些能让他们变得更强壮的活动？",
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
					label: "5天",
					value: "5",
				},
				{
					label: "6天",
					value: "6",
				},
				{
					label: "7天",
					value: "7",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 22",
			label:
				"En la última semana, ¿cuántos días realizaste actividades que fortalecieron tus músculos?",
			kid_label:
				"En la última semana, ¿cuántos días realizaste actividades que fortalecieron tus músculos?",
			adult_label:
				"En la última semana, ¿cuántos días de la semana realizó su hija o hijo actividades que le fortalecieron sus músculos?",
			choices: [
				{
					label: "0 Días",
					value: "0",
				},
				{
					label: "1 Día",
					value: "1",
				},
				{
					label: "2 Días",
					value: "2",
				},
				{
					label: "3 Días",
					value: "3",
				},
				{
					label: "4 Días",
					value: "4",
				},
				{
					label: "5 Días",
					value: "5",
				},
				{
					label: "6 Días",
					value: "6",
				},
				{
					label: "7 Días",
					value: "7",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 22",
			label:
				"Au cours de la dernière semaine, combien de jours as-tu pratiqué des activités qui rendent tes muscles plus forts?",
			kid_label:
				"Au cours de la dernière semaine, combien de jours as-tu pratiqué des activités qui rendent tes muscles plus forts?",
			adult_label:
				"Au cours de la dernière semaine, combien de jours ton enfant a-t-il (elle) pratiqué des activités qui rendent ses muscles plus forts?",
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

export default S6Q2;
