import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S5Q3: LangQuestionRadioPayloadInterface = {
	ident: "organized_3",
	name: "Question 20: On the days that you do these activities during the past week, how long did it usually last?",
	type: Screen.SingleQuestion,
	column_name: "20.0 Orga",
	audio_ident: "organized_3",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 20",
			label:
				"On the days that you do these activities during the past week, how long did it usually last?",
			kid_label:
				"On the days that you do these activities during the past week, how long did it usually last?",
			adult_label:
				"On the days that your child did these activities during the past week, how long did it usually last?",
			choices: [
				{
					label: "30 minutes or less per day",
					value: "30 minutes or less per day",
				},
				{
					label: "31 to 60 minutes per day",
					value: "31 to 60 minutes per day",
				},
				{
					label: "1 to 1 and a half hours per day",
					value: "1 to 1 and a half hours per day",
				},
				{
					label: "More than 1 and a half hours per day",
					value: "More than 1 and a half hours per day",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 20",
			label:
				"On the days that you did these activities during the past week, how long did it usually last?",
			kid_label:
				"On the days that you did these activities during the past week, how long did it usually last?",
			adult_label:
				"On the days that your child did these activities during the past week, how long did it usually last?",
			choices: [
				{
					label: "30 minutes or less per day",
					value: "30 minutes or less per day",
				},
				{
					label: "31 to 60 minutes per day",
					value: "31 to 60 minutes per day",
				},
				{
					label: "1 to 1 and a half hours per day",
					value: "1 to 1 and a half hours per day",
				},
				{
					label: "More than 1 and a half hours per day",
					value: "More than 1 and a half hours per day",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "السؤال 20",
			label: "في الأيام التي قمت فيها بهذه الأنشطة خلال الأسبوع الماضي، كم من الوقت استغرقت عادةً؟",
			kid_label:
				"في الأيام التي قمت فيها بهذه الأنشطة خلال الأسبوع الماضي، كم من الوقت استغرقت عادةً؟",
			adult_label:
				"في الأيام التي قام فيها طفلك بهذه الأنشطة خلال الأسبوع الماضي، كم من الوقت استغرق عادةً؟",
			choices: [
				{
					label: "دقيقة أو أقل في اليوم" + "30",
					value: "30 minutes or less per day",
				},
				{
					label: "ما بين 31 و60 دقيقة في اليوم",
					value: "31 to 60 minutes per day",
				},
				{
					label: "ما بين 1 و1.5 ساعة في اليوم",
					value: "1 to 1 and a half hours per day",
				},
				{
					label: "أكثر من 1.5 ساعة في اليوم",
					value: "More than 1 and a half hours per day",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २०",
			label: "ति दिनमा, सन्गठित क्रियाकलापमा तपाईंले कति समय व्यतित गर्नुभयो?",
			kid_label: "ति दिनमा, सन्गठित क्रियाकलापमा तपाईंले कति समय व्यतित गर्नुभयो?",
			adult_label:
				"पछिल्लो (गएको/ बितेको) हप्ता ति दिनमा, तपाईंको छोरा वा छोरीले सन्गठित क्रियाकलापमा लाग्दा सामान्यतया प्रत्येक दिन कति अवधिसम्मको हुन्थ्यो?",
			choices: [
				{
					label: "प्रति दिन ३० मिनेट वा सोभन्दा कम",
					value: "30 minutes or less per day",
				},
				{
					label: "प्रति दिन ३१-६०मिनेट",
					value: "31 to 60 minutes per day",
				},
				{
					label: "प्रति दिन १-१.५ घन्टा",
					value: "1 to 1 and a half hours per day",
				},
				{
					label: "प्रति दिन १.५ घन्टा भन्दा बढी",
					value: "More than 1 and a half hours per day",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Pergunta 20",
			label:
				"Na última semana, nos dias em que você fez essas atividades quanto tempo geralmente durou?",
			kid_label:
				"Na última semana, nos dias em que você fez essas atividades quanto tempo geralmente durou?",
			adult_label:
				"Na última semana, nos dias em que o(a) seu(sua) filho(a) fez essas atividades quanto tempo geralmente durou?",
			choices: [
				{
					label: "30 minutos ou menos por dia",
					value: "30 minutes or less per day",
				},
				{
					label: "31 - 60 minutos por dia",
					value: "31 to 60 minutes per day",
				},
				{
					label: "De 1 hora até 1h30min por dia",
					value: "1 to 1 and a half hours per day",
				},
				{
					label: "Mais de 1h30min por dia",
					value: "More than 1 and a half hours per day",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 20",
			label:
				"Under de dagar du ägnade dig åt dessa aktiviteter den senaste veckan, hur lång tid varade aktiviteten vanligtvis?",
			kid_label:
				"Under de dagar du ägnade dig åt dessa aktiviteter den senaste veckan, hur lång tid varade aktiviteten vanligtvis?",
			adult_label:
				"Under de dagar ditt barn ägnade sig åt dessa aktiviteter den senaste veckan, hur lång tid varade aktiviteten vanligtvis?",
			choices: [
				{
					label: "30 minuter eller mindre per dag",
					value: "30 minutes or less per day",
				},
				{
					label: "31 till 60 minuter per dag",
					value: "31 to 60 minutes per day",
				},
				{
					label: "1 till 1 och en halv timme per dag",
					value: "1 to 1 and a half hours per day",
				},
				{
					label: "Mer än 1 och en halv timme per dag",
					value: "More than 1 and a half hours per day",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 20",
			label: "สัปดาห์ที่แล้ว น้องใช้เวลาทำกิจกรรมดังกล่าวนานเท่าไหร่?",
			kid_label: "สัปดาห์ที่แล้ว น้องใช้เวลาทำกิจกรรมดังกล่าวนานเท่าไหร่?",
			adult_label: "สัปดาห์ที่แล้ว บุตรหลานของคุณใช้เวลาทำกิจกรรมดังกล่าวนานเท่าไหร่?",
			choices: [
				{
					label: "30 นาทีต่อวันหรือน้อยกว่า",
					value: "30 minutes or less per day",
				},
				{
					label: "31 - 60 นาทีต่อวัน",
					value: "31 to 60 minutes per day",
				},
				{
					label: "1 - 1 ชั่วโมงครึ่งต่อวัน",
					value: "1 to 1 and a half hours per day",
				},
				{
					label: "มากกว่า 1 ชั่วโมงครึ่งต่อวัน",
					value: "More than 1 and a half hours per day",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 20",
			label: "在过去一周里，你通常每天花多长时间做上述这些活动？",
			kid_label: "在过去一周里，你通常每天花多长时间做上述这些活动？",
			adult_label: "在过去一周里，您的孩子做上述这些活动通常每天花多长时间？",
			choices: [
				{
					label: "每天少于或等于30分钟",
					value: "30 minutes or less per day",
				},
				{
					label: "每天31-60分钟",
					value: "31 to 60 minutes per day",
				},
				{
					label: "每天1-1.5小时",
					value: "1 to 1 and a half hours per day",
				},
				{
					label: "每天1.5小时以上",
					value: "More than 1 and a half hours per day",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 20",
			label:
				"En los días que realizaste estas actividades durante la semana pasada, ¿cuánto tiempo duraron por lo general?",
			kid_label:
				"En los días que realizaste estas actividades durante la semana pasada, ¿cuánto tiempo duraron por lo general?",
			adult_label:
				"En los días que su hija o hijo realizó estas actividades durante la semana pasada, ¿cuánto tiempo duraron por lo general?",
			choices: [
				{
					label: "30 minutos o menos al día",
					value: "30 minutes or less per day",
				},
				{
					label: "31 - 60 minutos al día",
					value: "31 to 60 minutes per day",
				},
				{
					label: "1 a 1:30 horas al día",
					value: "1 to 1 and a half hours per day",
				},
				{
					label: "Más de 1:30 horas al día",
					value: "More than 1 and a half hours per day",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 20",
			label:
				"En los días que realizaste estas actividades durante la semana pasada, ¿cuánto tiempo duraron por lo general?",
			kid_label:
				"En los días que realizaste estas actividades durante la semana pasada, ¿cuánto tiempo duraron por lo general?",
			adult_label:
				"En los días que su hija o hijo realizó estas actividades durante la semana pasada, ¿cuánto tiempo duraron por lo general?",
			choices: [
				{
					label: "30 minutos o menos al día",
					value: "30 minutes or less per day",
				},
				{
					label: "31 - 60 minutos al día",
					value: "31 to 60 minutes per day",
				},
				{
					label: "1 a 1:30 horas al día",
					value: "1 to 1 and a half hours per day",
				},
				{
					label: "Más de 1:30 horas al día",
					value: "More than 1 and a half hours per day",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 20",
			label:
				"Lors des journées où tu as fait ces activités au cours de la dernière semaine, combien de temps duraient-elles en général?",
			kid_label:
				"Lors des journées où tu as fait ces activités au cours de la dernière semaine, combien de temps duraient-elles en général?",
			adult_label:
				"Lors des journées où ton enfant a fait ces activités au cours de la dernière semaine, combien de temps duraient-elles en général?",
			choices: [
				{
					label: "30 minutes ou moins par jour",
					value: "30 minutes or less per day",
				},
				{
					label: "31 à 60 minutes par jour",
					value: "31 to 60 minutes per day",
				},
				{
					label: "1 à 1 heure et demie par jour",
					value: "1 to 1 and a half hours per day",
				},
				{
					label: "Plus d'une heure et demie par jour",
					value: "More than 1 and a half hours per day",
				},
			],
		},
	},
};

export default S5Q3;
