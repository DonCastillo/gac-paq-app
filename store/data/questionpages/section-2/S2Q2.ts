import ScreenType from "../../../../constants/screen_type";
import type QuestionRadioPayloadInterface from "../../../../interface/directus/question-radio-payload";

const S2Q2: QuestionRadioPayloadInterface = {
	name: "Question 9: In the past week, how many hours have you spent volunteering and/or working?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 11,
			question_radio_id: 9,
			heading: "Question 9",
			label: "In the past week, how many hours have you spent volunteering and/or working?",
			choices: [
				{
					text: "0 hours",
					value: "0 hours",
				},
				{
					text: "1-9 hours",
					value: "1-9 hours",
				},
				{
					text: "10-19 hours",
					value: "10-19 hours",
				},
				{
					text: "20-29 hours",
					value: "20-29 hours",
				},
				{
					text: "30 or more",
					value: "30 or more",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
		{
			id: 48,
			question_radio_id: 9,
			heading: "Pregunta 9",
			label: "¿Cuántas horas has dedicado al voluntariado y/o al trabajo durante la última semana?",
			choices: [
				{
					text: "0 horas",
					value: "0 hours",
				},
				{
					text: "1-9 horas",
					value: "1-9 hours",
				},
				{
					text: "10-19 horas",
					value: "10-19 hours",
				},
				{
					text: "20-29 horas",
					value: "20-29 hours",
				},
				{
					text: "30 o más horas",
					value: "30 or more",
				},
			],
			languages_id: {
				name: "Spanish - Spain",
				lang_code: "es-ES",
			},
		},
		{
			id: 49,
			question_radio_id: 9,
			heading: "Question 9",
			label:
				"Au cours de la semaine dernière, combien d'heures avez-vous passé à faire du bénévolat et/ou à travailler ?",
			choices: [
				{
					text: "0 heures",
					value: "0 hours",
				},
				{
					text: "1 à 9 heures",
					value: "1-9 hours",
				},
				{
					text: "10 à 19 heures",
					value: "10-19 hours",
				},
				{
					text: "20 à 29 heures",
					value: "20-29 hours",
				},
				{
					text: "30 heures ou plus",
					value: "30 or more",
				},
			],
			languages_id: {
				name: "French - Canada",
				lang_code: "fr-CA",
			},
		},
	],
};

export default S2Q2;
