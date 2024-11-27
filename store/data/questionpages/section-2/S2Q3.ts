import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const S2Q3: LangQuestionRadioPayloadInterface = {
	ident: "household_3",
	name: "Question 10: On the days when you did chores during the past week, how much time did you spend doing chores throughout the day?",
	column_name: "10.0 Hous",
	audio_ident: "household_3",
	audio_autoplay: true,
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
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 10",
			label:
				"En los días que hiciste tareas domésticas durante la semana pasada, ¿cuánto tiempo pasaste haciéndolas a lo largo del día?",
			kid_label:
				"En los días que hiciste tareas domésticas durante la semana pasada, ¿cuánto tiempo pasaste haciéndolas a lo largo del día?",
			adult_label:
				"En los días que su hija o hijo hizo tareas domésticas durante la semana pasada, ¿cuánto tiempo pasó haciéndolas a lo largo del día?",
			choices: [
				{
					label: "15 minutos o menos por día",
					value: "15 minutes or less per day",
				},
				{
					label: "16 - 30 minutos por día",
					value: "16 - 30 minutes per day",
				},
				{
					label: "31 - 60 minutos por día",
					value: "31 - 60 minutes per day",
				},
				{
					label: "61 - 90 minutos por día",
					value: "61 - 90 minutes per day",
				},
				{
					label: "91 minutos o más por día",
					value: "91 minutes or more per day",
				},
			],
		},
		"en-MW": {
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
		"en-NG": {
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
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 10",
			label:
				"Pa masiku amene unagwira ntchito zapakhomo sabata yapitayi, kodi zinakutengera nthawi yaitali bwanji kugwira ntchitozi pa tsiku lonse?",
			kid_label:
				"Pa masiku amene unagwira ntchito zapakhomo sabata yapitayi, kodi zinakutengera nthawi yaitali bwanji kugwira ntchitozi pa tsiku lonse?",
			adult_label:
				"Kodi pa masiku amene mwana wanu anagwira ntchito zapakhomo m’sabata yapitayi, kodi zinamutengera nthawi yaitali bwanji kugwira ntchitozo pa tsiku lonse?",
			choices: [
				{
					label: "15 minitsi kapena osakwana patsiku",
					value: "15 minutes or less per day",
				},
				{
					label: "Pakati pa 16 ndi 30 minitsi pa tsiku",
					value: "16 - 30 minutes per day",
				},
				{
					label: "Pakati pa 31 ndi 60 minitsi pa tsiku",
					value: "31 - 60 minutes per day",
				},
				{
					label: "Kupitilira 60 minutes pa tsiku",
					value: "Over 60 minutes per day",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १०",
			label:
				"गेल्या आठवड्यादरम्यान तुम्ही ज्या दिवशी घरातील नेहमीची कामे केलीत, त्यावेळी तुम्ही दिवसभरात ही कामे करण्यात किती वेळ घालवलात?",
			kid_label:
				"गेल्या आठवड्यादरम्यान तुम्ही ज्या दिवशी घरातील नेहमीची कामे केलीत, त्यावेळी तुम्ही दिवसभरात ही कामे करण्यात किती वेळ घालवलात?",
			adult_label:
				"गेल्या आठवड्यात तुमच्या मुलाने ज्या दिवशी घरातील नेहमीची कामे केलीत, त्यावेळी त्याने/ तिने दिवसभरात ही कामे करण्यात किती वेळ घालवला?",
			choices: [
				{
					label: "दररोज १५ मिनिटे किंवा त्यापेक्षा कमी",
					value: "15 minutes or less per day",
				},
				{
					label: "दररोज १६ - ३० मिनिटे",
					value: "16 - 30 minutes per day",
				},
				{
					label: "दररोज ३१ - ६० मिनिटे",
					value: "31 - 60 minutes per day",
				},
				{
					label: "दररोज ६० मिनिटांहून अधिक",
					value: "Over 60 minutes per day",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १०",
			label:
				"पिछले सप्ताह के दौरान जिन दिनों आपने घरेलू कामकाज किए, आपने पूरे दिन में काम करने में कितना समय बिताया?",
			kid_label:
				"पिछले सप्ताह के दौरान जिन दिनों आपने घरेलू कामकाज किए, आपने पूरे दिन में काम करने में कितना समय बिताया?",
			adult_label:
				"पिछले सप्ताह के दौरान जिन दिनों आपके बच्चे ने घरेलू कामकाज किए, उन्होंने पूरे दिन में घरेलू काम करने में कितना समय बिताया?",
			choices: [
				{
					label: "रति दिन 15 मिनट या उससे कम",
					value: "15 minutes or less per day",
				},
				{
					label: "प्रतिदिन 16 - 30 मिनट",
					value: "16 - 30 minutes per day",
				},
				{
					label: "प्रतिदिन 31 - 60 मिनट",
					value: "31 - 60 minutes per day",
				},
				{
					label: "प्रति दिन 60 मिनट से अधिक",
					value: "Over 60 minutes per day",
				},
			],
		},
		"en-AE": {
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
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [١٠]",
			label:
				"في الأيام التي قمت فيها بالأعمال المنزلية خلال الأسبوع الماضي، كم من الوقت تطلّب منك بالقيام بتلك الأعمال طوال اليوم؟",
			kid_label:
				"في الأيام التي قمت فيها بالأعمال المنزلية خلال الأسبوع الماضي، كم من الوقت تطلّب منك بالقيام بتلك الأعمال طوال اليوم؟",
			adult_label:
				"في الأيام التي قام فيها طفلك بالأعمال المنزلية خلال الأسبوع الماضي، كم من الوقت تطلّب منه بالقيام بتلك الأعمال طوال اليوم؟",
			choices: [
				{
					label: "١٥ دقيقة أو أقل في اليوم",
					value: "15 minutes or less per day",
				},
				{
					label: "‌ما بين ١٦ و٣٠ دقيقة في اليوم",
					value: "16 - 30 minutes per day",
				},
				{
					label: "‌ما بين ٣١ و٦٠ دقيقة في اليوم",
					value: "31 - 60 minutes per day",
				},
				{
					label: "‌أكثر من ٦٠ دقيقة في اليوم",
					value: "Over 60 minutes per day",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न १०",
			label:
				"तपाईंले पछिल्लो (गएको/ बितेको) हप्ता काम गरेका दिनहरुमध्ये प्रत्येक दिन घरायसी कामकाजमा कति समय व्यतित् गर्नुभयो?",
			kid_label:
				"तपाईंले पछिल्लो (गएको/ बितेको) हप्ता काम गरेका दिनहरुमध्ये प्रत्येक दिन घरायसी कामकाजमा कति समय व्यतित् गर्नुभयो?",
			adult_label:
				"तपाईंको छोरा वा छोरीले पछिल्लो हप्ता काम गरेका दिनहरुमध्ये प्रत्येक दिन सो घरायसी काममा कति समय व्यतित गर्नुभयो?",
			choices: [
				{
					label: "प्रत्येक दिन १५ मिनेट वा सो भन्दा कम",
					value: "15 minutes or less per day",
				},
				{
					label: "प्रत्येक दिन १६-३० मिनेट",
					value: "16 - 30 minutes per day",
				},
				{
					label: "प्रत्येक दिन ३१-६० मिनेट",
					value: "31 - 60 minutes per day",
				},
				{
					label: "प्रत्येक दिन ६० मिनेटभन्दा बढी",
					value: "Over 60 minutes per day",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 10",
			label:
				"Na última semana, nos dias em que você fez atividades ou tarefas domésticas quanto tempo você gastou fazendo essas atividades ou tarefas domésticas ao longo do dia?",
			kid_label:
				"Na última semana, nos dias em que você fez atividades ou tarefas domésticas quanto tempo você gastou fazendo essas atividades ou tarefas domésticas ao longo do dia?",
			adult_label:
				"Na última semana, nos dias em que a criança ou adolescente que você é responsável fez atividades ou tarefas domésticas quanto tempo ele ou ela gastou fazendo essas atividades ou tarefas domésticas ao longo do dia?",
			choices: [
				{
					label: "15 minutos ou menos por dia",
					value: "15 minutes or less per day",
				},
				{
					label: "16 - 30 minutos por dia",
					value: "16 - 30 minutes per day",
				},
				{
					label: "31 - 60 minutos por dia",
					value: "31 - 60 minutes per day",
				},
				{
					label: "Mais de 60 minutos por dia",
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
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 10",
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
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 10",
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
