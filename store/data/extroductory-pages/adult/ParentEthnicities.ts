import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionOptionPayloadInterface } from "interface/payload.type";

const ParentEthnicities: LangQuestionOptionPayloadInterface = {
	ident: "parent_ethnicity",
	name: "parent_ethnicity",
	type: Screen.SingleQuestion,
	column_name: "parent_ethnicities",
	audio_ident: "parent_ethnicities",
	audio_autoplay: true,
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
		"en-AE": {
			type: Question.QuestionCheckboxInput,
			heading: "Question 27",
			label: "What is your nationality?",
			kid_label: "What is your nationality?",
			adult_label: "What is your nationality?",
			input_label: "",
			input_placeholder: "",
			input_label_en: "",
			choices: [],
		},
		"ar-AE": {
			type: Question.QuestionCheckboxInput,
			heading: "السؤال 27",
			label: "ما هي جنسيتك؟",
			kid_label: "ما هي جنسيتك؟",
			adult_label: "ما هي جنسيتك؟",
			input_label: "",
			input_placeholder: "",
			input_label_en: "",
			choices: [],
		},
		"ne-NP": {
			type: Question.QuestionCheckbox,
			heading: "प्रश्न २७",
			label: "तपाइको जातियता के हो?",
			kid_label: "तपाइको जातियता के हो?",
			adult_label: "तपाइको जातियता के हो?",
			choices: [
				{
					label: "एसियन्",
					value: "Asian",
				},
				{
					label: "कालो बर्ण वा अफ्रीकन्",
					value: "Black or African American",
				},
				{
					label: "आदिवासि",
					value: "Indigenous",
				},
				{
					label: "यटिन अमेरिकन्",
					value: "Latin American",
				},
				{
					label: "सेतो बर्ण वा ककेसियन्",
					value: "White or Caucasian",
				},
				{
					label: "अन्य",
					value: "Other",
				},
				{
					label: "भन्न चाहन्न",
					value: "Prefer not to say",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionCheckbox,
			heading: "Questão 27",
			label: "Qual é a sua cor ou raça?",
			kid_label: "Qual é a sua cor ou raça?",
			adult_label: "Qual é a sua cor ou raça?",
			choices: [
				{
					label: "Branca",
					value: "White",
				},
				{
					label: "Preta",
					value: "Black",
				},
				{
					label: "Amarela",
					value: "Yellow",
				},
				{
					label: "Parda",
					value: "Brown",
				},
				{
					label: "Indígena",
					value: "Indigenous",
				},
				{
					label: "Prefiro não responder",
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
		"th-TH": {
			type: Question.QuestionCheckbox,
			heading: "คำถาม 27",
			label: "คุณมีเชื้อชาติ/ชาติพันธุ์ใด?",
			kid_label: "คุณมีเชื้อชาติ/ชาติพันธุ์ใด?",
			adult_label: "คุณมีเชื้อชาติ/ชาติพันธุ์ใด?",
			choices: [
				{
					label: "เอเชีย",
					value: "Asian",
				},
				{
					label: "คนผิวดำหรือเชื้อสายแอฟริกันอเมริกัน",
					value: "Black or African American",
				},
				{
					label: "ชนพื้นเมือง",
					value: "Indigenous",
				},
				{
					label: "ละตินอเมริกา",
					value: "Latin American",
				},
				{
					label: "คนผิวขาวหรือคอเคเซียน",
					value: "White or Caucasian",
				},
				{
					label: "อื่น ๆ",
					value: "Other",
				},
				{
					label: "ไม่ต้องการตอบ",
					value: "Prefer not to say",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionCheckbox,
			heading: "问题 27",
			label: "您的民族是?",
			kid_label: "您的民族是?",
			adult_label: "您的民族是?",
			choices: [
				{
					label: "汉族",
					value: "Han",
				},
				{
					label: "其他",
					value: "Other",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionCheckbox,
			heading: "Pregunta 27",
			label: "¿Cuál es su etnia?",
			kid_label: "¿Cuál es su etnia?",
			adult_label: "¿Cuál es su etnia?",
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
		"es-MX": {
			type: Question.QuestionInput,
			heading: "Pregunta 27",
			label: "¿Qué dialecto o lengua indígena habla?",
			kid_label: "¿Qué dialecto o lengua indígena habla?",
			adult_label: "¿Qué dialecto o lengua indígena habla?",
			placeholder: "",
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
