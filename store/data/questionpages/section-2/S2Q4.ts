import ScreenType from "constants/screen_type";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";
import Images from "styles/images";

const S2Q4: QuestionRadioImagePayloadInterface = {
	name: "Question 11:	Which of the following images shows what you do most of the time during your chores?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_radio_image_id: 3,
			label:
				"Which of the following images shows what you do most of the time during your chores? ",
			kid_label:
				"Which of the following images shows what you do most of the time during your chores? ",
			adult_label:
				"Which of the following images resembles what your child does most of the time during their chores?",
			heading: "Question 11",
			choices: [
				{
					image_choices_id: {
						id: 1,
						sort: null,
						text: "Mostly not moving",
						value: "0.1",
						image: Images.general.options.chores.not_moving,
					},
				},
				{
					image_choices_id: {
						id: 2,
						sort: null,
						text: "Mostly easy effort",
						value: "0.3",
						image: Images.general.options.chores.easy_effort,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Mostly medium or hard effort",
						value: "0.5",
						image: Images.general.options.chores.medium_effort,
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

export default S2Q4;
