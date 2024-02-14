import ScreenType from "constants/screen_type";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";
import Images from "styles/images";

const S4Q1: QuestionRadioImagePayloadInterface = {
	name: "Question 15:	How did you go to school in the past week?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_radio_image_id: 8,
			heading: "Question 15",
			label: "How did you go to school in the past week?",
			kid_label: "How did you go to school in the past week?",
			adult_label:
				"How did your child go to school in the past week? (Select the mode that your child used the most).",
			choices: [
				{
					image_choices_id: {
						id: 1,
						sort: null,
						text: "Walking",
						value: "Walking",
						image: Images.generic.transportation.walking,
					},
				},
				{
					image_choices_id: {
						id: 2,
						sort: null,
						text: "Wheeling",
						value: "Wheeling",
						image: Images.generic.transportation.wheeling,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "School bus",
						value: "School bus",
						image: Images.generic.transportation.school_bus,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Public transit",
						value: "Public transit",
						image: Images.generic.transportation.public_transit,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Car, taxi, truck, or motorcycle",
						value: "Car, taxi, truck, or motorcycle",
						image: Images.generic.transportation.car,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Other",
						value: "Other",
						image: Images.generic.transportation.other,
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

export default S4Q1;
