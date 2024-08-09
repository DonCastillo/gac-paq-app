import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionOptionPayloadInterface } from "interface/payload.type";

const ParentEthnicities: LangQuestionOptionPayloadInterface = {
	ident: "parent_ethnicity",
	name: "parent_ethnicity",
	type: Screen.SingleQuestion,
	column_name: "parent_ethnicities",
	audio_ident: "parent_ethnicities",
	translations: {
		"en-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 27",
			label: "What is your ethnicity?",
			kid_label: "What is your ethnicity?",
			adult_label: "What is your ethnicity?",
			choices: [
				{
					label: "Asian",
					value: "Asian",
				},
				{
					label: "Black or African American",
					value: "Black or African American",
				},
				{
					label: "Indigenous",
					value: "Indigenous",
				},
				{
					label: "Latin American",
					value: "Latin American",
				},
				{
					label: "White or Caucasian",
					value: "White or Caucasian",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to say",
					value: "Prefer not to say",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionCheckboxInput,
			heading: "Fråga 27",
			label:
				"Om du är född i ett annat land än i Sverige, hur länge har du varit bosatt i Sverige?",
			kid_label:
				"Om du är född i ett annat land än i Sverige, hur länge har du varit bosatt i Sverige?",
			adult_label:
				"Om du är född i ett annat land än i Sverige, hur länge har du varit bosatt i Sverige?",
			input_label: "år",
			input_placeholder: "år",
			input_label_en: "years",
			choices: [
				{
					label: "Föredrar att inte svara",
					value: "Prefer not to say",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionCheckbox,
			heading: "第二十七题",
			label: "您的种族是？",
			kid_label: "您的种族是？",
			adult_label: "您的种族是？",
			choices: [
				{
					label: "亚洲",
					value: "Asian",
				},
				{
					label: "黑人或美籍非裔",
					value: "Black or African American",
				},
				{
					label: "本土的",
					value: "Indigenous",
				},
				{
					label: "拉丁美洲",
					value: "Latin American",
				},
				{
					label: "白种人",
					value: "White or Caucasian",
				},
				{
					label: "其他",
					value: "Other",
				},
				{
					label: "不想说",
					value: "Prefer not to say",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionCheckbox,
			heading: "Question 26",
			label: "¿Cuál es tu etnicidad?",
			kid_label: "¿Cuál es tu etnicidad?",
			adult_label: "¿Cuál es tu etnicidad?",
			choices: [
				{
					label: "Asiático",
					value: "Asian",
				},
				{
					label: "Negro o afroamericano",
					value: "Black or African American",
				},
				{
					label: "Indígena",
					value: "Indigenous",
				},
				{
					label: "Latinoamericano",
					value: "Latin American",
				},
				{
					label: "Blanco o caucásico",
					value: "White or Caucasian",
				},
				{
					label: "Otro",
					value: "Other",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to say",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 27",
			label: "Quel est votre groupe ethnique?",
			kid_label: "Quel est votre groupe ethnique?",
			adult_label: "Quel est votre groupe ethnique?",
			choices: [
				{
					label: "Asiatique",
					value: "Asian",
				},
				{
					label: "Noir(e) ou Afro-Américain(e)",
					value: "Black or African American",
				},
				{
					label: "Autochtone",
					value: "Indigenous",
				},
				{
					label: "Latino-Américain(e)",
					value: "Latin American",
				},
				{
					label: "Blanc(he) ou Caucasien(ne)",
					value: "White or Caucasian",
				},
				{
					label: "Autre",
					value: "Other",
				},
				{
					label: "Préfère ne pas répondre",
					value: "Prefer not to say",
				},
			],
		},
	},
};

export default ParentEthnicities;
