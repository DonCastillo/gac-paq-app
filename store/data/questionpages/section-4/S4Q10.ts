import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q10: LangQuestionRadioPayloadInterface = {
	ident: "transportation_10",
	name: "Question 17b: How many days did you wheel to places other than school or work in the past week?",
	column_name: "17.D Tran",
	audio_ident: "transportation_9",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17b - Wheeling",
			label: "How many days did you wheel to places other than school or work in the past week?",
			kid_label:
				"How many days did you wheel to places other than school or work in the past week?",
			adult_label:
				"How many days did your child wheel to places other than school or work in the past week?",
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
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 17b - Wheeling",
			label: "How many days did you wheel to places other than school or work in the past week?",
			kid_label:
				"How many days did you wheel to places other than school or work in the past week?",
			adult_label:
				"How many days did your child wheel to places other than school or work in the past week?",
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
			heading: "السؤال 17b - العجلات",
			label:
				"في الأيام العادية، كم من الوقت تقضي في استخدام العجلات للنقل والذهاب إلى أماكن أخرى غير المدرسة أو العمل؟",
			kid_label:
				"في الأيام العادية، كم من الوقت تقضي في استخدام العجلات للنقل والذهاب إلى أماكن أخرى غير المدرسة أو العمل؟",
			adult_label:
				"في الأيام العادية، كم من الوقت يقضي طفلك في استخدام العجلات للنقل والذهاب إلى أماكن أخرى غير المدرسة أو العمل؟",
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
					label: "ستة أيام  (٦)",
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
			heading: "प्रश्न १७b - गाडी",
			label:
				"पछिल्लो हप्तामा, तपाईंले विध्यालय वा कामबाहेकका अन्य ठाउँमा जान कति दिन साइकल चलाउनु भयो?",
			kid_label:
				"पछिल्लो हप्तामा, तपाईंले विध्यालय वा कामबाहेकका अन्य ठाउँमा जान कति दिन साइकल चलाउनु भयो?",
			adult_label:
				"पछिल्लो हप्तामा, तपाईंको छोरा वा छोरीले विध्यालय वा कामबाहेकका अन्य ठाउँमा जान कति दिन साइकल चलाउनु भयो?",
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
			heading: "Questão 17b - Bicicleta",
			label:
				"Na última semana, quantos dias você usou uma bicicleta ou outro meio de transporte ativo para ir a lugares além da escola ou do trabalho?",
			kid_label:
				"Na última semana, quantos dias você usou uma bicicleta ou outro meio de transporte ativo para ir a lugares além da escola ou do trabalho?",
			adult_label:
				"Na última semana, quantos dias o(a) seu(sua) filho(a) usou uma bicicleta ou outro meio de transporte ativo para ir a lugares além da escola ou do trabalho?",
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
			heading: "Fråga 17b - Cyklade",
			label:
				"Hur många dagar cyklade (eller åkte rullstol, e-cykel, sparkcykel eller rollerblades) du till andra platser än skolan eller arbetet under den senaste veckan?",
			kid_label:
				"Hur många dagar cyklade (eller åkte rullstol, e-cykel, sparkcykel eller rollerblades) du till andra platser än skolan eller arbetet under den senaste veckan?",
			adult_label:
				"Hur många dagar cyklade (eller åkte rullstol, e-cykel, sparkcykel eller rollerblades) ditt barn till andra platser än skolan eller arbetet under sen senaste veckan?",
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
			heading: "คำถาม 17b - ล้อ",
			label: "สัปดาห์ที่แล้ว คุณใช้รถที่มีล้อไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงานกี่วัน?",
			kid_label:
				"สัปดาห์ที่แล้ว คุณใช้รถที่มีล้อไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงานกี่วัน?",
			adult_label:
				"สัปดาห์ที่แล้ว บุตรหลานของคุณใช้รถที่มีล้อไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงานกี่วัน?",
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
			heading: "问题 17b - 骑车",
			label: "在过去一周里，除了上学或工作，您有多少天骑自行车去其他地方？",
			kid_label: "在过去一周里，除了上学或工作，您有多少天骑自行车去其他地方？",
			adult_label: "在过去一周里，除了上学或工作，您的孩子有多少天骑自行车去其他地方？",
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
			heading: "Pregunta 17b - En ruedas",
			label:
				"¿Cuántos días te desplazaste sobre ruedas para llegar a lugares distintos al trabajo o voluntariado, escuela o colegio durante la semana pasada?",
			kid_label:
				"¿Cuántos días te desplazaste sobre ruedas para llegar a lugares distintos al trabajo o voluntariado, escuela o colegio durante la semana pasada?",
			adult_label:
				"¿Cuántos días su hija o hijo se desplazó sobre ruedas para llegar a lugares distintos al trabajo o voluntariado, escuela o colegio la semana pasada?",
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
			heading: "Pregunta 17b - En ruedas",
			label:
				"¿Cuántos días te desplazaste sobre ruedas para llegar a lugares distintos al trabajo, escuela o colegio en la última semana?",
			kid_label:
				"¿Cuántos días te desplazaste sobre ruedas para llegar a lugares distintos al trabajo, escuela o colegio en la última semana?",
			adult_label:
				"¿Cuántos días su hija o hijo se desplazó sobre ruedas para llegar a lugares distintos al trabajo, escuela o colegio en la última semana?",
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
			heading: "Question 17b - Rouler",
			label:
				"Combien de jours as-tu roulé pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
			kid_label:
				"Combien de jours as-tu roulé pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
			adult_label:
				"Combien de jours ton enfant a-t-il (elle) roulé pour aller à des endroits autres que l'école ou le travail durant la dernière semaine?",
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

export default S4Q10;
