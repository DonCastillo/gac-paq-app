import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S1Q4: LangQuestionRadioPayloadInterface = {
	ident: "school_4",
	name: "Question 4: How long are your physical education classes?",
	column_name: "04.0 Scho",
	audio_ident: "school_4",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 4",
			label: "How long are your physical education classes?",
			kid_label: "How long are your physical education classes?",
			adult_label: "How long are your child's physical education classes?",
			choices: [
				{
					label: "Less than 30 minutes per class",
					value: "Less than 30 minutes per class",
				},
				{
					label: "30 - 45 minutes per class",
					value: "30 - 45 minutes per class",
				},
				{
					label: "46 - 60 minutes per class",
					value: "46 - 60 minutes per class",
				},
				{
					label: "Over 60 minutes per class",
					value: "Over 60 minutes per class",
				},
				{
					label: "Don't know",
					value: "Don't know",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 4",
			label: "Hur långa är dina idrottslektioner?",
			kid_label: "Hur långa är dina idrottslektioner?",
			adult_label: "Hur långa är ditt barns idrottslektioner?",
			choices: [
				{
					label: "Mindre än 30 minuter per lektion",
					value: "Less than 30 minutes per class",
				},
				{
					label: "30-45 minuter per lektion",
					value: "30 - 45 minutes per class",
				},
				{
					label: "46-60 minuter per lektion",
					value: "46 - 60 minutes per class",
				},
				{
					label: "Över 60 minuter per lektion",
					value: "Over 60 minutes per class",
				},
				{
					label: "Vet ej",
					value: "Don't know",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 4",
			label: "วิชาพลศึกษาของน้องใช้เวลาเรียนนานเท่าไหร่?",
			kid_label: "วิชาพลศึกษาของน้องใช้เวลาเรียนนานเท่าไหร่?",
			adult_label: "วิชาพลศึกษาของบุตรหลานของคุณใช้เวลาเรียนนานเท่าไหร่?",
			choices: [
				{
					label: "น้อยกว่า 30 นาทีต่อคาบ",
					value: "Less than 30 minutes per class",
				},
				{
					label: "30 - 45 นาทีต่อคาบ",
					value: "30 - 45 minutes per class",
				},
				{
					label: "46 - 60 นาทีต่อคาบ",
					value: "46 - 60 minutes per class",
				},
				{
					label: "มากกว่า 60 นาทีต่อคาบ",
					value: "Over 60 minutes per class",
				},
				{
					label: "ไม่ทราบ",
					value: "Don't know",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 4",
			label: "你上的体育课一节有多长时间？",
			kid_label: "你上的体育课一节有多长时间？",
			adult_label: "您孩子上的体育课一节有多长时间？",
			choices: [
				{
					label: "每节课少于30分钟",
					value: "Less than 30 minutes per class",
					label_mode: {
						kid: "每节课少于30分钟",
						adult: "每节课少于30分钟 (不含30分钟)",
					},
				},
				{
					label: "每节课30-45分钟",
					value: "30 - 45 minutes per class",
				},
				{
					label: "每节课46-60分钟",
					value: "46 - 60 minutes per class",
				},
				{
					label: "每节课60分钟以上",
					value: "Over 60 minutes per class",
				},
				{
					label: "不知道",
					value: "Don't know",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Question 4",
			label: "¿Cuánto tiempo duran tus clases de educación física?",
			kid_label: "¿Cuánto tiempo duran tus clases de educación física?",
			adult_label: "¿Cuánto tiempo duran las clases de educación física de su hija o hijo?",
			choices: [
				{
					label: "Menos de 30 minutos por clase",
					value: "Less than 30 minutes per class",
				},
				{
					label: "30 - 45 minutos por clase",
					value: "30 - 45 minutes per class",
				},
				{
					label: "46 - 60 minutos por clase",
					value: "46 - 60 minutes per class",
				},
				{
					label: "Más de 60 minutos por clase",
					value: "Over 60 minutes per class",
				},
				{
					label: "No sé",
					value: "Don't know",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 4",
			label: "Combien de temps durent tes cours d'éducation physique?",
			kid_label: "Combien de temps durent tes cours d'éducation physique?",
			adult_label: "Combien de temps durent les cours d'éducation physique de ton enfant?",
			choices: [
				{
					label: "Moins de 30 minutes par cours",
					value: "Less than 30 minutes per class",
				},
				{
					label: "30 - 45 minutes par cours",
					value: "30 - 45 minutes per class",
				},
				{
					label: "46 - 60 minutes par cours",
					value: "46 - 60 minutes per class",
				},
				{
					label: "Plus de 60 minutes par cours",
					value: "Over 60 minutes per class",
				},
				{
					label: "Je ne sais pas",
					value: "Don't know",
				},
			],
		},
	},
};

export default S1Q4;
