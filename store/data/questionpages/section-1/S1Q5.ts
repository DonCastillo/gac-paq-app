import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioImagePayloadInterface } from "interface/payload.type";

const S1Q5: LangQuestionRadioImagePayloadInterface = {
	ident: "school_5",
	name: "Question 5: Which of the following images shows what you do most of the time in physical education class?",
	column_name: "05.0 Scho",
	audio_ident: "school_5",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadioImage,
			heading: "Question 5",
			label:
				"Which of the following images looks like what you do most of the time in physical education class?",
			kid_label:
				"Which of the following images looks like what you do most of the time in physical education class?",
			adult_label:
				"Which of the following images resembles what your child does most of the time in physical education class?",
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
					image_ident: "dont_know",
					value: "0",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadioImage,
			heading: "प्रश्न ५",
			label:
				"तल दिएको कुन तस्विरले तपाईंले शारीरिक शिक्षासम्बन्धी कक्षामा सबैभन्दा धेरै समय गर्ने कामलाई देखाउँछ होला?",
			kid_label:
				"तल दिएको कुन तस्विरले तपाईंले शारीरिक शिक्षासम्बन्धी कक्षामा सबैभन्दा धेरै समय गर्ने कामलाई देखाउँछ होला?",
			adult_label:
				"    तल दिएको कुन तस्बिरले तपाईंको छोरा वा छोरीले शारीरिक शिक्षासम्बन्धी कक्षामा सबैभन्दा धेरै समय गर्ने काम देखाउँछ होला?",
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
			heading: "Pergunta 5",
			label:
				"Qual das opções de imagem a seguir corresponde ao que você faz na maior parte do tempo nas aulas de Educação Física?",
			kid_label:
				"Qual das opções de imagem a seguir corresponde ao que você faz na maior parte do tempo nas aulas de Educação Física?",
			adult_label:
				"Qual das opções de imagem a seguir corresponde ao que o(a) seu(sua) filho(a) faz na maior parte do tempo nas aulas de Educação Física?",
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
			heading: "คำถาม 5",
			label: "ภาพใดต่อไปนี้ แสดงสิ่งที่น้องทำเป็นส่วนใหญ่ในวิชาพลศึกษา?",
			kid_label: "ภาพใดต่อไปนี้ แสดงสิ่งที่น้องทำเป็นส่วนใหญ่ในวิชาพลศึกษา?",
			adult_label: "ภาพใดต่อไปนี้ แสดงสิ่งที่บุตรหลานของคุณทำเป็นส่วนใหญ่ในวิชาพลศึกษา?",
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
			heading: "Fråga 5",
			label: "Vilken av bilderna visar vad du gör mest av på idrottslektionen?",
			kid_label: "Vilken av bilderna visar vad du gör mest av på idrottslektionen?",
			adult_label: "Vilken av bilderna visar vad ditt barn gör mest av på idrottslektionen?",
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
			heading: "问题 5",
			label: "以下哪张图片符合你在体育课上大部分时间的情况？",
			kid_label: "以下哪张图片符合你在体育课上大部分时间的情况？",
			adult_label: "以下哪张图片符合您孩子在体育课上大部分时间的情况？",
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
			heading: "Pregunta 5",
			label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo en la clase de educación física?",
			kid_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo en la clase de educación física?",
			adult_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que hace la mayor parte del tiempo su hija o hijo en la clase de educación física?",
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
			heading: "Pregunta 5",
			label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo en la clase de educación física?",
			kid_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que haces la mayor parte del tiempo en la clase de educación física? ",
			adult_label:
				"¿Cuál de las siguientes imágenes se parece más a lo que hace la mayor parte del tiempo su hija o hijo en la clase de educación física?",
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
			heading: "Question 5",
			label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps dans les cours d'éducation physique?",
			kid_label:
				"Laquelle des photos suivantes ressemble à ce que tu fais la plupart du temps dans les cours d'éducation physique?",
			adult_label:
				"Laquelle des images suivantes ressemble à ce que ton enfant fait la plupart du temps dans les cours d'éducation physique?",
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

export default S1Q5;
