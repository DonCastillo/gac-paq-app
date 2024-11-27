import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q9: LangQuestionRadioPayloadInterface = {
	ident: "transportation_9",
	name: "Question 17c: On a normal day, how much time did you walk to places other than school or work?",
	column_name: "17.C Tran",
	audio_ident: "transportation_10",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17c - Walking",
			label: "On a normal day, how much time did you walk to places other than school or work?",
			kid_label: "On a normal day, how much time did you walk to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child walk to places other than school or work?",
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
			heading: "Pregunta 17c - Caminando",
			label:
				"En un día normal ¿Cuánto tiempo caminaste para llegar a lugares distintos a la escuela o trabajo?",
			kid_label:
				"En un día normal ¿Cuánto tiempo caminaste para llegar a lugares distintos a la escuela o trabajo?",
			adult_label:
				"En un día normal ¿Cuánto tiempo caminó su hija o hijo para llegar a lugares distintos a la escuela o trabajo?",
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
			heading: "Question 17c - Walking",
			label: "On a normal day, how much time did you walk to places other than school or work?",
			kid_label: "On a normal day, how much time did you walk to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child walk to places other than school or work?",
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
			heading: "Question 17c - Walking",
			label: "On a normal day, how much time did you walk to places other than school or work?",
			kid_label: "On a normal day, how much time did you walk to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child walk to places other than school or work?",
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
			heading: "Funso 17c - Kuyenda",
			label:
				"Pa tsiku, Zinakutengera nthawi yaitali bwanji kuyenda kupita malo ena kupatula ku sukukulu kapena ku ntchito?",
			kid_label:
				"Pa tsiku, Zinakutengera nthawi yaitali bwanji kuyenda kupita malo ena kupatula ku sukukulu kapena ku ntchito?",
			adult_label:
				"Pa tsiku, Zimamutengera nthawi yaitali bwanji mwana wanu kuyenda kupita malo ena kupatula ku sukukulu kapena ku ntchito?",
			choices: [
				{
					label: "Ma minutes 10 kapena osakwana",
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
					label: "Minutes kuposera 30 minutes",
					value: "More than 30 minutes",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १७c - चालणे",
			label: "तुम्हाला एकदा चालत जाण्यासाठी सामान्यपणे किती वेळ लागला?",
			kid_label: "तुम्हाला एकदा चालत जाण्यासाठी सामान्यपणे किती वेळ लागला?",
			adult_label: "तुमच्या मुलाला एकदा चालत जाण्यासाठी सामान्यपणे किती वेळ लागला?",
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
			heading: "प्रश्न १७c - हिँड्नु",
			label:
				"एक सामान्य दिन में, आप स्कूल या नौकरी के अलावा अन्य स्थानों पर जाने के लिए कितना समय पैदल गए?",
			kid_label:
				"एक सामान्य दिन में, आप स्कूल या नौकरी के अलावा अन्य स्थानों पर जाने के लिए कितना समय पैदल गए?",
			adult_label:
				"एक सामान्य दिन में, आपका बच्चा स्कूल या नौकरी के अलावा अन्य स्थानों पर जाने के लिए कितना समय पैदल गया?",
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
			heading: "Question 17c - Walking",
			label: "On a normal day, how much time did you walk to places other than school or work?",
			kid_label: "On a normal day, how much time did you walk to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child walk to places other than school or work?",
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
			heading: "سؤال [١٧ج] - المشي",
			label:
				"في الأيام العادية، كم من الوقت تقضي في المشي للنقل والذهاب إلى أماكن أخرى غير المدرسة أو العمل؟",
			kid_label:
				"في الأيام العادية، كم من الوقت تقضي في المشي للنقل والذهاب إلى أماكن أخرى غير المدرسة أو العمل؟",
			adult_label:
				"في الأيام العادية، كم من الوقت يقضي طفلك في المشي للنقل والذهاب إلى أماكن أخرى غير المدرسة أو العمل؟",
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
			heading: "प्रश्न १७c - हिँड्नु",
			label:
				"सामान्य दिनमा, तपाईंले विध्यालय वा काममा बाहेकका अन्य ठाउँमा जान कति समय व्यतित गर्नुहुन्छ?",
			kid_label:
				"सामान्य दिनमा, तपाईंले विध्यालय वा काममा बाहेकका अन्य ठाउँमा जान कति समय व्यतित गर्नुहुन्छ?",
			adult_label:
				"सामान्य दिनमा, तपाईंको छोरा वा छोरीले विध्यालय वा काममा बाहेकका अन्य ठाउँमा जान कति समय व्यतित गर्नुहुन्छ?",
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
			heading: "Questão 17c - Andando",
			label:
				"Em um dia normal, quanto tempo você leva caminhando para ir a outros lugares além da escola ou trabalho?",
			kid_label:
				"Em um dia normal, quanto tempo você leva caminhando para ir a outros lugares além da escola ou trabalho?",
			adult_label:
				"Em um dia normal, quanto tempo a criança ou adolescente que você é responsável leva caminhando para ir a outros lugares além da escola ou trabalho?",
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
			heading: "Fråga 17c - Gående",
			label:
				"Hur mycket tid spenderade du på att gå till andra ställen än skolan eller arbetet under en vanlig dag den senaste veckan?",
			kid_label:
				"Hur mycket tid spenderade du på att gå till andra ställen än skolan eller arbetet under en vanlig dag den senaste veckan?",
			adult_label:
				"Hur mycket tid spenderade ditt barn på att gå till andra ställen än skolan eller arbetet under en vanlig dag den senaste veckan?",
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
			heading: "คำถาม 17c - เดิน",
			label:
				"โดยปกติ น้องใช้เวลานานเท่าไหร่ในการเดิน เพื่อเดินทางไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงาน?",
			kid_label:
				"โดยปกติ น้องใช้เวลานานเท่าไหร่ในการเดิน เพื่อเดินทางไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงาน?",
			adult_label:
				"โดยปกติ บุตรหลานของคุณใช้เวลานานเท่าไหร่ในการเดิน เพื่อเดินทางไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงาน?",
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
			heading: "问题 17c - 步行",
			label: "在一个正常的日子里，您步行到学校或工作以外的地方通常需要多长时间？",
			kid_label: "在一个正常的日子里，您步行到学校或工作以外的地方通常需要多长时间？",
			adult_label: "在一个正常的日子里，您的孩子步行到学校或工作以外的其他地方通常需要多长时间？",
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
			heading: "Pregunta 17c - Caminando",
			label:
				"En un día normal ¿Cuánto tiempo caminaste para llegar a lugares distintos al trabajo o voluntariado, la escuela o el colegio?",
			kid_label:
				"En un día normal ¿Cuánto tiempo caminaste para llegar a lugares distintos al trabajo o voluntariado, la escuela o el colegio?",
			adult_label:
				"En un día normal, ¿cuánto tiempo caminó tu hijo o hija para llegar a lugares distintos al trabajo o voluntariado, escuela o colegio?",
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
			heading: "Pregunta 17c - Caminando",
			label:
				"En un día normal ¿Cuánto tiempo caminaste para llegar a lugares distintos al trabajo, la escuela o el colegio?",
			kid_label:
				"En un día normal ¿Cuánto tiempo caminaste para llegar a lugares distintos al trabajo, la escuela o el colegio?",
			adult_label:
				"En un día normal, ¿cuánto tiempo caminó tu hijo o hija para llegar a lugares distintos al trabajo, escuela o colegio?",
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
			heading: "Question 17c - Marche",
			label:
				" Lors d'une journée normale, combien de temps as-tu marché pour aller à des endroits autres que l'école ou le travail? ",
			kid_label:
				" Lors d'une journée normale, combien de temps as-tu marché pour aller à des endroits autres que l'école ou le travail? ",
			adult_label:
				"Lors d'une journée normale, combien de temps ton enfant a-t-il (elle) marché pour aller à des endroits autres que l'école ou le travail?",
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

export default S4Q9;
