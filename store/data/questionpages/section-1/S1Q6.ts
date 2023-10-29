import ScreenType from "../../../../constants/screen_type";
import type QuestionRadioPayloadInterface from "../../../../interface/directus/question-radio-payload";

const S1Q6: QuestionRadioPayloadInterface = {
	name: "Question 6: On a normal school day, how much break time do you have? (including recess/breaks/lunch)",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 9,
			question_radio_id: 7,
			heading: "Question 6",
			label:
				"On a normal school day, how much break time do you have? (including recess/breaks/lunch)",
			choices: [
				{
					text: "0 minutes",
					value: "0 minutes",
				},
				{
					text: "1-15 minutes",
					value: "1-15 minutes",
				},
				{
					text: "16-30 minutes",
					value: "16-30 minutes",
				},
				{
					text: "31-60 minutes",
					value: "31-60 minutes",
				},
				{
					text: "More than 60 minutes",
					value: "More than 60 minutes",
				},
				{
					text: "I don’t know",
					value: "I don’t know",
				},
			],
			languages_id: {
				name: "English",
				lang_code: "en-US",
			},
		},
		{
			id: 44,
			question_radio_id: 7,
			heading: "Pregunta 6",
			label:
				"En un día normal de escuela, ¿cuánto tiempo de descanso tienes? (incluyendo recreos/intervalos/almuerzo)",
			choices: [
				{
					text: "0 minutos",
					value: "0 minutes",
				},
				{
					text: "1-15 minutos",
					value: "1-15 minutes",
				},
				{
					text: "16-30 minutos",
					value: "16-30 minutes",
				},
				{
					text: "31-60 minutos",
					value: "31-60 minutes",
				},
				{
					text: "Más de 60 minutos",
					value: "More than 60 minutes",
				},
				{
					text: "No lo sé or No sé",
					value: "I don’t know",
				},
			],
			languages_id: {
				name: "Spanish",
				lang_code: "es-ES",
			},
		},
		{
			id: 45,
			question_radio_id: 7,
			heading: "Question 6",
			label:
				"Pendant une journée normale d'école, combien de temps de pause avez-vous ? (y compris les récréations, les pauses et le déjeuner)",
			choices: [
				{
					text: "0 minutes",
					value: "0 minutes",
				},
				{
					text: "1 à 15 minutes",
					value: "1-15 minutes",
				},
				{
					text: " 16 à 30 minutes",
					value: "16-30 minutes",
				},
				{
					text: "31 à 60 minutes",
					value: "31-60 minutes",
				},
				{
					text: "Plus de 60 minutes",
					value: "More than 60 minutes",
				},
				{
					text: "Je ne sais pas",
					value: "I don’t know",
				},
			],
			languages_id: {
				name: "French",
				lang_code: "fr-FR",
			},
		},
	],
};

export default S1Q6;
