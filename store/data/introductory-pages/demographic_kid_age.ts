import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { LangQuestionDropdownPayloadInterface } from "interface/payload.type";

const DemographicKidPage: LangQuestionDropdownPayloadInterface = {
	ident: "age",
	name: "age",
	audio_ident: "child_age",
	audio_autoplay: true,
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
			],
		},
		"ne-NP": {
			type: Question.QuestionDropdown,
			heading: "Welcome!",
			label: "तपाईंको उमेर कति हो?",
			kid_label: "तपाईंको उमेर कति हो?",
			adult_label: "तपाईंको उमेर कति हो?",
			choices: [
				{
					label: "८ वर्षको",
					value: "8",
				},
				{
					label: "९ वर्षको",
					value: "9",
				},
				{
					label: "१० वर्षको",
					value: "10",
				},
				{
					label: "११ वर्षको",
					value: "11",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionDropdown,
			heading: "Bem-vindo(a)!",
			label: "Quantos anos você tem?",
			kid_label: "Quantos anos você tem?",
			adult_label: "Quantos anos você tem?",
			choices: [
				{
					label: "8 anos",
					value: "8",
				},
				{
					label: "9 anos",
					value: "9",
				},
				{
					label: "10 anos",
					value: "10",
				},
				{
					label: "11 anos",
					value: "11",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionDropdown,
			heading: "Välkommen!",
			label: "Hur gammal är du?",
			kid_label: "Hur gammal är du?",
			adult_label: "Hur gammal är du?",
			choices: [
				{
					label: "8 år",
					value: "8",
				},
				{
					label: "9 år",
					value: "9",
				},
				{
					label: "10 år",
					value: "10",
				},
				{
					label: "11 år",
					value: "11",
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
			],
		},
		"es-ES": {
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
					label: "Huit ans",
					value: "8",
				},
				{
					label: "Neuf ans",
					value: "9",
				},
				{
					label: "Dix ans",
					value: "10",
				},
				{
					label: "Onze ans",
					value: "11",
				},
			],
		},
	},
};

export default DemographicKidPage;
