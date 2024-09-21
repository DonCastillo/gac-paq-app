import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const GenderAdult: LangQuestionRadioPayloadInterface = {
	ident: "child_sex_entered_by_parent",
	name: "child_sex",
	type: Screen.SingleQuestion,
	column_name: "sex",
	audio_ident: "child_sex",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 24",
			label: "What is your child's sex?",
			kid_label: "What is your child's sex?",
			adult_label: "What is your child's sex?",
			choices: [
				{
					label: "Female",
					value: "Female",
				},
				{
					label: "Male",
					value: "Male",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २४",
			label: "तपाइको बच्चाको लिङ के हो?",
			kid_label: "तपाइको बच्चाको लिङ के हो?",
			adult_label: "तपाइको बच्चाको लिङ के हो?",
			choices: [
				{
					label: "महिला",
					value: "Female",
				},
				{
					label: "पुरुष",
					value: "Male",
				},
				{
					label: "भन्न चाहन्न",
					value: "Prefer not to answer",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Pergunta 24",
			label: "Qual é o sexo do(a) seu(sua) filho(a)?",
			kid_label: "Qual é o sexo do(a) seu(sua) filho(a)?",
			adult_label: "Qual é o sexo do(a) seu(sua) filho(a)?",
			choices: [
				{
					label: "Feminino",
					value: "Female",
				},
				{
					label: "Masculino",
					value: "Male",
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
			label: "Vad har ditt barn för kön?",
			kid_label: "Vad har ditt barn för kön?",
			adult_label: "Vad har ditt barn för kön?",
			choices: [
				{
					label: "Flicka",
					value: "Female",
				},
				{
					label: "Pojke",
					value: "Male",
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
			label: "บุตรหลานของคุณเป็นเพศใด?",
			kid_label: "บุตรหลานของคุณเป็นเพศใด?",
			adult_label: "บุตรหลานของคุณเป็นเพศใด?",
			choices: [
				{
					label: "หญิง",
					value: "Female",
				},
				{
					label: "ชาย",
					value: "Male",
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
			label: "您孩子的性别？",
			kid_label: "您孩子的性别？",
			adult_label: "您孩子的性别？",
			choices: [
				{
					label: "女",
					value: "Female",
				},
				{
					label: "男",
					value: "Male",
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
			label: "¿Cuál es el sexo de su hija o hijo?",
			kid_label: "¿Cuál es el sexo de su hija o hijo?",
			adult_label: "¿Cuál es el sexo de su hija o hijo?",
			choices: [
				{
					label: "Mujer",
					value: "Female",
				},
				{
					label: "Hombre",
					value: "Male",
				},
				{
					label: "Prefiere no contestar",
					value: "Prefer not to answer",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 24",
			label: "¿Cuál es el sexo de su hija o hijo?",
			kid_label: "¿Cuál es el sexo de su hija o hijo?",
			adult_label: "¿Cuál es el sexo de su hija o hijo?",
			choices: [
				{
					label: "Mujer",
					value: "Female",
				},
				{
					label: "Hombre",
					value: "Male",
				},
				{
					label: "Prefiere no contestar",
					value: "Prefer not to answer",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 24",
			label: "Quel est le sexe de votre enfant?",
			kid_label: "Quel est le sexe de votre enfant?",
			adult_label: "Quel est le sexe de votre enfant?",
			choices: [
				{
					label: "Féminin",
					value: "Female",
				},
				{
					label: "Masculin",
					value: "Male",
				},
				{
					label: "Préfère ne pas répondre",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default GenderAdult;
