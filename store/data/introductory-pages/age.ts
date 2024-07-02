import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionDropdownPayloadInterface } from "interface/payload.type";

const AgePage: QuestionDropdownPayloadInterface = {
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
				},
				{
					label: "Adolescent",
					value: "teen",
				},
				{
					label: "Parent",
					value: "adult",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionDropdown,
			heading: "ยินดีต้อนรับ!",
			label: "ใครกำลังทำแบบสอบถามนี้?",
			kid_label: "ใครกำลังทำแบบสอบถามนี้?",
			adult_label: "ใครกำลังทำแบบสอบถามนี้?",
			choices: [
				{
					label: "เด็ก",
					value: "child",
				},
				{
					label: "วัยรุ่น",
					value: "teen",
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
			label: "谁在填写这份问卷?",
			kid_label: "谁在填写这份问卷?",
			adult_label: "谁在填写这份问卷?",
			choices: [
				{
					label: "儿童",
					value: "child",
				},
				{
					label: "青少年",
					value: "teen",
				},
				{
					label: "家长",
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
				},
				{
					label: "Adolescente",
					value: "teen",
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
			label: "Qui remplit ce questionnaire?",
			kid_label: "Qui remplit ce questionnaire?",
			adult_label: "Qui remplit ce questionnaire?",
			choices: [
				{
					label: "Enfant",
					value: "child",
				},
				{
					label: "Adolescent",
					value: "teen",
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
