import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { LangQuestionDropdownPayloadInterface } from "interface/payload.type";

const DemographicPage: LangQuestionDropdownPayloadInterface = {
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
		"en-AE": {
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
		"ar-AE": {
			type: Question.QuestionDropdown,
			heading: "مرحباً بك",
			label: "كم عمرك؟",
			kid_label: "كم عمرك؟",
			adult_label: "كم عمرك؟",
			choices: [
				{
					label: "٨ سنوات",
					value: "8",
				},
				{
					label: "٩ سنوات",
					value: "9",
				},
				{
					label: "١٠ سنوات",
					value: "10",
				},
				{
					label: "١١ سنة ",
					value: "11",
				},
				{
					label: "١٢ سنة",
					value: "12",
				},
				{
					label: "١٣ سنة",
					value: "13",
				},
				{
					label: "١٤ سنة",
					value: "14",
				},
				{
					label: "١٥ سنة",
					value: "15",
				},
				{
					label: "١٦ سنة",
					value: "16",
				},
				{
					label: "١٧ سنة",
					value: "17",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionDropdown,
			heading: "तपाईं लाई स्वागत् छ",
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
				{
					label: "१२ वर्षको",
					value: "12",
				},
				{
					label: "१३ वर्षको",
					value: "13",
				},
				{
					label: "१४ वर्षको",
					value: "14",
				},
				{
					label: "१५ वर्षको",
					value: "15",
				},
				{
					label: "१६ वर्षको",
					value: "16",
				},
				{
					label: "१७ वर्षको",
					value: "17",
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
				{
					label: "12 anos",
					value: "12",
				},
				{
					label: "13 anos",
					value: "13",
				},
				{
					label: "14 anos",
					value: "14",
				},
				{
					label: "15 anos",
					value: "15",
				},
				{
					label: "16 anos",
					value: "16",
				},
				{
					label: "17 anos",
					value: "17",
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
				{
					label: "12 år",
					value: "12",
				},
				{
					label: "13 år",
					value: "13",
				},
				{
					label: "14 år",
					value: "14",
				},
				{
					label: "15 år",
					value: "15",
				},
				{
					label: "16 år",
					value: "16",
				},
				{
					label: "17 år",
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
		"es-MX": {
			type: Question.QuestionDropdown,
			heading: "¡Te damos la bienvenida!",
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
				{
					label: "Douze ans",
					value: "12",
				},
				{
					label: "Treize ans",
					value: "13",
				},
				{
					label: "Quatorze ans",
					value: "14",
				},
				{
					label: "Quinze ans",
					value: "15",
				},
				{
					label: "Seize ans",
					value: "16",
				},
				{
					label: "Dix-sept ans",
					value: "17",
				},
			],
		},
	},
};

export default DemographicPage;
