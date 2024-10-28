import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioImagePayloadInterface } from "interface/payload.type";

const S2Q4: LangQuestionRadioImagePayloadInterface = {
	ident: "household_4",
	name: "Question 11:	Which of the following images shows what you do most of the time during your chores?",
	column_name: "11.0 Hous",
	audio_ident: "household_4",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 11",
			label: "Which of the following images shows what you do most of the time during your chores?",
			kid_label:
				"Which of the following images shows what you do most of the time during your chores?",
			adult_label:
				"Which of the following images resembles what your child does most of the time during their chores?",
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
		"ch-MW": {
			type: Question.QuestionRadioImage,
			heading: "Funso 11",
			label:
				"Ndi chithunzi chiti mwa zotsatirazi chomwe chikufana ndi zomwe umachita nthawi zambiri ukamagwira ntchito zapakhomo?",
			kid_label:
				"Ndi chithunzi chiti mwa zotsatirazi chomwe chikufana ndi zomwe umachita nthawi zambiri ukamagwira ntchito zapakhomo?",
			adult_label:
				"Ndi chithunzi chiti mwa zithunzi zotsatirazi chomwe chikufana ndi zomwe mwana wanu amachita nthawi zambiri akamagwira ntchito zapakhomo?",
			choices: [
				{
					label: "Mumangokhala malo amodzi",
					value: "0.1",
					image_ident: "not_moving",
					label_mode: {
						kid: "Mumangokhala malo amodzi",
						adult: "Amangokhala malo amodzi",
					},
				},
				{
					label: "Mumalimbikira pang’ono",
					value: "0.3",
					image_ident: "easy_effort",
					label_mode: {
						kid: "Mumalimbikira pang’ono",
						adult: "Amalimbikira pang’ono",
					},
				},
				{
					label: "Mumalimbikira mwapakakatikati",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
					label_mode: {
						kid: "Mumalimbikira mwapakakatikati",
						adult: "Amalimbikira mwapakakatikati kapena kwambiri",
					},
				},
				{
					label: "Sindikudziwa",
					image_ident: "dont_know",
					value: "0",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadioImage,
			heading: "प्रश्न ११",
			label:
				"तुम्ही तुमची घरातील नेहमीची कामे करताना बहुतेक वेळ काय करता हे पुढीलपैकी कशातून दिसून येते?",
			kid_label:
				"तुम्ही तुमची घरातील नेहमीची कामे करताना बहुतेक वेळ काय करता हे पुढीलपैकी कशातून दिसून येते?",
			adult_label:
				"तुमचे मूल घरातील नेहमीची कामे करताना बहुतेक वेळ काय करते हे पुढीलपैकी कशातून दिसून येते?",
			choices: [
				{
					label: "बहुतेक वेळा बैठ्या हालचाली",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "बहुतेक वेळा कमी श्रमाच्या हालचाली",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "बहुतेक वेळा मध्यम किंवा कठीण श्रमाच्या हालचाली",
					value: "0.5",
					image_ident: "medium_or_hard_effort",
				},
				{
					label: "माहित नाही",
					image_ident: "dont_know",
					value: "0",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadioImage,
			heading: "प्रश्न ११",
			label:
				"निम्नलिखित चित्रों में से कौन-सा चित्र वैसा दिखता है जैसा आप अपने कामकाज के दौरान ज्यादातर समय करते हैं?",
			kid_label:
				"निम्नलिखित चित्रों में से कौन-सा चित्र वैसा दिखता है जैसा आप अपने कामकाज के दौरान ज्यादातर समय करते हैं?",
			adult_label:
				"निम्नलिखित में से कौन सी तस्वीर आपके बच्चे द्वारा अपने घरेलू कामकाज के दौरान अधिकांश समय किए जाने वाले कार्यों से मिलती जुलती है?",
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
			heading: "Question 11",
			label: "Which of the following images shows what you do most of the time during your chores?",
			kid_label:
				"Which of the following images shows what you do most of the time during your chores?",
			adult_label:
				"Which of the following images resembles what your child does most of the time during their chores?",
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
			heading: "السؤال ١١",
			label: "أي من الصور التالية تبيّن ما تفعله غالباً أثناء قيامك بالأعمال المنزلية؟",
			kid_label: "أي من الصور التالية تبيّن ما تفعله غالباً أثناء قيامك بالأعمال المنزلية؟",
			adult_label: "أي من الصور التالية تبيّن ما يفعله طفلك غالباً أثناء قيامه بالأعمال المنزلية؟",
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
			heading: "प्रश्न ११",
			label: "तल दिएको कुन तस्विरले तपाईंले सबैभन्दा धेरै गर्ने घरायसी कामकाजलाई देखाउँछ?",
			kid_label: "तल दिएको कुन तस्विरले तपाईंले सबैभन्दा धेरै गर्ने घरायसी कामकाजलाई देखाउँछ?",
			adult_label:
				"तल दिएको कुन तस्विरले तपाईंको छोरा वा छोरीले सबैभन्दा धेरै गर्ने घरायसी कामकाजलाई देखाउँछ?",
			choices: [
				{
					label: "हलचल नगरेको",
					value: "0.1",
					image_ident: "not_moving",
				},
				{
					label: "सजिलो प्रयासको शारीरिक गतिविधि गरेको",
					value: "0.3",
					image_ident: "easy_effort",
				},
				{
					label: "मध्यम/गाह्रो प्रयासको शारीरिक गतिविधि गरेको",
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
			heading: "Questão 11",
			label:
				"Qual das opções de imagem a seguir mostra o que você faz na maior parte do tempo durante suas atividades ou tarefas domésticas?",
			kid_label:
				"Qual das opções de imagem a seguir mostra o que você faz na maior parte do tempo durante suas atividades ou tarefas domésticas?",
			adult_label:
				"Qual das opções de imagem a seguir mostra o que o(a) seu(sua) filho(a) faz na maior parte do tempo durante as atividades ou tarefas domésticas?",
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
			heading: "Fråga 11",
			label: "Vilken av bilderna visar vad du gör mest under dina hushållssysslor?",
			kid_label: "Vilken av bilderna visar vad du gör mest under dina hushållssysslor?",
			adult_label: "Vilken av bilderna visar vad ditt barn gör mest under sina hushållssysslor?",
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
			heading: "คำถาม 11",
			label:
				"ภาพใดต่อไปนี้ แสดงสิ่งที่น้องทำเป็นส่วนใหญ่ขณะทำงานบ้านหรือทำงานที่ได้รับมอบหมายหน้าที่จากครอบครัว?",
			kid_label:
				"ภาพใดต่อไปนี้ แสดงสิ่งที่น้องทำเป็นส่วนใหญ่ขณะทำงานบ้านหรือทำงานที่ได้รับมอบหมายหน้าที่จากครอบครัว?",
			adult_label:
				"ภาพใดต่อไปนี้ แสดงสิ่งที่บุตรหลานของคุณทำเป็นส่วนใหญ่ขณะทำงานบ้านหรือทำงานที่ได้รับมอบหมายหน้าที่จากครอบครัว?",
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
			heading: "问题 11",
			label: "以下哪一项符合你在做家务活时的大部分时间在做的事情？",
			kid_label: "以下哪一项符合你在做家务活时的大部分时间在做的事情？",
			adult_label: "以下哪一项符合您的孩子在做家务活时的大部分时间在做的事情？",
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
			heading: "Pregunta 11",
			label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo durante tus tareas del hogar o quehaceres?",
			kid_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo durante tus tareas del hogar o quehaceres?",
			adult_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que hace su hija o hijo la mayor parte del tiempo durante sus tareas del hogar o quehaceres?",
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
			heading: "Pregunta 11",
			label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo durante tus tareas del hogar o quehaceres?",
			kid_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo durante tus tareas del hogar o quehaceres?",
			adult_label:
				"¿Cuál de las siguientes imágenes describe lo que hace su hija o hijo la mayor parte del tiempo durante sus tareas del hogar o quehaceres?",
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
			heading: "Question 11",
			label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps lorsque tu accomplis tes tâches?",
			kid_label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps lorsque tu accomplis tes tâches?",
			adult_label:
				"Laquelle des images suivantes ressemble à ce que ton enfant fait la plupart du temps en accomplissant ses tâches?",
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

export default S2Q4;
