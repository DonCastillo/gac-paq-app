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
		"es-CO": {
			type: Question.QuestionDropdown,
			heading: "¡Bienvenido!",
			label: "¿Quén esta respondiendo el cuestionario?",
			kid_label: "¿Quén esta respondiendo el cuestionario?",
			adult_label: "¿Quén esta respondiendo el cuestionario?",
			choices: [
				{
					label: "Niña o niño",
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
					label: "Padre/madre/cuidador(a)",
					value: "adult",
				},
			],
		},
		"en-MW": {
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
		"en-NG": {
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
		"ch-MW": {
			type: Question.QuestionDropdown,
			heading: "Mwalandilidwa!",
			label: "Kodi akuyankha mafunsowa ndani?",
			kid_label: "Kodi akuyankha mafunsowa ndani?",
			adult_label: "Kodi akuyankha mafunsowa ndani?",
			choices: [
				{
					label: "Mwana",
					value: "child",
					sublabel: {
						kid: "wa zaka za pakati pa 8 ndi 11",
						adult: "wa zaka za pakati pa 8 ndi 11",
					},
				},
				{
					label: "Wachinyamata",
					value: "teen",
					sublabel: {
						kid: "wa zaka za pakati pa 12 ndi 17",
						adult: "wa zaka za pakati pa 12 ndi 17",
					},
				},
				{
					label: "Kholo",
					value: "adult",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionDropdown,
			heading: "आपले स्वागत आहे!",
			label: "ही प्रश्नावली कोण घेत आहे?",
			kid_label: "ही प्रश्नावली कोण घेत आहे?",
			adult_label: "ही प्रश्नावली कोण घेत आहे?",
			choices: [
				{
					label: "मूल",
					value: "child",
					sublabel: {
						kid: "८ ते ११ वर्षे",
						adult: "८ ते ११ वर्षे",
					},
				},
				{
					label: "किशोर",
					value: "teen",
					sublabel: {
						kid: "१२ ते १७ वर्षे",
						adult: "१२ ते १७ वर्षे",
					},
				},
				{
					label: "पालक",
					value: "adult",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionDropdown,
			heading: "आपका स्वागत है",
			label: "यह प्रश्नावली कौन ले रहा है",
			kid_label: "यह प्रश्नावली कौन ले रहा है",
			adult_label: "यह प्रश्नावली कौन ले रहा है",
			choices: [
				{
					label: "बच्चा",
					value: "child",
					sublabel: {
						kid: "8 से 11 वर्ष",
						adult: "8 से 11 वर्ष",
					},
				},
				{
					label: "किशोर",
					value: "teen",
					sublabel: {
						kid: "12 से 17 वर्ष",
						adult: "12 से 17 वर्ष",
					},
				},
				{
					label: "माता-पिता",
					value: "adult",
				},
			],
		},
		"en-AE": {
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
		"ar-AE": {
			type: Question.QuestionDropdown,
			heading: "مرحباً بك!",
			label: "من الذي يقوم بإجراء هذا الاستبيان؟",
			kid_label: "من الذي يقوم بإجراء هذا الاستبيان؟",
			adult_label: "من الذي يقوم بإجراء هذا الاستبيان؟",
			choices: [
				{
					label: "طفل",
					value: "child",
					sublabel: {
						kid: "من ٨ سنوات إلى ١١ سنة",
						adult: "من ٨ سنوات إلى ١١ سنة",
					},
				},
				{
					label: "مراهق",
					value: "teen",
					sublabel: {
						kid: "من ١٢ إلى ١٧ سنة",
						adult: "من ١٢ إلى ١٧ سنة",
					},
				},
				{
					label: "والد(ة)",
					value: "adult",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionDropdown,
			heading: "तपाईं लाई स्वागत् छ",
			label: "यो प्रश्नावली कसले भर्दै छ?",
			kid_label: "यो प्रश्नावली कसले भर्दै छ?",
			adult_label: "यो प्रश्नावली कसले भर्दै छ?",
			choices: [
				{
					label: "वालवालिका",
					value: "child",
					sublabel: {
						kid: "८ देखी ११ वर्षको",
						adult: "८ देखी ११ वर्षको",
					},
				},
				{
					label: "किशोर किशोरी",
					value: "teen",
					sublabel: {
						kid: "१२ देखी १७ वर्षको",
						adult: "१२ देखी १७ वर्षको",
					},
				},
				{
					label: "अभिभावक",
					value: "adult",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionDropdown,
			heading: "Bem-vindo(a)!",
			label: "Quem está respondendo a este questionário?",
			kid_label: "Quem está respondendo a este questionário?",
			adult_label: "Quantos anos tem a criança ou adolescente que você é responsável?",
			choices: [
				{
					label: "Criança",
					value: "child",
					sublabel: {
						kid: "8 a 11 anos",
						adult: "8 a 11 anos",
					},
				},
				{
					label: "Adolescente",
					value: "teen",
					sublabel: {
						kid: "12 a 17 anos",
						adult: "12 a 17 anos",
					},
				},
				{
					label: "Pai/Mãe (ou Responsável)",
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
		"es-ES": {
			type: Question.QuestionDropdown,
			heading: "¡Bienvenido!",
			label: "¿Quén esta respondiendo el cuestionario?",
			kid_label: "¿Quén esta respondiendo el cuestionario?",
			adult_label: "¿Quén esta respondiendo el cuestionario?",
			choices: [
				{
					label: "Niña o niño",
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
					label: "Padre/madre/cuidador(a)",
					value: "adult",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionDropdown,
			heading: "¡Te damos la bienvenida!",
			label: "¿Quién está respondiendo el cuestionario?",
			kid_label: "¿Quién está respondiendo el cuestionario?",
			adult_label: "¿Quién está respondiendo el cuestionario?",
			choices: [
				{
					label: "Niño o niña",
					value: "child",
					sublabel: {
						kid: "de 8 a 11 años de edad",
						adult: "de 8 a 11 años de edad",
					},
				},
				{
					label: "Adolescente",
					value: "teen",
					sublabel: {
						kid: "de 12 a 17 años de edad",
						adult: "de 12 a 17 años de edad",
					},
				},
				{
					label: "Padre/madre o cuidador",
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
