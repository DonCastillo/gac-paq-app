import ScreenType from "constants/screen_type";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";
import Images from "styles/images/index";

const S1Q5: QuestionRadioImagePayloadInterface = {
	name: "Question 5: Which of the following images shows what you do most of the time in physical education class?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 1,
			question_radio_image_id: 1,
			label:
				"Which of the following images shows what you do most of the time in physical education class? ",
			kid_label:
				"Which of the following images shows what you do most of the time in physical education class?",
			adult_label:
				"Which of the following images resembles what your child does most of the time in physical education class?",
			heading: "Question 5",
			choices: [
				{
					image_choices_id: {
						id: 1,
						sort: null,
						text: "Mostly not moving",
						value: "0.1",
						image: Images.general.options.physical_education.not_moving,
					},
				},
				{
					image_choices_id: {
						id: 2,
						sort: null,
						text: "Mostly easy effort",
						value: "0.3",
						image: Images.general.options.physical_education.easy_effort,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Mostly medium or hard effort",
						value: "0.5",
						image: Images.general.options.physical_education.medium_effort,
					},
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S1Q5;
