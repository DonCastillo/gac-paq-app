import ScreenType from "constants/screen_type";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";
import Images from "styles/images";

const S4Q1: QuestionRadioImagePayloadInterface = {
	ident: "transportation_1",
	name: "Question 15:	How did you go to school in the past week?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 10,
			question_radio_image_id: 8,
			heading: "Question 15",
			label: "How did you go to school in the past week?",
			kid_label: "How did you go to school in the past week?",
			adult_label: "How did your child go to school in the past week?",
			kid_sublabel: "Select the mode that you used the most.",
			adult_sublabel: "Select the mode that your child used the most.",
			choices: [
				{
					image_choices_id: {
						id: 1,
						sort: null,
						text: "Walking",
						value: "Walking",
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
						text: "Wheeling",
						value: "Wheeling",
						images: {
							kid: "",
							adult: "",
						},
						sublabel: {
							kid: "for example, wheelchair use, bicycle, e-bicycle, skateboard, push scooter, rollerblades",
							adult:
								"for example, wheelchair use, bicycle, e-bicycle, skateboard, push scooter, rollerblades",
						},
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "School bus",
						value: "School bus",
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
						text: "Public transit",
						value: "Public transit",
						images: {
							kid: "",
							adult: "",
						},
						sublabel: {
							kid: "for example, bus, train, tramway, subway, boat",
							adult: "for example, bus, train, tramway, subway, boat",
						},
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Car, taxi, truck, or motorcycle",
						value: "Car, taxi, truck, or motorcycle",
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
						text: "Other, which one?",
						value: "Other",
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
						text: "Stay home for school",
						value: "Stay home for school",
						images: {
							kid: "",
							adult: "",
						},
						text_mode: {
							kid: "I stay at home for school",
							adult: "My child stays at home for school",
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

export default S4Q1;
