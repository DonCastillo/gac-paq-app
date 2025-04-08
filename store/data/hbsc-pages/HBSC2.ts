import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const HBSC2: LangQuestionRadioPayloadInterface = {
	ident: "hbsc_2",
	name: "Question 26: Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
	column_name: "HBSC 02",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 26",
			label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			kid_label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			adult_label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			choices: [
				{
					label: "Every day",
					value: "Every day",
				},
				{
					label: "4 to 6 times a week",
					value: "4 to 6 times a week",
				},
				{
					label: "3 times a week",
					value: "3 times a week",
				},
				{
					label: "2 times a week",
					value: "2 times a week",
				},
				{
					label: "Once a week",
					value: "Once a week",
				},
				{
					label: "Once a month",
					value: "Once a month",
				},
				{
					label: "Less than once a month",
					value: "Less than once a month",
				},
				{
					label: "Never",
					value: "Never",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "ข้อ 26",
			label:
				"นอกเวลาเรียน: โดยปกติเมื่อมีเวลาว่าง น้องออกกำลังกายจนรู้สึกเหนื่อยหรือมีเหงื่อออกบ่อยแค่ไหน?",
			kid_label:
				"นอกเวลาเรียน: โดยปกติเมื่อมีเวลาว่าง น้องออกกำลังกายจนรู้สึกเหนื่อยหรือมีเหงื่อออกบ่อยแค่ไหน?",
			adult_label:
				"นอกเวลาเรียน: โดยปกติเมื่อมีเวลาว่าง น้องออกกำลังกายจนรู้สึกเหนื่อยหรือมีเหงื่อออกบ่อยแค่ไหน?",
			choices: [
				{
					label: "ทุกวัน",
					value: "Every day",
				},
				{
					label: "4 - 6 ครั้งต่อสัปดาห์",
					value: "4 to 6 times a week",
				},
				{
					label: "3 ครั้งต่อสัปดาห์",
					value: "3 times a week",
				},
				{
					label: "2 ครั้งต่อสัปดาห์",
					value: "2 times a week",
				},
				{
					label: "สัปดาห์ละครั้ง",
					value: "Once a week",
				},
				{
					label: "เดือนละครั้ง",
					value: "Once a month",
				},
				{
					label: "น้อยกว่าหนึ่งครั้งต่อเดือน",
					value: "Less than once a month",
				},
				{
					label: "ไม่เคย",
					value: "Never",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 26",
			label:
				"No seu tempo livre, com que frequência você costuma se exercitar até ficar sem fôlego ou suar?",
			kid_label:
				"No seu tempo livre, com que frequência você costuma se exercitar até ficar sem fôlego ou suar?",
			adult_label:
				"No seu tempo livre, com que frequência você costuma se exercitar até ficar sem fôlego ou suar?",
			kid_sublabel: "Considere as atividades fora do horário escolar.",
			adult_sublabel: "Considere as atividades fora do horário escolar.",
			choices: [
				{
					label: "Todos os dias",
					value: "Every day",
				},
				{
					label: "De 4 a 6 vezes por semana",
					value: "4 to 6 times a week",
				},
				{
					label: "3 vezes por semana",
					value: "3 times a week",
				},
				{
					label: "2 vezes por semana",
					value: "2 times a week",
				},
				{
					label: "Uma vez por semana",
					value: "Once a week",
				},
				{
					label: "Uma vez por mês",
					value: "Once a month",
				},
				{
					label: "Menos de uma vez por mês",
					value: "Less than once a month",
				},
				{
					label: "Nunca",
					value: "Never",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 26",
			label:
				"Fuera del horario escolar: ¿con qué frecuencia realizas alguna actividad física en tu tiempo libre que haga que llegues a sudar o te falte el aliento?",
			kid_label:
				"Fuera del horario escolar: ¿con qué frecuencia realizas alguna actividad física en tu tiempo libre que haga que llegues a sudar o te falte el aliento?",
			adult_label:
				"Fuera del horario escolar: ¿con qué frecuencia realizas alguna actividad física en tu tiempo libre que haga que llegues a sudar o te falte el aliento?",
			choices: [
				{
					label: "Todos los días",
					value: "Every day",
				},
				{
					label: "4-6 veces a la semana",
					value: "4 to 6 times a week",
				},
				{
					label: "3 veces a la semana",
					value: "3 times a week",
				},
				{
					label: "2 veces a la semana",
					value: "2 times a week",
				},
				{
					label: "1 vez a la semana",
					value: "Once a week",
				},
				{
					label: "1 vez al mes",
					value: "Once a month",
				},
				{
					label: "Menos de una vez al mes",
					value: "Less than once a month",
				},
				{
					label: "Nunca",
					value: "Never",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 26",
			label:
				"En dehors des heures de classe, à quelle fréquence fais-tu normalement de l’exercice, dans tes temps libres, au point de transpirer ou d’être essoufflé(e)?",
			kid_label:
				"En dehors des heures de classe, à quelle fréquence fais-tu normalement de l’exercice, dans tes temps libres, au point de transpirer ou d’être essoufflé(e)?",
			adult_label:
				"En dehors des heures de classe, à quelle fréquence fais-tu normalement de l’exercice, dans tes temps libres, au point de transpirer ou d’être essoufflé(e)?",
			choices: [
				{
					label: "Tous les jours",
					value: "Every day",
				},
				{
					label: "4 à 6 fois par semaine",
					value: "4 to 6 times a week",
				},
				{
					label: "3 fois par semaine",
					value: "3 times a week",
				},
				{
					label: "2 fois par semaine",
					value: "2 times a week",
				},
				{
					label: "Une fois par semaine",
					value: "Once a week",
				},
				{
					label: "Une fois par mois",
					value: "Once a month",
				},
				{
					label: "Moins d’une fois par mois",
					value: "Less than once a month",
				},
				{
					label: "Jamais",
					value: "Never",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 26",
			label:
				"Fuera del horario de clase: ¿Qué tan seguido haces ejercicio en tu tiempo libre tanto que te quedas sin aliento o sudas?",
			kid_label:
				"Fuera del horario de clase: ¿Qué tan seguido haces ejercicio en tu tiempo libre tanto que te quedas sin aliento o sudas?",
			adult_label:
				"Fuera del horario de clase: ¿Qué tan seguido haces ejercicio en tu tiempo libre tanto que te quedas sin aliento o sudas?",
			choices: [
				{
					label: "Todos los días",
					value: "Every day",
				},
				{
					label: "4 - 6 veces a la semana",
					value: "4 to 6 times a week",
				},
				{
					label: "3 veces a la semana",
					value: "3 times a week",
				},
				{
					label: "2 veces a la semana",
					value: "2 times a week",
				},
				{
					label: "1 vez a la semana",
					value: "Once a week",
				},
				{
					label: "1 vez al mes",
					value: "Once a month",
				},
				{
					label: "Menos de una vez al mes",
					value: "Less than once a month",
				},
				{
					label: "Nunca",
					value: "Never",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 26",
			label:
				"Fuera del horario de clase: ¿Qué tan seguido haces ejercicio en tu tiempo libre tanto que te quedas sin aliento o sudas?",
			kid_label:
				"Fuera del horario de clase: ¿Qué tan seguido haces ejercicio en tu tiempo libre tanto que te quedas sin aliento o sudas?",
			adult_label:
				"Fuera del horario de clase: ¿Qué tan seguido haces ejercicio en tu tiempo libre tanto que te quedas sin aliento o sudas?",
			choices: [
				{
					label: "Todos los días",
					value: "Every day",
				},
				{
					label: "4 - 6 veces a la semana",
					value: "4 to 6 times a week",
				},
				{
					label: "3 veces a la semana",
					value: "3 times a week",
				},
				{
					label: "2 veces a la semana",
					value: "2 times a week",
				},
				{
					label: "1 vez a la semana",
					value: "Once a week",
				},
				{
					label: "1 vez al mes",
					value: "Once a month",
				},
				{
					label: "Menos de una vez al mes",
					value: "Less than once a month",
				},
				{
					label: "Nunca",
					value: "Never",
				},
			],
		},
		"en-NZ": {
			type: Question.QuestionRadio,
			heading: "Question 26",
			label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			kid_label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			adult_label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			choices: [
				{
					label: "Every day",
					value: "Every day",
				},
				{
					label: "4 to 6 times a week",
					value: "4 to 6 times a week",
				},
				{
					label: "3 times a week",
					value: "3 times a week",
				},
				{
					label: "2 times a week",
					value: "2 times a week",
				},
				{
					label: "Once a week",
					value: "Once a week",
				},
				{
					label: "Once a month",
					value: "Once a month",
				},
				{
					label: "Less than once a month",
					value: "Less than once a month",
				},
				{
					label: "Never",
					value: "Never",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 26",
			label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			kid_label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			adult_label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			choices: [
				{
					label: "Every day",
					value: "Every day",
				},
				{
					label: "4 to 6 times a week",
					value: "4 to 6 times a week",
				},
				{
					label: "3 times a week",
					value: "3 times a week",
				},
				{
					label: "2 times a week",
					value: "2 times a week",
				},
				{
					label: "Once a week",
					value: "Once a week",
				},
				{
					label: "Once a month",
					value: "Once a month",
				},
				{
					label: "Less than once a month",
					value: "Less than once a month",
				},
				{
					label: "Never",
					value: "Never",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 26",
			label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			kid_label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			adult_label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			choices: [
				{
					label: "Every day",
					value: "Every day",
				},
				{
					label: "4 to 6 times a week",
					value: "4 to 6 times a week",
				},
				{
					label: "3 times a week",
					value: "3 times a week",
				},
				{
					label: "2 times a week",
					value: "2 times a week",
				},
				{
					label: "Once a week",
					value: "Once a week",
				},
				{
					label: "Once a month",
					value: "Once a month",
				},
				{
					label: "Less than once a month",
					value: "Less than once a month",
				},
				{
					label: "Never",
					value: "Never",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 26",
			label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			kid_label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			adult_label:
				"Outside school hours: how often do you usually exercise in your free time so much that you get out of breath or sweat?",
			choices: [
				{
					label: "Every day",
					value: "Every day",
				},
				{
					label: "4 to 6 times a week",
					value: "4 to 6 times a week",
				},
				{
					label: "3 times a week",
					value: "3 times a week",
				},
				{
					label: "2 times a week",
					value: "2 times a week",
				},
				{
					label: "Once a week",
					value: "Once a week",
				},
				{
					label: "Once a month",
					value: "Once a month",
				},
				{
					label: "Less than once a month",
					value: "Less than once a month",
				},
				{
					label: "Never",
					value: "Never",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [٢٦]",
			label:
				"خارج أوقات الدوام المدرسي: كم مرة تمارس الرياضة عادةً في أوقات فراغك بحيث تتنفس بشدة أو تتعرق؟",
			kid_label:
				"خارج أوقات الدوام المدرسي: كم مرة تمارس الرياضة عادةً في أوقات فراغك بحيث تتنفس بشدة أو تتعرق؟",
			adult_label:
				"خارج أوقات الدوام المدرسي: كم مرة تمارس الرياضة عادةً في أوقات فراغك بحيث تتنفس بشدة أو تتعرق؟",
			choices: [
				{
					label: "كل يوم",
					value: "Every day",
				},
				{
					label: "4 إلى 6 مرات في الأسبوع",
					value: "4 to 6 times a week",
				},
				{
					label: "3 مرات في الأسبوع",
					value: "3 times a week",
				},
				{
					label: "مرتين في الأسبوع",
					value: "2 times a week",
				},
				{
					label: "مرة واحدة في الأسبوع",
					value: "Once a week",
				},
				{
					label: "مرة واحدة في الشهر ",
					value: "Once a month",
				},
				{
					label: "أقل من مرة واحدة في الشهر",
					value: "Less than once a month",
				},
				{
					label: "أبداً",
					value: "Never",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 26",
			label:
				"Hur ofta brukar du träna på din fritid utanför skoltid så mycket att du blir andfådd eller svettas?",
			kid_label:
				"Hur ofta brukar du träna på din fritid utanför skoltid så mycket att du blir andfådd eller svettas?",
			adult_label:
				"Hur ofta brukar du träna på din fritid utanför skoltid så mycket att du blir andfådd eller svettas?",
			choices: [
				{
					label: "Varje dag",
					value: "Every day",
				},
				{
					label: "4 - 6 gånger i veckan",
					value: "4 to 6 times a week",
				},
				{
					label: "3 gånger i veckan",
					value: "3 times a week",
				},
				{
					label: "2 gånger i veckan",
					value: "2 times a week",
				},
				{
					label: "1 gång i veckan",
					value: "Once a week",
				},
				{
					label: "1 gång i månaden",
					value: "Once a month",
				},
				{
					label: "Mindre än 1 gång i månaden",
					value: "Less than once a month",
				},
				{
					label: "Aldrig",
					value: "Never",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 26",
			label: "学校课堂之外，你经常在空闲时间进行让你出汗或上气不接下气的运动吗？",
			kid_label: "学校课堂之外，你经常在空闲时间进行让你出汗或上气不接下气的运动吗？",
			adult_label: "学校课堂之外，你经常在空闲时间进行让你出汗或上气不接下气的运动吗？",
			choices: [
				{
					label: "每天",
					value: "Every day",
				},
				{
					label: "每周4至6次",
					value: "4 to 6 times a week",
				},
				{
					label: "每周3次",
					value: "3 times a week",
				},
				{
					label: "每周2次",
					value: "2 times a week",
				},
				{
					label: "每周1次",
					value: "Once a week",
				},
				{
					label: "每月1次",
					value: "Once a month",
				},
				{
					label: "每月不到1次",
					value: "Less than once a month",
				},
				{
					label: "从不",
					value: "Never",
				},
			],
		},
	},
};

export default HBSC2;
