import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S5Q1: LangQuestionRadioPayloadInterface = {
	ident: "organized_1",
	name: "Question 18:	Did you do any organized activities during the past week?",
	column_name: "18.0 Orga",
	audio_ident: "organized_1",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 18",
			label: "Did you do any organized activities during the past week?",
			kid_label: "Did you do any organized activities during the past week?",
			adult_label: "Did your child do any organized activities during the past week?",
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
			heading: "Pregunta 18",
			label: "¿Realizaste alguna actividad organizada durante la semana pasada?",
			kid_label: "¿Realizaste alguna actividad organizada durante la semana pasada?",
			adult_label: "¿Realizó su hija o hijo alguna actividad organizada durante la semana pasada?",
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
			heading: "Question 18",
			label: "Did you do any organized activities during the past week?",
			kid_label: "Did you do any organized activities during the past week?",
			adult_label: "Did your child do any organized activities during the past week?",
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
			heading: "Question 18",
			label: "Did you do any organized activities during the past week?",
			kid_label: "Did you do any organized activities during the past week?",
			adult_label: "Did your child do any organized activities during the past week?",
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
			heading: "Funso 18",
			label:
				"Kodi sabata yapitayi unasewerako pa zochitika zina zili zonse zokonzedwa ndi sukulu kapena kalabu?",
			kid_label:
				"Kodi sabata yapitayi unasewerako pa zochitika zina zili zonse zokonzedwa ndi sukulu kapena kalabu?",
			adult_label:
				"Kodi m’sabata yathayi mwana wanu anasewerako pa zochitika zinazake zokonzedwa ndi sukulu kapena kalabu?",
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
			heading: "प्रश्न १८",
			label:
				"मागील आठवड्यात तुम्ही शारीरिकदृष्ट्या सक्रिय संघटनाची आवश्यकता असलेले उपक्रम केले का?",
			kid_label:
				"मागील आठवड्यात तुम्ही शारीरिकदृष्ट्या सक्रिय संघटनाची आवश्यकता असलेले उपक्रम केले का?",
			adult_label:
				"मागील आठवड्यात तुमच्या मुलाने शारीरिकदृष्ट्या सक्रिय संघटनाची आवश्यकता असलेले उपक्रम केले का?",
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
			heading: "प्रश्न १८",
			label: "क्या आपने पिछले सप्ताह के दौरान कोई संगठित गतिविधियाँ कीं?",
			kid_label: "क्या आपने पिछले सप्ताह के दौरान कोई संगठित गतिविधियाँ कीं?",
			adult_label: "क्या आपके बच्चे ने पिछले सप्ताह के दौरान कोई संगठित गतिविधियाँ कीं?",
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
			heading: "Question 18",
			label: "Did you do any organized activities during the past week?",
			kid_label: "Did you do any organized activities during the past week?",
			adult_label: "Did your child do any organized activities during the past week?",
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
			heading: "سؤال [١٨]",
			label: "هل شاركت في أي أنشطة خارجية خلال الأسبوع الماضي؟",
			kid_label: "هل شاركت في أي أنشطة خارجية خلال الأسبوع الماضي؟",
			adult_label: "هل شارك طفلك في أي أنشطة منظّمة أو خارجية خلال الأسبوع الماضي؟",
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
			heading: "प्रश्न १८",
			label: "पछिल्लो (गएको/ बितेको)  हप्ता, के तपाईं कुनै सन्गठित क्रियाकलापमा सक्रिय हुनुभयो?",
			kid_label:
				"पछिल्लो (गएको/ बितेको)  हप्ता, के तपाईं कुनै सन्गठित क्रियाकलापमा सक्रिय हुनुभयो?",
			adult_label:
				"पछिल्लो (गएको/ बितेको) हप्ता, के तपाईंको छोरा वा छोरीले कुनै सन्गठित क्रियाकलापमा सक्रिय हुनुभयो?",
			choices: [
				{
					label: "गएँ",
					value: "yes",
				},
				{
					label: "गइनं",
					value: "no",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 18",
			label: "Na última semana, você praticou alguma atividade física organizada ou esporte?",
			kid_label: "Na última semana, você praticou alguma atividade física organizada ou esporte?",
			adult_label:
				"Na última semana, a criança ou adolescente que você é responsável praticou alguma atividade física organizada ou esporte?",
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
			heading: "Fråga 18",
			label:
				"Har du gått på någon organiserad idrott under den senaste veckan? (T.ex. fotboll, dans, hockey, ridning med mera)",
			kid_label:
				"Har du gått på någon organiserad idrott under den senaste veckan? (T.ex. fotboll, dans, hockey, ridning med mera)",
			adult_label:
				"Har ditt barn gått på någon organiserad idrott under den senaste veckan? (T.ex. fotboll, dans, hockey, ridning med mera)",
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
			heading: "ข้อ 18",
			label:
				"สัปดาห์ที่แล้ว น้องได้ทำกิจกรรมหรือเล่นกีฬาที่ทางโรงเรียนจัดขึ้น การเรียนพิเศษทางด้านกีฬา รวมถึงกิจกรรมที่ทางชุมชนจัดขึ้นบ้างหรือไม่?",
			kid_label:
				"สัปดาห์ที่แล้ว น้องได้ทำกิจกรรมหรือเล่นกีฬาที่ทางโรงเรียนจัดขึ้น การเรียนพิเศษทางด้านกีฬา รวมถึงกิจกรรมที่ทางชุมชนจัดขึ้นบ้างหรือไม่?",
			adult_label:
				"สัปดาห์ที่แล้ว บุตรหลานของคุณได้ทำกิจกรรมหรือเล่นกีฬาที่ทางโรงเรียนจัดขึ้น การเรียนพิเศษทางด้านกีฬา รวมถึงกิจกรรมที่ทางชุมชนจัดขึ้นบ้างหรือไม่?",
			choices: [
				{
					label: "ใช่ ได้ทำ/เข้าร่วม",
					value: "yes",
				},
				{
					label: "ไม่ ไม่ได้ทำ/เข้าร่วม",
					value: "no",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 18",
			label: "在过去一周里，你参加过有组织的活动吗?",
			kid_label: "在过去一周里，你参加过有组织的活动吗?",
			adult_label: "在过去一周里，您的孩子是否参加过有组织的活动？",
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
			heading: "Pregunta 18",
			label: "¿Realizaste alguna actividad organizada durante la semana pasada?",
			kid_label: "¿Realizaste alguna actividad organizada durante la semana pasada?",
			adult_label: "¿Su hija o hijo realizó alguna actividad organizada durante la semana pasada?",
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
			heading: "Pregunta 18",
			label: "¿Realizaste alguna actividad organizada durante la semana pasada?",
			kid_label: "¿Realizaste alguna actividad organizada durante la semana pasada?",
			adult_label: "¿Su hija o hijo realizó alguna actividad organizada durante la semana pasada?",
			kid_sublabel: "Por ejemplo ir a una academia de fútbol, natación, danza, taekwondo u otro.",
			adult_sublabel: "Por ejemplo ir a una academia de fútbol, natación, danza, taekwondo u otro.",
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
			heading: "Question 18",
			label: "As-tu participé à une activité organisée au cours de la dernière semaine?",
			kid_label: "As-tu participé à une activité organisée au cours de la dernière semaine?",
			adult_label:
				"Ton enfant a-t-il (elle) participé à une activité organisée au cours de la dernière semaine?",
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

export default S5Q1;
