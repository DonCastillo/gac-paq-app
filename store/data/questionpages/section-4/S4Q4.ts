import ScreenType from "constants/screen_type";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";

const S4Q4: QuestionRadioImagePayloadInterface = {
	name: "Question 16:	How did you go to work in the past week? (Select the mode that you used the most).",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_radio_id: 8,
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
						image: "",
					},
				},
				{
					image_choices_id: {
						id: 2,
						sort: null,
						text: "Wheeling (for example, wheelchair use, bicycle, e-bicycle, skateboard, push scooter, rollerblades)",
						value: "Wheeling",
						image: "",
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "School bus",
						value: "School bus",
						image: "",
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Public transit (for example, bus, train, tramway, subway, boat)",
						value: "Public transit",
						image: "",
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Car, taxi, truck, or motorcycle",
						value: "Car, taxi, truck, or motorcycle",
						image: "",
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
