import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const GSHS4: LangQuestionRadioPayloadInterface = {
	ident: "gshs_4",
	name: "Question 28: During this school year, on how many days did you go to physical education (PE) class each week?",
	column_name: "GSHS 04",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			kid_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			adult_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
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
					label: "5 or more days",
					value: ">=5",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २८",
			label:
				"इस स्कूल वर्ष के दौरान, आप प्रत्येक सप्ताह कितने दिनों में शारीरिक व्यायाम शिक्षा (पीई) कक्षा में जाते थे?",
			kid_label:
				"इस स्कूल वर्ष के दौरान, आप प्रत्येक सप्ताह कितने दिनों में शारीरिक व्यायाम शिक्षा (पीई) कक्षा में जाते थे?",
			adult_label:
				"इस स्कूल वर्ष के दौरान, आप प्रत्येक सप्ताह कितने दिनों में शारीरिक व्यायाम शिक्षा (पीई) कक्षा में जाते थे?",
			choices: [
				{
					label: "0 दिन",
					value: "0",
				},
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
					label: "5 या अधिक दिन",
					value: ">=5",
				},
			],
		},
		"en-IN": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			kid_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			adult_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
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
					label: "5 or more days",
					value: ">=5",
				},
			],
		},
		"mi-NZ": {
			type: Question.QuestionRadio,
			heading: "Wāhanga 28",
			label:
				"I roto i tēnei tau kura, e hia ngā rā i tae atu koe ki te akomanga koiri (PE) i ia wiki?",
			kid_label:
				"I roto i tēnei tau kura, e hia ngā rā i tae atu koe ki te akomanga koiri (PE) i ia wiki?",
			adult_label:
				"I roto i tēnei tau kura, e hia ngā rā i tae atu koe ki te akomanga koiri (PE) i ia wiki?",
			choices: [
				{
					label: "O ngā rā",
					value: "0",
				},
				{
					label: "1 te rā",
					value: "1",
				},
				{
					label: "E 2 ngā rā",
					value: "2",
				},
				{
					label: "E 3 ngā rā",
					value: "3",
				},
				{
					label: "E 4 ngā rā",
					value: "4",
				},
				{
					label: "E 5 ngā rā, neke atu rānei",
					value: ">=5",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 28",
			label:
				"M'chaka chino cha sukulu, ndi masiku angati omwe mumaphunzira maphunziro olimbitsa thupi (P.E.) pa sabata iliyonse?",
			kid_label:
				"M'chaka chino cha sukulu, ndi masiku angati omwe mumaphunzira maphunziro olimbitsa thupi (P.E.) pa sabata iliyonse?",
			adult_label:
				"M'chaka chino cha sukulu, ndi masiku angati omwe mumaphunzira maphunziro olimbitsa thupi (P.E.) pa sabata iliyonse?",
			choices: [
				{
					label: "Simunaphunzireko maphunzirowa",
					value: "0",
				},
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
					label: "Masiku 5 kapena kuposa",
					value: ">=5",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २८",
			label: "यस शैक्षिक सत्रमा, हप्तामा कति दिन तपाई शारीरिक शिक्षाको कक्षामा सहभागी हुनुभयो",
			kid_label: "यस शैक्षिक सत्रमा, हप्तामा कति दिन तपाई शारीरिक शिक्षाको कक्षामा सहभागी हुनुभयो",
			adult_label:
				"यस शैक्षिक सत्रमा, हप्तामा कति दिन तपाई शारीरिक शिक्षाको कक्षामा सहभागी हुनुभयो",
			choices: [
				{
					label: "० दिन",
					value: "0",
				},
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
					label: "५ वा सो भन्दा बढी दिन",
					value: ">=5",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "ข้อ 28",
			label: "ในช่วงปีการศึกษานี้นักเรียนเข้าชั้นเรียนพลศึกษากี่วันต่อสัปดาห์",
			kid_label: "ในช่วงปีการศึกษานี้นักเรียนเข้าชั้นเรียนพลศึกษากี่วันต่อสัปดาห์",
			adult_label: "ในช่วงปีการศึกษานี้นักเรียนเข้าชั้นเรียนพลศึกษากี่วันต่อสัปดาห์",
			choices: [
				{
					label: "0 วัน",
					value: "0",
				},
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
					label: "5 วันหรือมากกว่านั้น",
					value: ">=5",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 28",
			label:
				"Ao longo deste ano escolar, quantos dias por semana você participou das aulas de Educação Física?",
			kid_label:
				"Ao longo deste ano escolar, quantos dias por semana você participou das aulas de Educação Física?",
			adult_label:
				"Ao longo deste ano escolar, quantos dias por semana você participou das aulas de Educação Física?",
			choices: [
				{
					label: "0 (nenhum dia)",
					value: "0",
				},
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
					label: "5 ou mais dias",
					value: ">=5",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 28",
			label:
				"En este curso académico, ¿cuántos días por semana fuiste a clase de educación física en el colegio?",
			kid_label:
				"En este curso académico, ¿cuántos días por semana fuiste a clase de educación física en el colegio?",
			adult_label:
				"En este curso académico, ¿cuántos días por semana fuiste a clase de educación física en el colegio?",
			choices: [
				{
					label: "0 días",
					value: "0",
				},
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
					label: "5 o más días",
					value: ">=5",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label:
				"Pendant l’année scolaire en cours, combien de jours par semaine as-tu suivi des cours d’éducation physique (EP)?",
			kid_label:
				"Pendant l’année scolaire en cours, combien de jours par semaine as-tu suivi des cours d’éducation physique (EP)?",
			adult_label:
				"Pendant l’année scolaire en cours, combien de jours par semaine as-tu suivi des cours d’éducation physique (EP)?",
			choices: [
				{
					label: "0 jour",
					value: "0",
				},
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
					label: "5 jours ou plus",
					value: ">=5",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 28",
			label:
				"En este año escolar, ¿cuántos días en la semana fuiste a clase de educación física en la escuela?",
			kid_label:
				"En este año escolar, ¿cuántos días en la semana fuiste a clase de educación física en la escuela?",
			adult_label:
				"En este año escolar, ¿cuántos días en la semana fuiste a clase de educación física en la escuela?",
			choices: [
				{
					label: "0 días",
					value: "0",
				},
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
					label: "5 o más días",
					value: ">=5",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 28",
			label:
				"En este año escolar, ¿cuántos días en la semana fuiste a clase de educación física en la escuela?",
			kid_label:
				"En este año escolar, ¿cuántos días en la semana fuiste a clase de educación física en la escuela?",
			adult_label:
				"En este año escolar, ¿cuántos días en la semana fuiste a clase de educación física en la escuela?",
			choices: [
				{
					label: "0 días",
					value: "0",
				},
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
					label: "5 o más días",
					value: ">=5",
				},
			],
		},
		"en-NZ": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			kid_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			adult_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
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
					label: "5 or more days",
					value: ">=5",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			kid_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			adult_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
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
					label: "5 or more days",
					value: ">=5",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			kid_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			adult_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
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
					label: "5 or more days",
					value: ">=5",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			kid_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			adult_label:
				"During this school year, on how many days did you go to physical education (PE) class each week?",
			choices: [
				{
					label: "0 days",
					value: "0",
				},
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
					label: "5 or more days",
					value: ">=5",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [٢٨]",
			label: "خلال هذه السنة الدراسية، كم يومًا حضرت فيه فصل التربية البدنية كل أسبوع؟",
			kid_label: "خلال هذه السنة الدراسية، كم يومًا حضرت فيه فصل التربية البدنية كل أسبوع؟",
			adult_label: "خلال هذه السنة الدراسية، كم يومًا حضرت فيه فصل التربية البدنية كل أسبوع؟",
			choices: [
				{
					label: "لم يحدث",
					value: "0",
				},
				{
					label: "يومًا واحدًا",
					value: "1",
				},
				{
					label: "يومين",
					value: "2",
				},
				{
					label: "3 أيام",
					value: "3",
				},
				{
					label: "4 أيام",
					value: "4",
				},
				{
					label: "5 أيام أو أكثر",
					value: ">=5",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 28",
			label: "Hur många dagar i veckan har du haft idrottslektion under det senaste skolåret?",
			kid_label: "Hur många dagar i veckan har du haft idrottslektion under det senaste skolåret?",
			adult_label:
				"Hur många dagar i veckan har du haft idrottslektion under det senaste skolåret?",
			choices: [
				{
					label: "0 dagar",
					value: "0",
				},
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
					label: "5 dagar eller fler",
					value: ">=5",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 28",
			label: "在本学年里，每周你有几天上体育课？",
			kid_label: "在本学年里，每周你有几天上体育课？",
			adult_label: "在本学年里，每周你有几天上体育课？",
			choices: [
				{
					label: "0天",
					value: "0",
				},
				{
					label: "1天",
					value: "1",
				},
				{
					label: "2天",
					value: "2",
				},
				{
					label: "3天",
					value: "3",
				},
				{
					label: "4天",
					value: "4",
				},
				{
					label: "5天或以上",
					value: ">=5",
				},
			],
		},
	},
};

export default GSHS4;
