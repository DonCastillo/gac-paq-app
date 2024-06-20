import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { QuestionDropdownPayloadInterface } from "interface/payload.type";

const DemographicPage: QuestionDropdownPayloadInterface = {
	ident: "age",
	name: "age",
	type: Screen.SingleQuestion,
	column_name: "age",
	translations: {
		"en-CA": {
			type: Question.QuestionDropdown,
			heading: "Welcome!",
			label: "How old are you?",
			kid_label: "How old are you?",
			adult_label: "How old are you?",
			choices: [
				{
					label: "8 years old",
					value: "8",
				},
				{
					label: "9 years old",
					value: "9",
				},
				{
					label: "10 years old",
					value: "10",
				},
				{
					label: "11 years old",
					value: "11",
				},
				{
					label: "12 years old",
					value: "12",
				},
				{
					label: "13 years old",
					value: "13",
				},
				{
					label: "14 years old",
					value: "14",
				},
				{
					label: "15 years old",
					value: "15",
				},
				{
					label: "16 years old",
					value: "16",
				},
				{
					label: "17 years old",
					value: "17",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionDropdown,
			heading: "ยินดีต้อนรับ!",
			label: "คุณอายุเท่าไร?",
			kid_label: "คุณอายุเท่าไร?",
			adult_label: "คุณอายุเท่าไร?",
			choices: [
				{
					label: "8 ปี",
					value: "8",
				},
				{
					label: "9 ปี",
					value: "9",
				},
				{
					label: "10 ปี",
					value: "10",
				},
				{
					label: "11 ปี",
					value: "11",
				},
				{
					label: "12 ปี",
					value: "12",
				},
				{
					label: "13 ปี",
					value: "13",
				},
				{
					label: "14 ปี",
					value: "14",
				},
				{
					label: "15 ปี",
					value: "15",
				},
				{
					label: "16 ปี",
					value: "16",
				},
				{
					label: "17 ปี",
					value: "17",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionDropdown,
			heading: "欢迎!",
			label: "你多大了?",
			kid_label: "你多大了?",
			adult_label: "你多大了?",
			choices: [
				{
					label: "8岁",
					value: "8",
				},
				{
					label: "9岁",
					value: "9",
				},
				{
					label: "10岁",
					value: "10",
				},
				{
					label: "11岁",
					value: "11",
				},
				{
					label: "12岁",
					value: "12",
				},
				{
					label: "13岁",
					value: "13",
				},
				{
					label: "14岁",
					value: "14",
				},
				{
					label: "15岁",
					value: "15",
				},
				{
					label: "16岁",
					value: "16",
				},
				{
					label: "17岁",
					value: "17",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionDropdown,
			heading: "¡Bienvenido!",
			label: "¿Cuántos años tienes?",
			kid_label: "¿Cuántos años tienes?",
			adult_label: "¿Cuántos años tienes?",
			choices: [
				{
					label: "8 años",
					value: "8",
				},
				{
					label: "9 años",
					value: "9",
				},
				{
					label: "10 años",
					value: "10",
				},
				{
					label: "11 años",
					value: "11",
				},
				{
					label: "12 años",
					value: "12",
				},
				{
					label: "13 años",
					value: "13",
				},
				{
					label: "14 años",
					value: "14",
				},
				{
					label: "15 años",
					value: "15",
				},
				{
					label: "16 años",
					value: "16",
				},
				{
					label: "17 años",
					value: "17",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionDropdown,
			heading: "Bienvenue!",
			label: "Quel âge as-tu?",
			kid_label: "Quel âge as-tu?",
			adult_label: "Quel âge as-tu?",
			choices: [
				{
					label: "8 ans",
					value: "8",
				},
				{
					label: "9 ans",
					value: "9",
				},
				{
					label: "10 ans",
					value: "10",
				},
				{
					label: "11 ans",
					value: "11",
				},
				{
					label: "12 ans",
					value: "12",
				},
				{
					label: "13 ans",
					value: "13",
				},
				{
					label: "14 ans",
					value: "14",
				},
				{
					label: "15 ans",
					value: "15",
				},
				{
					label: "16 ans",
					value: "16",
				},
				{
					label: "17 ans",
					value: "17",
				},
			],
		},
	},
};

export default DemographicPage;
