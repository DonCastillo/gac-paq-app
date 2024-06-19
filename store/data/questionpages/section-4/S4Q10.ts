import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q10: QuestionRadioPayloadInterface = {
	ident: "transportation_10",
	name: "Question 17d: How many days did you wheel to places other than school or work in the past week?",
	column_name: "17.D Tran",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17d",
			label: "How many days did you wheel to places other than school or work in the past week?",
			kid_label:
				"How many days did you wheel to places other than school or work in the past week?",
			adult_label:
				"How many days did your child wheel to places other than school or work in the past week?",
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
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 17d",
			label: "在过去一周里，除了上学或工作，您有多少天骑自行车去其他地方？",
			kid_label: "在过去一周里，除了上学或工作，您有多少天骑自行车去其他地方？",
			adult_label: "在过去一周里，除了上学或工作，您的孩子有多少天骑自行车去其他地方？",
			choices: [
				{
					label: "1 天",
					value: "1",
				},
				{
					label: "2 天",
					value: "2",
				},
				{
					label: "3 天",
					value: "3",
				},
				{
					label: "4 天",
					value: "4",
				},
				{
					label: "5 天",
					value: "5",
				},
				{
					label: "6 天",
					value: "6",
				},
				{
					label: "7 天",
					value: "7",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 17d",
			label:
				"¿Cuántos días te desplazaste sobre ruedas para llegar a lugares distintos al trabajo, escuela o colegio en la última semana?",
			kid_label:
				"¿Cuántos días te desplazaste sobre ruedas para llegar a lugares distintos al trabajo, escuela o colegio en la última semana?",
			adult_label:
				"¿Cuántos días su hija o hijo se desplazó sobre ruedas para llegar a lugares distintos al trabajo, escuela o colegio en la última semana?",
			choices: [
				{
					label: "1 Día",
					value: "1",
				},
				{
					label: "2 Días",
					value: "2",
				},
				{
					label: "3 Días",
					value: "3",
				},
				{
					label: "4 Días",
					value: "4",
				},
				{
					label: "5 Días",
					value: "5",
				},
				{
					label: "6 Días",
					value: "6",
				},
				{
					label: "7 Días",
					value: "7",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17d",
			label:
				"Combien de jours as-tu roulé pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
			kid_label:
				"Combien de jours as-tu roulé pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
			adult_label:
				"Combien de jours ton enfant a-t-il (elle) roulé pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
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
		},
	},
};

export default S4Q10;
