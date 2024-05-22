import ScreenType from "constants/screen_type";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";
import Images from "styles/images/index";

const S1Q7: QuestionRadioImagePayloadInterface = {
	ident: "school_7",
	name: "Question 7: Which of the following images shows what you do most of the time during your breaks?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 4,
			question_radio_image_id: 2,
			label:
				"Which of the following pictures looks like what you do most of the time during your breaks?",
			kid_label:
				"Which of the following pictures looks like what you do most of the time during your breaks? ",
			adult_label:
				"Which of the following images resembles what your child does most of the time during their breaks?",
			heading: "Question 7",
			choices: [
				{
					image_choices_id: {
						id: 10,
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
						id: 11,
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
						id: 12,
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

export default S1Q7;
