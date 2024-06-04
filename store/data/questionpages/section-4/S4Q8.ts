import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q8: QuestionRadioPayloadInterface = {
	ident: "transportation_8",
	name: "Question 17b: How many days did you walk to places other than school or work in the past week?",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17b",
			label: "How many days did you walk to places other than school or work in the past week?",
			kid_label: "How many days did you walk to places other than school or work in the past week?",
			adult_label:
				"How many days did your child walk to places other than school or work in the past week?",
			choices: [
				{
					label: "1 Day",
					value: "1",
				},
				{
					label: "2 Days",
					value: "2",
				},
				{
					label: "3 Days",
					value: "3",
				},
				{
					label: "4 Days",
					value: "4",
				},
				{
					label: "5 Days",
					value: "5",
				},
				{
					label: "6 Days",
					value: "6",
				},
				{
					label: "7 Days",
					value: "7",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17b",
			label: "Combien de jours as-tu marché pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
			kid_label: "Combien de jours as-tu marché pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
			adult_label:
				"Combien de jours votre enfant a-t-il marché pour aller ailleurs que l'école ou le travail au cours de la dernière semaine?",
			choices: [
				{
					label: "1 Jour",
					value: "1",
				},
				{
					label: "2 Jours",
					value: "2",
				},
				{
					label: "3 Jours",
					value: "3",
				},
				{
					label: "4 Jours",
					value: "4",
				},
				{
					label: "5 Jours",
					value: "5",
				},
				{
					label: "6 Jours",
					value: "6",
				},
				{
					label: "7 Jours",
					value: "7",
				},
			],
		}
	},
};

export default S4Q8;
