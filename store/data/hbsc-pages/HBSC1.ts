import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const HBSC1: LangQuestionRadioPayloadInterface = {
	ident: "hbsc_1",
	name: "Question 25: Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day? Please add up all the time you spent in physical activity each day.",
	column_name: "HBSC 01",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 25",
			label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			adult_label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_sublabel: "Please add up all the time you spent in physical activity each day.",
			adult_sublabel: "Please add up all the time you spent in physical activity each day.",
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
			heading: "ข้อ 25",
			label: "ในช่วง 7 วันที่ผ่านมา น้องได้ทำกิจกรรมทางกายอย่างน้อย 60 นาทีต่อวัน เป็นเวลากี่วัน?",
			kid_label:
				"ในช่วง 7 วันที่ผ่านมา น้องได้ทำกิจกรรมทางกายอย่างน้อย 60 นาทีต่อวัน เป็นเวลากี่วัน?",
			adult_label:
				"ในช่วง 7 วันที่ผ่านมา น้องได้ทำกิจกรรมทางกายอย่างน้อย 60 นาทีต่อวัน เป็นเวลากี่วัน?",
			kid_sublabel: "โปรดรวมเวลาทั้งหมดที่น้องใช้ทำกิจกรรมทางกายในแต่ละวัน",
			adult_sublabel: "โปรดรวมเวลาทั้งหมดที่น้องใช้ทำกิจกรรมทางกายในแต่ละวัน",
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
			heading: "Questão 25",
			label:
				"Nos últimos 7 dias, em quantos dias você fez atividade física por pelo menos 60 minutos (1 hora) por dia?",
			kid_label:
				"Nos últimos 7 dias, em quantos dias você fez atividade física por pelo menos 60 minutos (1 hora) por dia?",
			adult_label:
				"Nos últimos 7 dias, em quantos dias você fez atividade física por pelo menos 60 minutos (1 hora) por dia?",
			kid_sublabel:
				"Some todo o tempo que você gastou em qualquer tipo de atividade física, em cada dia.",
			adult_sublabel:
				"Some todo o tempo que você gastou em qualquer tipo de atividade física, em cada dia.",
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
			heading: "Pregunta 25",
			label:
				"En los últimos 7 días, ¿en cuántos días te sentiste físicamente activo/a durante un total de al menos 60 minutos por día?",
			kid_label:
				"En los últimos 7 días, ¿en cuántos días te sentiste físicamente activo/a durante un total de al menos 60 minutos por día?",
			adult_label:
				"En los últimos 7 días, ¿en cuántos días te sentiste físicamente activo/a durante un total de al menos 60 minutos por día?",
			kid_sublabel:
				"Te preguntamos por el tiempo total; es decir, no es necesario que hayan sido 60 minutos seguidos, puedes sumar los distintos momentos del día en que realizabas algún tipo de actividad física.",
			adult_sublabel:
				"Te preguntamos por el tiempo total; es decir, no es necesario que hayan sido 60 minutos seguidos, puedes sumar los distintos momentos del día en que realizabas algún tipo de actividad física.",
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
			heading: "Question 25",
			label:
				"Au cours des sept derniers jours, combien de jours as-tu été physiquement actif (ou active) pendant au moins 60 minutes par jour?",
			kid_label:
				"Au cours des sept derniers jours, combien de jours as-tu été physiquement actif (ou active) pendant au moins 60 minutes par jour?",
			adult_label:
				"Au cours des sept derniers jours, combien de jours as-tu été physiquement actif (ou active) pendant au moins 60 minutes par jour?",
			kid_sublabel: "Additionne tout le temps que tu consacres à l'activité physique chaque jour.",
			adult_sublabel:
				"Additionne tout le temps que tu consacres à l'activité physique chaque jour.",
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
			heading: "Pregunta 25",
			label:
				"Durante los pasados 7 días, ¿en cuántos días fuiste físicamente activo por al menos 60 minutos por día?",
			kid_label:
				"Durante los pasados 7 días, ¿en cuántos días fuiste físicamente activo por al menos 60 minutos por día?",
			adult_label:
				"Durante los pasados 7 días, ¿en cuántos días fuiste físicamente activo por al menos 60 minutos por día?",
			kid_sublabel: "Por favor, suma todo el tiempo que pasaste en actividad física cada día.",
			adult_sublabel: "Por favor, suma todo el tiempo que pasaste en actividad física cada día.",
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
			heading: "Question 25",
			label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			adult_label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_sublabel: "Please add up all the time you spent in physical activity each day.",
			adult_sublabel: "Please add up all the time you spent in physical activity each day.",
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
			heading: "Question 25",
			label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			adult_label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_sublabel: "Please add up all the time you spent in physical activity each day.",
			adult_sublabel: "Please add up all the time you spent in physical activity each day.",
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
			heading: "Question 25",
			label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			adult_label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_sublabel: "Please add up all the time you spent in physical activity each day.",
			adult_sublabel: "Please add up all the time you spent in physical activity each day.",
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
			heading: "Question 25",
			label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			adult_label:
				"Over the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_sublabel: "Please add up all the time you spent in physical activity each day.",
			adult_sublabel: "Please add up all the time you spent in physical activity each day.",
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
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [٢٥]",
			label:
				"خلال الأيام السبعة الماضية، كم عدد الأيام التي مارست فيها النشاط البدني لمدة 60 دقيقة على الأقل في اليوم الواحد؟ يرجى إضافة الوقت الذي قضيته في النشاط البدني كل يوم.",
			kid_label:
				"خلال الأيام السبعة الماضية، كم عدد الأيام التي مارست فيها النشاط البدني لمدة 60 دقيقة على الأقل في اليوم الواحد؟ يرجى إضافة الوقت الذي قضيته في النشاط البدني كل يوم.",
			adult_label:
				"خلال الأيام السبعة الماضية، كم عدد الأيام التي مارست فيها النشاط البدني لمدة 60 دقيقة على الأقل في اليوم الواحد؟ يرجى إضافة الوقت الذي قضيته في النشاط البدني كل يوم.",
			kid_sublabel: "يرجى إضافة إجمالي الوقت الذي قضيته في النشاط البدني كل يوم.",
			adult_sublabel: "يرجى إضافة إجمالي الوقت الذي قضيته في النشاط البدني كل يوم.",
			choices: [
				{
					label: "لا شيء (٠)",
					value: "0",
				},
				{
					label: "يوم واحد (١)",
					value: "1",
				},
				{
					label: "يومين (٢)",
					value: "2",
				},
				{
					label: "ثلاثة أيام (٣)",
					value: "3",
				},
				{
					label: "أربعة أيام (٤)",
					value: "4",
				},
				{
					label: "خمسة أيام (٥)",
					value: "5",
				},
				{
					label: "ستة أيام (٦)",
					value: "6",
				},
				{
					label: "سبعة أيام (٧)",
					value: "7",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 25",
			label:
				"Hur många dagar har du varit fysiskt aktiv sammanlagt minst 60 minuter om dagen under de senaste 7 dagarna?",
			kid_label:
				"Hur många dagar har du varit fysiskt aktiv sammanlagt minst 60 minuter om dagen under de senaste 7 dagarna?",
			adult_label:
				"Hur många dagar har du varit fysiskt aktiv sammanlagt minst 60 minuter om dagen under de senaste 7 dagarna?",
			kid_sublabel: "Räkna ihop all tid som du är fysiskt aktiv varje dag.",
			adult_sublabel: "Räkna ihop all tid som du är fysiskt aktiv varje dag.",
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
			heading: "问题 25",
			label: "在过去7天里，有多少天你进行了至少60分钟的身体活动？",
			kid_label: "在过去7天里，有多少天你进行了至少60分钟的身体活动？",
			adult_label: "在过去7天里，有多少天你进行了至少60分钟的身体活动？",
			kid_sublabel: "请把你每天进行身体活动上的所有时间加起来。",
			adult_sublabel: "请把你每天进行身体活动上的所有时间加起来。",
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

export default HBSC1;
