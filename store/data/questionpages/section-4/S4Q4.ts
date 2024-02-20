import ScreenType from "constants/screen_type";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";
import Images from "styles/images";

const S4Q4: QuestionRadioImagePayloadInterface = {
	name: "Question 16:	How did you go to work in the past week? (Select the mode that you used the most).",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_radio_image_id: 8,
			heading: "Question 16",
			label: "How did you go to work in the past week? (Select the mode that you used the most).",
			kid_label:
				"How did you go to work in the past week? (Select the mode that you used the most).",
			adult_label:
				"How did your child go to work in the past week? (Select the mode that your child used the most).",
			choices: [
				{
					image_choices_id: {
						id: 1,
						sort: null,
						text: "Walking",
						value: "Walking",
						image: Images.kids.graphics.transportation.walking,
					},
				},
				{
					image_choices_id: {
						id: 2,
						sort: null,
						text: "Wheeling",
						value: "Wheeling",
						image: Images.kids.graphics.transportation.wheeling,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "School bus",
						value: "School bus",
						image: Images.kids.graphics.transportation.school_bus,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Public transit",
						value: "Public transit",
						image: Images.kids.graphics.transportation.public_transit,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Car, taxi, truck, or motorcycle",
						value: "Car, taxi, truck, or motorcycle",
						image: Images.kids.graphics.transportation.car,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Other",
						value: "Other",
						image: Images.kids.graphics.transportation.other,
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

export default S4Q4;
