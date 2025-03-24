import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const GSHS5: LangQuestionRadioPayloadInterface = {
	ident: "gshs_5",
	name: "Question 29: How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as COUNTRY SPECIFIC EXAMPLES?",
	column_name: "GSHS 05",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as video games and reading?",
			kid_label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as video games and reading?",
			adult_label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as video games and reading?",
			choices: [
				{
					label: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 to 2 hours per day",
					value: "1 to 2 hours per day",
				},
				{
					label: "3 to 4 hours per day",
					value: "3 to 4 hours per day",
				},
				{
					label: "5 to 6 hours per day",
					value: "5 to 6 hours per day",
				},
				{
					label: "7 to 8 hours per day",
					value: "7 to 8 hours per day",
				},
				{
					label: "More than 8 hours per day",
					value: "More than 8 hours per day",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "ข้อ 29",
			label:
				"โดยปกติในแต่ละวันในการนั่งดูโทรทัศน์  นั่งเล ่นเกมคอมพิวเตอร์  นั่งทางานโดยใช้โซเชี่ยลเนตเวิร์คนั่งคุยกับเพื่อน นั่งอ่านหนังสือ หรือนั่งคุยโทรศัพท์ฯลฯ นักเรียนใช้เวลาเท่าไร",
			kid_label:
				"โดยปกติในแต่ละวันในการนั่งดูโทรทัศน์  นั่งเล ่นเกมคอมพิวเตอร์  นั่งทางานโดยใช้โซเชี่ยลเนตเวิร์คนั่งคุยกับเพื่อน นั่งอ่านหนังสือ หรือนั่งคุยโทรศัพท์ฯลฯ นักเรียนใช้เวลาเท่าไร",
			adult_label:
				"โดยปกติในแต่ละวันในการนั่งดูโทรทัศน์  นั่งเล ่นเกมคอมพิวเตอร์  นั่งทางานโดยใช้โซเชี่ยลเนตเวิร์คนั่งคุยกับเพื่อน นั่งอ่านหนังสือ หรือนั่งคุยโทรศัพท์ฯลฯ นักเรียนใช้เวลาเท่าไร",
			choices: [
				{
					label: "น้อยกว่า 1 ชั่วโมง ต่อวัน",
					value: "Less than 1 hour per day",
				},
				{
					label: "1-2 ชั่วโมง ต่อวัน",
					value: "1 to 2 hours per day",
				},
				{
					label: "3-4 ชั่วโมง ต่อวัน",
					value: "3 to 4 hours per day",
				},
				{
					label: "5-6 ชั่วโมง ต่อวัน",
					value: "5 to 6 hours per day",
				},
				{
					label: "7-8 ชั่วโมง ต่อวัน",
					value: "7 to 8 hours per day",
				},
				{
					label: "มากกว่า 8 ชั่วโมง ต่อวัน",
					value: "More than 8 hours per day",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 29",
			label:
				"Em um dia típico (normal), quanto tempo você gasta sentado, assistindo televisão, jogando no computador, conversando com amigos, usando o Tablet, usando o celular/iPhone/smartphone ou realizando outras atividades sentado, como jogar cartas ou dominó?",
			kid_label:
				"Em um dia típico (normal), quanto tempo você gasta sentado, assistindo televisão, jogando no computador, conversando com amigos, usando o Tablet, usando o celular/iPhone/smartphone ou realizando outras atividades sentado, como jogar cartas ou dominó?",
			adult_label:
				"Em um dia típico (normal), quanto tempo você gasta sentado, assistindo televisão, jogando no computador, conversando com amigos, usando o Tablet, usando o celular/iPhone/smartphone ou realizando outras atividades sentado, como jogar cartas ou dominó?",
			choices: [
				{
					label: "Menos de 1 hora por dia",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 a 2 horas por dia",
					value: "1 to 2 hours per day",
				},
				{
					label: "3 a 4 horas por dia",
					value: "3 to 4 hours per day",
				},
				{
					label: "5 a 6 horas por dia",
					value: "5 to 6 hours per day",
				},
				{
					label: "7 a 8 horas por dia",
					value: "7 to 8 hours per day",
				},
				{
					label: "Mais de 8 horas por dia",
					value: "More than 8 hours per day",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 29",
			label:
				"Durante un día típico o normal, ¿cuánto tiempo pasas sentado viendo la televisión, jugando a juegos en el ordenador, conversando con amigos o haciendo otras cosas que exigen permanecer sentado, como usar el móvil? ",
			kid_label:
				"Durante un día típico o normal, ¿cuánto tiempo pasas sentado viendo la televisión, jugando a juegos en el ordenador, conversando con amigos o haciendo otras cosas que exigen permanecer sentado, como usar el móvil? ",
			adult_label:
				"Durante un día típico o normal, ¿cuánto tiempo pasas sentado viendo la televisión, jugando a juegos en el ordenador, conversando con amigos o haciendo otras cosas que exigen permanecer sentado, como usar el móvil? ",
			choices: [
				{
					label: "Menos de 1 hora al día",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 a 2 horas al día",
					value: "1 to 2 hours per day",
				},
				{
					label: "3 a 4 horas al día",
					value: "3 to 4 hours per day",
				},
				{
					label: "5 a 6 horas al día",
					value: "5 to 6 hours per day",
				},
				{
					label: "7 a 8 horas al día",
					value: "7 to 8 hours per day",
				},
				{
					label: "Más de 8 horas al día",
					value: "More than 8 hours per day",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label:
				"Combien de temps passes-tu assis.e au cours d’une journée normale ou régulière, que ce soit pour regarder la télévision, jouer à l’ordinateur, parler avec des amis, consulter ton cellulaire, ou toute autre activité assise, comme les jeux vidéo et la lecture?",
			kid_label:
				"Combien de temps passes-tu assis.e au cours d’une journée normale ou régulière, que ce soit pour regarder la télévision, jouer à l’ordinateur, parler avec des amis, consulter ton cellulaire, ou toute autre activité assise, comme les jeux vidéo et la lecture?",
			adult_label:
				"Combien de temps passes-tu assis.e au cours d’une journée normale ou régulière, que ce soit pour regarder la télévision, jouer à l’ordinateur, parler avec des amis, consulter ton cellulaire, ou toute autre activité assise, comme les jeux vidéo et la lecture?",
			choices: [
				{
					label: "Moins de 1 heure par jour",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 à 2 heures par jour",
					value: "1 to 2 hours per day",
				},
				{
					label: "3 à 4 heures par jour",
					value: "3 to 4 hours per day",
				},
				{
					label: "5 à 6 heures par jour",
					value: "5 to 6 hours per day",
				},
				{
					label: "7 à 8 heures par jour",
					value: "7 to 8 hours per day",
				},
				{
					label: "Plus de 8 heures par jour",
					value: "More than 8 hours per day",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 29",
			label:
				"Durante un día típico o normal, ¿cuánto tiempo pasas sentado viendo televisión, jugando juegos en la computadora, conversando con amigos o haciendo otras cosas que exigen permanecer sentado, como jugar juegos de video, utilizar el celular, ver videos?",
			kid_label:
				"Durante un día típico o normal, ¿cuánto tiempo pasas sentado viendo televisión, jugando juegos en la computadora, conversando con amigos o haciendo otras cosas que exigen permanecer sentado, como jugar juegos de video, utilizar el celular, ver videos?",
			adult_label:
				"Durante un día típico o normal, ¿cuánto tiempo pasas sentado viendo televisión, jugando juegos en la computadora, conversando con amigos o haciendo otras cosas que exigen permanecer sentado, como jugar juegos de video, utilizar el celular, ver videos?",
			choices: [
				{
					label: "Menos de 1 hora al día",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 a 2 horas al día",
					value: "1 to 2 hours per day",
				},
				{
					label: "3 a 4 horas al día",
					value: "3 to 4 hours per day",
				},
				{
					label: "5 a 6 horas al día",
					value: "5 to 6 hours per day",
				},
				{
					label: "7 a 8 horas al día",
					value: "7 to 8 hours per day",
				},
				{
					label: "Más de 8 horas al día",
					value: "More than 8 hours per day",
				},
			],
		},
		"en-NZ": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as COUNTRY SPECIFIC EXAMPLES?",
			kid_label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as COUNTRY SPECIFIC EXAMPLES?",
			adult_label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as COUNTRY SPECIFIC EXAMPLES?",
			choices: [
				{
					label: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 to 2 hours per day",
					value: "1 to 2 hours per day",
				},
				{
					label: "3 to 4 hours per day",
					value: "3 to 4 hours per day",
				},
				{
					label: "5 to 6 hours per day",
					value: "5 to 6 hours per day",
				},
				{
					label: "7 to 8 hours per day",
					value: "7 to 8 hours per day",
				},
				{
					label: "More than 8 hours per day",
					value: "More than 8 hours per day",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as COUNTRY SPECIFIC EXAMPLES?",
			kid_label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as COUNTRY SPECIFIC EXAMPLES?",
			adult_label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as COUNTRY SPECIFIC EXAMPLES?",
			choices: [
				{
					label: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 to 2 hours per day",
					value: "1 to 2 hours per day",
				},
				{
					label: "3 to 4 hours per day",
					value: "3 to 4 hours per day",
				},
				{
					label: "5 to 6 hours per day",
					value: "5 to 6 hours per day",
				},
				{
					label: "7 to 8 hours per day",
					value: "7 to 8 hours per day",
				},
				{
					label: "More than 8 hours per day",
					value: "More than 8 hours per day",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as COUNTRY SPECIFIC EXAMPLES?",
			kid_label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as COUNTRY SPECIFIC EXAMPLES?",
			adult_label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as COUNTRY SPECIFIC EXAMPLES?",
			choices: [
				{
					label: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 to 2 hours per day",
					value: "1 to 2 hours per day",
				},
				{
					label: "3 to 4 hours per day",
					value: "3 to 4 hours per day",
				},
				{
					label: "5 to 6 hours per day",
					value: "5 to 6 hours per day",
				},
				{
					label: "7 to 8 hours per day",
					value: "7 to 8 hours per day",
				},
				{
					label: "More than 8 hours per day",
					value: "More than 8 hours per day",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as COUNTRY SPECIFIC EXAMPLES?",
			kid_label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as COUNTRY SPECIFIC EXAMPLES?",
			adult_label:
				"How much time do you spend during a typical or usual day sitting and watching television, playing computer games, talking with friends, using your mobile phone, or doing other sitting activities, such as COUNTRY SPECIFIC EXAMPLES?",
			choices: [
				{
					label: "Less than 1 hour per day",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 to 2 hours per day",
					value: "1 to 2 hours per day",
				},
				{
					label: "3 to 4 hours per day",
					value: "3 to 4 hours per day",
				},
				{
					label: "5 to 6 hours per day",
					value: "5 to 6 hours per day",
				},
				{
					label: "7 to 8 hours per day",
					value: "7 to 8 hours per day",
				},
				{
					label: "More than 8 hours per day",
					value: "More than 8 hours per day",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [٢٩]",
			label:
				"خلال يومك المعتاد، كم من الوقت تقضيه جالسًا أو مستلقيًا للقيام بأمور معينة مثل مشاهدة التلفزيون أو ممارسة ألعاب الكمبيوتر أو التحدث مع الأصدقاء أو استخدام هاتفك المحمول أو التنقل في سيارة أو القيلولة أو ممارسة أنشطة أخرى أثناء الجلوس أو الاستلقاء، مثل (أمثلة خاصة بكل بلد)؟ ",
			kid_label:
				"خلال يومك المعتاد، كم من الوقت تقضيه جالسًا أو مستلقيًا للقيام بأمور معينة مثل مشاهدة التلفزيون أو ممارسة ألعاب الكمبيوتر أو التحدث مع الأصدقاء أو استخدام هاتفك المحمول أو التنقل في سيارة أو القيلولة أو ممارسة أنشطة أخرى أثناء الجلوس أو الاستلقاء، مثل (أمثلة خاصة بكل بلد)؟ ",
			adult_label:
				"خلال يومك المعتاد، كم من الوقت تقضيه جالسًا أو مستلقيًا للقيام بأمور معينة مثل مشاهدة التلفزيون أو ممارسة ألعاب الكمبيوتر أو التحدث مع الأصدقاء أو استخدام هاتفك المحمول أو التنقل في سيارة أو القيلولة أو ممارسة أنشطة أخرى أثناء الجلوس أو الاستلقاء، مثل (أمثلة خاصة بكل بلد)؟ ",
			kid_sublabel: "لا تحسب الوقت الذي تقضيه في النوم ليلاً.",
			adult_sublabel: "لا تحسب الوقت الذي تقضيه في النوم ليلاً.",
			choices: [
				{
					label: "أقل من ساعة واحدة في اليوم",
					value: "Less than 1 hour per day",
				},
				{
					label: "ساعة إلى ساعتين في اليوم",
					value: "1 to 2 hours per day",
				},
				{
					label: "3 إلى 4 ساعات في اليوم",
					value: "3 to 4 hours per day",
				},
				{
					label: "5 إلى 6 ساعات في اليوم",
					value: "5 to 6 hours per day",
				},
				{
					label: "7 إلى 8 ساعات في اليوم",
					value: "7 to 8 hours per day",
				},
				{
					label: "أكثر من 8 ساعات في اليوم",
					value: "More than 8 hours per day",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 29",
			label:
				"Hur mycket tid är du stillasittande på en vanlig dag? Det kan tillexempel vara när du och tittar på tv, spelar dataspel, pratar med vänner, eller gör andra stillasittande aktiviteter så som att titta på en surfplatta eller läsa en bok.",
			kid_label:
				"Hur mycket tid är du stillasittande på en vanlig dag? Det kan tillexempel vara när du och tittar på tv, spelar dataspel, pratar med vänner, eller gör andra stillasittande aktiviteter så som att titta på en surfplatta eller läsa en bok.",
			adult_label:
				"Hur mycket tid är du stillasittande på en vanlig dag? Det kan tillexempel vara när du och tittar på tv, spelar dataspel, pratar med vänner, eller gör andra stillasittande aktiviteter så som att titta på en surfplatta eller läsa en bok.",
			choices: [
				{
					label: "Mindre än 1 timme per dag",
					value: "Less than 1 hour per day",
				},
				{
					label: "1 till 2 timmar per dag",
					value: "1 to 2 hours per day",
				},
				{
					label: "3 till 4 timmar per dag",
					value: "3 to 4 hours per day",
				},
				{
					label: "5 till 6 timmar per dag",
					value: "5 to 6 hours per day",
				},
				{
					label: "7 till 8 timmar per dag",
					value: "7 to 8 hours per day",
				},
				{
					label: "Mer än 8 timmar per dag",
					value: "More than 8 hours per day",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 29",
			label:
				"在典型或通常的一天里，你花多少时间坐着看电视、玩电脑游戏、与朋友聊天、使用手机或做其他坐着的活动。",
			kid_label:
				"在典型或通常的一天里，你花多少时间坐着看电视、玩电脑游戏、与朋友聊天、使用手机或做其他坐着的活动。",
			adult_label:
				"5. 在典型或通常的一天里，你花多少时间坐着看电视、玩电脑游戏、与朋友聊天、使用手机或做其他坐着的活动。",
			choices: [
				{
					label: "每天少于1小时",
					value: "Less than 1 hour per day",
				},
				{
					label: "每天1至2小时",
					value: "1 to 2 hours per day",
				},
				{
					label: "每天3至4小时",
					value: "3 to 4 hours per day",
				},
				{
					label: "每天5至6小时",
					value: "5 to 6 hours per day",
				},
				{
					label: "每天7至8小时",
					value: "7 to 8 hours per day",
				},
				{
					label: "每天8小时以上",
					value: "More than 8 hours per day",
				},
			],
		},
	},
};

export default GSHS5;
