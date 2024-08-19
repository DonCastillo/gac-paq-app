import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const Education: LangQuestionRadioPayloadInterface = {
	ident: "highest_level_of_education",
	name: "highest_level_of_education",
	type: Screen.SingleQuestion,
	column_name: "education",
	audio_ident: "education",
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label: "What is the highest level of education completed by a member of your household?",
			kid_label: "What is the highest level of education completed by a member of your household?",
			adult_label:
				"What is the highest level of education completed by a member of your household?",
			choices: [
				{
					label: "No formal schooling",
					value: "No formal schooling",
				},
				{
					label: "Primary school",
					value: "Primary school",
				},
				{
					label: "Secondary or high school",
					value: "Secondary or high school",
				},
				{
					label: "Vocational/college education",
					value: "Vocational/college education",
				},
				{
					label: "Tertiary/university education",
					value: "Tertiary/university education",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Pergunta 29",
			label: "Qual é o maior grau de educação completado por um membro de sua casa?",
			kid_label: "Qual é o maior grau de educação completado por um membro de sua casa?",
			adult_label: "Qual é o maior grau de educação completado por um membro de sua casa?",
			choices: [
				{
					label: "Sem educação formal",
					value: "No formal schooling",
				},
				{
					label: "Ensino fundamental",
					value: "Primary school",
				},
				{
					label: "Ensino médio",
					value: "Secondary or high school",
				},
				{
					label: "Educação profissional",
					value: "Vocational/college education",
				},
				{
					label: "Ensino superior/universitário",
					value: "Tertiary/university education",
				},
				{
					label: "Prefiro não responder",
					value: "Prefer not to answer",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 29",
			label: "Vilken är den högsta utbildningsnivå någon i ert hushåll har genomfört?",
			kid_label: "Vilken är den högsta utbildningsnivå någon i ert hushåll har genomfört?",
			adult_label: "Vilken är den högsta utbildningsnivå någon i ert hushåll har genomfört?",
			choices: [
				{
					label: "Ingen",
					value: "No formal schooling",
				},
				{
					label: "Grundskola",
					value: "Primary school",
				},
				{
					label: "Gymnasium",
					value: "Secondary or high school",
				},
				{
					label: "Yrkes-/högskoleutbildning",
					value: "Vocational/college education",
				},
				{
					label: "Universitetsutbildning",
					value: "Tertiary/university education",
				},
				{
					label: "Föredrar att inte svara",
					value: "Prefer not to answer",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "คำถาม 29",
			label: "การศึกษาสูงสุดของสมาชิกในครอบครัวของคุณอยู่ในระดับใด?",
			kid_label: "การศึกษาสูงสุดของสมาชิกในครอบครัวของคุณอยู่ในระดับใด?",
			adult_label: "การศึกษาสูงสุดของสมาชิกในครอบครัวของคุณอยู่ในระดับใด?",
			choices: [
				{
					label: "ไม่ได้เรียนหนังสือ",
					value: "No formal schooling",
				},
				{
					label: "ระดับประถมศึกษา",
					value: "Primary school",
				},
				{
					label: "ระดับมัธยมศึกษาตอนต้นหรือตอนปลาย",
					value: "Secondary or high school",
				},
				{
					label: "ศึกษาสายอาชีพ/ระดับวิทยาลัย",
					value: "Vocational/college education",
				},
				{
					label: "ระดับอุดมศึกษา/มหาวิทยาลัย",
					value: "Tertiary/university education",
				},
				{
					label: "ไม่ต้องการตอบ",
					value: "Prefer not to answer",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 29",
			label: "您的家庭成员完成的最高教育水平是?",
			kid_label: "您的家庭成员完成的最高教育水平是?",
			adult_label: "您的家庭成员完成的最高教育水平是?",
			choices: [
				{
					label: "没有受过正规教育",
					value: "No formal schooling",
				},
				{
					label: "小学",
					value: "Primary school",
				},
				{
					label: "中学",
					value: "Secondary or high school",
				},
				{
					label: "高职高专",
					value: "Vocational/college education",
				},
				{
					label: "高等/大学教育",
					value: "Tertiary/university education",
				},
				{
					label: "不想回答",
					value: "Prefer not to answer",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 29",
			label: "¿Cuál es el nivel de educación más alto completado por un miembro de su hogar?",
			kid_label: "¿Cuál es el nivel de educación más alto completado por un miembro de su hogar?",
			adult_label: "¿Cuál es el nivel de educación más alto completado por un miembro de su hogar?",
			choices: [
				{
					label: "Sin educación formal",
					value: "No formal schooling",
				},
				{
					label: "Primaria",
					value: "Primary school",
				},
				{
					label: "Secundaria o bachillerato",
					value: "Secondary or high school",
				},
				{
					label: "Técnico o tecnólogo",
					value: "Vocational/college education",
				},
				{
					label: "Profesional o formación universitaria",
					value: "Tertiary/university education",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to answer",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 29",
			label: "Quel est le plus haut niveau de scolarité complété par un membre de votre ménage?",
			kid_label:
				"Quel est le plus haut niveau de scolarité complété par un membre de votre ménage?",
			adult_label:
				"Quel est le plus haut niveau de scolarité complété par un membre de votre ménage?",
			choices: [
				{
					label: "Aucune scolarité",
					value: "No formal schooling",
				},
				{
					label: "École primaire",
					value: "Primary school",
				},
				{
					label: "École secondaire",
					value: "Secondary or high school",
				},
				{
					label: "Éducation collégiale ou technique",
					value: "Vocational/college education",
				},
				{
					label: "Éducation universitaire",
					value: "Tertiary/university education",
				},
				{
					label: "Préfère ne pas répondre",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default Education;
