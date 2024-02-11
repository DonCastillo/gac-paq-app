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
			label:
				"How satisfied are you with the app? Click on the image (emoji) that best represents your satisfaction.",
			kid_label:
				"How satisfied are you with the app? Click on the image (emoji) that best represents your satisfaction.",
			adult_label:
				"How satisfied are you with the app? Click on the image (emoji) that best represents your satisfaction.",
			heading: "Question 5",
			choices: [
				{
					image_choices_id: {
						id: 1,
						sort: null,
						text: "Strongly dissatisfied",
						value: "Strongly dissatisfied",
						image: Images.general.options.physical_education.not_moving,
					},
				},
				{
					image_choices_id: {
						id: 2,
						sort: null,
						text: "Dissatisfied",
						value: "Dissatisfied",
						image: Images.general.options.physical_education.easy_effort,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Neutral",
						value: "Neutral",
						image: Images.general.options.physical_education.medium_effort,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Satisfied",
						value: "Satisfied",
						image: Images.general.options.physical_education.medium_effort,
					},
				},
				{
					image_choices_id: {
						id: 3,
						sort: null,
						text: "Strongly Satisfied",
						value: "Strongly Satisfied",
						image: Images.general.options.physical_education.medium_effort,
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
