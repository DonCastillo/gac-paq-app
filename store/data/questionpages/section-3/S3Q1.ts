import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S3Q1: LangQuestionRadioPayloadInterface = {
	ident: "work_1",
	name: "Question 12: In the past week, did you volunteer or work?",
	type: Screen.SingleQuestion,
	column_name: "12.0 Work",
	audio_ident: "work_1",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 12",
			label: "In the past week, did you volunteer or work?",
			kid_label: "In the past week, did you volunteer or work?",
			adult_label: "In the past week, did your child volunteer or work?",
			choices: [
				{
					label: "Yes",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 12",
			label: "En la última semana, ¿fuiste voluntario o trabajaste?",
			kid_label: "En la última semana, ¿fuiste voluntario o trabajaste?",
			adult_label: "En la última semana, ¿fue su hija o hijo voluntario o trabajó?",
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
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 12",
			label: "In the past week, did you volunteer or work?",
			kid_label: "In the past week, did you volunteer or work?",
			adult_label: "In the past week, did your child volunteer or work?",
			choices: [
				{
					label: "Yes",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 12",
			label: "In the past week, did you volunteer or work?",
			kid_label: "In the past week, did you volunteer or work?",
			adult_label: "In the past week, did your child volunteer or work?",
			choices: [
				{
					label: "Yes",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 12",
			label: "M’sabata yapitayi, kodi unagwira ntchito yongodzipereka kapena ntchito yolipidwa?",
			kid_label:
				"M’sabata yapitayi, kodi unagwira ntchito yongodzipereka kapena ntchito yolipidwa?",
			adult_label:
				"M’sabata yapitayi, kodi mwana wanu anagwira ntchito yongodzipereka kapena ntchito yolipidwa?",
			choices: [
				{
					label: "Eya",
					value: "yes",
				},
				{
					label: "Ayi",
					value: "no",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १२",
			label:
				"गेल्या आठवड्यात, तुम्ही स्वयंसेवक म्हणून काही काम केले का किंवा एखादे काम असे केले का ज्यामुळे तुम्हाला किंवा तुमच्या कुटुंबाला थोडेफार उत्पन्न मिळाले?",
			kid_label:
				"गेल्या आठवड्यात, तुम्ही स्वयंसेवक म्हणून काही काम केले का किंवा एखादे काम असे केले का ज्यामुळे तुम्हाला किंवा तुमच्या कुटुंबाला थोडेफार उत्पन्न मिळाले?",
			adult_label:
				"गेल्या आठवड्यात, तुमच्या मुलाने स्वयंसेवक म्हणून काही काम केले का किंवा एखादी नोकरी केली का?",
			choices: [
				{
					label: "होय",
					value: "yes",
				},
				{
					label: "नाही",
					value: "no",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १२",
			label: "पिछले सप्ताह में, क्या आपने स्वयंसेवा की या नौकरी की?",
			kid_label: "पिछले सप्ताह में, क्या आपने स्वयंसेवा की या नौकरी की?",
			adult_label: "पिछले सप्ताह में, क्या आपके बच्चे ने स्वेच्छा से काम किया या नौकरी की?",
			choices: [
				{
					label: "हाँ",
					value: "yes",
				},
				{
					label: "नहीं",
					value: "no",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 12",
			label: "In the past week, did you volunteer or work?",
			kid_label: "In the past week, did you volunteer or work?",
			adult_label: "In the past week, did your child volunteer or work?",
			choices: [
				{
					label: "Yes",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [١٢]",
			label: "خلال الأسبوع الماضي، هل قمت بعملٍ تطوعي أو وظيفة؟",
			kid_label: "خلال الأسبوع الماضي، هل قمت بعملٍ تطوعي أو وظيفة؟",
			adult_label: "خلال الأسبوع الماضي، هل قام طفلك بعملٍ تطوعي أو وظيفة؟",
			choices: [
				{
					label: "نعم",
					value: "yes",
				},
				{
					label: "لا",
					value: "no",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १२",
			label: "पछिल्लो (गएको/ बितेको) हप्तामा, के तपाईंले कुनै काम वा स्वयंसेवा गर्नुभयो ? ",
			kid_label: "पछिल्लो (गएको/ बितेको) हप्तामा, के तपाईंले कुनै काम वा स्वयंसेवा गर्नुभयो ? ",
			adult_label:
				"पछिल्लो (गएको/ बितेको)  हप्तामा, के तपाईंको छोरा वा छोरीले कुनै काम वा स्वयंसेवा गर्नुभयो?",
			choices: [
				{
					label: "गरे",
					value: "yes",
				},
				{
					label: "गरिनँ",
					value: "no",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 12",
			label: "Na última semana, você fez algum trabalho voluntário ou trabalho remunerado?",
			kid_label: "Na última semana, você fez algum trabalho voluntário ou trabalho remunerado?",
			adult_label:
				"Na última semana, a criança ou adolescente que você é responsável fez algum trabalho voluntário ou trabalho remunerado?",
			choices: [
				{
					label: "Sim",
					value: "yes",
				},
				{
					label: "Não",
					value: "no",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 12",
			label: "Har du arbetat eller arbetat ideellt under den senaste veckan?",
			kid_label: "Har du arbetat eller arbetat ideellt under den senaste veckan?",
			adult_label: "Har ditt barn arbetat eller arbetat ideellt under den senaste veckan?",
			choices: [
				{
					label: "Ja",
					value: "yes",
				},
				{
					label: "Nej",
					value: "no",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 12",
			label: "สัปดาห์ที่แล้ว น้องได้ทำงานหรือเป็นอาสาสมัครหรือไม่?",
			kid_label: "สัปดาห์ที่แล้ว น้องได้ทำงานหรือเป็นอาสาสมัครหรือไม่?",
			adult_label: "สัปดาห์ที่แล้ว บุตรหลานของคุณได้ทำงานหรือเป็นอาสาสมัครหรือไม่?",
			choices: [
				{
					label: "ใช่ ได้ทำ",
					value: "yes",
				},
				{
					label: "ไม่ ไม่ได้ทำ",
					value: "no",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 12",
			label: "在过去一周里，你是否参加过志愿服务或工作？",
			kid_label: "在过去一周里，你是否参加过志愿服务或工作？",
			adult_label: "在过去一周里，您的孩子是否有参加志愿服务或工作？",
			choices: [
				{
					label: "是",
					value: "yes",
				},
				{
					label: "否",
					value: "no",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 12",
			label: "Durante la semana pasada, ¿fuiste voluntario o trabajaste?",
			kid_label: "Durante la semana pasada, ¿fuiste voluntario o trabajaste?",
			adult_label: "Durante la semana pasada, ¿fue su hija o hijo voluntario o trabajó?",
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
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 12",
			label: "En la última semana, ¿fuiste voluntario o trabajaste?",
			kid_label: "En la última semana, ¿fuiste voluntario o trabajaste?",
			adult_label: "En la última semana, ¿fue su hija o hijo voluntario o trabajó?",
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
			type: Question.QuestionRadio,
			heading: "Question 12",
			label: "Durant la dernière semaine, as-tu fait du bénévolat ou un travail?",
			kid_label: "Durant la dernière semaine, as-tu fait du bénévolat ou un travail?",
			adult_label:
				"Durant la dernière semaine, ton enfant a-t-il (elle) fait du bénévolat ou un travail?",
			choices: [
				{
					label: "Oui",
					value: "yes",
				},
				{
					label: "Non",
					value: "no",
				},
			],
		},
	},
};

export default S3Q1;
