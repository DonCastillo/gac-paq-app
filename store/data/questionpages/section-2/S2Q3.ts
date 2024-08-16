import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S2Q3: LangQuestionRadioPayloadInterface = {
	ident: "household_3",
	name: "Question 10: On the days when you did chores during the past week, how much time did you spend doing chores throughout the day?",
	column_name: "10.0 Hous",
	audio_ident: "household_3",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 10",
			label:
				"On the days when you did chores during the past week, how much time did you spend doing chores throughout the day?",
			kid_label:
				"On the days when you did chores during the past week, how much time did you spend doing chores throughout the day?",
			adult_label:
				"On the days when your child did chores during the past week, how much time did they spend doing chores throughout the day?",
			choices: [
				{
					label: "15 minutes or less per day",
					value: "15 minutes or less per day",
				},
				{
					label: "16 - 30 minutes per day",
					value: "16 - 30 minutes per day",
				},
				{
					label: "31 - 60 minutes per day",
					value: "31 - 60 minutes per day",
				},
				{
					label: "Over 60 minutes per day",
					value: "Over 60 minutes per day",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 10",
			label:
				"Under de dagar då du gjorde hushållssysslor den senaste veckan, hur mycket tid tog det då?",
			kid_label:
				"Under de dagar då du gjorde hushållssysslor den senaste veckan, hur mycket tid tog det då?",
			adult_label:
				"Under de dagar då ditt barn gjorde hushållssysslor den senaste veckan, hur mycket tid tog det då?",
			choices: [
				{
					label: "15 minuter eller mindre per dag",
					value: "15 minutes or less per day",
				},
				{
					label: "16 - 30 minuter per dag",
					value: "16 - 30 minutes per day",
				},
				{
					label: "31 - 60 minuter per dag",
					value: "31 - 60 minutes per day",
				},
				{
					label: "Över 60 minuter per dag",
					value: "Over 60 minutes per day",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 10",
			label:
				"สัปดาห์ที่แล้ว น้องใช้เวลาไปกับการทำงานบ้านหรืองานที่ได้รับมอบหมายหน้าที่จากครอบครัวมากน้อยเพียงใดในแต่ละวัน?",
			kid_label:
				"สัปดาห์ที่แล้ว น้องใช้เวลาไปกับการทำงานบ้านหรืองานที่ได้รับมอบหมายหน้าที่จากครอบครัวมากน้อยเพียงใดในแต่ละวัน?",
			adult_label:
				"สัปดาห์ที่แล้ว บุตรหลานของคุณใช้เวลาไปกับการทำงานบ้านหรืองานที่ได้รับมอบหมายหน้าที่จากครอบครัวมากน้อยเพียงใดในแต่ละวัน?",
			choices: [
				{
					label: "15 นาทีหรือน้อยกว่าต่อวัน",
					value: "15 minutes or less per day",
				},
				{
					label: "16 - 30 นาทีต่อวัน",
					value: "16 - 30 minutes per day",
				},
				{
					label: "31 - 60 นาทีต่อวัน",
					value: "31 - 60 minutes per day",
				},
				{
					label: "มากกว่า 60 นาทีต่อวัน",
					value: "Over 60 minutes per day",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 10",
			label: "在过去一周你做家务活的日子里，每天做家务活多长时间？",
			kid_label: "在过去一周你做家务活的日子里，每天做家务活多长时间？",
			adult_label: "在过去一周您的孩子做家务活的日子里，每天做家务活多长时间？",
			choices: [
				{
					label: "每天少于或等于15分钟 ",
					value: "15 minutes or less per day",
				},
				{
					label: "每天16-30 分钟 ",
					value: "16 - 30 minutes per day",
				},
				{
					label: "每天31-60 分钟",
					value: "31 - 60 minutes per day",
				},
				{
					label: "每天 60 分钟以上 ",
					value: "Over 60 minutes per day",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Question 10",
			label:
				"En los días que hiciste tareas del hogar o quehaceres durante la semana pasada, ¿cuánto tiempo pasaste haciéndolas a lo largo del día?",
			kid_label:
				"En los días que hiciste tareas del hogar o quehaceres durante la semana pasada, ¿cuánto tiempo pasaste haciéndolas a lo largo del día?",
			adult_label:
				"En los días que su hija o hijo realizó tareas del hogar o quehaceres durante la semana pasada, ¿cuánto tiempo pasó haciéndolas a lo largo del día?",
			choices: [
				{
					label: "15 minutos o menos al día",
					value: "15 minutes or less per day",
				},
				{
					label: "16 - 30 minutos al día",
					value: "16 - 30 minutes per day",
				},
				{
					label: "31 - 60 minutos al día",
					value: "31 - 60 minutes per day",
				},
				{
					label: "Más de 60 minutos al día",
					value: "Over 60 minutes per day",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 10",
			label:
				"Lors des journées où tu as fait des tâches dans la dernière semaine, combien de temps y as-tu accordé chaque jour?",
			kid_label:
				"Lors des journées où tu as fait des tâches dans la dernière semaine, combien de temps y as-tu accordé chaque jour?",
			adult_label:
				"Lors des journées où ton enfant a fait des tâches dans la dernière semaine, combien de temps y a-t-il (elle) accordé chaque jour?",
			choices: [
				{
					label: "15 minutes ou moins par jour",
					value: "15 minutes or less per day",
				},
				{
					label: "16 - 30 minutes par jour",
					value: "16 - 30 minutes per day",
				},
				{
					label: "31 - 60 minutes par jour",
					value: "31 - 60 minutes per day",
				},
				{
					label: "Plus de 60 minutes par jour",
					value: "Over 60 minutes per day",
				},
			],
		},
	},
};

export default S2Q3;
