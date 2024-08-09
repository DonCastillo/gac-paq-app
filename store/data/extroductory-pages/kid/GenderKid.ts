import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const GenderKid: LangQuestionRadioPayloadInterface = {
	ident: "child_sex_entered_by_child",
	name: "child_sex",
	type: Screen.SingleQuestion,
	column_name: "sex",
	audio_ident: "child_sex",
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
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 24",
			label: "Jag är en…",
			kid_label: "Jag är en…",
			adult_label: "Jag är en…",
			choices: [
				{
					label: "Pojke",
					value: "Boy",
				},
				{
					label: "Flicka",
					value: "Girl",
				},
				{
					label: "Annat",
					value: "Other",
				},
				{
					label: "Föredrar att inte svara",
					value: "Prefer not to answer",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "第二十四题",
			label: "你的性别...",
			kid_label: "你的性别...",
			adult_label: "你的性别...",
			choices: [
				{
					label: "男",
					value: "Boy",
				},
				{
					label: "女",
					value: "Girl",
				},
				{
					label: "其他",
					value: "Other",
				},
				{
					label: "不愿透露",
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
