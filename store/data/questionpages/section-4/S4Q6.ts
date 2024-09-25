import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q6: LangQuestionRadioPayloadInterface = {
	ident: "transportation_6",
	name: "Question 16c: How long does it normally take you to go to work?",
	column_name: "16.C Tran",
	type: Screen.SingleQuestion,
	audio_ident: "transportation_6",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 16c",
			label: "How long does it normally take you to go to work?",
			kid_label: "How long does it normally take you to go to work?",
			adult_label: "How long does it normally take your child to go to work?",
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
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "More than 60 minutes",
					value: "More than 60 minutes",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 16c",
			label: "How long does it normally take you to go to work?",
			kid_label: "How long does it normally take you to go to work?",
			adult_label: "How long does it normally take your child to go to work?",
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
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "More than 60 minutes",
					value: "More than 60 minutes",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "السؤال 16c",
			label: "كم من الوقت تستغرق عادةّ للذهاب إلى العمل؟",
			kid_label: "كم من الوقت تستغرق عادةّ للذهاب إلى العمل؟",
			adult_label: "كم من الوقت يستغرق طفلك عادةّ للذهاب إلى العمل؟",
			choices: [
				{
					label: "دقائق أو أقل " + "10",
					value: "10 minutes or less",
				},
				{
					label: "ما بين 11 و20 دقيقة",
					value: "11 - 20 minutes",
				},
				{
					label: "ما بين 21 و30 دقيقة",
					value: "21 - 30 minutes",
				},
				{
					label: "ما بين 31 و60 دقيقة",
					value: "31 - 60 minutes",
				},
				{
					label: "أكثر من 60 دقيقة",
					value: "More than 60 minutes",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १६c",
			label: "सामान्यतया, तपाईंलाई काममा पुग्न कति समय लाग्छ?",
			kid_label: "सामान्यतया, तपाईंलाई काममा पुग्न कति समय लाग्छ?",
			adult_label: "सामान्यतया, तपाईंको छोरा वा छोरीलाई काममा पुग्न कति समय लाग्छ?",
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
					label: "३१-६० मिनेट",
					value: "31 - 60 minutes",
				},
				{
					label: "६० मिनेट भन्दा बढी",
					value: "More than 60 minutes",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Pergunta 16c",
			label: "Quanto tempo, normalmente, você leva para ir para o trabalho?",
			kid_label: "Quanto tempo, normalmente, você leva para ir para o trabalho?",
			adult_label:
				"Quanto tempo, normalmente, o(a) seu(sua) filho(a) leva para ir para o trabalho?",
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
					label: "31 - 60 minutos",
					value: "31 - 60 minutes",
				},
				{
					label: "Mais que 60 minutos",
					value: "More than 60 minutes",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 16c",
			label: "Hur lång tid tar det vanligtvis dig att ta dig till arbetet (eller ideella arbete)?",
			kid_label:
				"Hur lång tid tar det vanligtvis dig att ta dig till arbetet (eller ideella arbete)?",
			adult_label:
				"Hur lång tid tar det vanligtvis ditt barn att ta sig till arbetet (eller ideella arbete)?",
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
					label: "31 - 60 minuter",
					value: "31 - 60 minutes",
				},
				{
					label: "Mer än 60 minuter",
					value: "More than 60 minutes",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 16c",
			label: "ปกติน้องใช้เวลาเดินทางไปทำงานนานเท่าไหร่?",
			kid_label: "ปกติน้องใช้เวลาเดินทางไปทำงานนานเท่าไหร่?",
			adult_label: "ปกติบุตรหลานของคุณใช้เวลาเดินทางไปทำงานนานเท่าไหร่?",
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
					label: "31 - 60 นาที",
					value: "31 - 60 minutes",
				},
				{
					label: "มากกว่า 60 นาที",
					value: "More than 60 minutes",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 16c",
			label: "通常情况下，你采用上述方式去工作需要多长时间？",
			kid_label: "通常情况下，你采用上述方式去工作需要多长时间？",
			adult_label: "通常情况下，您的孩子采用上述方式去工作需要多长时间？",
			choices: [
				{
					label: "少于或等于10分钟",
					value: "10 minutes or less",
				},
				{
					label: "11-20分钟",
					value: "11 - 20 minutes",
				},
				{
					label: "21-30分钟",
					value: "21 - 30 minutes",
				},
				{
					label: "31-60分钟",
					value: "31 - 60 minutes",
				},
				{
					label: "60分钟以上",
					value: "More than 60 minutes",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 16c",
			label: "¿Normalmente cuánto tiempo tardas en ir al trabajo o voluntariado?",
			kid_label: "¿Normalmente cuánto tiempo tardas en ir al trabajo o voluntariado?",
			adult_label:
				"¿Normalmente cuánto tiempo necesita su hija o hijo en ir al trabajo o voluntariado?",
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
					label: "31 - 60 minutos",
					value: "31 - 60 minutes",
				},
				{
					label: "Más de 60 minutos",
					value: "More than 60 minutes",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 16c",
			label: "¿Normalmente cuánto tiempo tardas en ir al trabajo?",
			kid_label: "¿Normalmente cuánto tiempo tardas en ir al trabajo?",
			adult_label: "¿Normalmente cuánto tiempo necesita su hija o hijo en ir al trabajo?",
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
					label: "31 - 60 minutos",
					value: "31 - 60 minutes",
				},
				{
					label: "Más de 60 minutos",
					value: "More than 60 minutes",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 16c",
			label: "Combien de temps te faut-il, en général, pour aller de la maison jusqu'au travail?",
			kid_label:
				"Combien de temps te faut-il, en général, pour aller de la maison jusqu'au travail?",
			adult_label:
				"Combien de temps faut-il, en général, à ton enfant pour se déplacer de la maison jusqu'au travail?",
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
					label: "31 - 60 minutes",
					value: "31 - 60 minutes",
				},
				{
					label: "Plus de 60 minutes",
					value: "More than 60 minutes",
				},
			],
		},
	},
};

export default S4Q6;
