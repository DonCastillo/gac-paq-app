import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q2: LangQuestionRadioPayloadInterface = {
	ident: "transportation_2",
	name: "Question 15b: How many days did you use this mode in the past week?",
	type: Screen.SingleQuestion,
	column_name: "15.B Tran",
	audio_ident: "transportation_2",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 15b",
			label: "How many days did you use this mode in the past week?",
			kid_label: "How many days did you use this mode in the past week?",
			adult_label: "How many days did your child use this mode in the past week?",
			choices: [
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 15b",
			label: "¿Cuántos días usaste este modo en la última semana?",
			kid_label: "¿Cuántos días usaste este modo en la última semana?",
			adult_label: "¿Cuántos días uso su hija o hijo este modo en la última semana?",
			choices: [
				{
					label: "1 día",
					value: "1",
				},
				{
					label: "2 días",
					value: "2",
				},
				{
					label: "3 días",
					value: "3",
				},
				{
					label: "4 días",
					value: "4",
				},
				{
					label: "5 días",
					value: "5",
				},
				{
					label: "6 días",
					value: "6",
				},
				{
					label: "7 días",
					value: "7",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 15b",
			label: "How many days did you use this mode in the past week?",
			kid_label: "How many days did you use this mode in the past week?",
			adult_label: "How many days did your child use this mode in the past week?",
			choices: [
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 15b",
			label: "How many days did you use this mode in the past week?",
			kid_label: "How many days did you use this mode in the past week?",
			adult_label: "How many days did your child use this mode in the past week?",
			choices: [
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 15b",
			label: "Ndi masiku angati omwe unagwiritsa ntchito mayendedwe oterewa m’sabata yapitayi?",
			kid_label: "Ndi masiku angati omwe unagwiritsa ntchito mayendedwe oterewa m’sabata yapitayi?",
			adult_label:
				"Ndi masiku angati omwe mwana wanu anagwiritsa ntchito mayendedwe oterewa sabata yapitayi?",
			choices: [
				{
					label: "Tsiku limodzi",
					value: "1",
				},
				{
					label: "Masiku awiri",
					value: "2",
				},
				{
					label: "Masiku atatu",
					value: "3",
				},
				{
					label: "Masiku 4",
					value: "4",
				},
				{
					label: "Masiku 5",
					value: "5",
				},
				{
					label: "Masiku 6",
					value: "6",
				},
				{
					label: "Masiku 7",
					value: "7",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १५b",
			label: "तुम्ही गेल्या आठवड्यात या पद्धतीचा वापर किती वेळा केला?",
			kid_label: "तुम्ही गेल्या आठवड्यात या पद्धतीचा वापर किती वेळा केला?",
			adult_label: "तुमच्या मुलाने गेल्या आठवड्यात या पद्धतीचा वापर किती वेळा केला?",
			choices: [
				{
					label: "१ दिवस",
					value: "1",
				},
				{
					label: "२ दिवस",
					value: "2",
				},
				{
					label: "३ दिवस",
					value: "3",
				},
				{
					label: "४ दिवस",
					value: "4",
				},
				{
					label: "५ दिवस",
					value: "5",
				},
				{
					label: "६ दिवस",
					value: "6",
				},
				{
					label: "७ दिवस",
					value: "7",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १५b",
			label: "पिछले सप्ताह आपने कितने दिन परिवहन के इस साधन का उपयोग किया?",
			kid_label: "पिछले सप्ताह आपने कितने दिन परिवहन के इस साधन का उपयोग किया?",
			adult_label: "आपके बच्चे ने पिछले सप्ताह में कितने दिन परिवहन के इस साधन का उपयोग किया?",
			choices: [
				{
					label: "1 दिन",
					value: "1",
				},
				{
					label: "2 दिन",
					value: "2",
				},
				{
					label: "3 दिन",
					value: "3",
				},
				{
					label: "4 दिन",
					value: "4",
				},
				{
					label: "5 दिन",
					value: "5",
				},
				{
					label: "6 दिन",
					value: "6",
				},
				{
					label: "7 दिन",
					value: "7",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 15b",
			label: "How many days did you use this mode in the past week?",
			kid_label: "How many days did you use this mode in the past week?",
			adult_label: "How many days did your child use this mode in the past week?",
			choices: [
				{
					label: "1 day",
					value: "1",
				},
				{
					label: "2 days",
					value: "2",
				},
				{
					label: "3 days",
					value: "3",
				},
				{
					label: "4 days",
					value: "4",
				},
				{
					label: "5 days",
					value: "5",
				},
				{
					label: "6 days",
					value: "6",
				},
				{
					label: "7 days",
					value: "7",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [١٥ب]",
			label: "كم عدد الأيام التي استخدمت فيها هذه الوسيلة خلال الأسبوع الماضي؟",
			kid_label: "كم عدد الأيام التي استخدمت فيها هذه الوسيلة خلال الأسبوع الماضي؟",
			adult_label: "كم عدد الأيام التي استخدم فيها طفلك هذه الوسيلة خلال الأسبوع الماضي؟",
			choices: [
				{
					label: "يوم واحد (١)",
					value: "1",
				},
				{
					label: "يومين (٢)",
					value: "2",
				},
				{
					label: "ثلاثة أيام (٣)",
					value: "3",
				},
				{
					label: "أربعة أيام (٤)",
					value: "4",
				},
				{
					label: "خمسة أيام (٥)",
					value: "5",
				},
				{
					label: "ستة أيام (٦)",
					value: "6",
				},
				{
					label: "سبعة أيام (٧)",
					value: "7",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १५b",
			label: "पछिल्लो (गएको/ बितेको) हप्तामा, तपाईंले यो माध्यम कति दिन प्रयोग गर्नुभयो?",
			kid_label: "पछिल्लो (गएको/ बितेको) हप्तामा, तपाईंले यो माध्यम कति दिन प्रयोग गर्नुभयो?",
			adult_label:
				"पछिल्लो (गएको/ बितेको) हप्तामा, तपाईंको छोरा वा छोरीले यो माध्यम कति पटक प्रयोग गर्नुभयो?",
			choices: [
				{
					label: "१ दिन",
					value: "1",
				},
				{
					label: "२ दिन",
					value: "2",
				},
				{
					label: "३ दिन",
					value: "3",
				},
				{
					label: "४ दिन",
					value: "4",
				},
				{
					label: "५ दिन",
					value: "5",
				},
				{
					label: "६ दिन",
					value: "6",
				},
				{
					label: "७ दिन",
					value: "7",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 15b",
			label: "Na última semana, quantos dias você usou este meio de transporte para ir à escola?",
			kid_label:
				"Na última semana, quantos dias você usou este meio de transporte para ir à escola?",
			adult_label:
				"Na última semana, quantos dias a criança ou adolescente que você é responsável usou este meio de transporte para ir à escola?",
			choices: [
				{
					label: "1 dia",
					value: "1",
				},
				{
					label: "2 dias",
					value: "2",
				},
				{
					label: "3 dias",
					value: "3",
				},
				{
					label: "4 dias",
					value: "4",
				},
				{
					label: "5 dias",
					value: "5",
				},
				{
					label: "6 dias",
					value: "6",
				},
				{
					label: "7 dias",
					value: "7",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 15b",
			label: "Hur många dagar tog du dig till skolan på detta sätt under den senaste veckan?",
			kid_label: "Hur många dagar tog du dig till skolan på detta sätt under den senaste veckan?",
			adult_label:
				"Hur många dagar tog sig ditt barn till skolan på detta sätt den senaste veckan?",
			choices: [
				{
					label: "En dag",
					value: "1",
				},
				{
					label: "2 dagar",
					value: "2",
				},
				{
					label: "3 dagar",
					value: "3",
				},
				{
					label: "4 dagar",
					value: "4",
				},
				{
					label: "5 dagar",
					value: "5",
				},
				{
					label: "6 dagar",
					value: "6",
				},
				{
					label: "7 dagar",
					value: "7",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 15b",
			label: "สัปดาห์ที่แล้ว น้องใช้วิธีการเดินทางดังกล่าวนี้กี่วัน?",
			kid_label: "สัปดาห์ที่แล้ว น้องใช้วิธีการเดินทางดังกล่าวนี้กี่วัน?",
			adult_label: "สัปดาห์ที่แล้ว บุตรหลานของคุณใช้วิธีการเดินทางดังกล่าวนี้กี่วัน?",
			choices: [
				{
					label: "1 วัน",
					value: "1",
				},
				{
					label: "2 วัน",
					value: "2",
				},
				{
					label: "3 วัน",
					value: "3",
				},
				{
					label: "4 วัน",
					value: "4",
				},
				{
					label: "5 วัน",
					value: "5",
				},
				{
					label: "6 วัน",
					value: "6",
				},
				{
					label: "7 วัน",
					value: "7",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 15b",
			label: "在过去一周里，你有多少天采用上述方式去学校?",
			kid_label: "在过去一周里，你有多少天采用上述方式去学校?",
			adult_label: "在过去一周里，您的孩子有多少天采用上述方式去学校?",
			choices: [
				{
					label: "1 天",
					value: "1",
				},
				{
					label: "2 天",
					value: "2",
				},
				{
					label: "3 天",
					value: "3",
				},
				{
					label: "4 天",
					value: "4",
				},
				{
					label: "5 天",
					value: "5",
				},
				{
					label: "6 天",
					value: "6",
				},
				{
					label: "7 天",
					value: "7",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 15b",
			label: "¿Cuántos días usaste este modo de transporte durante la semana pasada?",
			kid_label: "¿Cuántos días usaste este modo de transporte durante la semana pasada?",
			adult_label: "¿Cuántos días usó su hija o hijo este modo de transporte en la última semana?",
			choices: [
				{
					label: "1 día",
					value: "1",
				},
				{
					label: "2 días",
					value: "2",
				},
				{
					label: "3 días",
					value: "3",
				},
				{
					label: "4 días",
					value: "4",
				},
				{
					label: "5 días",
					value: "5",
				},
				{
					label: "6 días",
					value: "6",
				},
				{
					label: "7 días",
					value: "7",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 15b",
			label: "¿Cuántos días usaste este modo de transporte en la última semana?",
			kid_label: "¿Cuántos días usaste este modo de transporte en la última semana?",
			adult_label: "¿Cuántos días usó su hija o hijo este modo de transporte en la última semana?",
			choices: [
				{
					label: "1 día",
					value: "1",
				},
				{
					label: "2 días",
					value: "2",
				},
				{
					label: "3 días",
					value: "3",
				},
				{
					label: "4 días",
					value: "4",
				},
				{
					label: "5 días",
					value: "5",
				},
				{
					label: "6 días",
					value: "6",
				},
				{
					label: "7 días",
					value: "7",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 15b",
			label:
				"Combien de jours as-tu utilisé ce moyen de transport au cours de la dernière semaine?",
			kid_label:
				"Combien de jours as-tu utilisé ce moyen de transport au cours de la dernière semaine?",
			adult_label:
				"Combien de jours ton enfant a-t-il (elle) utilisé ce moyen de transport au cours de la dernière semaine?",
			choices: [
				{
					label: "1 jour",
					value: "1",
				},
				{
					label: "2 jours",
					value: "2",
				},
				{
					label: "3 jours",
					value: "3",
				},
				{
					label: "4 jours",
					value: "4",
				},
				{
					label: "5 jours",
					value: "5",
				},
				{
					label: "6 jours",
					value: "6",
				},
				{
					label: "7 jours",
					value: "7",
				},
			],
		},
	},
};

export default S4Q2;
