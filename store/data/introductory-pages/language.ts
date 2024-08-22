import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { LangQuestionDropdownPayloadLanguageInterface } from "interface/payload.type";

const LanguagePage: LangQuestionDropdownPayloadLanguageInterface = {
	ident: "language_location",
	name: "language_location",
	type: Screen.Language,
	column_name: "language_location",
	translations: {
		"en-CA": {
			type: Question.QuestionLanguage,
			heading: "Welcome!",
			label: "What language do you speak & Where are you?",
			kid_label: "What language do you speak & Where are you?",
			adult_label: "What language do you speak & Where are you?",
		},
		"pt-BR": {
			type: Question.QuestionLanguage,
			heading: "Bem-vindo(a)!",
			label: "Que língua você fala e onde você está?",
			kid_label: "Que língua você fala e onde você está?",
			adult_label: "Que língua você fala e onde você está?",
		},
		"sv-SE": {
			type: Question.QuestionLanguage,
			heading: "Välkommen!",
			label: "Vilket språk talar du & Var är du?",
			kid_label: "Vilket språk talar du & Var är du?",
			adult_label: "Vilket språk talar du & Var är du?",
		},
		"th-TH": {
			type: Question.QuestionLanguage,
			heading: "ยินดีต้อนรับ!",
			label: "คุณพูดภาษาอะไรและอยู่ที่ไหน?",
			kid_label: "คุณพูดภาษาอะไรและอยู่ที่ไหน?",
			adult_label: "คุณพูดภาษาอะไรและอยู่ที่ไหน?",
		},
		"zh-CN": {
			type: Question.QuestionLanguage,
			heading: "欢迎!",
			label: "您讲哪种语言？您在哪里?",
			kid_label: "您讲哪种语言？您在哪里?",
			adult_label: "您讲哪种语言？您在哪里?",
		},
		"es-ES": {
			type: Question.QuestionLanguage,
			heading: "¡Bienvenido!",
			label: "¿Qué idioma hablas y dónde estás?",
			kid_label: "¿Qué idioma hablas y dónde estás?",
			adult_label: "¿Qué idioma hablas y dónde estás?",
		},
		"es-MX": {
			type: Question.QuestionLanguage,
			heading: "¡Bienvenido!",
			label: "¿Qué idioma hablas y dónde estás?",
			kid_label: "¿Qué idioma hablas y dónde estás?",
			adult_label: "¿Qué idioma hablas y dónde estás?",
		},
		"fr-CA": {
			type: Question.QuestionLanguage,
			heading: "Bienvenue!",
			label: "Quelle langue préfères-tu et où es-tu ?",
			kid_label: "Quelle langue préfères-tu et où es-tu ?",
			adult_label: "Quelle langue préfères-tu et où es-tu ?",
		},
	},
};

export default LanguagePage;
