import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { LangQuestionOptionPayloadInterface } from "interface/payload.type";

const ChildEthnicities: LangQuestionOptionPayloadInterface = {
	ident: "child_ethnicity",
	name: "child_ethnicity",
	type: Screen.SingleQuestion,
	column_name: "child_ethnicities",
	audio_ident: "child_ethnicities",
	audio_autoplay: true,
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
		"mi-NZ": {
			type: Question.QuestionCheckbox,
			heading: "Pātai 26",
			label: "He aha te iwi o tāu tamaiti?",
			kid_label: "He aha te iwi o tāu tamaiti?",
			adult_label: "He aha te iwi o tāu tamaiti?",
			choices: [
				{
					label: "NZ European",
					value: "NZ European",
				},
				{
					label: "Māori",
					value: "Māori",
				},
				{
					label: "Samoan",
					value: "Samoan",
				},
				{
					label: "Tongan",
					value: "Tongan",
				},
				{
					label: "Niuean",
					value: "Niuean",
				},
				{
					label: "Chinese",
					value: "Chinese",
				},
				{
					label: "Indian",
					value: "Indian",
				},
				{
					label: "Tētahi atu, hei tauira, Dutch, Japanese, Tokelauan",
					value: "Other",
				},
				{
					label: "Kāore mō te whāki",
					value: "Prefer not to say",
				},
			],
		},
		"en-NZ": {
			type: Question.QuestionCheckbox,
			heading: "Question 26",
			label: "What is your child's ethnicity?",
			kid_label: "What is your child's ethnicity?",
			adult_label: "What is your child's ethnicity?",
			choices: [
				{
					label: "NZ European",
					value: "NZ European",
				},
				{
					label: "Māori",
					value: "Māori",
				},
				{
					label: "Samoan",
					value: "Samoan",
				},
				{
					label: "Tongan",
					value: "Tongan",
				},
				{
					label: "Niuean",
					value: "Niuean",
				},
				{
					label: "Chinese",
					value: "Chinese",
				},
				{
					label: "Indian",
					value: "Indian",
				},
				{
					label: "Other, e.g. Dutch, Japanese, Tokelauan",
					value: "Other",
				},
				{
					label: "Prefer not to say",
					value: "Prefer not to say",
				},
			],
		},
		"cz-CR": {
			type: Question.QuestionCheckbox,
			heading: "Otázka 26",
			label: "Jaká je etnická příslušnost vašeho dítěte?",
			kid_label: "Jaká je etnická příslušnost vašeho dítěte?",
			adult_label: "Jaká je etnická příslušnost vašeho dítěte?",
			choices: [
				{
					label: "Asijská",
					value: "Asian",
				},
				{
					label: "Bělošská nebo kavkazská",
					value: "White or Caucasian",
				},
				{
					label: "Jiná, prosím uveďte",
					value: "Other",
				},
				{
					label: "Nechci sdělovat",
					value: "Prefer not to say",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionCheckbox,
			heading: "Pregunta 26",
			label: "¿Cuál es la etnia de su hija o hijo?",
			kid_label: "¿Cuál es la etnia de su hija o hijo?",
			adult_label: "¿Cuál es la etnia de su hija o hijo?",
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
		"es-CL": {
			type: Question.QuestionCheckbox,
			heading: "Pregunta 26",
			label: "¿Cuál es la etnia de su hija o hijo?",
			kid_label: "¿Cuál es la etnia de su hija o hijo?",
			adult_label: "¿Cuál es la etnia de su hija o hijo?",
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
		"en-MW": {
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
		"en-NG": {
			type: Question.QuestionCheckbox,
			heading: "Question 26",
			label: "What is your child's ethnicity?",
			kid_label: "What is your child's ethnicity?",
			adult_label: "What is your child's ethnicity?",
			choices: [
				{
					label: "Yoruba",
					value: "Yoruba",
				},
				{
					label: "Igbo",
					value: "Igbo",
				},
				{
					label: "Hausa",
					value: "Hausa",
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
		"ch-MW": {
			type: Question.QuestionCheckbox,
			heading: "Funso 26",
			label: "Kodi mwana wanu ndi wa mtundu wanji wa anthu?",
			kid_label: "Kodi mwana wanu ndi wa mtundu wanji wa anthu?",
			adult_label: "Kodi mwana wanu ndi wa mtundu wanji wa anthu?",
			choices: [
				{
					label: "Amwenye",
					value: "Asian",
				},
				{
					label: "Achikuda",
					value: "Black or African American",
				},
				{
					label: "Achikaladi",
					value: "Indigenous",
				},
				{
					label: "Latin America",
					value: "Latin American",
				},
				{
					label: "Achizungu",
					value: "White or Caucasian",
				},
				{
					label: "Mtundu wina",
					value: "Other",
				},
				{
					label: "Ndasankha kusayankha",
					value: "Prefer not to say",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionCheckbox,
			heading: "प्रश्न २६",
			label: "तुमच्या मुलाचा/ मुलीचा वांशिक गट कोणता?",
			kid_label: "तुमच्या मुलाचा/ मुलीचा वांशिक गट कोणता?",
			adult_label: "तुमच्या मुलाचा/ मुलीचा वांशिक गट कोणता?",
			choices: [
				{
					label: "आशियाई",
					value: "Asian",
				},
				{
					label: "कृष्णवर्णीय किंवा अमेरिकन कृष्णवर्णीय",
					value: "Black or African American",
				},
				{
					label: "स्थानिक / मूलनिवासी / आदिवासी",
					value: "Indigenous",
				},
				{
					label: "लॅटिन अमेरिकन",
					value: "Latin American",
				},
				{
					label: "श्वेतवर्णीय किंवा कॉकेशियन",
					value: "White or Caucasian",
				},
				{
					label: "इतर",
					value: "Other",
				},
				{
					label: "मला नाही सांगायचे",
					value: "Prefer not to say",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionCheckbox,
			heading: "प्रश्न 26",
			label: "आपके बच्चे की जातीयता क्या है?",
			kid_label: "आपके बच्चे की जातीयता क्या है?",
			adult_label: "आपके बच्चे की जातीयता क्या है?",
			choices: [
				{
					label: "एशियाई",
					value: "Asian",
				},
				{
					label: "ब्लैक या अफ़्रीकी अमेरिकी",
					value: "Black or African American",
				},
				{
					label: "स्वदेशी",
					value: "Indigenous",
				},
				{
					label: "लैटिन अमेरिकी",
					value: "Latin American",
				},
				{
					label: "व्हाइट या कोकेशियान",
					value: "White or Caucasian",
				},
				{
					label: "अन्य",
					value: "Other",
				},
				{
					label: "नहीं कहना पसंद करेंगे",
					value: "Prefer not to say",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionCheckboxInput,
			heading: "Question 26",
			label: "What is your child's nationality?",
			kid_label: "What is your child's nationality?",
			adult_label: "What is your child's nationality?",
			input_label: "",
			input_placeholder: "",
			input_label_en: "",
			choices: [],
		},
		"ar-AE": {
			type: Question.QuestionCheckboxInput,
			heading: "سؤال [٢٦]",
			label: "ما هي جنسية طفلك؟",
			kid_label: "ما هي جنسية طفلك؟",
			adult_label: "ما هي جنسية طفلك؟",
			input_label: "",
			input_placeholder: "",
			input_label_en: "",
			choices: [],
		},
		"ne-NP": {
			type: Question.QuestionCheckbox,
			heading: "प्रश्न २६",
			label: "तपाइको छोरा वा छोरीको जातियता के हो?",
			kid_label: "तपाइको छोरा वा छोरीको जातियता के हो?",
			adult_label: "तपाइको छोरा वा छोरीको जातियता के हो?",
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
					label: "ल्यटिन अमेरिकन्",
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
			heading: "Questão 26",
			label: "Qual é a cor ou raça da criança ou adolescente que você é responsável?",
			kid_label: "Qual é a cor ou raça da criança ou adolescente que você é responsável?",
			adult_label: "Qual é a cor ou raça da criança ou adolescente que você é responsável?",
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
			type: Question.QuestionRadio,
			heading: "Fråga 26",
			label: "Vilket land är du född i?",
			kid_label: "Vilket land är du född i?",
			adult_label: "Vilket land är du född i?",
			choices: [
				{
					label: "Sverige",
					value: "Sweden",
				},
				{
					label: "Annat",
					value: "Other",
				},
				{
					label: "Föredrar att inte svara",
					value: "Prefer not to say",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionCheckbox,
			heading: "ข้อ 26",
			label: "บุตรหลานของคุณมีเชื้อชาติ/ชาติพันธุ์ใด?",
			kid_label: "บุตรหลานของคุณมีเชื้อชาติ/ชาติพันธุ์ใด?",
			adult_label: "บุตรหลานของคุณมีเชื้อชาติ/ชาติพันธุ์ใด?",
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
			type: Question.QuestionRadio,
			heading: "问题 26",
			label: "您孩子的民族是?",
			kid_label: "您孩子的民族是?",
			adult_label: "您孩子的民族是?",
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
			heading: "Pregunta 26",
			label: "¿Cuál es la etnia de su hija o hijo?",
			kid_label: "¿Cuál es la etnia de su hija o hijo?",
			adult_label: "¿Cuál es la etnia de su hija o hijo?",
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
			type: Question.QuestionRadio,
			heading: "Pregunta 26",
			label: "¿Habla algún dialecto o lengua indígena?",
			kid_label: "¿Habla algún dialecto o lengua indígena?",
			adult_label: "¿Habla algún dialecto o lengua indígena?",
			choices: [
				{
					label: "Sí",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
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
