import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q3: LangQuestionRadioPayloadInterface = {
	ident: "transportation_3",
	name: "Question 15c: How long does it normally take you to go to school?",
	column_name: "15.C Tran",
	audio_ident: "transportation_3",
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
			heading: "คำถาม 15c",
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
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Question 15c",
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
			label: "Combien de temps te faut-il, en général, pour aller de la maison jusqu'à l'école? ",
			kid_label:
				"Combien de temps te faut-il, en général, pour aller de la maison jusqu'à l'école? ",
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
