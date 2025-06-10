import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const Financial: LangQuestionRadioPayloadInterface = {
	ident: "difficulty_to_meet_financial_needs",
	name: "difficulty_to_meet_financial_needs",
	type: Screen.SingleQuestion,
	column_name: "financial_needs",
	audio_ident: "financial",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "How difficult or easy is it for you to meet the financial needs of your family?",
			kid_label: "How difficult or easy is it for you to meet the financial needs of your family?",
			adult_label:
				"How difficult or easy is it for you to meet the financial needs of your family?",
			choices: [
				{
					label: "Very difficult",
					value: "Very difficult",
				},
				{
					label: "Difficult",
					value: "Difficult",
				},
				{
					label: "Neither easy nor difficult",
					value: "Neither easy nor difficult",
				},
				{
					label: "Easy",
					value: "Easy",
				},
				{
					label: "Very easy",
					value: "Very easy",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"en-IN": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "How difficult or easy is it for you to meet the financial needs of your family?",
			kid_label: "How difficult or easy is it for you to meet the financial needs of your family?",
			adult_label:
				"How difficult or easy is it for you to meet the financial needs of your family?",
			choices: [
				{
					label: "Very difficult",
					value: "Very difficult",
				},
				{
					label: "Difficult",
					value: "Difficult",
				},
				{
					label: "Neither easy nor difficult",
					value: "Neither easy nor difficult",
				},
				{
					label: "Easy",
					value: "Easy",
				},
				{
					label: "Very easy",
					value: "Very easy",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"mi-NZ": {
			type: Question.QuestionRadio,
			heading: "Pātai 30",
			label:
				"He uaua rānei, he ngāwari rānei ki a koe te whakarato i ngā hiahia ahumoni o tō whānau?",
			kid_label:
				"He uaua rānei, he ngāwari rānei ki a koe te whakarato i ngā hiahia ahumoni o tō whānau?",
			adult_label:
				"He uaua rānei, he ngāwari rānei ki a koe te whakarato i ngā hiahia ahumoni o tō whānau?",
			choices: [
				{
					label: "Uaua rawa atu",
					value: "Very difficult",
				},
				{
					label: "Uaua",
					value: "Difficult",
				},
				{
					label: "Kāore i ngāwari, kāore i uaua",
					value: "Neither easy nor difficult",
				},
				{
					label: "Ngāwari",
					value: "Easy",
				},
				{
					label: "Tīno ngāwari",
					value: "Very easy",
				},
				{
					label: "Kāore mō te whakautu",
					value: "Prefer not to answer",
				},
			],
		},
		"en-NZ": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "How difficult or easy is it for you to meet the financial needs of your family?",
			kid_label: "How difficult or easy is it for you to meet the financial needs of your family?",
			adult_label:
				"How difficult or easy is it for you to meet the financial needs of your family?",
			choices: [
				{
					label: "Very difficult",
					value: "Very difficult",
				},
				{
					label: "Difficult",
					value: "Difficult",
				},
				{
					label: "Neither easy nor difficult",
					value: "Neither easy nor difficult",
				},
				{
					label: "Easy",
					value: "Easy",
				},
				{
					label: "Very easy",
					value: "Very easy",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"cz-CR": {
			type: Question.QuestionRadio,
			heading: "Otázka 30",
			label: "Jak složité je pro vás uspokojit finanční nároky vaší rodiny?",
			kid_label: "Jak složité je pro vás uspokojit finanční nároky vaší rodiny?",
			adult_label: "Jak složité je pro vás uspokojit finanční nároky vaší rodiny?",
			choices: [
				{
					label: "Velmi složité",
					value: "Very difficult",
				},
				{
					label: "Složité",
					value: "Difficult",
				},
				{
					label: "Ani složité, ani jednoduché",
					value: "Neither easy nor difficult",
				},
				{
					label: "Jednoduché",
					value: "Easy",
				},
				{
					label: "Velmi jednoduché",
					value: "Very easy",
				},
				{
					label: "Nechci odpovídat",
					value: "Prefer not to answer",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 30",
			label:
				"¿Cómo de difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			kid_label:
				"¿Qué tan difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			adult_label:
				"¿Qué tan difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			choices: [
				{
					label: "Muy difícil",
					value: "Very difficult",
				},
				{
					label: "Difícil",
					value: "Difficult",
				},
				{
					label: "Ni fácil ni difícil",
					value: "Neither easy nor difficult",
				},
				{
					label: "Fácil",
					value: "Easy",
				},
				{
					label: "Muy fácil",
					value: "Very easy",
				},
				{
					label: "Prefiero no contestar",
					value: "Prefer not to answer",
				},
			],
		},
		"es-CL": {
			type: Question.QuestionRadio,
			heading: "Pregunta 30",
			label:
				"¿Cómo de difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			kid_label:
				"¿Qué tan difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			adult_label:
				"¿Qué tan difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			choices: [
				{
					label: "Muy difícil",
					value: "Very difficult",
				},
				{
					label: "Difícil",
					value: "Difficult",
				},
				{
					label: "Ni fácil ni difícil",
					value: "Neither easy nor difficult",
				},
				{
					label: "Fácil",
					value: "Easy",
				},
				{
					label: "Muy fácil",
					value: "Very easy",
				},
				{
					label: "Prefiero no contestar",
					value: "Prefer not to answer",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "How difficult or easy is it for you to meet the financial needs of your family?",
			kid_label: "How difficult or easy is it for you to meet the financial needs of your family?",
			adult_label:
				"How difficult or easy is it for you to meet the financial needs of your family?",
			choices: [
				{
					label: "Very difficult",
					value: "Very difficult",
				},
				{
					label: "Difficult",
					value: "Difficult",
				},
				{
					label: "Neither easy nor difficult",
					value: "Neither easy nor difficult",
				},
				{
					label: "Easy",
					value: "Easy",
				},
				{
					label: "Very easy",
					value: "Very easy",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "How difficult or easy is it for you to meet the financial needs of your family?",
			kid_label: "How difficult or easy is it for you to meet the financial needs of your family?",
			adult_label:
				"How difficult or easy is it for you to meet the financial needs of your family?",
			choices: [
				{
					label: "Very difficult",
					value: "Very difficult",
				},
				{
					label: "Difficult",
					value: "Difficult",
				},
				{
					label: "Neither easy nor difficult",
					value: "Neither easy nor difficult",
				},
				{
					label: "Easy",
					value: "Easy",
				},
				{
					label: "Very easy",
					value: "Very easy",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 30",
			label: "Zimakhala zovuta kapena zosavuta bwanji kuti mupeze zosowa za banja lanu?",
			kid_label: "Zimakhala zovuta kapena zosavuta bwanji kuti mupeze zosowa za banja lanu?",
			adult_label: "Zimakhala zovuta kapena zosavuta bwanji kuti mupeze zosowa za banja lanu?",
			choices: [
				{
					label: "Zovuta kwambiri",
					value: "Very difficult",
				},
				{
					label: "Zovuta",
					value: "Difficult",
				},
				{
					label: "Pakatikati",
					value: "Neither easy nor difficult",
				},
				{
					label: "Zophweka",
					value: "Easy",
				},
				{
					label: "Zophweka kwambiri",
					value: "Very easy",
				},
				{
					label: "Ndasankha kusayankha",
					value: "Prefer not to answer",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न ३०",
			label: "तुमच्या कुटुंबाच्या आर्थिक गरजा पूर्ण करणे तुमच्यासाठी कितपत अवघड किंवा सोपे आहे?",
			kid_label:
				"तुमच्या कुटुंबाच्या आर्थिक गरजा पूर्ण करणे तुमच्यासाठी कितपत अवघड किंवा सोपे आहे?",
			adult_label:
				"तुमच्या कुटुंबाच्या आर्थिक गरजा पूर्ण करणे तुमच्यासाठी कितपत अवघड किंवा सोपे आहे?",
			choices: [
				{
					label: "खूप अवघड",
					value: "Very difficult",
				},
				{
					label: "अवघड",
					value: "Difficult",
				},
				{
					label: "सोपेही नाही किंवा अवघडही नाही",
					value: "Neither easy nor difficult",
				},
				{
					label: "सोपे",
					value: "Easy",
				},
				{
					label: "खूप सोपे",
					value: "Very easy",
				},
				{
					label: "मला नाही सांगायचे",
					value: "Prefer not to answer",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न ३०",
			label: "आपके लिए अपने परिवार की वित्तीय जरूरतों को पूरा करना कितना मुश्किल या आसान है?",
			kid_label: "आपके लिए अपने परिवार की वित्तीय जरूरतों को पूरा करना कितना मुश्किल या आसान है?",
			adult_label: "आपके लिए अपने परिवार की वित्तीय जरूरतों को पूरा करना कितना मुश्किल या आसान है?",
			choices: [
				{
					label: "बहुत मुश्किल",
					value: "Very difficult",
				},
				{
					label: "मुश्किल",
					value: "Difficult",
				},
				{
					label: "न आसान न मुश्किल",
					value: "Neither easy nor difficult",
				},
				{
					label: "आसान ",
					value: "Easy",
				},
				{
					label: "बहुत आसान",
					value: "Very easy",
				},
				{
					label: "जवाब नहीं देना पसंद करेंगे",
					value: "Prefer not to answer",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label: "How difficult or easy is it for you to meet the financial needs of your family?",
			kid_label: "How difficult or easy is it for you to meet the financial needs of your family?",
			adult_label:
				"How difficult or easy is it for you to meet the financial needs of your family?",
			choices: [
				{
					label: "Very difficult",
					value: "Very difficult",
				},
				{
					label: "Difficult",
					value: "Difficult",
				},
				{
					label: "Neither easy nor difficult",
					value: "Neither easy nor difficult",
				},
				{
					label: "Easy",
					value: "Easy",
				},
				{
					label: "Very easy",
					value: "Very easy",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [٣٠]",
			label: "ما مدى صعوبة تلبية الاحتياجات المالية لعائلتك؟",
			kid_label: "ما مدى صعوبة تلبية الاحتياجات المالية لعائلتك؟",
			adult_label: "ما مدى صعوبة تلبية الاحتياجات المالية لعائلتك؟",
			choices: [
				{
					label: "صعب جداً",
					value: "Very difficult",
				},
				{
					label: "صعب",
					value: "Difficult",
				},
				{
					label: "ليس سهلاً ولا صعباً",
					value: "Neither easy nor difficult",
				},
				{
					label: "سهل",
					value: "Easy",
				},
				{
					label: "سهل جداً",
					value: "Very easy",
				},
				{
					label: "أفضّل عدم الإجابة",
					value: "Prefer not to answer",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न ३०",
			label: "तपाइलाई तपाइको पारिवारिक आवसेकता पुरा गर्न कती सजिलो वा गाह्रो छ?",
			kid_label: "तपाइलाई तपाइको पारिवारिक आवसेकता पुरा गर्न कती सजिलो वा गाह्रो छ?",
			adult_label: "तपाइलाई तपाइको पारिवारिक आवसेकता पुरा गर्न कती सजिलो वा गाह्रो छ?",
			choices: [
				{
					label: "धेरै गाह्रो छ",
					value: "Very difficult",
				},
				{
					label: "गाह्रो छ",
					value: "Difficult",
				},
				{
					label: "न त गाह्रो छ न त सजिलो छ",
					value: "Neither easy nor difficult",
				},
				{
					label: "सजिलो छ",
					value: "Easy",
				},
				{
					label: "धेरै सजिलो छ",
					value: "Very easy",
				},
				{
					label: "भन्न चाहन्न",
					value: "Prefer not to answer",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 30",
			label: "Quão difícil ou fácil é para você suprir as necessidades financeiras de sua família?",
			kid_label:
				"Quão difícil ou fácil é para você suprir as necessidades financeiras de sua família?",
			adult_label:
				"Quão difícil ou fácil é para você suprir as necessidades financeiras de sua família?",
			choices: [
				{
					label: "Muito difícil",
					value: "Very difficult",
				},
				{
					label: "Difícil",
					value: "Difficult",
				},
				{
					label: "Nem fácil nem difícil",
					value: "Neither easy nor difficult",
				},
				{
					label: "Fácil",
					value: "Easy",
				},
				{
					label: "Muito fácil",
					value: "Very easy",
				},
				{
					label: "Prefiro não responder",
					value: "Prefer not to answer",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 30",
			label: "Hur svårt eller enkelt är det för dig att tillgodose din familjs ekonomiska behov?",
			kid_label:
				"Hur svårt eller enkelt är det för dig att tillgodose din familjs ekonomiska behov?",
			adult_label:
				"Hur svårt eller enkelt är det för dig att tillgodose din familjs ekonomiska behov?",
			choices: [
				{
					label: "Mycket svårt",
					value: "Very difficult",
				},
				{
					label: "Svårt",
					value: "Difficult",
				},
				{
					label: "Varken svårt eller enkelt",
					value: "Neither easy nor difficult",
				},
				{
					label: "Enkelt",
					value: "Easy",
				},
				{
					label: "Mycket enkelt",
					value: "Very easy",
				},
				{
					label: "Föredrar att inte svara",
					value: "Prefer not to answer",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "ข้อ 30",
			label: "คุณสามารถตอบสนองความต้องการของครอบครัวทางการเงินในด้านต่าง ๆ ได้ยากหรือง่ายเพียงใด?",
			kid_label:
				"คุณสามารถตอบสนองความต้องการของครอบครัวทางการเงินในด้านต่าง ๆ ได้ยากหรือง่ายเพียงใด?",
			adult_label:
				"คุณสามารถตอบสนองความต้องการของครอบครัวทางการเงินในด้านต่าง ๆ ได้ยากหรือง่ายเพียงใด?",
			choices: [
				{
					label: "ยากมาก",
					value: "Very difficult",
				},
				{
					label: "ยาก",
					value: "Difficult",
				},
				{
					label: "ไม่ง่ายและไม่ยาก",
					value: "Neither easy nor difficult",
				},
				{
					label: "ง่าย",
					value: "Easy",
				},
				{
					label: "ง่ายมาก",
					value: "Very easy",
				},
				{
					label: "ไม่ต้องการตอบ",
					value: "Prefer not to answer",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 30",
			label: "对您来说满足家庭的经济需求难易程度如何？",
			kid_label: "对您来说满足家庭的经济需求难易程度如何？",
			adult_label: "对您来说满足家庭的经济需求难易程度如何？",
			choices: [
				{
					label: "非常困难",
					value: "Very difficult",
				},
				{
					label: "困难",
					value: "Difficult",
				},
				{
					label: "一般",
					value: "Neither easy nor difficult",
				},
				{
					label: "容易",
					value: "Easy",
				},
				{
					label: "非常容易",
					value: "Very easy",
				},
				{
					label: "不想回答",
					value: "Prefer not to answer",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 30",
			label:
				"¿Cómo de difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			kid_label:
				"¿Qué tan difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			adult_label:
				"¿Qué tan difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			choices: [
				{
					label: "Muy difícil",
					value: "Very difficult",
				},
				{
					label: "Difícil",
					value: "Difficult",
				},
				{
					label: "Ni fácil ni difícil",
					value: "Neither easy nor difficult",
				},
				{
					label: "Fácil",
					value: "Easy",
				},
				{
					label: "Muy fácil",
					value: "Very easy",
				},
				{
					label: "Prefiero no contestar",
					value: "Prefer not to answer",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 30",
			label:
				"¿Qué tan difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			kid_label:
				"¿Qué tan difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			adult_label:
				"¿Qué tan difícil o fácil es para usted cubrir las necesidades económicas de su familia?",
			choices: [
				{
					label: "Muy difícil",
					value: "Very difficult",
				},
				{
					label: "Difícil",
					value: "Difficult",
				},
				{
					label: "Ni fácil ni difícil",
					value: "Neither easy nor difficult",
				},
				{
					label: "Fácil",
					value: "Easy",
				},
				{
					label: "Muy fácil",
					value: "Very easy",
				},
				{
					label: "Prefiero no contestar",
					value: "Prefer not to answer",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 30",
			label:
				"Est-ce difficile ou facile pour vous de subvenir aux besoins financiers de votre famille?",
			kid_label:
				"Est-ce difficile ou facile pour vous de subvenir aux besoins financiers de votre famille?",
			adult_label:
				"Est-ce difficile ou facile pour vous de subvenir aux besoins financiers de votre famille?",
			choices: [
				{
					label: "Très difficile",
					value: "Very difficult",
				},
				{
					label: "Difficile",
					value: "Difficult",
				},
				{
					label: "Ni facile ni difficile",
					value: "Neither easy nor difficult",
				},
				{
					label: "Facile",
					value: "Easy",
				},
				{
					label: "Très facile",
					value: "Very easy",
				},
				{
					label: "Préfère ne pas répondre",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default Financial;
