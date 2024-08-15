import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionDropdownPayloadInterface } from "interface/payload.type";

const AgePage: LangQuestionDropdownPayloadInterface = {
	ident: "mode",
	name: "mode",
	type: Screen.SingleQuestion,
	column_name: "mode",
	translations: {
		"en-CA": {
			type: Question.QuestionDropdown,
			heading: "Welcome!",
			label: "Who's taking this questionnaire?",
			kid_label: "Who's taking this questionnaire?",
			adult_label: "Who's taking this questionnaire?",
			choices: [
				{
					label: "Child",
					value: "child",
					sublabel: {
						kid: "8 to 11 years old",
						adult: "8 to 11 years old",
					},
				},
				{
					label: "Adolescent",
					value: "teen",
					sublabel: {
						kid: "12 to 17 years old",
						adult: "12 to 17 years old",
					},
				},
				{
					label: "Parent",
					value: "adult",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionDropdown,
			heading: "Välkommen!",
			label: "Vem svarar på frågeformuläret?",
			kid_label: "Vem svarar på frågeformuläret?",
			adult_label: "Vem svarar på frågeformuläret?",
			choices: [
				{
					label: "Barn",
					value: "child",
					sublabel: {
						kid: "8-11 år",
						adult: "8-11 år",
					},
				},
				{
					label: "Ungdom",
					value: "teen",
					sublabel: {
						kid: "12-17 år",
						adult: "12-17 år",
					},
				},
				{
					label: "Vårdnadshavare",
					value: "adult",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionDropdown,
			heading: "ยินดีต้อนรับ!",
			label: "ผู้ตอบแบบสอบถามอยู่ตอนนี้คือ...?",
			kid_label: "ผู้ตอบแบบสอบถามอยู่ตอนนี้คือ...?",
			adult_label: "ผู้ตอบแบบสอบถามอยู่ตอนนี้คือ...?",
			choices: [
				{
					label: "เด็ก",
					value: "child",
					sublabel: {
						kid: "อายุ  8-11 ปี",
						adult: "อายุ  8-11 ปี",
					},
				},
				{
					label: "วัยรุ่น",
					value: "teen",
					sublabel: {
						kid: "อายุ 12-17 ปี",
						adult: "อายุ 12-17 ปี",
					},
				},
				{
					label: "ผู้ปกครอง",
					value: "adult",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionDropdown,
			heading: "欢迎!",
			label: "谁在填写本问卷？",
			kid_label: "谁在填写本问卷？",
			adult_label: "谁在填写本问卷？",
			choices: [
				{
					label: "儿童",
					value: "child",
					sublabel: {
						kid: "8到11岁",
						adult: "8到11岁",
					},
				},
				{
					label: "青少年",
					value: "teen",
					sublabel: {
						kid: "12到17岁",
						adult: "12到17岁",
					},
				},
				{
					label: "父母",
					value: "adult",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionDropdown,
			heading: "¡Bienvenido!",
			label: "¿Quién está tomando este cuestionario?",
			kid_label: "¿Quién está tomando este cuestionario?",
			adult_label: "¿Quién está tomando este cuestionario?",
			choices: [
				{
					label: "Niño",
					value: "child",
					sublabel: {
						kid: "8 a 11 años",
						adult: "8 a 11 años",
					},
				},
				{
					label: "Adolescente",
					value: "teen",
					sublabel: {
						kid: "12 a 17 años",
						adult: "12 a 17 años",
					},
				},
				{
					label: "Padre",
					value: "adult",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionDropdown,
			heading: "Bienvenue!",
			label: "Qui répond à ce questionnaire?",
			kid_label: "Qui répond à ce questionnaire?",
			adult_label: "Qui répond à ce questionnaire?",
			choices: [
				{
					label: "Enfant",
					value: "child",
					sublabel: {
						kid: "Huit à onze ans",
						adult: "Huit à onze ans",
					},
				},
				{
					label: "Adolescent",
					value: "teen",
					sublabel: {
						kid: "Douze à dix-sept ans",
						adult: "Douze à dix-sept ans",
					},
				},
				{
					label: "Parent",
					value: "adult",
				},
			],
		},
	},
};

export default AgePage;
