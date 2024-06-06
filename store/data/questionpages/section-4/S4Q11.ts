import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q11: QuestionRadioPayloadInterface = {
	ident: "transportation_11",
	name: "Question 17e: On a normal day, how much time did you wheel to places other than school or work?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17e",
			label: "On a normal day, how much time did you wheel to places other than school or work?",
			kid_label:
				"On a normal day, how much time did you wheel to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child wheel to places other than school or work?",
			choices: [
				{
					label: "10 minutes or less",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					label: "More than 30 minutes",
					value: "More than 30 minutes",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 17e",
			label:
				"En un día normal, ¿cuánto tiempo te desplazaste sobre ruedas para llegar a lugares distintos al trabajo, la escuela o el colegio?",
			kid_label:
				"En un día normal, ¿cuánto tiempo te desplazaste sobre ruedas para llegar a lugares distintos al trabajo, la escuela o el colegio?",
			adult_label:
				"En un día normal, ¿cuánto tiempo su hijo o hija se desplazó sobre ruedas a lugares distintos de la escuela o el trabajo?",
			choices: [
				{
					label: "10 minutos o menos",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutos",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutos",
					value: "21 - 30 minutes",
				},
				{
					label: "Más de 30 minutos",
					value: "More than 30 minutes",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17e",
			label:
				"Lors d'une journée normale, combien de temps as-tu roulé pour aller à des endroits autres que l'école ou le travail? ",
			kid_label:
				"Lors d'une journée normale, combien de temps as-tu roulé pour aller à des endroits autres que l'école ou le travail? ",
			adult_label:
				"Lors d'une journée normale, combien de temps ton enfant a-t-il (elle) roulé pour aller à des endroits autres que l'école ou le travail?",
			choices: [
				{
					label: "10 minutes ou moins",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					label: "Plus de 30 minutes",
					value: "More than 30 minutes",
				},
			],
		},
	},
};

export default S4Q11;
