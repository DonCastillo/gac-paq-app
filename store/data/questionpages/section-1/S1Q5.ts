import ScreenType from "constants/screen_type";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";
import Images from "styles/images/index";

const S1Q5: QuestionRadioImagePayloadInterface = {
	ident: "school_5",
	name: "Question 5: Which of the following images shows what you do most of the time in physical education class?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 1,
			question_radio_image_id: 1,
			label:
				"Which of the following pictures looks like what you do most of the time in physical education class?",
			kid_label:
				"Which of the following pictures looks like what you do most of the time in physical education class?",
			adult_label:
				"Which of the following images resembles what your child does most of the time in physical education class?",
			heading: "Question 5",
			choices: [
				{
					image_choices_id: {
						id: 1,
						sort: null,
						text: "Not moving",
						value: "0.1",
						images: {
							kid: "",
							adult: "",
						},
					},
				},
				{
					image_choices_id: {
						id: 2,
						sort: null,
						text: "Easy effort",
						value: "0.3",
						images: {
							kid: "",
							adult: "",
						},
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Medium or hard effort",
						value: "0.5",
						images: {
							kid: "",
							adult: "",
						},
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Don't know",
						value: "0",
						images: {
							kid: "",
							adult: "",
						},
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
