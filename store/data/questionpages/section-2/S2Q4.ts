import ScreenType from "constants/screen_type";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";
import Images from "styles/images";

const S2Q4: QuestionRadioImagePayloadInterface = {
	ident: "household_4",
	name: "Question 11:	Which of the following images shows what you do most of the time during your chores?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_radio_image_id: 3,
			label:
				"Which of the following pictures looks like what you do most of the time during your chores? ",
			kid_label:
				"Which of the following pictures looks like what you do most of the time during your chores? ",
			adult_label:
				"Which of the following images resembles what your child does most of the time during their chores?",
			heading: "Question 11",
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

export default S2Q4;
