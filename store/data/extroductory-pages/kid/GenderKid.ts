import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionRadioPayloadInterface } from "interface/payload.type";

const GenderKid: QuestionRadioPayloadInterface = {
	ident: "child_sex_entered_by_child",
	name: "child_sex",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 24",
			label: "Are you a…",
			kid_label: "Are you a…",
			adult_label: "Are you a…",
			choices: [
				{
					label: "Boy",
					value: "Boy",
				},
				{
					label: "Girl",
					value: "Girl",
				},
				{
					label: "Other",
					value: "Other",
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
			label: "Tú eres…",
			kid_label: "Tú eres…",
			adult_label: "Tú eres…",
			choices: [
				{
					label: "Hombre",
					value: "Boy",
				},
				{
					label: "Mujer",
					value: "Girl",
				},
				{
					label: "Otro",
					value: "Other",
				},
				{
					label: "Prefiero no responder",
					value: "Prefer not to answer",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 24",
			label: "Es-tu un…",
			kid_label: "Es-tu un…",
			adult_label: "Es-tu un…",
			choices: [
				{
					label: "Garçon",
					value: "Boy",
				},
				{
					label: "Fille",
					value: "Girl",
				},
				{
					label: "Autre",
					value: "Other",
				},
				{
					label: "Préfère ne pas répondre",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default GenderKid;
