import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionSliderPayloadInterface } from "interface/payload.type";

const S1Q3: QuestionSliderPayloadInterface = {
	ident: "school_3",
	name: "Question 3: How many physical education classes did you have in the past week?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionSlider,
			heading: "Question 3",
			label: "How many physical education classes did you have in the past week?",
			kid_label: "How many physical education classes did you have in the past week?",
			adult_label: "How many physical education classes did your child have in the past week?",
			max_value: 7,
		},
		"zh-CN": {
			type: Question.QuestionSlider,
			heading: "问题 3",
			label: "在过去一周里，你上了几节体育课？",
			kid_label: "在过去一周里，你上了几节体育课？",
			adult_label: "在过去一周里，您的孩子上了几节体育课？",
			max_value: 7,
		},
		"es-MX": {
			type: Question.QuestionSlider,
			heading: "Question 3",
			label: "¿Cuántas clases de educación física tuviste en la semana pasada?",
			kid_label: "¿Cuántas clases de educación física tuviste en la semana pasada?",
			adult_label: "¿Cuántas clases de educación física tuvo su hija o hijo la semana pasada?",
			max_value: 7,
		},
		"fr-CA": {
			type: Question.QuestionSlider,
			heading: "Question 3",
			label: "Combien as-tu eu de cours d'éducation physique pendant la dernière semaine?",
			kid_label: "Combien as-tu eu de cours d'éducation physique pendant la dernière semaine?",
			adult_label:
				"Combien ton enfant a-t-il (elle) eu de cours d'éducation physique pendant la dernière semaine?",
			max_value: 7,
		},
	},
};

export default S1Q3;
