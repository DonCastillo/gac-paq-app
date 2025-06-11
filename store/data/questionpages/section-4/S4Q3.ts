import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q3: LangQuestionRadioPayloadInterface = {
	ident: "transportation_3",
	name: "Question 15c: How long does it normally take you to go to school?",
	column_name: "15.C Tran",
	audio_ident: "transportation_3",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 15c",
			label: "How long does it normally take you to go to school?",
			kid_label: "How long does it normally take you to go to school?",
			adult_label: "How long does it normally take your child to go to school?",
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
		"en-IN": {
			type: Question.QuestionRadio,
			heading: "Question 15c",
			label: "How long does it normally take you to go to school?",
			kid_label: "How long does it normally take you to go to school?",
			adult_label: "How long does it normally take your child to go to school?",
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
		"mi-NZ": {
			type: Question.QuestionRadio,
			heading: "Pātai 15c",
			label: "Ka hia te roa o tō haerenga ki te kura?",
			kid_label: "Ka hia te roa o tō haerenga ki te kura?",
			adult_label: "Ka hia te roa o tō tāu tamaiti haere ki te kura?",
			choices: [
				{
					label: "10 meneti iti iho rānei",
					value: "10 minutes or less",
				},
				{
					label: "11 – 20 meneti",
					value: "11 - 20 minutes",
				},
				{
					label: "21 - 30 meneti",
					value: "21 - 30 minutes",
				},
				{
					label: "Nui ake i te 30 meneti",
					value: "More than 30 minutes",
				},
			],
		},
		"en-NZ": {
			type: Question.QuestionRadio,
			heading: "Question 15c",
			label: "How long does it normally take you to go to school?",
			kid_label: "How long does it normally take you to go to school?",
			adult_label: "How long does it normally take your child to go to school?",
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
		"cz-CR": {
			type: Question.QuestionRadio,
			heading: "Otázka 15c",
			label: "Jak dlouho ti obvykle trvá cesta do školy?",
			kid_label: "Jak dlouho ti obvykle trvá cesta do školy?",
			adult_label: "Jak dlouho vašemu dítěti obvykle trvá cesta do školy?",
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
					label: "Více než 30 minut",
					value: "More than 30 minutes",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 15c",
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
					label: "Más de 30 minutos",
					value: "More than 30 minutes",
				},
			],
		},
		"es-CL": {
			type: Question.QuestionRadio,
			heading: "Pregunta 15c",
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
					label: "Más de 30 minutos",
					value: "More than 30 minutes",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 15c",
			label: "How long does it normally take you to go to school?",
			kid_label: "How long does it normally take you to go to school?",
			adult_label: "How long does it normally take your child to go to school?",
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
			heading: "Question 15c",
			label: "How long does it normally take you to go to school?",
			kid_label: "How long does it normally take you to go to school?",
			adult_label: "How long does it normally take your child to go to school?",
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
			heading: "Funso 15c",
			label: "Nthawi zambiri zimakutengera nthawi yayitali bwanji kuti ukafike kusukulu?",
			kid_label: "Nthawi zambiri zimakutengera nthawi yayitali bwanji kuti ukafike kusukulu?",
			adult_label: "Zimatenga nthawi yayitali bwanji kuti mwana wanu akafike kusukulu?",
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
					label: "Kuposera 30 minitsi",
					value: "More than 30 minutes",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १५c",
			label: "तुम्हाला घरून शाळेत जायला सामान्यपणे किती वेळ लागतो?",
			kid_label: "तुम्हाला घरून शाळेत जायला सामान्यपणे किती वेळ लागतो?",
			adult_label: "तुमच्या मुलाला घरून शाळेत जायला सामान्यपणे किती वेळ लागतो?",
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
			heading: "प्रश्न १५c",
			label: "आपको स्कूल जाने में सामान्यतः कितना समय लगता है?",
			kid_label: "आपको स्कूल जाने में सामान्यतः कितना समय लगता है?",
			adult_label: "आपके बच्चे को स्कूल जाने में सामान्यतः कितना समय लगता है?",
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
			heading: "Question 15c",
			label: "How long does it normally take you to go to school?",
			kid_label: "How long does it normally take you to go to school?",
			adult_label: "How long does it normally take your child to go to school?",
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
			heading: "سؤال [١٥ج]",
			label: "كم من الوقت تقضي عادةّ للذهاب إلى المدرسة؟",
			kid_label: "كم من الوقت تقضي عادةّ للذهاب إلى المدرسة؟",
			adult_label: "كم من الوقت يقضي طفلك عادةً للذهاب إلى المدرسة؟",
			choices: [
				{
					label: "‌١٠ دقائق أو أقل",
					value: "10 minutes or less",
				},
				{
					label: "ما بين ١١ و٢٠ دقيقة",
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
			heading: "प्रश्न १५ग",
			label: "सामान्यतया तपाईंलाई विध्यालय पुग्न कति समय लाग्छ?",
			kid_label: "सामान्यतया तपाईंलाई विध्यालय पुग्न कति समय लाग्छ?",
			adult_label: "सामान्यतया, तपाईंको छोरा वा छोरीलाई विध्यालय पुग्न कति समय लाग्छ?",
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
			heading: "Questão 15c",
			label: "Quanto tempo, normalmente, você leva para ir para a escola?",
			kid_label: "Quanto tempo, normalmente, você leva para ir para a escola?",
			adult_label:
				"Quanto tempo, normalmente, a criança ou adolescente que você é responsável leva para ir para a escola?",
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
			heading: "Fråga 15c",
			label: "Hur lång tid tar det vanligtvis för dig att ta dig till skolan?",
			kid_label: "Hur lång tid tar det vanligtvis för dig att ta dig till skolan?",
			adult_label: "Hur lång tid tar det vanligtvis för ditt barn att ta sig till skolan?",
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
			heading: "ข้อ 15c",
			label: "ปกติน้องใช้เวลาเดินทางไปโรงเรียนนานเท่าไหร่?",
			kid_label: "ปกติน้องใช้เวลาเดินทางไปโรงเรียนนานเท่าไหร่?",
			adult_label: "ปกติบุตรหลานของคุณใช้เวลาเดินทางไปโรงเรียนนานเท่าไหร่?",
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
			heading: "问题 15c",
			label: "通常情况下，你采用该交通方式到学校需要多长时间？",
			kid_label: "通常情况下，你采用该交通方式到学校需要多长时间？",
			adult_label: "通常情况下，您的孩子采用上述方式到学校需要多长时间？",
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
					label: "30分钟以上",
					value: "More than 30 minutes",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 15c",
			label: "¿Normalmente cuánto tiempo tardas en ir a la escuela o colegio?",
			kid_label: "¿Normalmente cuánto tiempo tardas en ir a la escuela o colegio?",
			adult_label:
				"¿Normalmente cuánto tiempo necesita su hija o hijo para ir a la escuela o colegio?",
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
			heading: "Pregunta 15c",
			label: "¿Normalmente cuánto tiempo tardas en ir a la escuela o colegio?",
			kid_label: "¿Normalmente cuánto tiempo tardas en ir a la escuela o colegio?",
			adult_label:
				"¿Normalmente cuánto tiempo necesita su hija o hijo para ir a la escuela o colegio?",
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
			heading: "Question 15c",
			label: "Combien de temps te faut-il, en général, pour aller de la maison jusqu'à l'école?",
			kid_label:
				"Combien de temps te faut-il, en général, pour aller de la maison jusqu'à l'école?",
			adult_label:
				"Combien de temps faut-il, en général, à ton enfant pour aller de la maison jusqu'à l'école?",
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

export default S4Q3;
