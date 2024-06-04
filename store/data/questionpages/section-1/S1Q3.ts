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
