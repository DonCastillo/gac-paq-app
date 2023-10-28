import ScreenType from "../../../../constants/screen_type";
import type QuestionRadioPayloadInterface from "../../../../interface/directus/question-radio-payload";

const S2Q1: QuestionRadioPayloadInterface = {
	name: "Question 8: In the past week, did you volunteer or have a job that earned you and your family some income?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_radio_id: 8,
			heading: "Question 8",
			label: "In the past week, did you volunteer or have a job that earned you and your family some income?",
			choices: [
				{
					text: "Yes",
					value: "yes",
				},
				{
					text: "No",
					value: "no",
				},
			],
			languages_id: {
				name: "English",
				lang_code: "en-US",
			},
		},
		{
			id: 46,
			question_radio_id: 8,
			heading: "Pregunta 8",
			label: "¿Durante la última semana, hiciste trabajo voluntario o tuviste un empleo que te proporcionó ingresos a ti o a tu familia?",
			choices: [
				{
					text: "Sí",
					value: "yes",
				},
				{
					text: "No",
					value: "no",
				},
			],
			languages_id: {
				name: "Spanish",
				lang_code: "es-ES",
			},
		},
		{
			id: 47,
			question_radio_id: 8,
			heading: "Question 8",
			label: "Au cours de la semaine dernière, avez-vous fait du bénévolat ou avez-vous eu un emploi qui vous a rapporté des revenus à vous ou à votre famille ?",
			choices: [
				{
					text: "Oui",
					value: "yes",
				},
				{
					text: "Non",
					value: "no",
				},
			],
			languages_id: {
				name: "French",
				lang_code: "fr-FR",
			},
		},
	],
};

export default S2Q1;
