import ScreenType from "constants/screen_type";
import type QuestionSliderPayloadInterface from "interface/directus/question-slider-payload";

const S6Q2: QuestionSliderPayloadInterface = {
	name: "Question 22: In the past week, how many days per week did you do activities that make your muscles stronger?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 1,
			question_slider_id: 2,
			heading: "Question 22",
			label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			kid_label:
				"In the past week, how many days per week did you do activities that make your muscles stronger?",
			adult_label:
				"In the past week, how many days per week did your child do activities that make their muscles stronger?",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S6Q2;
