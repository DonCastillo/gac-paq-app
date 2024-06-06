import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const GenderAdult: QuestionRadioPayloadInterface = {
	ident: "child_sex_entered_by_parent",
	name: "child_sex",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 24",
			label: "What is your child's sex?",
			kid_label: "What is your child's sex?",
			adult_label: "What is your child's sex?",
			choices: [
				{
					label: "Female",
					value: "Female",
				},
				{
					label: "Male",
					value: "Male",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 24",
			label: "¿Cuál es el sexo de su hija o hijo?",
			kid_label: "¿Cuál es el sexo de su hija o hijo?",
			adult_label: "¿Cuál es el sexo de su hija o hijo?",
			choices: [
				{
					label: "Mujer",
					value: "Female",
				},
				{
					label: "Hombre",
					value: "Male",
				},
				{
					label: "Prefiere no contestar",
					value: "Prefer not to answer",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 24",
			label: "Quel est le sexe de votre enfant?",
			kid_label: "Quel est le sexe de votre enfant?",
			adult_label: "Quel est le sexe de votre enfant?",
			choices: [
				{
					label: "Féminin",
					value: "Female",
				},
				{
					label: "Masculin",
					value: "Male",
				},
				{
					label: "Préfère ne pas répondre",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default GenderAdult;
