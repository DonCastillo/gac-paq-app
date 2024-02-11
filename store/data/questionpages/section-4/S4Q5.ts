import ScreenType from "constants/screen_type";
import type QuestionSliderPayloadInterface from "interface/directus/question-slider-payload";

const S4Q5: QuestionSliderPayloadInterface = {
	name: "Question 16b: How many days did you use this mode in the past week?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 11,
			question_slider_id: 9,
			heading: "Question 16b",
			label: "How many days did you use this mode in the past week?",
			kid_label: "How many days did you use this mode in the past week?",
			adult_label: "How many days did your child use this mode in the past week? ",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S4Q5;
