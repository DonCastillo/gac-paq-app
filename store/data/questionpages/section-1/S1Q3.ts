import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionSliderPayloadInterface } from "interface/payload.type";

const S1Q3: LangQuestionSliderPayloadInterface = {
	ident: "school_3",
	name: "Question 3: How many physical education classes did you have in the past week?",
	column_name: "03.0 Scho",
	audio_ident: "school_3",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionSlider,
			heading: "Question 3",
			label: "How many physical education classes did you have in the past week?",
			kid_label: "How many physical education classes did you have in the past week?",
			adult_label: "How many physical education classes did your child have in the past week?",
			max_value: 7,
		},
		"es-CO": {
			type: Question.QuestionSlider,
			heading: "Pregunta 3",
			label: "¿Cuántas clases de educación física tuviste la semana pasada?",
			kid_label: "¿Cuántas clases de educación física tuviste la semana pasada?",
			adult_label: "¿Cuántas clases de educación física tuvo su hija o hijo la semana pasada?",
			max_value: 7,
		},
		"en-MW": {
			type: Question.QuestionSlider,
			heading: "Question 3",
			label: "How many physical education classes did you have in the past week?",
			kid_label: "How many physical education classes did you have in the past week?",
			adult_label: "How many physical education classes did your child have in the past week?",
			max_value: 7,
		},
		"ch-MW": {
			type: Question.QuestionSlider,
			heading: "Funso 3",
			label:
				"Ndi makalasi angati a maphunziro olimbitsa thupi omwe unakhala nawo m’sabata yapitayi?",
			kid_label:
				"Ndi makalasi angati a maphunziro olimbitsa thupi omwe unakhala nawo m’sabata yapitayi?",
			adult_label: "Kodi mwana wanu anapita kusukulu masiku angati m’sabata yapitayi?",
			max_value: 7,
		},
		"ma-IN": {
			type: Question.QuestionSlider,
			heading: "प्रश्न ३",
			label: "तुमचे गेल्या आठवड्यात शारीरिक शिक्षणाचे किती वर्ग झाले?",
			kid_label: "तुमचे गेल्या आठवड्यात शारीरिक शिक्षणाचे किती वर्ग झाले?",
			adult_label: "गेल्या आठवड्यात तुमचे मूल शारीरिक शिक्षणाच्या किती वर्गांना उपस्थित होते?",
			max_value: 7,
		},
		"hi-IN": {
			type: Question.QuestionSlider,
			heading: "प्रश्न ३",
			label: "पिछले सफ्ताह आपने कितने पीटी की क्लासेस में भाग लिया?",
			kid_label: "पिछले सफ्ताह आपने कितने पीटी की क्लासेस में भाग लिया?",
			adult_label: "पिछले सप्ताह आपके बच्चे ने कितनी पीटी की क्लास में भाग लिया?",
			max_value: 7,
		},
		"en-AE": {
			type: Question.QuestionSlider,
			heading: "Question 3",
			label: "How many physical education classes did you have in the past week?",
			kid_label: "How many physical education classes did you have in the past week?",
			adult_label: "How many physical education classes did your child have in the past week?",
			max_value: 7,
		},
		"ar-AE": {
			type: Question.QuestionSlider,
			heading: "السؤال 3",
			label: "كم عدد حصص التربية البدنية التي حضرتها خلال الأسبوع الماضي؟",
			kid_label: "كم عدد حصص التربية البدنية التي حضرتها خلال الأسبوع الماضي؟",
			adult_label: "كم عدد حصص التربية البدنية التي حضرها خلال الأسبوع الماضي؟",
			max_value: 7,
		},
		"ne-NP": {
			type: Question.QuestionSlider,
			heading: "प्रश्न ३",
			label: "पछिल्लो (गएको/बितेको) हप्तामा तपाईंले शारीरिक शिक्षासम्बन्धी कतिओटा कक्षा लिनुभयो?",
			kid_label:
				"पछिल्लो (गएको/बितेको) हप्तामा तपाईंले शारीरिक शिक्षासम्बन्धी कतिओटा कक्षा लिनुभयो?",
			adult_label:
				"पछिल्लो (गएको/बितेको) हप्तामा तपाईंको छोरा वा छोरीले शारीरिक शिक्षासम्बन्धी कतिओटा कक्षा लिनुभयो?",
			max_value: 7,
		},
		"pt-BR": {
			type: Question.QuestionSlider,
			heading: "Questão 3",
			label: "Na última semana, quantas aulas de Educação Física você teve?",
			kid_label: "Na última semana, quantas aulas de Educação Física você teve?",
			adult_label:
				"Na última semana, a criança ou adolescente que você é responsável teve quantas aulas de Educação Física?",
			max_value: 7,
		},
		"sv-SE": {
			type: Question.QuestionSlider,
			heading: "Fråga 3",
			label: "Hur många idrottslektioner har du haft den senaste veckan?",
			kid_label: "Hur många idrottslektioner har du haft den senaste veckan?",
			adult_label: "Hur många idrottslektioner har ditt barn haft den senaste veckan?",
			max_value: 7,
		},
		"th-TH": {
			type: Question.QuestionSlider,
			heading: "คำถาม 3",
			label: "สัปดาห์ที่แล้ว น้องมีเรียนวิชาพลศึกษาทั้งหมดกี่คาบ?",
			kid_label: "สัปดาห์ที่แล้ว น้องมีเรียนวิชาพลศึกษาทั้งหมดกี่คาบ?",
			adult_label: "สัปดาห์ที่แล้ว บุตรหลานของคุณมีเรียนวิชาพลศึกษาทั้งหมดกี่คาบ?",
			max_value: 7,
		},
		"zh-CN": {
			type: Question.QuestionSlider,
			heading: "问题 3",
			label: "在过去一周里，你上了几节体育课？",
			kid_label: "在过去一周里，你上了几节体育课？",
			adult_label: "在过去一周里，您的孩子上了几节体育课？",
			max_value: 7,
		},
		"es-ES": {
			type: Question.QuestionSlider,
			heading: "Pregunta 3",
			label: "¿Cuántas clases de educación física tuviste durante la semana pasada?",
			kid_label: "¿Cuántas clases de educación física tuviste durante la semana pasada?",
			adult_label: "¿Cuántas clases de educación física tuvo su hija o hijo la semana pasada?",
			max_value: 7,
		},
		"es-MX": {
			type: Question.QuestionSlider,
			heading: "Pregunta 3",
			label: "¿Cuántas clases de educación física tuviste en la semana pasada?",
			kid_label: "¿Cuántas clases de educación física tuviste en la semana pasada?",
			adult_label: "¿Cuántas clases de educación física tuvo su hija o hijo la semana pasada?",
			max_value: 7,
		},
		"fr-CA": {
			type: Question.QuestionSlider,
			heading: "Question 3",
			label: "Combien as-tu eu de cours d'éducation physique pendant la dernière semaine?",
			kid_label: "Combien as-tu eu de cours d'éducation physique pendant la dernière semaine?",
			adult_label:
				"Combien ton enfant a-t-il (elle) eu de cours d'éducation physique pendant la dernière semaine?",
			max_value: 7,
		},
	},
};

export default S1Q3;
