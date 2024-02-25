import ScreenType from "constants/screen_type";
import type QuestionRadioImagePayloadInterface from "interface/directus/question-radio-image-payload";
import Images from "styles/images/index";

const Satisfaction: QuestionRadioImagePayloadInterface = {
	name: "How satisfied are you with the app? Click on the image (emoji) that best represents your satisfaction.",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 1,
			question_radio_image_id: 1,
			heading: "Feedback",
			label:
				"How satisfied are you with the app? Click on the image (emoji) that best represents your satisfaction.",
			kid_label:
				"How satisfied are you with the app? Click on the image (emoji) that best represents your satisfaction.",
			adult_label:
				"How satisfied are you with the app? Click on the image (emoji) that best represents your satisfaction.",
			choices: [
				{
					image_choices_id: {
						id: 1,
						sort: null,
						text: "Strongly dissatisfied",
						value: "Strongly dissatisfied",
						images: {
							kid: Images.generic.rating.very_dissatisfied,
							adult: Images.generic.rating.very_dissatisfied,
						},
					},
				},
				{
					image_choices_id: {
						id: 2,
						sort: null,
						text: "Dissatisfied",
						value: "Dissatisfied",
						images: {
							kid: Images.generic.rating.dissatisfied,
							adult: Images.generic.rating.dissatisfied,
						},
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Neutral",
						value: "Neutral",
						images: {
							kid: Images.generic.rating.neutral,
							adult: Images.generic.rating.neutral,
						},
					},
				},
				{
					image_choices_id: {
						id: 4,
						sort: null,
						text: "Satisfied",
						value: "Satisfied",
						images: {
							kid: Images.generic.rating.satisfied,
							adult: Images.generic.rating.satisfied,
						},
					},
				},
				{
					image_choices_id: {
						id: 5,
						sort: null,
						text: "Strongly Satisfied",
						value: "Strongly Satisfied",
						images: {
							kid: Images.generic.rating.very_satisfied,
							adult: Images.generic.rating.very_satisfied,
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

export default Satisfaction;
