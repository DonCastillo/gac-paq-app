import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S6Q2: QuestionRadioPayloadInterface = {
	ident: "play_2",
	name: "Question 22: In the past week, how many days per week did you do activities that make your muscles stronger?",
	type: Screen.SingleQuestion,
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
			choices: [
				{
					label: "0 Days",
					value: "0",
				},
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
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 22",
			label: "En la última semana, ¿cuántos días realizaste actividades que fortalecieron tus músculos?",
			kid_label: "En la última semana, ¿cuántos días realizaste actividades que fortalecieron tus músculos?",
			adult_label:
				"¿Cuántos días a la semana tu hijo realizó actividades que fortalecen sus músculos en la última semana?",
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
					label: "0 Jour",
					value: "0",
				},
				{
					label: "1 Jour",
					value: "1",
				},
				{
					label: "2 Jours",
					value: "2",
				},
				{
					label: "3 Jours",
					value: "3",
				},
				{
					label: "4 Jours",
					value: "4",
				},
				{
					label: "5 Jours",
					value: "5",
				},
				{
					label: "6 Jours",
					value: "6",
				},
				{
					label: "7 Jours",
					value: "7",
				},
			],
		},
	},
};

export default S6Q2;
