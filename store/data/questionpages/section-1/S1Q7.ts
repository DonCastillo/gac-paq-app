import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioImagePayloadInterface } from "interface/payload.type";

const S1Q7: LangQuestionRadioImagePayloadInterface = {
	ident: "school_7",
	name: "Question 7: Which of the following images shows what you do most of the time during your breaks?",
	column_name: "07.0 Scho",
	audio_ident: "school_7",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 7",
			label: "Which of the following images shows what you do most of the time during your breaks?",
			kid_label:
				"Which of the following images shows what you do most of the time during your breaks?",
			adult_label:
				"Which of the following images resembles what your child does most of the time during their breaks?",
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
		"es-CO": {
			type: Question.QuestionRadioImage,
			heading: "Pregunta 7",
			label:
				"¿Cuál de las siguientes imágenes muestra lo que haces la mayor parte del tiempo durante tus descansos?",
			kid_label:
				"¿Cuál de las siguientes imágenes muestra lo que haces la mayor parte del tiempo durante tus descansos?",
			adult_label:
				"¿Cuál de las siguientes imágenes muestra lo que hace la mayor parte del tiempo su hija o hijo durante sus descansos?",
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
					label: "Esfuerzo medio o intenso",
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
		"en-MW": {
			type: Question.QuestionRadioImage,
			heading: "Question 7",
			label: "Which of the following images shows what you do most of the time during your breaks?",
			kid_label:
				"Which of the following images shows what you do most of the time during your breaks?",
			adult_label:
				"Which of the following images resembles what your child does most of the time during their breaks?",
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
			heading: "Funso 7",
			label:
				"Kodi chithunzi chanji mwa izi chikuyimira zomwe mumachita kwambiri pa nthawi ya buleki?",
			kid_label:
				"Kodi chithunzi chanji mwa izi chikuyimira zomwe mumachita kwambiri pa nthawi ya buleki?",
			adult_label:
				"Ndi chithunzi chiti pa zithunzi zotsatirazi chomwe chikufanana ndi zomwe mwana wanu amachita nthawi zambiri panthawi yabuleki?",
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
			heading: "प्रश्न ७",
			label:
				"पुढीलपैकी कोणते चित्र तुम्ही तुमच्या मधल्या सुट्टीमध्ये बहुतेक वेळ काय करता हे दाखवते?",
			kid_label:
				"पुढीलपैकी कोणते चित्र तुम्ही तुमच्या मधल्या सुट्टीमध्ये बहुतेक वेळ काय करता हे दाखवते?",
			adult_label:
				"पुढीलपैकी कोणते चित्र तुमचे मूल मधल्या सुट्टीमध्ये बहुतेक वेळ काय करते हे दर्शवते?",
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
			heading: "प्रश्न 7",
			label:
				"निम्नलिखित चित्रों में से कौन-सा चित्र वैसा दिखता है जैसा आप अपने अवकाश के दौरान अधिकांश समय करते हैं?",
			kid_label:
				"निम्नलिखित चित्रों में से कौन-सा चित्र वैसा दिखता है जैसा आप अपने अवकाश के दौरान अधिकांश समय करते हैं?",
			adult_label:
				"निम्नलिखित में से कौन सा चित्र आपके बच्चे द्वारा अपने अवकाश के दौरान अधिकांश समय किए जाने वाले कार्यों से मिलता जुलता है?",
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
			heading: "Question 7",
			label: "Which of the following images shows what you do most of the time during your breaks?",
			kid_label:
				"Which of the following images shows what you do most of the time during your breaks?",
			adult_label:
				"Which of the following images resembles what your child does most of the time during their breaks?",
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
			heading: "السؤال 7",
			label: "أي من الصور التالية تبيّن ما تفعله غالباً أثناء فترات الاستراحة؟",
			kid_label: "أي من الصور التالية تبيّن ما تفعله غالباً أثناء فترات الاستراحة؟",
			adult_label: "أي من الصور التالية تبيّن ما يفعله طفلك غالباً أثناء فترات الاستراحة؟",
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
			heading: "प्रश्न ७",
			label: "Which of the following images shows what you do most of the time during your breaks?",
			kid_label:
				"Which of the following images shows what you do most of the time during your breaks?",
			adult_label:
				"Which of the following images resembles what your child does most of the time during their breaks?",
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
			heading: "Questão 7",
			label:
				"Qual das opções a seguir corresponde ao que você faz na maior parte das vezes durante os intervalos ou recreios?",
			kid_label:
				"Qual das opções a seguir corresponde ao que você faz na maior parte das vezes durante os intervalos ou recreios?",
			adult_label:
				"Qual das opções a seguir corresponde ao que o(a) seu(sua) filho(a) faz na maior parte das vezes durante os intervalos ou recreios?",
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
		"th-TH": {
			type: Question.QuestionRadioImage,
			heading: "คำถาม 7",
			label: "ภาพใดต่อไปนี้ แสดงสิ่งที่น้องทำเป็นส่วนใหญ่ในช่วงเวลาพัก?",
			kid_label: "ภาพใดต่อไปนี้ แสดงสิ่งที่น้องทำเป็นส่วนใหญ่ในช่วงเวลาพัก?",
			adult_label: "ภาพใดต่อไปนี้ แสดงสิ่งที่บุตรหลานของคุณทำเป็นส่วนใหญ่ในช่วงเวลาพัก?",
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
		"sv-SE": {
			type: Question.QuestionRadioImage,
			heading: "Fråga 7",
			label: "Vilken av bilderna visar vad du gör mest av under dina raster?",
			kid_label: "Vilken av bilderna visar vad du gör mest av under dina raster?",
			adult_label: "Vilken av bilderna visar vad ditt barn gör mest av tiden under sina raster?",
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
		"zh-CN": {
			type: Question.QuestionRadioImage,
			heading: "问题 7",
			label: "以下哪张图片符合你大部分在校休息时间里进行的活动？",
			kid_label: "以下哪张图片符合你大部分在校休息时间里进行的活动？",
			adult_label: "以下哪张图片符合您的孩子在学校大部分休息时间里进行的活动？",
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
			heading: "Pregunta 7",
			label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo durante tus recreos o descansos?",
			kid_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo durante tus recreos o descansos?",
			adult_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que hace la mayor parte del tiempo su hija o hijo durante sus recreos o descansos?",
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
			heading: "Pregunta 7",
			label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo durante tus recreos o descansos?",
			kid_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo durante tus recreos o descansos?",
			adult_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que hace la mayor parte del tiempo su hija o hijo durante sus recreos o descansos?",
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
			heading: "Question 7",
			label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps durant les pauses?",
			kid_label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps durant les pauses?",
			adult_label:
				"Laquelle des images suivantes ressemble à ce que ton enfant fait la plupart du temps durant les pauses?",
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

export default S1Q7;
