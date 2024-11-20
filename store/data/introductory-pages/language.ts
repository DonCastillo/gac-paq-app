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
		"es-CO": {
			type: Question.QuestionLanguage,
			heading: "¡Bienvenido!",
			label: "¿Qué idioma hablas y dónde estás?",
			kid_label: "¿Qué idioma hablas y dónde estás?",
			adult_label: "¿Qué idioma hablas y dónde estás?",
		},
		"en-MW": {
			type: Question.QuestionLanguage,
			heading: "Welcome!",
			label: "What language do you speak & Where are you?",
			kid_label: "What language do you speak & Where are you?",
			adult_label: "What language do you speak & Where are you?",
		},
		"en-NG": {
			type: Question.QuestionLanguage,
			heading: "Welcome!",
			label: "What language do you speak & Where are you?",
			kid_label: "What language do you speak & Where are you?",
			adult_label: "What language do you speak & Where are you?",
		},
		"ch-MW": {
			type: Question.QuestionLanguage,
			heading: "Mwalandilidwa!",
			label: "Kodi mumalankhula chilankhulo chanji? Muli kuti?",
			kid_label: "Kodi mumalankhula chilankhulo chanji? Muli kuti?",
			adult_label: "Kodi mumalankhula chilankhulo chanji? Muli kuti?",
		},
		"ma-IN": {
			type: Question.QuestionLanguage,
			heading: "आपले स्वागत आहे!",
			label: "तुम्ही कोणती भाषा बोलता आणि तुम्ही कुठे आहात?",
			kid_label: "तुम्ही कोणती भाषा बोलता आणि तुम्ही कुठे आहात?",
			adult_label: "तुम्ही कोणती भाषा बोलता आणि तुम्ही कुठे आहात?",
		},
		"hi-IN": {
			type: Question.QuestionLanguage,
			heading: "आपका स्वागत है",
			label: "आप कौनसी भाषा बोलते हैं और आप कहाँ हैं?",
			kid_label: "आप कौनसी भाषा बोलते हैं और आप कहाँ हैं?",
			adult_label: "आप कौनसी भाषा बोलते हैं और आप कहाँ हैं?",
		},
		"en-AE": {
			type: Question.QuestionLanguage,
			heading: "Welcome!",
			label: "What language do you speak & Where are you?",
			kid_label: "What language do you speak & Where are you?",
			adult_label: "What language do you speak & Where are you?",
		},
		"ar-AE": {
			type: Question.QuestionLanguage,
			heading: "مرحباً بك",
			label: "ما اللغة التي تتحدثها وأين أنت؟",
			kid_label: "ما اللغة التي تتحدثها وأين أنت؟",
			adult_label: "ما اللغة التي تتحدثها وأين أنت؟",
		},
		"ne-NP": {
			type: Question.QuestionLanguage,
			heading: "तपाईं लाई स्वागत् छ",
			label: "तपाईं कुन भाषा बोल्नुहुन्छ? र, तपाईं कहाँ हुनुहुन्छ?",
			kid_label: "तपाईं कुन भाषा बोल्नुहुन्छ? र, तपाईं कहाँ हुनुहुन्छ?",
			adult_label: "तपाईं कुन भाषा बोल्नुहुन्छ? र, तपाईं कहाँ हुनुहुन्छ?",
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
			heading: "¡Te damos la bienvenida!",
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
