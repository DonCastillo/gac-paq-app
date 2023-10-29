import ScreenType from "../../../../constants/screen_type";
import type QuestionRadioImagePayloadInterface from "../../../../interface/directus/question-radio-image-payload";
import { Images } from "../../../../styles/images";

const S1Q5: QuestionRadioImagePayloadInterface = {
	name: "Question 5: Which of the following images shows what you do most of the time in physical education class?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 1,
			question_radio_image_id: 1,
			label:
				"Which of the following images shows what you do most of the time in physical education class? ",
			heading: "Question 5",
			choices: [
				{
					image_choices_id: {
						id: 1,
						sort: null,
						text: "Mostly not moving",
						value: "0.1",
						image_kid: "30ae2e6a-ef8f-43f3-a32e-1040410d16e3",
						image_adult: "607b231c-f6d0-439d-8b0a-a8e873457ed9",
						image_kid_default: Images.kid.mostly_not_moving,
						image_adult_default: Images.adult.mostly_not_moving,
					},
				},
				{
					image_choices_id: {
						id: 2,
						sort: null,
						text: "Mostly easy effort",
						value: "0.3",
						image_kid: "d2352573-353d-4cc0-9218-4c46e9927b18",
						image_adult: "607b231c-f6d0-439d-8b0a-a8e873457ed9",
						image_kid_default: Images.kid.mostly_easy_effort,
						image_adult_default: Images.adult.mostly_easy_effort,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Mostly medium or hard effort",
						value: "0.5",
						image_kid: "516d367e-23f2-4afa-a5f3-8fe19b2f7f06",
						image_adult: "607b231c-f6d0-439d-8b0a-a8e873457ed9",
						image_kid_default: Images.kid.mostly_medium,
						image_adult_default: Images.adult.mostly_medium,
					},
				},
			],
			languages_id: {
				name: "English",
				lang_code: "en-US",
			},
		},
		{
			id: 2,
			question_radio_image_id: 1,
			label:
				"¿Cuál de las siguientes imágenes muestra lo que haces la mayor parte del tiempo en la clase de educación física?",
			heading: "Pregunta 5",
			choices: [
				{
					image_choices_id: {
						id: 4,
						sort: null,
						text: "Principalmente sin actividad física",
						value: "0.1",
						image_kid: null,
						image_adult: "607b231c-f6d0-439d-8b0a-a8e873457ed9",
						image_kid_default: Images.kid.mostly_not_moving,
						image_adult_default: Images.adult.mostly_not_moving,
					},
				},
				{
					image_choices_id: {
						id: 5,
						sort: null,
						text: "Principalmente esfuerzo suave",
						value: "0.3",
						image_kid: null,
						image_adult: "607b231c-f6d0-439d-8b0a-a8e873457ed9",
						image_kid_default: Images.kid.mostly_easy_effort,
						image_adult_default: Images.adult.mostly_easy_effort,
					},
				},
				{
					image_choices_id: {
						id: 6,
						sort: null,
						text: "Principalmente esfuerzo medio o fuerte",
						value: "0.5",
						image_kid: null,
						image_adult: "607b231c-f6d0-439d-8b0a-a8e873457ed9",
						image_kid_default: Images.kid.mostly_medium,
						image_adult_default: Images.adult.mostly_medium,
					},
				},
			],
			languages_id: {
				name: "Spanish",
				lang_code: "es-ES",
			},
		},
		{
			id: 3,
			question_radio_image_id: 1,
			label:
				"Laquelle des images suivantes montre ce que vous faites la plupart du temps pendant le cours d'éducation physique ?",
			heading: "Question 5",
			choices: [
				{
					image_choices_id: {
						id: 7,
						sort: null,
						text: "Principalement sans bouger",
						value: "0.1",
						image_kid: null,
						image_adult: "607b231c-f6d0-439d-8b0a-a8e873457ed9",
						image_kid_default: Images.kid.mostly_not_moving,
						image_adult_default: Images.adult.mostly_not_moving,
					},
				},
				{
					image_choices_id: {
						id: 8,
						sort: null,
						text: "Principalement faible effort",
						value: "0.3",
						image_kid: null,
						image_adult: "607b231c-f6d0-439d-8b0a-a8e873457ed9",
						image_kid_default: Images.kid.mostly_easy_effort,
						image_adult_default: Images.adult.mostly_easy_effort,
					},
				},
				{
					image_choices_id: {
						id: 9,
						sort: null,
						text: "Principalement effort moyen ou intense",
						value: "0.5",
						image_kid: null,
						image_adult: "607b231c-f6d0-439d-8b0a-a8e873457ed9",
						image_kid_default: Images.kid.mostly_medium,
						image_adult_default: Images.adult.mostly_medium,
					},
				},
			],
			languages_id: {
				name: "French",
				lang_code: "fr-FR",
			},
		},
	],
};

export default S1Q5;
