import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const GSHS2: LangQuestionRadioPayloadInterface = {
	ident: "gshs_2",
	name: "Question 26: During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
	column_name: "GSHS 02",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 26",
			label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
			kid_label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
			adult_label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
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
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २६",
			label:
				"गत ७ दिनको अवधिमा, कति दिन तपाईंले मांसपेशी सुदृढीकरण वा टोनिङ अभ्यासहरू जस्तै पुश–अप, सीट–अप, वा वजन उठाउने गर्नुभयो",
			kid_label:
				"गत ७ दिनको अवधिमा, कति दिन तपाईंले मांसपेशी सुदृढीकरण वा टोनिङ अभ्यासहरू जस्तै पुश–अप, सीट–अप, वा वजन उठाउने गर्नुभयो ",
			adult_label:
				"गत ७ दिनको अवधिमा, कति दिन तपाईंले मांसपेशी सुदृढीकरण वा टोनिङ अभ्यासहरू जस्तै पुश–अप, सीट–अप, वा वजन उठाउने गर्नुभयो",
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
			heading: "ข้อ 26",
			label:
				"ในระหว่าง 7 วันที่ผ่านมา นักเรียนออกกำลังกายเพื่อให้กล้ามเนื้อแข็งแรง เช่น วิดพื้น ลุก-นั่ง หรือยกน้ำหนัก จำนวนกี่วัน",
			kid_label:
				"ในระหว่าง 7 วันที่ผ่านมา นักเรียนออกกำลังกายเพื่อให้กล้ามเนื้อแข็งแรง เช่น วิดพื้น ลุก-นั่ง หรือยกน้ำหนัก จำนวนกี่วัน",
			adult_label:
				"ในระหว่าง 7 วันที่ผ่านมา นักเรียนออกกำลังกายเพื่อให้กล้ามเนื้อแข็งแรง เช่น วิดพื้น ลุก-นั่ง หรือยกน้ำหนัก จำนวนกี่วัน",
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
			heading: "Questão 26",
			label:
				"Durante os últimos 7 dias, quantos dias você fez exercícios para melhorar o tônus e a força dos seus músculos, tais como flexões de braço, abdominais ou levantamento de peso?",
			kid_label:
				"Durante os últimos 7 dias, quantos dias você fez exercícios para melhorar o tônus e a força dos seus músculos, tais como flexões de braço, abdominais ou levantamento de peso?",
			adult_label:
				"Durante os últimos 7 dias, quantos dias você fez exercícios para melhorar o tônus e a força dos seus músculos, tais como flexões de braço, abdominais ou levantamento de peso?",
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
			heading: "Pregunta 26",
			label:
				"Durante los últimos 7 días, ¿cuántos días hiciste ejercicio para fortalecer o tonificar tus músculos, como flexiones, sentadillas o levantar pesas?",
			kid_label:
				"Durante los últimos 7 días, ¿cuántos días hiciste ejercicio para fortalecer o tonificar tus músculos, como flexiones, sentadillas o levantar pesas?",
			adult_label:
				"Durante los últimos 7 días, ¿cuántos días hiciste ejercicio para fortalecer o tonificar tus músculos, como flexiones, sentadillas o levantar pesas?",
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
			heading: "Question 26",
			label:
				"Au cours des 7 derniers jours, combien de jours as-tu fait des exercices pour renforcer ou tonifier tes muscles, comme des pompes (push-ups), des redressements assis (sit-ups) ou des poids et haltères (weights)?",
			kid_label:
				"Au cours des 7 derniers jours, combien de jours as-tu fait des exercices pour renforcer ou tonifier tes muscles, comme des pompes (push-ups), des redressements assis (sit-ups) ou des poids et haltères (weights)?",
			adult_label:
				"Au cours des 7 derniers jours, combien de jours as-tu fait des exercices pour renforcer ou tonifier tes muscles, comme des pompes (push-ups), des redressements assis (sit-ups) ou des poids et haltères (weights)?",
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
			heading: "Pregunta 26",
			label:
				"Durante los últimos 7 días, ¿cuántos días hiciste ejercicio para fortalecer o tonificar tus músculos, como lagartijas, sentadillas o levantar pesas?",
			kid_label:
				"Durante los últimos 7 días, ¿cuántos días hiciste ejercicio para fortalecer o tonificar tus músculos, como lagartijas, sentadillas o levantar pesas?",
			adult_label:
				"Durante los últimos 7 días, ¿cuántos días hiciste ejercicio para fortalecer o tonificar tus músculos, como lagartijas, sentadillas o levantar pesas?",
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
			heading: "Pregunta 26",
			label:
				"Durante los últimos 7 días, ¿cuántos días hiciste ejercicio para fortalecer o tonificar tus músculos, como lagartijas, sentadillas o levantar pesas?",
			kid_label:
				"Durante los últimos 7 días, ¿cuántos días hiciste ejercicio para fortalecer o tonificar tus músculos, como lagartijas, sentadillas o levantar pesas?",
			adult_label:
				"Durante los últimos 7 días, ¿cuántos días hiciste ejercicio para fortalecer o tonificar tus músculos, como lagartijas, sentadillas o levantar pesas?",
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
			heading: "Question 26",
			label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
			kid_label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
			adult_label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
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
			heading: "Question 26",
			label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
			kid_label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
			adult_label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
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
			heading: "Question 26",
			label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
			kid_label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
			adult_label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
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
			heading: "Question 26",
			label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
			kid_label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
			adult_label:
				"During the past 7 days, on how many days did you do exercises to strengthen or tone your muscles, such as push-ups, sit-ups, or weightlifting?",
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
			heading: "سؤال [٢٦]",
			label:
				"خلال السبعة أيام الماضية، كم يومًا تمرنت فيه لتقوية عضلاتك أو ضبطها، مثل تمارين الضغط، أو البطن أو رفع الأثقال؟",
			kid_label:
				"خلال السبعة أيام الماضية، كم يومًا تمرنت فيه لتقوية عضلاتك أو ضبطها، مثل تمارين الضغط، أو البطن أو رفع الأثقال؟",
			adult_label:
				"خلال السبعة أيام الماضية، كم يومًا تمرنت فيه لتقوية عضلاتك أو ضبطها، مثل تمارين الضغط، أو البطن أو رفع الأثقال؟",
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
			heading: "Fråga 26",
			label:
				"Hur många dagar gjorde du övningar som stärker dina muskler, till exempel armhävningar, sit-ups eller styrketränade under de senaste 7 dagarna?",
			kid_label:
				"Hur många dagar gjorde du övningar som stärker dina muskler, till exempel armhävningar, sit-ups eller styrketränade under de senaste 7 dagarna?",
			adult_label:
				"Hur många dagar gjorde du övningar som stärker dina muskler, till exempel armhävningar, sit-ups eller styrketränade under de senaste 7 dagarna?",
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
			heading: "问题 26",
			label: "在过去7天里，有多少天你进行了加强或锻炼肌肉的运动，比如俯卧撑、仰卧起坐或举重？",
			kid_label: "在过去7天里，有多少天你进行了加强或锻炼肌肉的运动，比如俯卧撑、仰卧起坐或举重？",
			adult_label:
				"在过去7天里，有多少天你进行了加强或锻炼肌肉的运动，比如俯卧撑、仰卧起坐或举重？",
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

export default GSHS2;
