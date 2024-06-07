import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S1Q6: QuestionRadioPayloadInterface = {
	ident: "school_6",
	name: "Question 6: On a normal school day, how much break time do you have?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 6",
			label: "On a normal school day, how much break time do you have?",
			kid_label: "On a normal school day, how much break time do you have?",
			adult_label: "On a normal school day, how much break time does your child have?",
			kid_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
			adult_sublabel:
				"This means recess and lunch breaks. Please add the time together - for example two 15-minute recess/break periods per day and 30 minutes for lunch would be 60 minutes",
			choices: [
				{
					label: "0 minutes",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutes",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutes",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "More than 60 minutes",
					value: "More than 60 minutes",
				},
				{
					label: "Don't know",
					value: "Don't know",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 6",
			label: "通常在上学日，在学校时你有多少休息时间？",
			kid_label: "通常在上学日，在学校时你有多少休息时间？",
			adult_label: "通常在上学日，在学校时您的孩子有多少休息时间？",
			kid_sublabel:
				"包括课间休息和午休时间。请将所有休息时间加在一起——如, 每天两次15分钟的课间休息/午休时间和30分钟的午餐时间一共是60分钟 ",
			adult_sublabel:
				"包括课间休息和午休时间。请将所有休息时间加在一起——如, 每天两次15分钟的课间休息/午休时间和30分钟的午餐时间一共是60分钟 ",
			choices: [
				{
					label: "0分钟",
					value: "0 minutes",
				},
				{
					label: "1-15分钟",
					value: "1 - 15 minutes",
				},
				{
					label: "16-30分钟",
					value: "16 - 30 minutes",
				},
				{
					label: "31-60分钟",
					value: "31 - 60 minutes",
				},
				{
					label: "60分钟以上",
					value: "More than 60 minutes",
				},
				{
					label: "不知道",
					value: "Don't know",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Question 6",
			label: "En un día escolar normal ¿Cuánto tiempo de recreo o descanso tienes?",
			kid_label: "En un día escolar normal ¿Cuánto tiempo de recreo o descanso tienes?",
			adult_label:
				"En un día escolar normal ¿Cuánto tiempo de recreo o descanso tiene su hija o hijo?",
			kid_sublabel:
				"Esto significa el recreo o descanso y la hora del refrigerio. Por favor, suma los tiempos; por ejemplo, dos recreos o descansos de 15 minutos por día y 30 minutos para consumir refrigerios sumarían 60 minutos",
			adult_sublabel:
				"Esto significa el recreo o descanso y la hora del refrigerio. Por favor, suma los tiempos; por ejemplo, dos recreos o descansos de 15 minutos por día y 30 minutos para consumir refrigerios sumarían 60 minutos",
			choices: [
				{
					label: "0 minutos",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutos",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutos",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutos",
					value: "31 - 60 minutes",
				},
				{
					label: "Más de 60 minutos",
					value: "More than 60 minutes",
				},
				{
					label: "No sé",
					value: "Don't know",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 6",
			label: "Lors d'une journée d'école normale, combien as-tu de temps de pause?",
			kid_label: "Lors d'une journée d'école normale, combien as-tu de temps de pause?",
			adult_label:
				"Lors d'une journée d'école normale, combien de temps de pause ton enfant a-t-il (elle)?",
			kid_sublabel:
				"Ici, il faut additionner les durées - par exemple, deux récréations/pauses de 15 minutes par jour et 30 minutes pour dîner donnent 60 minutes.",
			adult_sublabel:
				"Ici, il faut additionner les durées - par exemple, deux récréations/pauses de 15 minutes par jour et 30 minutes pour dîner donnent 60 minutes.",
			choices: [
				{
					label: "0 minutes",
					value: "0 minutes",
				},
				{
					label: "1 - 15 minutes",
					value: "1 - 15 minutes",
				},
				{
					label: "16 - 30 minutes",
					value: "16 - 30 minutes",
				},
				{
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "Plus de 60 minutes",
					value: "More than 60 minutes",
				},
				{
					label: "Je ne sais pas",
					value: "Don't know",
				},
			],
		},
	},
};

export default S1Q6;
