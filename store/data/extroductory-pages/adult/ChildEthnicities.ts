import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { QuestionCheckboxPayloadInterface } from "interface/payload.type";

const ChildEthnicities: QuestionCheckboxPayloadInterface = {
	ident: "child_ethnicity",
	name: "child_ethnicity",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 26",
			label: "What is your child's ethnicity?",
			kid_label: "What is your child's ethnicity?",
			adult_label: "What is your child's ethnicity?",
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
		"zh-CN": {
			type: Question.QuestionCheckbox,
			heading: "第二十六题",
			label: "您孩子的种族是？",
			kid_label: "您孩子的种族是？",
			adult_label: "您孩子的种族是？",
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
			label: "¿Cuál es la etnia de tu hijo o hija?",
			kid_label: "¿Cuál es la etnia de tu hijo o hija?",
			adult_label: "¿Cuál es la etnia de tu hijo o hija?",
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
			heading: "Question 26",
			label: "Quel est le groupe ethnique de votre enfant?",
			kid_label: "Quel est le groupe ethnique de votre enfant?",
			adult_label: "Quel est le groupe ethnique de votre enfant?",
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

export default ChildEthnicities;
