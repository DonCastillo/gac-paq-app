import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const GSHS1: LangQuestionRadioPayloadInterface = {
	ident: "gshs_1",
	name: "Question 25: During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day? Add up all the time you spent in any kind of physical activity each day.",
	column_name: "GSHS 01",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 25",
			label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			adult_label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_sublabel: "Add up all the time you spent in any kind of physical activity each day.",
			adult_sublabel: "Add up all the time you spent in any kind of physical activity each day.",
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
		"en-IN": {
			type: Question.QuestionRadio,
			heading: "Question 25",
			label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			adult_label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_sublabel: "Add up all the time you spent in any kind of physical activity each day.",
			adult_sublabel: "Add up all the time you spent in any kind of physical activity each day.",
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
		"mi-NZ": {
			type: Question.QuestionRadio,
			heading: "Wāhanga 25",
			label:
				"I ngā rangi e 7 kua pahure ake nei, e hia ngā rā i kori tinana koe mō te tapeke o te 60 meneti, neke atu rānei i te rā?",
			kid_label:
				"I ngā rangi e 7 kua pahure ake nei, e hia ngā rā i kori tinana koe mō te tapeke o te 60 meneti, neke atu rānei i te rā?",
			adult_label:
				"I ngā rangi e 7 kua pahure ake nei, e hia ngā rā i kori tinana koe mō te tapeke o te 60 meneti, neke atu rānei i te rā?",
			kid_sublabel:
				"Tatauhia te katoa o te wā i mahi kori tinana ai koe ia rā, ahakoa te momo mahi.",
			adult_sublabel:
				"Tatauhia te katoa o te wā i mahi kori tinana ai koe ia rā, ahakoa te momo mahi.",
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
					label: "E 5 ngā rā",
					value: "5",
				},
				{
					label: "E 6 ngā rā",
					value: "6",
				},
				{
					label: "E 7 ngā rā",
					value: "7",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 25",
			label:
				"M'masiku 7 apitawa, ndi masiku angati omwe munali mukuchita zochita zolimbitsa thupi kwa nthawi yosachepera 60 minutes/mphindi patsiku?",
			kid_label:
				"M'masiku 7 apitawa, ndi masiku angati omwe munali mukuchita zochita zolimbitsa thupi kwa nthawi yosachepera 60 minutes/mphindi patsiku?",
			adult_label:
				"M'masiku 7 apitawa, ndi masiku angati omwe munali mukuchita zochita zolimbitsa thupi kwa nthawi yosachepera 60 minutes/mphindi patsiku?",
			kid_sublabel:
				"Phatikizani nthawi yonse imene mumachita zochita zolimbitsa thupi zilizonse pa tsiku.",
			adult_sublabel:
				"Phatikizani nthawi yonse imene mumachita zochita zolimbitsa thupi zilizonse pa tsiku.",
			choices: [
				{
					label: "Simunachite zolimbitsa thupi",
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
					label: "Masiku 5",
					value: "5",
				},
				{
					label: "Masiku 6",
					value: "6",
				},
				{
					label: "Masiku 7",
					value: "7",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २५",
			label:
				"गत ७ दिनको अवधिमा, कति दिन तपाईँले कम्तिमा ६० मिनेट शारीरिक गतिविधिमा संलग्न हुनुभयो?",
			kid_label:
				"गत ७ दिनको अवधिमा, कति दिन तपाईँले कम्तिमा ६० मिनेट शारीरिक गतिविधिमा संलग्न हुनुभयो?",
			adult_label:
				"गत ७ दिनको अवधिमा, कति दिन तपाईँले कम्तिमा ६० मिनेट शारीरिक गतिविधिमा संलग्न हुनुभयो?",
			kid_sublabel: "कुनै पनि प्रकारको शारीरिक गतिविधिमा लगाएको समयलाई दैनिक रूपमा गणना गर्नुहोस्।",
			adult_sublabel:
				"कुनै पनि प्रकारको शारीरिक गतिविधिमा लगाएको समयलाई दैनिक रूपमा गणना गर्नुहोस्।",
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
					label: "५ दिन",
					value: "5",
				},
				{
					label: "६ दिन",
					value: "6",
				},
				{
					label: "७ दिन",
					value: "7",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "ข้อ 25",
			label:
				"ในระหว่าง 7 วันที่ผ่านมา นักเรียนทำกิจกรรมการออกกำลังกาย ที่รวมแล้วไม่น้อยกว่าวันละ 60 นาที จำนวนกี่วัน",
			kid_label:
				"ในระหว่าง 7 วันที่ผ่านมา นักเรียนทำกิจกรรมการออกกำลังกาย ที่รวมแล้วไม่น้อยกว่าวันละ 60 นาที จำนวนกี่วัน",
			adult_label:
				"ในระหว่าง 7 วันที่ผ่านมา นักเรียนทำกิจกรรมการออกกำลังกาย ที่รวมแล้วไม่น้อยกว่าวันละ 60 นาที จำนวนกี่วัน",
			kid_sublabel: "รวมเวลาทั้งหมดที่คุณใช้ในกิจกรรมการออกกำลังกายทุกประเภทในแต่ละวัน",
			adult_sublabel: "รวมเวลาทั้งหมดที่คุณใช้ในกิจกรรมการออกกำลังกายทุกประเภทในแต่ละวัน",
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
				"Durante os últimos 7 dias, quantos dias você foi fisicamente ativo por um total de pelo menos 60 minutos por dia?",
			kid_label:
				"Durante os últimos 7 dias, quantos dias você foi fisicamente ativo por um total de pelo menos 60 minutos por dia?",
			adult_label:
				"Durante os últimos 7 dias, quantos dias você foi fisicamente ativo por um total de pelo menos 60 minutos por dia?",
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
				"Durante los últimos 7 días, ¿cuántos días practicaste una actividad física por un total de al menos 60 minutos al día?",
			kid_label:
				"Durante los últimos 7 días, ¿cuántos días practicaste una actividad física por un total de al menos 60 minutos al día?",
			adult_label:
				"Durante los últimos 7 días, ¿cuántos días practicaste una actividad física por un total de al menos 60 minutos al día?",
			kid_sublabel:
				"Suma todo el tiempo que pasas haciendo algún tipo de actividad física cada día.",
			adult_sublabel:
				"Suma todo el tiempo que pasas haciendo algún tipo de actividad física cada día.",
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
				"Au cours des 7 derniers jours, combien de jours as-tu été actif.ve physiquement pendant un minimum de 60 minutes en tout pendant la journée?",
			kid_label:
				"Au cours des 7 derniers jours, combien de jours as-tu été actif.ve physiquement pendant un minimum de 60 minutes en tout pendant la journée?",
			adult_label:
				"Au cours des 7 derniers jours, combien de jours as-tu été actif.ve physiquement pendant un minimum de 60 minutes en tout pendant la journée?",
			kid_sublabel:
				"Additionne tout le temps que tu as passé dans tout type d’activité physique pour chaque journée.",
			adult_sublabel:
				"Additionne tout le temps que tu as passé dans tout type d’activité physique pour chaque journée.",
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
				"Durante los últimos 7 días, ¿cuántos días realizaste actividad física por un total de al menos 60 minutos por día?",
			kid_label:
				"Durante los últimos 7 días, ¿cuántos días realizaste actividad física por un total de al menos 60 minutos por día?",
			adult_label:
				"Durante los últimos 7 días, ¿cuántos días realizaste actividad física por un total de al menos 60 minutos por día?",
			kid_sublabel:
				"Suma todo el tiempo que pasas haciendo algún tipo de actividad física cada día.",
			adult_sublabel:
				"Suma todo el tiempo que pasas haciendo algún tipo de actividad física cada día.",
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
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 25",
			label:
				"Durante los últimos 7 días, ¿cuántos días realizaste actividad física por un total de al menos 60 minutos por día?",
			kid_label:
				"Durante los últimos 7 días, ¿cuántos días realizaste actividad física por un total de al menos 60 minutos por día?",
			adult_label:
				"Durante los últimos 7 días, ¿cuántos días realizaste actividad física por un total de al menos 60 minutos por día?",
			kid_sublabel:
				"Suma todo el tiempo que pasas haciendo algún tipo de actividad física cada día.",
			adult_sublabel:
				"Suma todo el tiempo que pasas haciendo algún tipo de actividad física cada día.",
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
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			adult_label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_sublabel: "Add up all the time you spent in any kind of physical activity each day.",
			adult_sublabel: "Add up all the time you spent in any kind of physical activity each day.",
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
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			adult_label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_sublabel: "Add up all the time you spent in any kind of physical activity each day.",
			adult_sublabel: "Add up all the time you spent in any kind of physical activity each day.",
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
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			adult_label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_sublabel: "Add up all the time you spent in any kind of physical activity each day.",
			adult_sublabel: "Add up all the time you spent in any kind of physical activity each day.",
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
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			adult_label:
				"During the past 7 days, on how many days were you physically active for a total of at least 60 minutes per day?",
			kid_sublabel: "Add up all the time you spent in any kind of physical activity each day.",
			adult_sublabel: "Add up all the time you spent in any kind of physical activity each day.",
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
				"خلال السبعة أيام الماضية، كم يومًا مارست فيه نشاطًا بدنيًا لمدة 60 دقيقة كاملة على الأقل في اليوم؟ ",
			kid_label:
				"خلال السبعة أيام الماضية، كم يومًا مارست فيه نشاطًا بدنيًا لمدة 60 دقيقة كاملة على الأقل في اليوم؟ ",
			adult_label:
				"خلال السبعة أيام الماضية، كم يومًا مارست فيه نشاطًا بدنيًا لمدة 60 دقيقة كاملة على الأقل في اليوم؟ ",
			kid_sublabel: "اجمع كل الوقت الذي قضيته في أي نوع من النشاط البدني كل يوم.",
			adult_sublabel: "اجمع كل الوقت الذي قضيته في أي نوع من النشاط البدني كل يوم.",
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
					label: "5 أيام",
					value: "5",
				},
				{
					label: "6 أيام",
					value: "6",
				},
				{
					label: "7 أيام",
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
			kid_sublabel: "Räkna ihop all tid du varit fysisk aktiv varje dag.",
			adult_sublabel: "Räkna ihop all tid du varit fysisk aktiv varje dag.",
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
			kid_sublabel: "请把你每天进行身体活动的所有时间加起来。",
			adult_sublabel: "请把你每天进行身体活动的所有时间加起来。",
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

export default GSHS1;
