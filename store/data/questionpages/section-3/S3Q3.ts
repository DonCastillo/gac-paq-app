import ScreenType from "constants/screen_type";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";
import Images from "styles/images";

const S3Q3: QuestionRadioImagePayloadInterface = {
	name: "Question 14:	Which of the following images shows what you do most of the time while volunteering and/or working?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_radio_image_id: 3,
			label:
				"Which of the following images shows what you do most of the time while volunteering and/or working?",
			kid_label:
				"Which of the following images shows what you do most of the time while volunteering and/or working?",
			adult_label:
				"Which of the following images resembles what your child does most of the time while volunteering and/or working?",
			heading: "Question 14",
			choices: [
				{
					image_choices_id: {
						id: 1,
						sort: null,
						text: "Mostly not moving",
						value: "0.1",
						images: {
							kid: Images.kids.options.volunteering.not_moving,
							adult: Images.adults.options.volunteering.not_moving,
						},
					},
				},
				{
					image_choices_id: {
						id: 2,
						sort: null,
						text: "Mostly easy effort",
						value: "0.3",
						images: {
							kid: Images.kids.options.volunteering.easy_effort,
							adult: Images.adults.options.volunteering.easy_effort,
						},
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Mostly medium or hard effort",
						value: "0.5",
						images: {
							kid: Images.kids.options.volunteering.medium_effort,
							adult: Images.adults.options.volunteering.medium_effort,
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

export default S3Q3;
