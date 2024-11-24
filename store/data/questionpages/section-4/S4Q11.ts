import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q11: LangQuestionRadioPayloadInterface = {
	ident: "transportation_11",
	name: "Question 17c: On a normal day, how much time did you wheel to places other than school or work?",
	column_name: "17.E Tran",
	audio_ident: "transportation_11",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17c - Wheeling",
			label: "On a normal day, how much time did you wheel to places other than school or work?",
			kid_label:
				"On a normal day, how much time did you wheel to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child wheel to places other than school or work?",
			choices: [
				{
					label: "10 minutes or less",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					label: "More than 30 minutes",
					value: "More than 30 minutes",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 17c - En ruedas",
			label:
				"En un día normal ¿Cuánto tiempo te desplazaste sobre ruedas para llegar a lugares distintos a la escuela o trabajo?",
			kid_label:
				"En un día normal ¿Cuánto tiempo te desplazaste sobre ruedas para llegar a lugares distintos a la escuela o trabajo?",
			adult_label:
				"En un día normal ¿Cuánto tiempo se desplazó sobre ruedas su hija o hijo para llegar a lugares distintos a la escuela o trabajo?",
			choices: [
				{
					label: "10 minutos o menos",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutos",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutos",
					value: "21 - 30 minutes",
				},
				{
					label: "Más de 30 minutos",
					value: "More than 30 minutes",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 17c - Wheeling",
			label: "On a normal day, how much time did you wheel to places other than school or work?",
			kid_label:
				"On a normal day, how much time did you wheel to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child wheel to places other than school or work?",
			choices: [
				{
					label: "10 minutes or less",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					label: "More than 30 minutes",
					value: "More than 30 minutes",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 17c - Wheeling",
			label: "On a normal day, how much time did you wheel to places other than school or work?",
			kid_label:
				"On a normal day, how much time did you wheel to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child wheel to places other than school or work?",
			choices: [
				{
					label: "10 minutes or less",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					label: "More than 30 minutes",
					value: "More than 30 minutes",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 17c - Kukwera njinga",
			label:
				"Pa tsiku, Zinakutengera nthawi yaitali bwanji kupalasa njinga kupita malo ena kupatula ku sukukulu kapena kuntchito?",
			kid_label:
				"Pa tsiku, Zinakutengera nthawi yaitali bwanji kupalasa njinga kupita malo ena kupatula ku sukukulu kapena kuntchito?",
			adult_label:
				"Pa tsiku, Zimamutengera nthawi yaitali bwanji mwana wanu kupalasa njinga kupita malo ena kupatula ku sukukulu kapena kuntchito?",
			choices: [
				{
					label: "ma minutes 10 kapena osakwana",
					value: "10 minutes or less",
				},
				{
					label: "Pakati pa 10 mpaka 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					label: "Pakati pa 21 mpaka 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					label: "minutes kuposera 30 minutes",
					value: "More than 30 minutes",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १७c - चाक फिरवणे",
			label: "तुम्हाला एकदा चाकांची साधने वापरून जाण्यासाठी सामान्यपणे किती वेळ लागला?",
			kid_label: "तुम्हाला एकदा चाकांची साधने वापरून जाण्यासाठी सामान्यपणे किती वेळ लागला?",
			adult_label: "तुमच्या मुलाला एकदा चाकांची साधने वापरून जाण्यासाठी सामान्यपणे किती वेळ लागला?",
			choices: [
				{
					label: "१० मिनिटे किंवा त्यापेक्षा कमी",
					value: "10 minutes or less",
				},
				{
					label: "११-२० मिनिटे",
					value: "11 - 20 minutes",
				},
				{
					label: "२१-३० मिनिटे",
					value: "21 - 30 minutes",
				},
				{
					label: "३० मिनिटांपेक्षा अधिक",
					value: "More than 30 minutes",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १७c - व्हीलिंग",
			label:
				"एक सामान्य दिन में, आप स्कूल या नौकरी के अलावा अन्य स्थानों पर जाने के लिए कितना समय व्हीलिंग करके गए?",
			kid_label:
				"एक सामान्य दिन में, आप स्कूल या नौकरी के अलावा अन्य स्थानों पर जाने के लिए कितना समय व्हीलिंग करके गए?",
			adult_label:
				"एक सामान्य दिन में, आपके बच्चे ने स्कूल या नौकरी के अलावा अन्य स्थानों पर जाने के लिए कितना समय व्हीलिंग करके बिताया?",
			choices: [
				{
					label: "10 मिनट या उससे कम",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 मिनट",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 मिनट",
					value: "21 - 30 minutes",
				},
				{
					label: "30 मिनट से अधिक",
					value: "More than 30 minutes",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 17c - Wheeling",
			label: "On a normal day, how much time did you wheel to places other than school or work?",
			kid_label:
				"On a normal day, how much time did you wheel to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child wheel to places other than school or work?",
			choices: [
				{
					label: "10 minutes or less",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					label: "More than 30 minutes",
					value: "More than 30 minutes",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [١٧ج] - العجلات",
			label:
				"في الأيام العادية، كم من الوقت تقضي في استخدام العجلات للنقل والذهاب إلى أماكن أخرى غير المدرسة أو العمل؟",
			kid_label:
				"في الأيام العادية، كم من الوقت تقضي في استخدام العجلات للنقل والذهاب إلى أماكن أخرى غير المدرسة أو العمل؟",
			adult_label:
				"في الأيام العادية، كم من الوقت يقضي طفلك في استخدام العجلات للنقل والذهاب إلى أماكن أخرى غير المدرسة أو العمل؟",
			choices: [
				{
					label: "‌١٠ دقائق أو أقل",
					value: "10 minutes or less",
				},
				{
					label: "‌ما بين ١١ و٢٠ دقيقة",
					value: "11 - 20 minutes",
				},
				{
					label: "‌ما بين ٢١ و٣٠ دقيقة",
					value: "21 - 30 minutes",
				},
				{
					label: "‌أكثر من ٣٠ دقيقة",
					value: "More than 30 minutes",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १७c - गाडी",
			label:
				"सामान्य दिनमा, तपाईंले विध्यालय वा काममा बाहेकका अन्य ठाउँमा जान कति समय साइकल चलाउनुहुन्छ?",
			kid_label:
				"सामान्य दिनमा, तपाईंले विध्यालय वा काममा बाहेकका अन्य ठाउँमा जान कति समय साइकल चलाउनुहुन्छ?",
			adult_label:
				"सामान्य दिनमा, तपाईंको छोरा वा छोरीले विध्यालय वा काममा बाहेकका अन्य ठाउँमा जान कति समय साइकल चलाउनुहुन्छ?",
			choices: [
				{
					label: "१० मिनेट वा सोभन्दा कम",
					value: "10 minutes or less",
				},
				{
					label: "११-२० मिनेट",
					value: "11 - 20 minutes",
				},
				{
					label: "२१-३० मिनेट",
					value: "21 - 30 minutes",
				},
				{
					label: "३० मिनेटभन्दा बढी",
					value: "More than 30 minutes",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 17c - Bicicleta",
			label:
				"Em um dia normal, quanto tempo você leva de bicicleta ou outro meio de transporte ativo de rodas para ir a outros lugares além da escola ou trabalho?",
			kid_label:
				"Em um dia normal, quanto tempo você leva de bicicleta ou outro meio de transporte ativo de rodas para ir a outros lugares além da escola ou trabalho?",
			adult_label:
				"Em um dia normal, quanto tempo a criança ou adolescente que você é responsável leva de bicicleta ou outro meio de transporte ativo de rodas para ir a outros lugares além da escola ou trabalho?",
			choices: [
				{
					label: "10 minutos ou menos",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutos",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutos",
					value: "21 - 30 minutes",
				},
				{
					label: "Mais de 30 minutos",
					value: "More than 30 minutes",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 17c - Cyklade",
			label:
				"Hur mycket tid spenderade du på att cykla till andra ställen än skolan eller arbetet under en vanlig dag den senaste veckan?",
			kid_label:
				"Hur mycket tid spenderade du på att cykla till andra ställen än skolan eller arbetet under en vanlig dag den senaste veckan?",
			adult_label:
				"Hur mycket tid spenderade ditt barn på att cykla till andra ställen än skolan eller arbetet under en vanlig dag den senaste veckan?",
			choices: [
				{
					label: "10 minuter eller mindre",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minuter",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minuter",
					value: "21 - 30 minutes",
				},
				{
					label: "Mer än 30 minuter",
					value: "More than 30 minutes",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 17c - ล้อ",
			label:
				"ในวันปกติ คุณใช้เวลาเท่าไหร่ในการใช้รถที่มีล้อไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงาน?",
			kid_label:
				"ในวันปกติ คุณใช้เวลาเท่าไหร่ในการใช้รถที่มีล้อไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงาน?",
			adult_label:
				"ในวันปกติ บุตรหลานของคุณใช้เวลาเท่าไหร่ในการใช้รถที่มีล้อไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงาน?",
			choices: [
				{
					label: "10 นาทีหรือน้อยกว่า",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 นาที",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 นาที",
					value: "21 - 30 minutes",
				},
				{
					label: "มากกว่า 30 นาที",
					value: "More than 30 minutes",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 17c - 骑车",
			label: "在平常的日子里，除了上学或工作，您骑自行车去其他地方要花多少时间？",
			kid_label: "在平常的日子里，除了上学或工作，您骑自行车去其他地方要花多少时间？",
			adult_label: "在平常的日子里，除了上学或工作，您的孩子骑自行车去其他地方要花多少时间？",
			choices: [
				{
					label: "少于或等于10分钟 ",
					value: "10 minutes or less",
				},
				{
					label: "11-20分钟",
					value: "11 - 20 minutes",
				},
				{
					label: "21-30分钟 ",
					value: "21 - 30 minutes",
				},
				{
					label: "30分钟以上",
					value: "More than 30 minutes",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 17c - Sobre ruedas",
			label:
				"En un día normal, ¿cuánto tiempo te desplazaste sobre ruedas para llegar a lugares distintos al trabajo o voluntariado, la escuela o el colegio?",
			kid_label:
				"En un día normal, ¿cuánto tiempo te desplazaste sobre ruedas para llegar a lugares distintos al trabajo o voluntariado, la escuela o el colegio?",
			adult_label:
				"En un día normal, ¿cuánto tiempo su hijo o hija se desplazó sobre ruedas para llegar a lugares distintos al trabajo o voluntariado, escuela o colegio?",
			choices: [
				{
					label: "10 minutos o menos",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutos",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutos",
					value: "21 - 30 minutes",
				},
				{
					label: "Más de 30 minutos",
					value: "More than 30 minutes",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 17c - En ruedas",
			label:
				"En un día normal, ¿cuánto tiempo te desplazaste sobre ruedas para llegar a lugares distintos al trabajo, la escuela o el colegio?",
			kid_label:
				"En un día normal, ¿cuánto tiempo te desplazaste sobre ruedas para llegar a lugares distintos al trabajo, la escuela o el colegio?",
			adult_label:
				"En un día normal, ¿cuánto tiempo su hijo o hija se desplazó sobre ruedas a lugares distintos de la escuela o el trabajo?",
			choices: [
				{
					label: "10 minutos o menos",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutos",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutos",
					value: "21 - 30 minutes",
				},
				{
					label: "Más de 30 minutos",
					value: "More than 30 minutes",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17c - Rouler",
			label:
				"Lors d'une journée normale, combien de temps as-tu roulé pour aller à des endroits autres que l'école ou le travail? ",
			kid_label:
				"Lors d'une journée normale, combien de temps as-tu roulé pour aller à des endroits autres que l'école ou le travail? ",
			adult_label:
				"Lors d'une journée normale, combien de temps ton enfant a-t-il (elle) roulé pour aller à des endroits autres que l'école ou le travail?",
			choices: [
				{
					label: "10 minutes ou moins",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minutes",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minutes",
					value: "21 - 30 minutes",
				},
				{
					label: "Plus de 30 minutes",
					value: "More than 30 minutes",
				},
			],
		},
	},
};

export default S4Q11;
