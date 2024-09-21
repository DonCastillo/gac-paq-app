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
			heading: "Pergunta 17c - Bicicleta",
			label:
				"Em um dia normal, quanto tempo você gasta andando de bicicleta ou usando outro meio de transporte ativo para ir a outros lugares além da escola ou trabalho?",
			kid_label:
				"Em um dia normal, quanto tempo você gasta andando de bicicleta ou usando outro meio de transporte ativo para ir a outros lugares além da escola ou trabalho?",
			adult_label:
				"Em um dia normal, quanto tempo o(a) seu(sua) filho(a) gasta andando de bicicleta ou usando outro meio de transporte ativo para ir a outros lugares além da escola ou trabalho?",
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
			heading: "Pregunta 17c - En ruedas",
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
