import ScreenType from "../../../../constants/screen_type";
import type QuestionRadioPayloadInterface from "../../../../interface/directus/question-radio-payload";

const S1Q1: QuestionRadioPayloadInterface = {
	name: "Question 1: Did you attend school in the past week?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 3,
			question_radio_id: 3,
			heading: "Question 1",
			label: "Did you attend school in the past week?",
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
			id: 38,
			question_radio_id: 3,
			heading: "Pregunta 1",
			label: "¿Asististe a la escuela la semana pasada?",
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
			id: 39,
			question_radio_id: 3,
			heading: "Question 1",
			label: "Avez-vous fréquenté l'école la semaine dernière ?",
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

export default S1Q1;
