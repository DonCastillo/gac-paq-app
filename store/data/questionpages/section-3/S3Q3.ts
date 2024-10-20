import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioImagePayloadInterface } from "interface/payload.type";

const S3Q3: LangQuestionRadioImagePayloadInterface = {
	ident: "work_3",
	name: "Question 14:	Which of the following images shows what you do most of the time while volunteering and/or working?",
	type: Screen.SingleQuestion,
	column_name: "14.0 Work",
	audio_ident: "work_3",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 14",
			label:
				"Which of the following images shows what you do most of the time while volunteering and/or working?",
			kid_label:
				"Which of the following images shows what you do most of the time while volunteering and/or working?",
			adult_label:
				"Which of the following images resembles what your child does most of the time while volunteering and/or working?",
			choices: [
				{
					label: "Not moving",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "Easy effort",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "Medium or hard effort",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "Don't know",
					value: "0",
					image_ident: "dont_know",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadioImage,
			heading: "प्रश्न १४",
			label:
				"निम्नलिखित में से कौन सा चित्र वैसा दिखता है जैसा आप स्वयंसेवा और/या कार्य करते समय अधिकांश समय करते हैं?",
			kid_label:
				"निम्नलिखित में से कौन सा चित्र वैसा दिखता है जैसा आप स्वयंसेवा और/या कार्य करते समय अधिकांश समय करते हैं?",
			adult_label:
				"निम्नलिखित में से कौन सी तस्वीर आपके बच्चे द्वारा स्वयंसेवा और/या नौकरी करते हुए अधिकांश समय किए गए कार्यों से मिलती जुलती है?",
			choices: [
				{
					label: "कम हलचल वाली गतिविधियाँ",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "आसान प्रयास",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "मध्यम या कठिन प्रयास",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "पता नहीं",
					image_ident: "dont_know",
					value: "0",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadioImage,
			heading: "Question 14",
			label:
				"Which of the following images shows what you do most of the time while volunteering or working?",
			kid_label:
				"Which of the following images shows what you do most of the time while volunteering or working?",
			adult_label:
				"Which of the following images resembles what your child does most of the time while volunteering or working?",
			choices: [
				{
					label: "Not moving",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "Easy effort",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "Medium or hard effort",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "Don't know",
					value: "0",
					image_ident: "dont_know",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadioImage,
			heading: "السؤال ١٤",
			label: "أي من الصور التالية تبيّن ما تفعله معظم الوقت أثناء العمل التطوعي أو الوظيفة؟",
			kid_label: "أي من الصور التالية تبيّن ما تفعله معظم الوقت أثناء العمل التطوعي أو الوظيفة؟",
			adult_label:
				"أي من الصور التالية تبيّن ما يفعله طفلك معظم الوقت أثناء العمل التطوعي أو الوظيفة؟",
			choices: [
				{
					label: "لا حركة",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "جهد سهل",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "جهد متوسط أو صعب",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "لا أعرف",
					image_ident: "dont_know",
					value: "0",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadioImage,
			heading: "प्रश्न १४",
			label:
				"तल दिएको कुन तस्विरले तपाईंले सबैभन्दा धेरै गर्ने काम वा स्वयंमसेवकिय कार्यलाइ देखाउँछ?",
			kid_label:
				"तल दिएको कुन तस्विरले तपाईंले सबैभन्दा धेरै गर्ने काम वा स्वयंमसेवकिय कार्यलाइ देखाउँछ?",
			adult_label:
				"तल दिएको कुन तस्विरले तपाईंको छोरा वा छोरीले सबैभन्दा धेरै गर्ने काम वा स्वयंमसेवकिय कार्यलाइ देखाउँछ?",
			choices: [
				{
					label: "हलचल नगरेको ",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "सजिलो प्रयासको काम गरेको",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "मध्यम/गाह्रो प्रयासको काम गरेको",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "थाहा छैन",
					image_ident: "dont_know",
					value: "0",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadioImage,
			heading: "Questão 14",
			label:
				"Qual das opções de imagem a seguir mostra o que você faz na maior parte do tempo enquanto faz trabalho voluntário e/ou trabalho remunerado?",
			kid_label:
				"Qual das opções de imagem a seguir mostra o que você faz na maior parte do tempo enquanto faz trabalho voluntário e/ou trabalho remunerado?",
			adult_label:
				"Qual das opções de imagem a seguir mostra o que o(a) seu(sua) filho(a) faz na maior parte do tempo enquanto faz trabalho voluntário e/ou trabalho remunerado? ",
			choices: [
				{
					label: "Faço principalmente atividades sem esforço",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "Faço principalmente atividades com esforço leve",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "Faço principalmente atividades com esforço médio ou intenso",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "Não sei",
					image_ident: "dont_know",
					value: "0",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadioImage,
			heading: "Fråga 14",
			label: "Vilken av bilderna visar vad du gör mest när du arbetar eller arbetar ideellt?",
			kid_label: "Vilken av bilderna visar vad du gör mest när du arbetar eller arbetar ideellt?",
			adult_label:
				"Vilken av bilderna visar vad ditt barn gör mest när han/hon arbetar eller arbetar ideellt?",
			choices: [
				{
					label: "Stillasittande",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "Lätt ansträngning",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "Medel eller hög ansträngning",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "Vet ej",
					image_ident: "dont_know",
					value: "0",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadioImage,
			heading: "คำถาม 14",
			label: "ภาพใดต่อไปนี้ แสดงสิ่งที่น้องทำเป็นส่วนใหญ่ขณะทำงานและ/หรือเป็นอาสาสมัคร?",
			kid_label: "ภาพใดต่อไปนี้ แสดงสิ่งที่น้องทำเป็นส่วนใหญ่ขณะทำงานและ/หรือเป็นอาสาสมัคร?",
			adult_label:
				"ภาพใดต่อไปนี้ แสดงสิ่งที่บุตรหลานของคุณทำเป็นส่วนใหญ่ขณะทำงานและ/หรือเป็นอาสาสมัคร?",
			choices: [
				{
					label: "ไม่ได้เคลื่อนไหว",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "เคลื่อนไหวโดยใช้แรงเพียงเล็กน้อย",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "เคลื่อนไหวโดยใช้แรงในระดับปานกลางถึงมาก",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "ไม่ทราบ",
					image_ident: "dont_know",
					value: "0",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadioImage,
			heading: "问题 14",
			label: "以下哪一项符合你大部分做志愿服务和/或工作时大部分时间在做的事情？",
			kid_label: "以下哪一项符合你大部分做志愿服务和/或工作时大部分时间在做的事情？",
			adult_label: "以下哪一项符合您的孩子在做志愿服务和/或工作时大部分时间在做的事情？",
			choices: [
				{
					label: "不动",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "低强度",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "中等或高强度",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "不知道",
					value: "0",
					image_ident: "dont_know",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadioImage,
			heading: "Pregunta 14",
			label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo mientras eres voluntario y/o trabajas?",
			kid_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo mientras eres voluntario y/o trabajas?",
			adult_label:
				"¿Cuál de las siguientes opciones se parece más a lo que hace la mayor parte del tiempo su hija o hijo mientras es voluntario y/o trabaja?",
			choices: [
				{
					label: "Sin moverte",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "Esfuerzo fácil",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "Esfuerzo medio o fuerte",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "No sé",
					value: "0",
					image_ident: "dont_know",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadioImage,
			heading: "Pregunta 14",
			label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo mientras eres voluntario y/o trabajas?",
			kid_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo mientras eres voluntario y/o trabajas?",
			adult_label:
				"¿Cuál de las siguientes opciones se parece más a lo que hace la mayor parte del tiempo su hija o hijo mientras es voluntario y/o trabaja?",
			choices: [
				{
					label: "Sin moverte",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "Esfuerzo fácil",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "Esfuerzo medio o fuerte",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "No sé",
					value: "0",
					image_ident: "dont_know",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 14",
			label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps lorsque tu fais du bénévolat et/ou travailles?",
			kid_label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps lorsque tu fais du bénévolat et/ou travailles?",
			adult_label:
				"Laquelle des images suivantes ressemble à ce que ton enfant fait la plupart du temps en travaillant et/ou en faisant du bénévolat?",
			choices: [
				{
					label: "Pas de mouvement",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "Peu d'effort",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "Un effort moyen ou intense",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "Je ne sais pas",
					value: "0",
					image_ident: "dont_know",
				},
			],
		},
	},
};

export default S3Q3;
