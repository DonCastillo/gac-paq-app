import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const GSHS6: LangQuestionRadioPayloadInterface = {
	ident: "gshs_6",
	name: "Question 30: On an average school night, how many hours of sleep do you get?",
	column_name: "GSHS 06",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "On an average school night, how many hours of sleep do you get?",
			kid_label: "On an average school night, how many hours of sleep do you get?",
			adult_label: "On an average school night, how many hours of sleep do you get?",
			choices: [
				{
					label: "4 or less hours",
					value: "4 or less hours",
				},
				{
					label: "5 hours",
					value: "5 hours",
				},
				{
					label: "6 hours",
					value: "6 hours",
				},
				{
					label: "7 hours",
					value: "7 hours",
				},
				{
					label: "8 hours",
					value: "8 hours",
				},
				{
					label: "9 hours",
					value: "9 hours",
				},
				{
					label: "10 or more hours",
					value: "10 or more hours",
				},
			],
		},
		"en-IN": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "On an average school night, how many hours of sleep do you get?",
			kid_label: "On an average school night, how many hours of sleep do you get?",
			adult_label: "On an average school night, how many hours of sleep do you get?",
			choices: [
				{
					label: "4 or less hours",
					value: "4 or less hours",
				},
				{
					label: "5 hours",
					value: "5 hours",
				},
				{
					label: "6 hours",
					value: "6 hours",
				},
				{
					label: "7 hours",
					value: "7 hours",
				},
				{
					label: "8 hours",
					value: "8 hours",
				},
				{
					label: "9 hours",
					value: "9 hours",
				},
				{
					label: "10 or more hours",
					value: "10 or more hours",
				},
			],
		},
		"mi-NZ": {
			type: Question.QuestionRadio,
			heading: "Wāhanga 30",
			label: "I te pō kura noa, e hia ngā hāora ka moe koe?",
			kid_label: "I te pō kura noa, e hia ngā hāora ka moe koe?",
			adult_label: "I te pō kura noa, e hia ngā hāora ka moe koe?",
			choices: [
				{
					label: "E 4 ngā hāora, iti iho rānei",
					value: "4 or less hours",
				},
				{
					label: "E 5 ngā hāora",
					value: "5 hours",
				},
				{
					label: "E 6 ngā hāora",
					value: "6 hours",
				},
				{
					label: "E 7 ngā hāora",
					value: "7 hours",
				},
				{
					label: "E 8 ngā hāora",
					value: "8 hours",
				},
				{
					label: "E 9 ngā hāora",
					value: "9 hours",
				},
				{
					label: "10, neke atu rānei ngā hāora",
					value: "10 or more hours",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 30",
			label: "Pa tsiku la sukulu, kodi usiku mumagona maola angati?",
			kid_label: "Pa tsiku la sukulu, kodi usiku mumagona maola angati?",
			adult_label: "Pa tsiku la sukulu, kodi usiku mumagona maola angati?",
			choices: [
				{
					label: "Maola 4 kapena osakwana",
					value: "4 or less hours",
				},
				{
					label: "Maola 5",
					value: "5 hours",
				},
				{
					label: "Maola 6",
					value: "6 hours",
				},
				{
					label: "Maola 7",
					value: "7 hours",
				},
				{
					label: "Maola 8",
					value: "8 hours",
				},
				{
					label: "Maola 9",
					value: "9 hours",
				},
				{
					label: "Maola 10 kapena kuposa",
					value: "10 or more hours",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न ३०",
			label: "सामान्यतया स्कूलको समयमा रातमा, तपाईं कति घण्टा सुत्नुहुन्छ?",
			kid_label: "सामान्यतया स्कूलको समयमा रातमा, तपाईं कति घण्टा सुत्नुहुन्छ?",
			adult_label: "सामान्यतया स्कूलको समयमा रातमा, तपाईं कति घण्टा सुत्नुहुन्छ?",
			choices: [
				{
					label: "४ घण्टा वा सोभन्दा कम",
					value: "4 or less hours",
				},
				{
					label: "५ घण्टा",
					value: "5 hours",
				},
				{
					label: "६ घण्टा",
					value: "6 hours",
				},
				{
					label: "७ घण्टा",
					value: "7 hours",
				},
				{
					label: "८ घण्टा",
					value: "8 hours",
				},
				{
					label: "९ घण्टा",
					value: "9 hours",
				},
				{
					label: "१० वा सोभन्दा बढी घण्टा",
					value: "10 or more hours",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "ข้อ 30",
			label: "ในเวลากลางคืนของวันที่ไปโรงเรียน นักเรียนนอนกี่ชั่วโมงต่อวัน",
			kid_label: "ในเวลากลางคืนของวันที่ไปโรงเรียน นักเรียนนอนกี่ชั่วโมงต่อวัน",
			adult_label: "ในเวลากลางคืนของวันที่ไปโรงเรียน นักเรียนนอนกี่ชั่วโมงต่อวัน",
			choices: [
				{
					label: "4 ชั่วโมง หรือน้อยกว่า",
					value: "4 or less hours",
				},
				{
					label: "5 ชั่วโมง",
					value: "5 hours",
				},
				{
					label: "6 ชั่วโมง",
					value: "6 hours",
				},
				{
					label: "7 ชั่วโมง",
					value: "7 hours",
				},
				{
					label: "8 ชั่วโมง",
					value: "8 hours",
				},
				{
					label: "9 ชั่วโมง",
					value: "9 hours",
				},
				{
					label: "10 ชั่วโมง หรือมากกว่า",
					value: "10 or more hours",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 30",
			label: "Em dias de aula, quantas horas de sono você dorme por noite?",
			kid_label: "Em dias de aula, quantas horas de sono você dorme por noite?",
			adult_label: "Em dias de aula, quantas horas de sono você dorme por noite?",
			choices: [
				{
					label: "4 horas ou menos",
					value: "4 or less hours",
				},
				{
					label: "5 horas",
					value: "5 hours",
				},
				{
					label: "6 horas",
					value: "6 hours",
				},
				{
					label: "7 horas",
					value: "7 hours",
				},
				{
					label: "8 horas",
					value: "8 hours",
				},
				{
					label: "9 horas",
					value: "9 hours",
				},
				{
					label: "10 horas ou mais",
					value: "10 or more hours",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 30",
			label:
				"Durante los días que tienes clases ¿cuántas horas duermes habitualmente por la noche?",
			kid_label:
				"Durante los días que tienes clases ¿cuántas horas duermes habitualmente por la noche?",
			adult_label:
				"Durante los días que tienes clases ¿cuántas horas duermes habitualmente por la noche?",
			choices: [
				{
					label: "4 o menos horas",
					value: "4 or less hours",
				},
				{
					label: "5 horas",
					value: "5 hours",
				},
				{
					label: "6 horas",
					value: "6 hours",
				},
				{
					label: "7 horas",
					value: "7 hours",
				},
				{
					label: "8 horas",
					value: "8 hours",
				},
				{
					label: "9 horas",
					value: "9 hours",
				},
				{
					label: "10 o más horas",
					value: "10 or more hours",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "Combien d’heures dors-tu en moyenne par nuit d’école?",
			kid_label: "Combien d’heures dors-tu en moyenne par nuit d’école?",
			adult_label: "Combien d’heures dors-tu en moyenne par nuit d’école?",
			choices: [
				{
					label: "4 heures ou moins",
					value: "4 or less hours",
				},
				{
					label: "5 heures",
					value: "5 hours",
				},
				{
					label: "6 heures",
					value: "6 hours",
				},
				{
					label: "7 heures",
					value: "7 hours",
				},
				{
					label: "8 heures",
					value: "8 hours",
				},
				{
					label: "9 heures",
					value: "9 hours",
				},
				{
					label: "10 heures ou plus",
					value: "10 or more hours",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 30",
			label:
				"Durante los días que tienes clases ¿cuántas horas duermes habitualmente por la noche?",
			kid_label:
				"Durante los días que tienes clases ¿cuántas horas duermes habitualmente por la noche?",
			adult_label:
				"Durante los días que tienes clases ¿cuántas horas duermes habitualmente por la noche?",
			choices: [
				{
					label: "4 o menos horas",
					value: "4 or less hours",
				},
				{
					label: "5 horas",
					value: "5 hours",
				},
				{
					label: "6 horas",
					value: "6 hours",
				},
				{
					label: "7 horas",
					value: "7 hours",
				},
				{
					label: "8 horas",
					value: "8 hours",
				},
				{
					label: "9 horas",
					value: "9 hours",
				},
				{
					label: "10 o más horas",
					value: "10 or more hours",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 30",
			label:
				"Durante los días que tienes clases ¿cuántas horas duermes habitualmente por la noche?",
			kid_label:
				"Durante los días que tienes clases ¿cuántas horas duermes habitualmente por la noche?",
			adult_label:
				"Durante los días que tienes clases ¿cuántas horas duermes habitualmente por la noche?",
			choices: [
				{
					label: "4 o menos horas",
					value: "4 or less hours",
				},
				{
					label: "5 horas",
					value: "5 hours",
				},
				{
					label: "6 horas",
					value: "6 hours",
				},
				{
					label: "7 horas",
					value: "7 hours",
				},
				{
					label: "8 horas",
					value: "8 hours",
				},
				{
					label: "9 horas",
					value: "9 hours",
				},
				{
					label: "10 o más horas",
					value: "10 or more hours",
				},
			],
		},
		"en-NZ": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "On an average school night, how many hours of sleep do you get?",
			kid_label: "On an average school night, how many hours of sleep do you get?",
			adult_label: "On an average school night, how many hours of sleep do you get?",
			choices: [
				{
					label: "4 or less hours",
					value: "4 or less hours",
				},
				{
					label: "5 hours",
					value: "5 hours",
				},
				{
					label: "6 hours",
					value: "6 hours",
				},
				{
					label: "7 hours",
					value: "7 hours",
				},
				{
					label: "8 hours",
					value: "8 hours",
				},
				{
					label: "9 hours",
					value: "9 hours",
				},
				{
					label: "10 or more hours",
					value: "10 or more hours",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "On an average school night, how many hours of sleep do you get?",
			kid_label: "On an average school night, how many hours of sleep do you get?",
			adult_label: "On an average school night, how many hours of sleep do you get?",
			choices: [
				{
					label: "4 or less hours",
					value: "4 or less hours",
				},
				{
					label: "5 hours",
					value: "5 hours",
				},
				{
					label: "6 hours",
					value: "6 hours",
				},
				{
					label: "7 hours",
					value: "7 hours",
				},
				{
					label: "8 hours",
					value: "8 hours",
				},
				{
					label: "9 hours",
					value: "9 hours",
				},
				{
					label: "10 or more hours",
					value: "10 or more hours",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "On an average school night, how many hours of sleep do you get?",
			kid_label: "On an average school night, how many hours of sleep do you get?",
			adult_label: "On an average school night, how many hours of sleep do you get?",
			choices: [
				{
					label: "4 or less hours",
					value: "4 or less hours",
				},
				{
					label: "5 hours",
					value: "5 hours",
				},
				{
					label: "6 hours",
					value: "6 hours",
				},
				{
					label: "7 hours",
					value: "7 hours",
				},
				{
					label: "8 hours",
					value: "8 hours",
				},
				{
					label: "9 hours",
					value: "9 hours",
				},
				{
					label: "10 or more hours",
					value: "10 or more hours",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "On an average school night, how many hours of sleep do you get?",
			kid_label: "On an average school night, how many hours of sleep do you get?",
			adult_label: "On an average school night, how many hours of sleep do you get?",
			choices: [
				{
					label: "4 or less hours",
					value: "4 or less hours",
				},
				{
					label: "5 hours",
					value: "5 hours",
				},
				{
					label: "6 hours",
					value: "6 hours",
				},
				{
					label: "7 hours",
					value: "7 hours",
				},
				{
					label: "8 hours",
					value: "8 hours",
				},
				{
					label: "9 hours",
					value: "9 hours",
				},
				{
					label: "10 or more hours",
					value: "10 or more hours",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [٣٠]",
			label: "في ليالي الدراسة العادية، كم ساعةً تنامها؟",
			kid_label: "في ليالي الدراسة العادية، كم ساعةً تنامها؟",
			adult_label: "في ليالي الدراسة العادية، كم ساعةً تنامها؟",
			choices: [
				{
					label: "4 ساعات أو أقل",
					value: "4 or less hours",
				},
				{
					label: "5 ساعات",
					value: "5 hours",
				},
				{
					label: "6 ساعات",
					value: "6 hours",
				},
				{
					label: "7 ساعات",
					value: "7 hours",
				},
				{
					label: "8 ساعات",
					value: "8 hours",
				},
				{
					label: "9 ساعات",
					value: "9 hours",
				},
				{
					label: "10 ساعة أو أكثر",
					value: "10 or more hours",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 30",
			label: "Hur många timmars sömn får du under en vanlig vardag?",
			kid_label: "Hur många timmars sömn får du under en vanlig vardag?",
			adult_label: "Hur många timmars sömn får du under en vanlig vardag?",
			choices: [
				{
					label: "4 timmar eller mindre",
					value: "4 or less hours",
				},
				{
					label: "5 timmar",
					value: "5 hours",
				},
				{
					label: "6 timmar",
					value: "6 hours",
				},
				{
					label: "7 timmar",
					value: "7 hours",
				},
				{
					label: "8 timmar",
					value: "8 hours",
				},
				{
					label: "9 timmar",
					value: "9 hours",
				},
				{
					label: "10 timmar eller mer",
					value: "10 or more hours",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 30",
			label: "通常你在上学日的晚上睡眠时长是多少个小时？",
			kid_label: "通常你在上学日的晚上睡眠时长是多少个小时？",
			adult_label: "通常你在上学日的晚上睡眠时长是多少个小时？",
			choices: [
				{
					label: "4小时或更少",
					value: "4 or less hours",
				},
				{
					label: "5小时",
					value: "5 hours",
				},
				{
					label: "6小时",
					value: "6 hours",
				},
				{
					label: "7小时",
					value: "7 hours",
				},
				{
					label: "8小时",
					value: "8 hours",
				},
				{
					label: "9小时",
					value: "9 hours",
				},
				{
					label: "10小时或以上",
					value: "10 or more hours",
				},
			],
		},
	},
};

export default GSHS6;
