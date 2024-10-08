import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S7Q1: LangQuestionRadioPayloadInterface = {
	ident: "outdoors_1",
	name: "Question 23:	In the past week, on a normal day, how much time do you spend outdoors?",
	type: Screen.SingleQuestion,
	column_name: "23.0 Outd",
	audio_ident: "outdoors_1",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 23",
			label: "In the past week, on a normal day, how much time do you spend outdoors?",
			kid_label: "In the past week, on a normal day, how much time do you spend outdoors?",
			adult_label:
				"In the past week, on a normal day, how much time did your child spend outdoors?",
			choices: [
				{
					label: "None",
					value: "None",
				},
				{
					label: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 to less than 2 hours per day",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 to less than 3 hours per day",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 to less than 4 hours per day",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 hours or more per day",
					value: "4 hours or more per day",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 23",
			label: "In the past week, on a normal day, how much time did you spend outdoors?",
			kid_label: "In the past week, on a normal day, how much time did you spend outdoors?",
			adult_label:
				"In the past week, on a normal day, how much time did your child spend outdoors?",
			choices: [
				{
					label: "None",
					value: "None",
				},
				{
					label: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 to less than 2 hours per day",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 to less than 3 hours per day",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 to less than 4 hours per day",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 hours or more per day",
					value: "4 hours or more per day",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "السؤال 23",
			label: "خلال الأسبوع الماضي، في الأيام العادية، كم من الوقت قضيت في الهواء الطلق؟",
			kid_label: "خلال الأسبوع الماضي، في الأيام العادية، كم من الوقت قضيت في الهواء الطلق؟",
			adult_label: "خلال الأسبوع الماضي، في الأيام العادية، كم من الوقت قضى طفلك في الهواء الطلق؟",
			choices: [
				{
					label: "لا شيء",
					value: "None",
				},
				{
					label: "أقل من ساعة في اليوم",
					value: "Less than 1 hour per day",
				},
				{
					label: "ما بين ساعة وأقل من ساعتين في اليوم",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "ما بين ساعتين وأقل من 3 ساعات في اليوم",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "ما بين 3 ساعات وأقل من 4 ساعات في اليوم",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "ساعات أو أكثر في اليوم" + "4",
					value: "4 hours or more per day",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २३",
			label: "पछिल्लो (गएको/ बितेको) हप्ता, एक सामान्य दिनमा, तपाईंले कति समय घर बाहिर बिताउनुभयो?",
			kid_label:
				"पछिल्लो (गएको/ बितेको) हप्ता, एक सामान्य दिनमा, तपाईंले कति समय घर बाहिर बिताउनुभयो?",
			adult_label:
				"पछिल्लो (गएको/ बितेको) हप्ता, एक सामान्य दिनमा, तपाईंको छोरा वा छोरीले कति समय घर बाहिर बिताउनुभयो?",
			choices: [
				{
					label: "कुनै पनि गरिन",
					value: "None",
				},
				{
					label: "प्रत्येक दिन एक घण्टा भन्दा कम भन्दा कम",
					value: "Less than 1 hour per day",
				},
				{
					label: "प्रत्येक दिन एक घण्टा देखि दुई घण्टा भन्दा कम",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "प्रत्येक दिन दुई घण्टा देखि तीन घण्टा भन्दा कम",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "प्रत्येक दिन तीन घण्टा देखि चार घण्टा भन्दा कम",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "प्रत्येक दिन चार घण्टा वा बढी",
					value: "4 hours or more per day",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 23",
			label:
				"Na última semana, em um dia normal, quanto tempo você realizou atividades ao ar livre?",
			kid_label:
				"Na última semana, em um dia normal, quanto tempo você realizou atividades ao ar livre?",
			adult_label:
				"Na última semana, em um dia normal, quanto tempo o(a) seu(sua) filho(a) realizou atividades ao ar livre?",
			choices: [
				{
					label: "Nenhum",
					value: "None",
				},
				{
					label: "Menos que 1 hora por dia",
					value: "Less than 1 hour per day",
				},
				{
					label: "De 1 hora até menos que 2 horas por dia",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "De 2 horas até menos que 3 horas por dia",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "De 3 horas até menos que 4 horas por dia",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 horas ou mais por dia",
					value: "4 hours or more per day",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 23",
			label: "Hur mycket tid spenderade du utomhus på en vanlig dag under den senaste veckan?",
			kid_label: "Hur mycket tid spenderade du utomhus på en vanlig dag under den senaste veckan?",
			adult_label:
				"Hur mycket tid spenderade ditt barn utomhus på en vanlig dag den senaste veckan?",
			choices: [
				{
					label: "Ingen",
					value: "None",
				},
				{
					label: "Mindre än 1 timme per dag",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 till mindre än 2 timmar per dag",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 till mindre än 3 timmar per dag",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 till mindre än 4 timmar per dag",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 timmar eller mer per dag",
					value: "4 hours or more per day",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 23",
			label: "สัปดาห์ที่แล้ว น้องใช้เวลาทำกิจกรรมกลางแจ้ง/ในที่โล่งมากน้อยเพียงใด?",
			kid_label: "สัปดาห์ที่แล้ว น้องใช้เวลาทำกิจกรรมกลางแจ้ง/ในที่โล่งมากน้อยเพียงใด?",
			adult_label: "สัปดาห์ที่แล้ว บุตรหลานของคุณใช้เวลาทำกิจกรรมกลางแจ้ง/ในที่โล่งมากน้อยเพียงใด?",
			choices: [
				{
					label: "ไม่มีเลย",
					value: "None",
				},
				{
					label: "น้อยกว่า 1 ชั่วโมง (ต่อวัน)",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 ชั่วโมงแต่ไม่ถึง 2 ชั่วโมง (ต่อวัน)",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 ชั่วโมงแต่ไม่ถึง 3 ชั่วโมง (ต่อวัน)",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 ชั่วโมงแต่ไม่ถึง 4 ชั่วโมง (ต่อวัน)",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 ชั่วโมงขึ้นไป (ต่อวัน)",
					value: "4 hours or more per day",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 23",
			label: "在过去一周里，你通常每天花多长时间在室外？",
			kid_label: "在过去一周里，你通常每天花多长时间在室外？",
			adult_label: "在过去一周里，你的孩子每天在户外的时间有多长？",
			choices: [
				{
					label: "无",
					value: "None",
				},
				{
					label: "每天少于1小时 ",
					value: "Less than 1 hour per day",
				},
				{
					label: "每天1-2小时",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "每天2-3小时",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "每天3-4小时",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "每天4小时及以上 ",
					value: "4 hours or more per day",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 23",
			label: "Durante la semana pasada, en un día normal, ¿cuánto tiempo pasaste al aire libre?",
			kid_label:
				"Durante la semana pasada, en un día normal, ¿cuánto tiempo pasaste al aire libre?",
			adult_label:
				"Durante la semana pasada, en un día normal, ¿cuánto tiempo pasó su hija o hijo al aire libre?",
			choices: [
				{
					label: "Nada",
					value: "None",
				},
				{
					label: "Menos de 1 hora al día",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 a menos de 2 horas al día",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 a menos de 3 horas al día",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 a menos de 4 horas al día",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 horas o más al día",
					value: "4 hours or more per day",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 23",
			label: "En la última semana, en un día normal, ¿cuánto tiempo pasaste al aire libre?",
			kid_label: "En la última semana, en un día normal, ¿cuánto tiempo pasaste al aire libre?",
			adult_label:
				"En la última semana, en un día normal, ¿cuánto tiempo pasó su hija o hijo al aire libre?",
			choices: [
				{
					label: "Nada",
					value: "None",
				},
				{
					label: "Menos de 1 hora al día",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 a menos de 2 horas al día",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 a menos de 3 horas al día",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 a menos de 4 horas al día",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 horas o más al día",
					value: "4 hours or more per day",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 23",
			label:
				"Durant la dernière semaine, lors d'une journée normale, combien de temps as-tu passé dehors?",
			kid_label:
				"Durant la dernière semaine, lors d'une journée normale, combien de temps as-tu passé dehors?",
			adult_label:
				"Durant la dernière semaine, lors d'une journée normale, combien de temps ton enfant a-t-il (elle) passé dehors?",
			choices: [
				{
					label: "Pas du tout",
					value: "None",
				},
				{
					label: "Moins d'une heure par jour",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 à moins de 2 heures par jour",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "2 à moins de 3 heures par jour",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "3 à moins de 4 heures par jour",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "4 heures ou plus par jour",
					value: "4 hours or more per day",
				},
			],
		},
	},
};

export default S7Q1;
