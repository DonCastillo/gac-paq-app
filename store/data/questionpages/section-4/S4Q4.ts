import ScreenType from "constants/screen_type";
import type QuestionRadioPayloadInterface from "interface/directus/question-radio-payload";

const S4Q4: QuestionRadioPayloadInterface = {
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
					text: "Walking",
					value: "Walking",
				},
				{
					text: "Wheeling (for example, wheelchair use, bicycle, e-bicycle, skateboard, push scooter, rollerblades) ",
					value: "Wheeling",
				},
				{
					text: "School bus",
					value: "School bus",
				},
				{
					text: "Public transit (for example, bus, train, tramway, subway, boat)",
					value: "Public transit",
				},
				{
					text: "Car, taxi, truck, or motorcycle",
					value: "Car, taxi, truck, or motorcycle",
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
