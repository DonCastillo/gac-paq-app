import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S4Q9: LangQuestionRadioPayloadInterface = {
	ident: "transportation_9",
	name: "Question 17c: On a normal day, how much time did you walk to places other than school or work?",
	column_name: "17.C Tran",
	audio_ident: "transportation_9",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 17c",
			label: "On a normal day, how much time did you walk to places other than school or work?",
			kid_label: "On a normal day, how much time did you walk to places other than school or work?",
			adult_label:
				"On a normal day, how much time did your child walk to places other than school or work?",
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
			heading: "Fråga 17c",
			label:
				"Hur mycket tid spenderade du på att gå till andra ställen än skolan eller arbetet under en vanlig dag den senaste veckan?",
			kid_label:
				"Hur mycket tid spenderade du på att gå till andra ställen än skolan eller arbetet under en vanlig dag den senaste veckan?",
			adult_label:
				"Hur mycket tid spenderade ditt barn på att gå till andra ställen än skolan eller arbetet under en vanlig dag den senaste veckan?",
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
			heading: "คำถาม 17c",
			label:
				"โดยปกติ น้องใช้เวลานานเท่าไหร่ในการเดิน เพื่อเดินทางไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงาน?",
			kid_label:
				"โดยปกติ น้องใช้เวลานานเท่าไหร่ในการเดิน เพื่อเดินทางไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงาน?",
			adult_label:
				"โดยปกติ บุตรหลานของคุณใช้เวลานานเท่าไหร่ในการเดิน เพื่อเดินทางไปยังสถานที่อื่นที่ไม่ใช่โรงเรียนหรือที่ทำงาน?",
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
			heading: "问题 17c",
			label: "平日里，除了上学或工作，你步行或骑自行车去其他地方要花多长时间? ",
			kid_label: "平日里，除了上学或工作，你步行或骑自行车去其他地方要花多长时间? ",
			adult_label: "平日里，除了上学或工作，您的孩子步行或骑自行车去其他地方要花多长时间?",
			choices: [
				{
					label: "少于或等于10分钟 ",
					value: "10 minutes or less",
				},
				{
					label: "11-20分钟",
					value: "11 - 20 minutes",
				},
				{
					label: "21-30分钟 ",
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
			heading: "Pregunta 17c",
			label:
				"En un día normal ¿Cuánto tiempo caminaste para llegar a lugares distintos al trabajo, la escuela o el colegio?",
			kid_label:
				"En un día normal ¿Cuánto tiempo caminaste para llegar a lugares distintos al trabajo, la escuela o el colegio?",
			adult_label:
				"En un día normal ¿Cuánto tiempo caminó para llegar a lugares distintos al trabajo, escuela o colegio?",
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
			heading: "Question 17c",
			label:
				" Lors d'une journée normale, combien de temps as-tu marché pour aller à des endroits autres que l'école ou le travail? ",
			kid_label:
				" Lors d'une journée normale, combien de temps as-tu marché pour aller à des endroits autres que l'école ou le travail? ",
			adult_label:
				"Lors d'une journée normale, combien de temps ton enfant a-t-il (elle) marché [roulé] pour aller à des endroits autres que l'école ou le travail?",
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

export default S4Q9;
