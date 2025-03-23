import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const GSHS3: LangQuestionRadioPayloadInterface = {
	ident: "gshs_3",
	name: "Question 27: During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
	column_name: "GSHS 03",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 27",
			label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			kid_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			adult_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
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
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "ข้อ 27",
			label:
				"ในระหว่าง 7 วันที่ผ่านมา นักเรียน เดิน หรือ ขี่จักรยานไปหรือ กลับจากโรงเรียน จ�านวนกี่วัน",
			kid_label:
				"ในระหว่าง 7 วันที่ผ่านมา นักเรียน เดิน หรือ ขี่จักรยานไปหรือ กลับจากโรงเรียน จ�านวนกี่วัน",
			adult_label:
				"ในระหว่าง 7 วันที่ผ่านมา นักเรียน เดิน หรือ ขี่จักรยานไปหรือ กลับจากโรงเรียน จ�านวนกี่วัน",
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
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 27",
			label:
				"Durante os últimos 7 dias, em quantos dias você andou a pé ou de bicicleta para ir ou voltar da escola?",
			kid_label:
				"Durante os últimos 7 dias, em quantos dias você andou a pé ou de bicicleta para ir ou voltar da escola?",
			adult_label:
				"Durante os últimos 7 dias, em quantos dias você andou a pé ou de bicicleta para ir ou voltar da escola?",
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
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 27",
			label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de casa al colegio, o volviste caminando o en bicicleta?",
			kid_label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de casa al colegio, o volviste caminando o en bicicleta?",
			adult_label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de casa al colegio, o volviste caminando o en bicicleta?",
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
			heading: "Question 27",
			label:
				"Au cours des 7 derniers jours, combien de jours as-tu fait le chemin pour aller ou revenir de l’école à pied ou en vélo?",
			kid_label:
				"Au cours des 7 derniers jours, combien de jours as-tu fait le chemin pour aller ou revenir de l’école à pied ou en vélo?",
			adult_label:
				"Au cours des 7 derniers jours, combien de jours as-tu fait le chemin pour aller ou revenir de l’école à pied ou en vélo?",
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
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 27",
			label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de la casa a la escuela, o volviste caminando o en bicicleta?",
			kid_label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de la casa a la escuela, o volviste caminando o en bicicleta?",
			adult_label:
				"Durante los últimos 7 días, ¿cuántos días fuiste de la casa a la escuela, o volviste caminando o en bicicleta?",
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
		"en-NZ": {
			type: Question.QuestionRadio,
			heading: "Question 27",
			label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			kid_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			adult_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
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
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 27",
			label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			kid_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			adult_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
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
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 27",
			label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			kid_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			adult_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
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
			heading: "Question 27",
			label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			kid_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
			adult_label:
				"During the past 7 days, on how many days did you walk or ride a bicycle to or from school?",
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
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 27",
			label:
				"Hur många dagar gick eller cyklade du till eller från skolan under de senaste 7 dagarna?",
			kid_label:
				"Hur många dagar gick eller cyklade du till eller från skolan under de senaste 7 dagarna?",
			adult_label:
				"Hur många dagar gick eller cyklade du till eller från skolan under de senaste 7 dagarna?",
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
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 27",
			label: "在过去7天里，有多少天你步行或骑自行车上下学？",
			kid_label: "在过去7天里，有多少天你步行或骑自行车上下学？",
			adult_label: "在过去7天里，有多少天你步行或骑自行车上下学？",
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
					label: "5天",
					value: "5",
				},
				{
					label: "6天",
					value: "6",
				},
				{
					label: "7天",
					value: "7",
				},
			],
		},
	},
};

export default GSHS3;
