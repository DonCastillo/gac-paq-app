import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const GenderKid: LangQuestionRadioPayloadInterface = {
	ident: "child_sex_entered_by_child",
	name: "child_sex",
	type: Screen.SingleQuestion,
	column_name: "sex",
	audio_ident: "child_sex",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 24",
			label: "Are you a…",
			kid_label: "Are you a…",
			adult_label: "Are you a…",
			choices: [
				{
					label: "Boy",
					value: "Boy",
				},
				{
					label: "Girl",
					value: "Girl",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 24",
			label: "Are you…",
			kid_label: "Are you…",
			adult_label: "Are you…",
			choices: [
				{
					label: "Male",
					value: "Male",
				},
				{
					label: "Female",
					value: "Female",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "السؤال 24",
			label: "هل أنت...",
			kid_label: "هل أنت...",
			adult_label: "هل أنت...",
			choices: [
				{
					label: "ذكر",
					value: "Boy",
				},
				{
					label: "أنثى",
					value: "Girl",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २४",
			label: "के  तपाईं ... हो?",
			kid_label: "के  तपाईं ... हो?",
			adult_label: "के  तपाईं ... हो?",
			choices: [
				{
					label: "केटा",
					value: "Boy",
				},
				{
					label: "केटी",
					value: "Girl",
				},
				{
					label: "अन्य",
					value: "Other",
				},
				{
					label: "भन्न चाहान्न",
					value: "Prefer not to answer",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 24",
			label: "Você é ...",
			kid_label: "Você é ...",
			adult_label: "Você é ...",
			choices: [
				{
					label: "Menino",
					value: "Boy",
				},
				{
					label: "Menina",
					value: "Girl",
				},
				{
					label: "Outro",
					value: "Other",
				},
				{
					label: "Prefiro não responder",
					value: "Prefer not to answer",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 24",
			label: "Jag är en…",
			kid_label: "Jag är en…",
			adult_label: "Jag är en…",
			choices: [
				{
					label: "Pojke",
					value: "Boy",
				},
				{
					label: "Flicka",
					value: "Girl",
				},
				{
					label: "Annat",
					value: "Other",
				},
				{
					label: "Föredrar att inte svara",
					value: "Prefer not to answer",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 24",
			label: "น้องเป็น...",
			kid_label: "น้องเป็น...",
			adult_label: "น้องเป็น...",
			choices: [
				{
					label: "เด็กผู้ชาย",
					value: "Boy",
				},
				{
					label: "เด็กผู้หญิง",
					value: "Girl",
				},
				{
					label: "อื่น ๆ",
					value: "Other",
				},
				{
					label: "ไม่ต้องการตอบ",
					value: "Prefer not to answer",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 24",
			label: "你的性别",
			kid_label: "你的性别",
			adult_label: "你的性别",
			choices: [
				{
					label: "男",
					value: "Boy",
				},
				{
					label: "女",
					value: "Girl",
				},
				{
					label: "其他",
					value: "Other",
				},
				{
					label: "不愿透露",
					value: "Prefer not to answer",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 24",
			label: "Tú eres…",
			kid_label: "Tú eres…",
			adult_label: "Tú eres…",
			choices: [
				{
					label: "Hombre",
					value: "Boy",
				},
				{
					label: "Mujer",
					value: "Girl",
				},
				{
					label: "Otro",
					value: "Other",
				},
				{
					label: "Prefiero no responder",
					value: "Prefer not to answer",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 24",
			label: "Tú eres…",
			kid_label: "Tú eres…",
			adult_label: "Tú eres…",
			choices: [
				{
					label: "Hombre",
					value: "Boy",
				},
				{
					label: "Mujer",
					value: "Girl",
				},
				{
					label: "Otro",
					value: "Other",
				},
				{
					label: "Prefiero no responder",
					value: "Prefer not to answer",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 24",
			label: "Es-tu un…",
			kid_label: "Es-tu un…",
			adult_label: "Es-tu un…",
			choices: [
				{
					label: "Garçon",
					value: "Boy",
				},
				{
					label: "Fille",
					value: "Girl",
				},
				{
					label: "Autre",
					value: "Other",
				},
				{
					label: "Préfère ne pas répondre",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default GenderKid;
