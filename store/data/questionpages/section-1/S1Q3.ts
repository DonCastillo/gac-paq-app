import ScreenType from "../../../../constants/screen_type";
import type QuestionSliderPayloadInterface from "../../../../interface/directus/question-slider-payload";

const S1Q3: QuestionSliderPayloadInterface = {
	name: "Question 3: How many physical education classes did you have in the past week?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 1,
			question_slider_id: 2,
			heading: "Question 3",
			label: "How many physical education classes did you have in the past week?",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
		{
			id: 5,
			question_slider_id: 2,
			heading: "Pregunta 3",
			label: "¿Cuántas clases de educación física tuviste la semana pasada?",
			languages_id: {
				name: "Spanish - Spain",
				lang_code: "es-ES",
			},
		},
		{
			id: 6,
			question_slider_id: 2,
			heading: "Question 3",
			label: "Combien de cours d'éducation physique avez-vous eu la semaine dernière ?",
			languages_id: {
				name: "French - Canada",
				lang_code: "fr-CA",
			},
		},
	],
};

export default S1Q3;
