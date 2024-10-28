import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S3Q2: LangQuestionRadioPayloadInterface = {
	ident: "work_2",
	name: "Question 13: In the past week, how many hours have you spent volunteering and/or working?",
	type: Screen.SingleQuestion,
	column_name: "13.0 Work",
	audio_ident: "work_2",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 13",
			label: "In the past week, how many hours have you spent volunteering and/or working?",
			kid_label: "In the past week, how many hours have you spent volunteering and/or working?",
			adult_label:
				"In the past week, how many hours did your child spend volunteering and/or working?",
			choices: [
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
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 13",
			label:
				"M'sabata yapitayi, ndi maola angati omwe wakhala ukugwira ntchito yolipidwa kapena yongodzipereka?",
			kid_label:
				"M'sabata yapitayi, ndi maola angati omwe wakhala ukugwira ntchito yolipidwa kapena yongodzipereka?",
			adult_label:
				"M'sabata yapitayi, ndi maola angati omwe mwana wanu anagwira ntchito yolipidwa kapena yongodzipereka?",
			choices: [
				{
					label: "Osafika ola limodzi pa tsiku",
					value: "Less than 1 hour per day",
				},
				{
					label: "Ola limodzi koma osafika 2 hours patsiku",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "Maola awiri koma osafika 3 hours patsiku",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "Kupitilira maola atatu koma osafika 4 hours patsiku",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "Kupitilira maola 4 patsiku",
					value: "4 hours or more per day",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १३",
			label: "गेल्या आठवड्यात, तुम्ही किती तास स्वयंसेवक म्हणून आणि/किंवा नोकरीतील काम केले?",
			kid_label: "गेल्या आठवड्यात, तुम्ही किती तास स्वयंसेवक म्हणून आणि/किंवा नोकरीतील काम केले?",
			adult_label:
				"गेल्या आठवड्यात, तुमच्या मुलाने किती तास स्वयंसेवक म्हणून आणि/किंवा नोकरीतील काम केले?",
			choices: [
				{
					label: "दररोज एका तासापेक्षा कमी वेळ",
					value: "Less than 1 hour per day",
				},
				{
					label: "दररोज १ ते २ तास",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "दररोज २ ते ३ तास",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "दररोज ३ ते ४ तास",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "दररोज ४ पेक्षा जास्त तास",
					value: "4 hours or more per day",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १३",
			label: "पिछले सप्ताह में, आपने स्वयंसेवा और/या नौकरी में कितने घंटे बिताए हैं?",
			kid_label: "पिछले सप्ताह में, आपने स्वयंसेवा और/या नौकरी में कितने घंटे बिताए हैं?",
			adult_label: "पिछले सप्ताह में, आपके बच्चे ने स्वयंसेवा और/या नौकरी में कितने घंटे बिताए?",
			choices: [
				{
					label: "प्रति दिन 1 घंटे से कम",
					value: "Less than 1 hour per day",
				},
				{
					label: "रति दिन 1 से 2 घंटे",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "प्रति दिन 2 से 3 घंटे",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "प्रति दिन 3 से 4 घंटे",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "प्रति दिन 4 घंटे या अधिक",
					value: "4 hours or more per day",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 13",
			label: "In the past week, how many hours did you spend volunteering or working?",
			kid_label: "In the past week, how many hours did you spend volunteering or working?",
			adult_label: "In the past week, how many hours did your child spend volunteering or working?",
			choices: [
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
			heading: "السؤال ١٣",
			label: "خلال الأسبوع الماضي، كم عدد الساعات التي قضيتها في العمل التطوعي أو الوظيفة؟",
			kid_label: "خلال الأسبوع الماضي، كم عدد الساعات التي قضيتها في العمل التطوعي أو الوظيفة؟",
			adult_label:
				"خلال الأسبوع الماضي، كم عدد الساعات التي قضاها طفلك في العمل التطوعي أو الوظيفة؟",
			choices: [
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
					label: "4 ساعات أو أكثر في اليوم",
					value: "4 hours or more per day",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १३",
			label:
				"तपाईंले पछिल्लो (गएको/ बितेको) हप्तामा कति घण्टा काम वा स्वयंसेवा मा व्यतित (बिताउनु) गर्नुभयो?",
			kid_label:
				"तपाईंले पछिल्लो (गएको/ बितेको) हप्तामा कति घण्टा काम वा स्वयंसेवा मा व्यतित (बिताउनु) गर्नुभयो?",
			adult_label:
				"पछिल्लो (गएको/ बितेको)  हप्तामा, तपाईंको छोरा वा छोरीले कति घण्टा काम वा स्वयंसेवामा व्यतित गर्नुभयो?",
			choices: [
				{
					label: "दिनको १ घन्टा भन्दा कम",
					value: "Less than 1 hour per day",
				},
				{
					label: "दिनको १ देखि २ घण्टा भन्दा कम",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "दिनको २ देखि ३ घण्टा भन्दा कम",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "दिनको ३ देखि ४ घण्टा भन्दा कम",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "दिनको ४ घण्टा वा बढी",
					value: "4 hours or more per day",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 13",
			label:
				"Na última semana, quantas horas por dia você passou fazendo trabalho voluntário e/ou trabalho remunerado? ",
			kid_label:
				"Na última semana, quantas horas por dia você passou fazendo trabalho voluntário e/ou trabalho remunerado? ",
			adult_label:
				"Na última semana, quantas horas por dia o(a) seu(sua) filho(a) passou fazendo trabalho voluntário e/ou trabalho remunerado?",
			choices: [
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
			heading: "Fråga 13",
			label: "Hur många timmar arbetade du (eller arbetade ideellt) under den senaste veckan?",
			kid_label: "Hur många timmar arbetade du (eller arbetade ideellt) under den senaste veckan?",
			adult_label:
				"Hur många timmar arbetade ditt barn (eller arbetade ideellt) under den senaste veckan?",
			choices: [
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
			heading: "คำถาม 13",
			label: "สัปดาห์ที่แล้ว น้องใช้เวลากับการทำงานและ/หรือเป็นอาสาสมัครวันละกี่ชั่วโมง?",
			kid_label: "สัปดาห์ที่แล้ว น้องใช้เวลากับการทำงานและ/หรือเป็นอาสาสมัครวันละกี่ชั่วโมง?",
			adult_label:
				"สัปดาห์ที่แล้ว บุตรหลานของคุณใช้เวลากับการทำงานและ/หรือเป็นอาสาสมัครวันละกี่ชั่วโมง?",
			choices: [
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
			heading: "问题 13",
			label: "在过去一周里，你做志愿服务和/或工作多长时间？",
			kid_label: "在过去一周里，你做志愿服务和/或工作多长时间？",
			adult_label: "在过去一周里，您的孩子做志愿服务和/或工作有多长时间？",
			choices: [
				{
					label: "每天少于1小时",
					value: "Less than 1 hour per day",
				},
				{
					label: "每天1-2小时 (不含2小时)",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "每天2-3小时 (不含3小时)",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "每天3-4小时 (不含4小时)",
					value: "3 to less than 4 hours per day",
				},
				{
					label: "每天4小时及以上",
					value: "4 hours or more per day",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 13",
			label: "¿Cuántas horas has pasado como voluntario y/o trabajando la semana pasada?",
			kid_label: "¿Cuántas horas has pasado como voluntario y/o trabajando la semana pasada?",
			adult_label:
				"¿Cuántas horas ha pasado su hija o hijo como voluntario y/o trabajando durante la semana pasada?",
			choices: [
				{
					label: "Menos de 1 hora al día",
					value: "Less than 1 hour per day",
				},
				{
					label: "De 1 a menos de 2 horas al día",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "De 2 a menos de 3 horas al día",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "De 3 a menos de 4 horas al día",
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
			heading: "Pregunta 13",
			label: "¿Cuántas horas has pasado como voluntario y/o trabajando en la última semana?",
			kid_label: "¿Cuántas horas has pasado como voluntario y/o trabajando en la última semana?",
			adult_label:
				"¿Cuántas horas ha pasado su hija o hijo como voluntario y/o trabajando en la última semana?",
			choices: [
				{
					label: "Menos de 1 hora al día",
					value: "Less than 1 hour per day",
				},
				{
					label: "De 1 a menos de 2 horas al día",
					value: "1 to less than 2 hours per day",
				},
				{
					label: "De 2 a menos de 3 horas al día",
					value: "2 to less than 3 hours per day",
				},
				{
					label: "De 3 a menos de 4 horas al día",
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
			heading: "Question 13",
			label:
				"Durant la dernière semaine, combien d'heures as-tu passées à faire du bénévolat et/ou à travailler?",
			kid_label:
				"Durant la dernière semaine, combien d'heures as-tu passées à faire du bénévolat et/ou à travailler?",
			adult_label:
				"Durant la dernière semaine, combien d'heures ton enfant a-t-il (elle) passées à faire du bénévolat et/ou à travailler?",
			choices: [
				{
					label: "Moins de 1 heure par jour",
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

export default S3Q2;
