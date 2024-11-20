import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S2Q1: LangQuestionRadioPayloadInterface = {
	ident: "household_1",
	name: "Question 8: In the past week, did you do any active chores or tasks?",
	column_name: "08.0 Hous",
	audio_ident: "household_1",
	audio_autoplay: true,
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 8",
			label: "In the past week, did you do any active chores or tasks?",
			kid_label: "In the past week, did you do any active chores or tasks?",
			adult_label: "In the past week, did your child do active chores or tasks?",
			choices: [
				{
					label: "Yes",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 8",
			label: "¿Realizaste tareas domésticas o quehaceres activos la semana pasada?",
			kid_label: "¿Realizaste tareas domésticas o quehaceres activos la semana pasada?",
			adult_label:
				"¿Realizó su hija o hijo tareas domésticas o quehaceres activos la semana pasada?",
			choices: [
				{
					label: "Sí",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 8",
			label: "In the past week, did you do any active chores or tasks?",
			kid_label: "In the past week, did you do any active chores or tasks?",
			adult_label: "In the past week, did your child do active chores or tasks?",
			choices: [
				{
					label: "Yes",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 8",
			label: "In the past week, did you do any active chores or tasks?",
			kid_label: "In the past week, did you do any active chores or tasks?",
			adult_label: "In the past week, did your child do active chores or tasks?",
			choices: [
				{
					label: "Yes",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 8",
			label: "M’sabata yapitayi, kodi unagwirapo ntchito zapakhomo?",
			kid_label: "M’sabata yapitayi, kodi unagwirapo ntchito zapakhomo?",
			adult_label: "M’sabata yapitayi, kodi mwana wanu anagwirapo ntchito zapakhomo?",
			choices: [
				{
					label: "Eya",
					value: "yes",
				},
				{
					label: "Ayi",
					value: "no",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न ८",
			label: "गेल्या आठवड्यात तुम्ही घरातील नेहमीची कामे केलीत का?",
			kid_label: "गेल्या आठवड्यात तुम्ही घरातील नेहमीची कामे केलीत का?",
			adult_label: "गेल्या आठवड्यात तुमच्या मुलाने घरातील नेहमीची कामे केली का?",
			choices: [
				{
					label: "होय",
					value: "yes",
				},
				{
					label: "नाही",
					value: "no",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न ८",
			label: "पिछले सप्ताह में, क्या आपने सक्रिय घरेलू कामकाज या कार्य किए?",
			kid_label: "पिछले सप्ताह में, क्या आपने सक्रिय घरेलू कामकाज या कार्य किए?",
			adult_label: "पिछले सप्ताह में, क्या आपके बच्चे ने सक्रिय घरेलू कामकाज या कार्य किए?",
			choices: [
				{
					label: "हाँ",
					value: "yes",
				},
				{
					label: "नहीं",
					value: "no",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 8",
			label: "In the past week, did you do active chores or tasks?",
			kid_label: "In the past week, did you do active chores or tasks?",
			adult_label: "In the past week, did your child do active chores or tasks?",
			choices: [
				{
					label: "Yes",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "السؤال 8",
			label: "خلال الأسبوع الماضي، هل قمت بأعمال منزلية أو مهام تتطلّب منك النشاط البدني؟",
			kid_label: "خلال الأسبوع الماضي، هل قمت بأعمال منزلية أو مهام تتطلّب منك النشاط البدني؟",
			adult_label:
				"خلال الأسبوع الماضي، هل قام طفلك بأعمال منزلية أو مهام تتطلّب منه النشاط البدني؟",
			choices: [
				{
					label: "نعم",
					value: "yes",
				},
				{
					label: "لا",
					value: "no",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न ८",
			label: "पछिल्लो (गएको/ बितेको) हप्तामा के तपाईंले सक्रिय हुने घरायसी कामकाज गर्नुभयो?",
			kid_label: "पछिल्लो (गएको/ बितेको) हप्तामा के तपाईंले सक्रिय हुने घरायसी कामकाज गर्नुभयो?",
			adult_label:
				"पछिल्लो (गएको/ बितेको) हप्तामा के तपाईंको छोरा वा छोरीले सक्रिय हुने घरायसी कामकाज गर्नुभयो?",
			choices: [
				{
					label: "गरे",
					value: "yes",
				},
				{
					label: "गरिनँ",
					value: "no",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 8",
			label: "Na última semana, você realizou ativamente atividades ou tarefas domésticas?",
			kid_label: "Na última semana, você realizou ativamente atividades ou tarefas domésticas?",
			adult_label:
				"Na última semana, a criança ou adolescente que você é responsável realizou ativamente atividades ou tarefas domésticas?",
			choices: [
				{
					label: "Sim",
					value: "yes",
				},
				{
					label: "Não",
					value: "no",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 8",
			label:
				"Har du gjort några aktiva hushållssysslor eller uppgifter i hemmet under den senaste veckan?",
			kid_label:
				"Har du gjort några aktiva hushållssysslor eller uppgifter i hemmet under den senaste veckan?",
			adult_label:
				"Har ditt barn gjort några aktiva hushållssysslor eller uppgifter i hemmet under den senaste veckan?",
			choices: [
				{
					label: "Ja",
					value: "yes",
				},
				{
					label: "Nej",
					value: "no",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 8",
			label:
				"สัปดาห์ที่แล้ว น้องได้ทำงานบ้านหรือทำงานที่ได้รับมอบหมายหน้าที่จากครอบครัวที่ต้องออกแรงบ้างหรือไม่?",
			kid_label:
				"สัปดาห์ที่แล้ว น้องได้ทำงานบ้านหรือทำงานที่ได้รับมอบหมายหน้าที่จากครอบครัวที่ต้องออกแรงบ้างหรือไม่?",
			adult_label:
				"สัปดาห์ที่แล้ว บุตรหลานของคุณได้ทำงานบ้านหรือทำงานที่ได้รับมอบหมายหน้าที่จากครอบครัวที่ต้องออกแรงบ้างหรือไม่?",
			choices: [
				{
					label: "ใช่ ได้ทำ",
					value: "yes",
				},
				{
					label: "ไม่ ไม่ได้ทำ",
					value: "no",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 8",
			label: "在过去一周里，你有参与做家务活吗？",
			kid_label: "在过去一周里，你有参与做家务活吗？",
			adult_label: "在过去一周里，您的孩子有参与做家务活吗？",
			choices: [
				{
					label: "是",
					value: "yes",
				},
				{
					label: "否",
					value: "no",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 8",
			label: "¿Realizaste tareas del hogar o quehaceres activos la semana pasada?",
			kid_label: "¿Realizaste tareas del hogar o quehaceres activos la semana pasada?",
			adult_label:
				"¿Realizó su hija o hijo tareas del hogar o quehaceres activos la semana pasada?",
			choices: [
				{
					label: "Sí",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 8",
			label: "¿Realizaste tareas del hogar o quehaceres activos la semana pasada?",
			kid_label: "¿Realizaste tareas del hogar o quehaceres activos la semana pasada?",
			adult_label:
				"En la última semana ¿realizó su hija o hijo tareas del hogar o quehaceres activos?",
			choices: [
				{
					label: "Sí",
					value: "yes",
				},
				{
					label: "No",
					value: "no",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 8",
			label: "Au cours de la dernière semaine, as-tu effectué des tâches actives?",
			kid_label: "Au cours de la dernière semaine, as-tu effectué des tâches actives?",
			adult_label:
				"Au cours de la dernière semaine, ton enfant a-t-il (elle) effectué des tâches actives?",
			choices: [
				{
					label: "Oui",
					value: "yes",
				},
				{
					label: "Non",
					value: "no",
				},
			],
		},
	},
};

export default S2Q1;
