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
		"mi-NZ": {
			type: Question.QuestionCheckbox,
			heading: "Pātai 27",
			label: "He aha tō iwi?",
			kid_label: "He aha tō iwi?",
			adult_label: "He aha tō iwi?",
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
			heading: "Question 27",
			label: "What is your ethnicity?",
			kid_label: "What is your ethnicity?",
			adult_label: "What is your ethnicity?",
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
			heading: "Otázka 27",
			label: "Jaká je vaše etnická příslušnost?",
			kid_label: "Jaká je vaše etnická příslušnost?",
			adult_label: "Jaká je vaše etnická příslušnost?",
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
			heading: "Pregunta 27",
			label: "¿Cuál es su etnia?",
			kid_label: "¿Cuál es su etnia?",
			adult_label: "¿Cuál es su etnia?",
			choices: [
				{
					label: "Indígena",
					value: "Indigenous",
				},
				{
					label: "Negro o afroamericano",
					value: "Black or African American",
				},
				{
					label: "Gitano (a) / Rom",
					value: "Gypsy / Rom",
				},
				{
					label: "Raizal",
					value: "Raizal",
				},
				{
					label: "Blanco o caucásico",
					value: "White or Caucasian",
				},
				{
					label: "Mestizo (a)",
					value: "Mestizo (a)",
				},
				{
					label: "Mulato/a",
					value: "Mulato/a",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to say",
				},
				{
					label: "Ninguna",
					value: "None",
				},
				{
					label: "Otro, ¿cuál?",
					value: "Other",
				},
			],
		},
		"es-CL": {
			type: Question.QuestionCheckbox,
			heading: "Pregunta 27",
			label: "¿Cuál es su etnia?",
			kid_label: "¿Cuál es su etnia?",
			adult_label: "¿Cuál es su etnia?",
			choices: [
				{
					label: "Pueblos indígenas",
					value: "Indigenous people",
				},
				{
					label: "Negro o afroamericano",
					value: "Black or African American",
				},
				{
					label: "Gitano (a)",
					value: "Gypsy (a)",
				},
				{
					label: "Blanco o caucásico",
					value: "White or Caucasian",
				},
				{
					label: "Mestizo (a)",
					value: "Mestizo (a)",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to say",
				},
				{
					label: "Ninguna",
					value: "None",
				},
				{
					label: "Otro, ¿cuál?",
					value: "Other",
				},
			],
		},
		"en-MW": {
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
		"en-NG": {
			type: Question.QuestionCheckbox,
			heading: "Question 27",
			label: "What is your ethnicity?",
			kid_label: "What is your ethnicity?",
			adult_label: "What is your ethnicity?",
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
			heading: "Funso 27",
			label: "Kodi ndinu a mtundu wanji wa anthu?",
			kid_label: "Kodi ndinu a mtundu wanji wa anthu?",
			adult_label: "Kodi ndinu a mtundu wanji wa anthu?",
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
			heading: "प्रश्न २७",
			label: "तुमचा वांशिक गट कोणता?",
			kid_label: "तुमचा वांशिक गट कोणता?",
			adult_label: "तुमचा वांशिक गट कोणता?",
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
			heading: "प्रश्न 27",
			label: "आपकी जातीयता क्या है?",
			kid_label: "आपकी जातीयता क्या है?",
			adult_label: "आपकी जातीयता क्या है?",
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
			heading: "سؤال [٢٧]",
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
			heading: "ข้อ 27",
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
			type: Question.QuestionRadio,
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
