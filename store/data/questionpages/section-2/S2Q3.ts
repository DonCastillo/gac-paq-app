import ScreenType from "../../../../constants/screen_type";
import type QuestionRadioImagePayloadInterface from "../../../../interface/directus/question-radio-image-payload";
import { Images } from "../../../../styles/images";

const S2Q3: QuestionRadioImagePayloadInterface = {
	name: "Question 10: Which of the following shows what you do most of the time while volunteering and/or working?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_radio_image_id: 3,
			label:
				"Which of the following shows what you do most of the time while volunteering and/or working? ",
			heading: "Question 10",
			choices: [
				{
					image_choices_id: {
						id: 19,
						sort: null,
						text: "Mostly not moving",
						value: "0.1",
						image_kid: "30ae2e6a-ef8f-43f3-a32e-1040410d16e3",
						image_adult: null,
						image_kid_default: Images.kid.mostly_not_moving,
						image_adult_default: Images.adult.mostly_not_moving,
					},
				},
				{
					image_choices_id: {
						id: 20,
						sort: null,
						text: "Mostly easy effort",
						value: "0.3",
						image_kid: "15261058-5631-4eed-93e1-5411370faccd",
						image_adult: null,
						image_kid_default: Images.kid.mostly_easy_effort,
						image_adult_default: Images.adult.mostly_easy_effort,
					},
				},
				{
					image_choices_id: {
						id: 21,
						sort: null,
						text: "Mostly medium or hard effort",
						value: "0.5",
						image_kid: "516d367e-23f2-4afa-a5f3-8fe19b2f7f06",
						image_adult: null,
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
			id: 8,
			question_radio_image_id: 3,
			label:
				"¿Cuál de las siguientes opciones muestra lo que haces la mayor parte del tiempo mientras haces voluntariado y/o trabajas?",
			heading: "Pregunta 10",
			choices: [
				{
					image_choices_id: {
						id: 22,
						sort: null,
						text: "Principalmente sin actividad física",
						value: "0.1",
						image_kid: null,
						image_adult: null,
						image_kid_default: Images.kid.mostly_not_moving,
						image_adult_default: Images.adult.mostly_not_moving,
					},
				},
				{
					image_choices_id: {
						id: 23,
						sort: null,
						text: "Principalmente esfuerzo suave",
						value: "0.3",
						image_kid: null,
						image_adult: null,
						image_kid_default: Images.kid.mostly_easy_effort,
						image_adult_default: Images.adult.mostly_easy_effort,
					},
				},
				{
					image_choices_id: {
						id: 24,
						sort: null,
						text: "Principalmente esfuerzo medio o fuerte",
						value: "0.5",
						image_kid: null,
						image_adult: null,
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
			id: 9,
			question_radio_image_id: 3,
			label:
				"Laquelle des options suivantes montre ce que vous faites la plupart du temps pendant que vous faites du bénévolat et/ou travaillez ?",
			heading: "Question 10",
			choices: [
				{
					image_choices_id: {
						id: 25,
						sort: null,
						text: "Principalement sans bouger",
						value: "0.1",
						image_kid: null,
						image_adult: null,
						image_kid_default: Images.kid.mostly_not_moving,
						image_adult_default: Images.adult.mostly_not_moving,
					},
				},
				{
					image_choices_id: {
						id: 26,
						sort: null,
						text: "Principalement faible effort",
						value: "0.3",
						image_kid: null,
						image_adult: null,
						image_kid_default: Images.kid.mostly_easy_effort,
						image_adult_default: Images.adult.mostly_easy_effort,
					},
				},
				{
					image_choices_id: {
						id: 27,
						sort: null,
						text: "Principalement effort moyen ou intense",
						value: "0.5",
						image_kid: null,
						image_adult: null,
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

export default S2Q3;
