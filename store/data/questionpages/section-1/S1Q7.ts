import ScreenType from "../../../../constants/screen_type";
import type QuestionRadioImagePayloadInterface from "../../../../interface/directus/question-radio-image-payload";
import Images from "styles/images/index";

const S1Q7: QuestionRadioImagePayloadInterface = {
	name: "Question 7: Which of the following images shows what you do most of the time during your breaks?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 4,
			question_radio_image_id: 2,
			label: "Which of the following images shows what you do most of the time during your breaks?",
			heading: "Question 7",
			choices: [
				{
					image_choices_id: {
						id: 10,
						sort: null,
						text: "Mostly not moving",
						value: "0.1",
						image_kid: null,
						image_adult: null,
						image_kid_default: Images.kids.graphics.mostly_not_moving,
						image_adult_default: Images.adults.graphics.mostly_not_moving,
					},
				},
				{
					image_choices_id: {
						id: 11,
						sort: null,
						text: "Mostly easy effort",
						value: "0.3",
						image_kid: null,
						image_adult: null,
						image_kid_default: Images.kids.graphics.mostly_easy_effort,
						image_adult_default: Images.adults.graphics.mostly_easy_effort,
					},
				},
				{
					image_choices_id: {
						id: 12,
						sort: null,
						text: "Mostly medium or hard effort",
						value: "0.5",
						image_kid: null,
						image_adult: null,
						image_kid_default: Images.kids.graphics.mostly_medium,
						image_adult_default: Images.adults.graphics.mostly_medium,
					},
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
		{
			id: 5,
			question_radio_image_id: 2,
			label:
				"¿Cuál de las siguientes imágenes muestra lo que haces la mayor parte del tiempo durante tus descansos?",
			heading: "Pregunta 7",
			choices: [
				{
					image_choices_id: {
						id: 13,
						sort: null,
						text: "Principalmente sin actividad física",
						value: "0.1",
						image_kid: null,
						image_adult: null,
						image_kid_default: Images.kids.graphics.mostly_not_moving,
						image_adult_default: Images.adults.graphics.mostly_not_moving,
					},
				},
				{
					image_choices_id: {
						id: 14,
						sort: null,
						text: "Principalmente esfuerzo suave",
						value: "0.3",
						image_kid: null,
						image_adult: null,
						image_kid_default: Images.kids.graphics.mostly_easy_effort,
						image_adult_default: Images.adults.graphics.mostly_easy_effort,
					},
				},
				{
					image_choices_id: {
						id: 15,
						sort: null,
						text: "Principalmente esfuerzo medio o fuerte",
						value: "0.5",
						image_kid: null,
						image_adult: null,
						image_kid_default: Images.kids.graphics.mostly_medium,
						image_adult_default: Images.adults.graphics.mostly_medium,
					},
				},
			],
			languages_id: {
				name: "Spanish - Spain",
				lang_code: "es-ES",
			},
		},
		{
			id: 6,
			question_radio_image_id: 2,
			label:
				"Laquelle des images suivantes montre ce que vous faites la plupart du temps pendant vos pauses ?",
			heading: "Question 7",
			choices: [
				{
					image_choices_id: {
						id: 16,
						sort: null,
						text: "Principalement sans bouger",
						value: "0.1",
						image_kid: null,
						image_adult: null,
						image_kid_default: Images.kids.graphics.mostly_not_moving,
						image_adult_default: Images.adults.graphics.mostly_not_moving,
					},
				},
				{
					image_choices_id: {
						id: 17,
						sort: null,
						text: "Principalement faible effort",
						value: "0.3",
						image_kid: null,
						image_adult: null,
						image_kid_default: Images.kids.graphics.mostly_easy_effort,
						image_adult_default: Images.adults.graphics.mostly_easy_effort,
					},
				},
				{
					image_choices_id: {
						id: 18,
						sort: null,
						text: "Principalement effort moyen ou intense",
						value: "0.5",
						image_kid: null,
						image_adult: null,
						image_kid_default: Images.kids.graphics.mostly_medium,
						image_adult_default: Images.adults.graphics.mostly_medium,
					},
				},
			],
			languages_id: {
				name: "French - Canada",
				lang_code: "fr-CA",
			},
		},
	],
};

export default S1Q7;
