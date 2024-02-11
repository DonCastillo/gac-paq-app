import ScreenType from "constants/screen_type";
import type QuestionSliderPayloadInterface from "interface/directus/question-slider-payload";

const S1Q3: QuestionSliderPayloadInterface = {
	name: "Question 3: How many physical education classes did you have in the past week?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 1,
			question_slider_id: 2,
			heading: "Question 3",
			max_value: 7,
			label: "How many physical education classes did you have in the past week?",
			kid_label: "How many physical education classes did you have in the past week?",
			adult_label: "How many physical education classes did your child have in the past week?",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
	],
};

export default S1Q3;
