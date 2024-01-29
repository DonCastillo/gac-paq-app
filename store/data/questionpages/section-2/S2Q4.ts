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
			label: "Which of the following images shows what you do most of the time during your chores? ",
			kid_label: "Which of the following images shows what you do most of the time during your chores? ",
			adult_label: "Which of the following images resembles what your child does most of the time during their chores?",
			heading: "Question 11",
			choices: [
				{
					image_choices_id: {
						id: 1,
						sort: null,
						text: "Mostly not moving",
						value: "0.1",
						image_kid: "30ae2e6a-ef8f-43f3-a32e-1040410d16e3",
						image_adult: "607b231c-f6d0-439d-8b0a-a8e873457ed9",
						image_kid_default: Images.kids.graphics.mostly_not_moving,
						image_adult_default: Images.adults.graphics.mostly_not_moving,
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
						image_kid_default: Images.kids.graphics.mostly_easy_effort,
						image_adult_default: Images.adults.graphics.mostly_easy_effort,
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
						image_kid_default: Images.kids.graphics.mostly_medium,
						image_adult_default: Images.adults.graphics.mostly_medium,
					},
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		}
	],
};

export default S2Q4;
