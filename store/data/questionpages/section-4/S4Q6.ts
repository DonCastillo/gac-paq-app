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
		"mi-NZ": {
			type: Question.QuestionRadio,
			heading: "Pātai 16c",
			label: "Ka hia te roa o tō haere ki te mahi?",
			kid_label: "Ka hia te roa o tō haere ki te mahi?",
			adult_label: "Ka hia te roa o tō tāu tamaiti haere ki te mahi?",
			choices: [
				{
					label: "10 meneti, iti iho rānei",
					value: "10 minutes or less",
				},
				{
					label: "11 – 20 meneti",
					value: "11 - 20 minutes",
				},
				{
					label: "21 – 30 meneti",
					value: "21 - 30 minutes",
				},
				{
					label: "31 – 60 meneti",
					value: "31 - 60 minutes",
				},
				{
					label: "Nui ake i te 60 meneti",
					value: "More than 60 minutes",
				},
			],
		},
		"en-NZ": {
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
		"cz-CR": {
			type: Question.QuestionRadio,
			heading: "Otázka 16c",
			label: "Jak dlouho ti obvykle trvá cesta do práce?",
			kid_label: "Jak dlouho ti obvykle trvá cesta do práce?",
			adult_label: "Jak dlouho vašemu dítěti obvykle trvá cesta do práce?",
			choices: [
				{
					label: "10 minut a méně",
					value: "10 minutes or less",
				},
				{
					label: "11 - 20 minut",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 minut",
					value: "21 - 30 minutes",
				},
				{
					label: "31 - 60 minut",
					value: "31 - 60 minutes",
				},
				{
					label: "Více než 60 minut",
					value: "More than 60 minutes",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 16c",
			label: "¿Cuánto tiempo necesitas normalmente para ir a la escuela?",
			kid_label: "¿Cuánto tiempo necesitas normalmente para ir a la escuela?",
			adult_label: "¿Cuánto tiempo necesitó su hija o hijo normalmente para ir a la escuela?",
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
		"en-MW": {
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
		"en-NG": {
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
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 16c",
			label: "Nthawi zambiri zimakutengera nthawi yayitali bwanji kuti ukafike ku ntchito?",
			kid_label: "Nthawi zambiri zimakutengera nthawi yayitali bwanji kuti ukafike ku ntchito?",
			adult_label: "Zimatenga nthawi yayitali bwanji kuti mwana wanu akafike ku ntchito?",
			choices: [
				{
					label: "Ma minitsi 10 kapena osakwana",
					value: "10 minutes or less",
				},
				{
					label: "Pakati pa 10 mpaka 20 minitsi",
					value: "11 - 20 minutes",
				},
				{
					label: "Pakati pa 21 mpaka 30 minitsi",
					value: "21 - 30 minutes",
				},
				{
					label: "Pakati pa 31 mpaka 60 minitsi",
					value: "31 - 60 minutes",
				},
				{
					label: "Kuposera 60 minitsi",
					value: "More than 60 minutes",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १६c",
			label: "तुम्हाला घरून कामावर जाण्यासाठी सामान्यपणे किती वेळ लागतो?",
			kid_label: "तुम्हाला घरून कामावर जाण्यासाठी सामान्यपणे किती वेळ लागतो?",
			adult_label: "तुमच्या मुलाला घरून कामावर जाण्यासाठी सामान्यपणे किती वेळ लागतो?",
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
			heading: "प्रश्न १६c",
			label: "आपको काम पर जाने में सामान्यतः कितना समय लगता है?",
			kid_label: "आपको काम पर जाने में सामान्यतः कितना समय लगता है?",
			adult_label: "आपके बच्चे को काम पर जाने में सामान्यतः कितना समय लगता है?",
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
					label: "31 - 60 मिनट",
					value: "31 - 60 minutes",
				},
				{
					label: "60 मिनट से अधिक",
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
			heading: "سؤال [١٦ج]",
			label: "كم من الوقت تستغرق عادةّ للذهاب إلى العمل؟",
			kid_label: "كم من الوقت تستغرق عادةّ للذهاب إلى العمل؟",
			adult_label: "كم من الوقت يقضي طفلك عادةّ للذهاب إلى العمل؟",
			choices: [
				{
					label: "‌١٠ دقائق أو أقل",
					value: "10 minutes or less",
				},
				{
					label: "‌ب.	ما بين ١١ و٢٠ دقيقة",
					value: "11 - 20 minutes",
				},
				{
					label: "‌ما بين ٢١ و٣٠ دقيقة",
					value: "21 - 30 minutes",
				},
				{
					label: "‌ما بين ٣١ و٦٠ دقيقة",
					value: "31 - 60 minutes",
				},
				{
					label: "‌أكثر من ٦٠ دقيقة",
					value: "More than 60 minutes",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १६ग",
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
			heading: "Questão 16c",
			label: "Quanto tempo, normalmente, você leva para ir para o trabalho?",
			kid_label: "Quanto tempo, normalmente, você leva para ir para o trabalho?",
			adult_label:
				"Quanto tempo, normalmente, a criança ou adolescente que você é responsável leva para ir para o trabalho?",
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
			heading: "ข้อ 16c",
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
