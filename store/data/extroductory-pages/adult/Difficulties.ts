import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionCheckboxPayloadInterface } from "interface/payload.type";

const Difficulties: LangQuestionCheckboxPayloadInterface = {
	ident: "child_difficulties",
	name: "child_difficulties",
	type: Screen.SingleQuestion,
	column_name: "difficulties",
	audio_ident: "child_difficulties",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 25",
			label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			adult_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_sublabel: "Select all that apply",
			adult_sublabel: "Select all that apply",
			choices: [
				{
					label: "Hearing",
					value: "Hearing",
				},
				{
					label: "Seeing",
					value: "Seeing",
				},
				{
					label: "Speech",
					value: "Speech",
				},
				{
					label: "Mobility",
					value: "Mobility",
				},
				{
					label: "Agility",
					value: "Agility",
				},
				{
					label: "Pain",
					value: "Pain",
				},
				{
					label: "Memory",
					value: "Memory",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to say",
					value: "Prefer not to say",
				},
				{
					label: "None of the above, they don't have difficulties",
					value: "None of the above",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionCheckbox,
			heading: "Pregunta 25",
			label:
				"Por favor indique si su hija o hijo tiene dificultades con alguno de los siguientes aspectos en sus actividades diarias",
			kid_label:
				"Por favor indique si su hija o hijo tiene dificultades con alguno de los siguientes aspectos en sus actividades diarias",
			adult_label:
				"Por favor indique si su hija o hijo tiene dificultades con alguno de los siguientes aspectos en sus actividades diarias",
			kid_sublabel: "Seleccione todas las opciones que correspondan",
			adult_sublabel: "Seleccione todas las opciones que correspondan",
			choices: [
				{
					label: "Oír",
					value: "Hearing",
				},
				{
					label: "Ver",
					value: "Seeing",
				},
				{
					label: "Hablar",
					value: "Speech",
				},
				{
					label: "Movimiento",
					value: "Mobility",
				},
				{
					label: "Agilidad",
					value: "Agility",
				},
				{
					label: "Dolor",
					value: "Pain",
				},
				{
					label: "Memoria",
					value: "Memory",
				},
				{
					label: "Otro",
					value: "Other",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to say",
				},
				{
					label: "Ninguno de los anteriores, no tiene dificultades",
					value: "None of the above",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionCheckbox,
			heading: "Question 25",
			label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			adult_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_sublabel: "Select all that apply",
			adult_sublabel: "Select all that apply",
			choices: [
				{
					label: "Hearing",
					value: "Hearing",
				},
				{
					label: "Seeing",
					value: "Seeing",
				},
				{
					label: "Speech",
					value: "Speech",
				},
				{
					label: "Mobility",
					value: "Mobility",
				},
				{
					label: "Agility",
					value: "Agility",
				},
				{
					label: "Pain",
					value: "Pain",
				},
				{
					label: "Memory",
					value: "Memory",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to say",
					value: "Prefer not to say",
				},
				{
					label: "None of the above, they don't have difficulties",
					value: "None of the above",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionCheckbox,
			heading: "Question 25",
			label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			adult_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_sublabel: "Select all that apply",
			adult_sublabel: "Select all that apply",
			choices: [
				{
					label: "Hearing",
					value: "Hearing",
				},
				{
					label: "Seeing",
					value: "Seeing",
				},
				{
					label: "Speech",
					value: "Speech",
				},
				{
					label: "Mobility",
					value: "Mobility",
				},
				{
					label: "Agility",
					value: "Agility",
				},
				{
					label: "Pain",
					value: "Pain",
				},
				{
					label: "Memory",
					value: "Memory",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to say",
					value: "Prefer not to say",
				},
				{
					label: "None of the above, they don't have difficulties",
					value: "None of the above",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionCheckbox,
			heading: "Funso 25",
			label:
				"Chonde onetsani ngati mwana wanu ali ndi zovuta ndi zotsatirazi pazochitika zake za tsiku ndi tsiku.",
			kid_label:
				"Chonde onetsani ngati mwana wanu ali ndi zovuta ndi zotsatirazi pazochitika zake za tsiku ndi tsiku.",
			adult_label:
				"Chonde onetsani ngati mwana wanu ali ndi zovuta ndi zotsatirazi pazochitika zake za tsiku ndi tsiku.",
			kid_sublabel: "Sankhani zonse zomwe zikugwira ntchito.",
			adult_sublabel: "Sankhani zonse zomwe zikugwira ntchito.",
			choices: [
				{
					label: "Kumva",
					value: "Hearing",
				},
				{
					label: "Kuona",
					value: "Seeing",
				},
				{
					label: "Kuyankhula",
					value: "Speech",
				},
				{
					label: "Kuyenda",
					value: "Mobility",
				},
				{
					label: "Kuthamanga",
					value: "Agility",
				},
				{
					label: "Kumva kupweteka mthupi",
					value: "Pain",
				},
				{
					label: "Kukumbukira zinthu",
					value: "Memory",
				},
				{
					label: "Zina",
					value: "Other",
				},
				{
					label: "Ndasankha kusayankha",
					value: "Prefer not to say",
				},
				{
					label: "Alibe vuto lililonse",
					value: "None of the above",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionCheckbox,
			heading: "प्रश्न २५",
			label:
				"कृपया तुमच्या मुलाला त्याच्या / तिच्या दैनंदिन कामांमध्ये खालीलपैकी काही अडचणी येत असल्यास नमूद करा.",
			kid_label:
				"कृपया तुमच्या मुलाला त्याच्या / तिच्या दैनंदिन कामांमध्ये खालीलपैकी काही अडचणी येत असल्यास नमूद करा.",
			adult_label:
				"कृपया तुमच्या मुलाला त्याच्या / तिच्या दैनंदिन कामांमध्ये खालीलपैकी काही अडचणी येत असल्यास नमूद करा.",
			kid_sublabel: "लागू होणारे सर्व पर्याय निवडा",
			adult_sublabel: "लागू होणारे सर्व पर्याय निवडा",
			choices: [
				{
					label: "ऐकणे",
					value: "Hearing",
				},
				{
					label: "बघणे",
					value: "Seeing",
				},
				{
					label: "बोलणे",
					value: "Speech",
				},
				{
					label: "शारीरिक हालचाल करणे",
					value: "Mobility",
				},
				{
					label: "चपळाईने हालचाल करणे",
					value: "Agility",
				},
				{
					label: "वेदना जाणवणे",
					value: "Pain",
				},
				{
					label: "स्मरणशक्ती / गोष्टी लक्षात राहणे",
					value: "Memory",
				},
				{
					label: "इतर",
					value: "Other",
				},
				{
					label: "मला नाही सांगायचे",
					value: "Prefer not to say",
				},
				{
					label: "यांपैकी काहीही नाही, त्याला / तिला कोणत्याही अडचणी नाहीत",
					value: "None of the above",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionCheckbox,
			heading: "प्रश्न २५",
			label:
				"कृपया बताएं कि क्या आपके बच्चे को अपनी दैनिक गतिविधियों में निम्नलिखित में से किसी में कठिनाई होती है",
			kid_label:
				"कृपया बताएं कि क्या आपके बच्चे को अपनी दैनिक गतिविधियों में निम्नलिखित में से किसी में कठिनाई होती है",
			adult_label:
				"कृपया बताएं कि क्या आपके बच्चे को अपनी दैनिक गतिविधियों में निम्नलिखित में से किसी में कठिनाई होती है",
			kid_sublabel: "हर वो जो लागू हो उन्हें चुनें",
			adult_sublabel: "हर वो जो लागू हो उन्हें चुनें",
			choices: [
				{
					label: "सुनना",
					value: "Hearing",
				},
				{
					label: "देखना",
					value: "Seeing",
				},
				{
					label: "बोलना",
					value: "Speech",
				},
				{
					label: "गतिशीलता",
					value: "Mobility",
				},
				{
					label: "फुर्ती",
					value: "Agility",
				},
				{
					label: "दर्द",
					value: "Pain",
				},
				{
					label: "स्मृति",
					value: "Memory",
				},
				{
					label: "अन्य",
					value: "Other",
				},
				{
					label: "नहीं कहना पसंद करेंगे",
					value: "Prefer not to say",
				},
				{
					label: "उपरोक्त में से कोई नहीं, उन्हें कोई कठिनाई नहीं है",
					value: "None of the above",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionCheckbox,
			heading: "Question 25",
			label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			adult_label:
				"Please indicate if your child has difficulties with any of the following in their daily activities.",
			kid_sublabel: "Select all that apply",
			adult_sublabel: "Select all that apply",
			choices: [
				{
					label: "Hearing",
					value: "Hearing",
				},
				{
					label: "Seeing",
					value: "Seeing",
				},
				{
					label: "Speech",
					value: "Speech",
				},
				{
					label: "Mobility",
					value: "Mobility",
				},
				{
					label: "Agility",
					value: "Agility",
				},
				{
					label: "Pain",
					value: "Pain",
				},
				{
					label: "Memory",
					value: "Memory",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to say",
					value: "Prefer not to say",
				},
				{
					label: "None of the above, they don't have difficulties",
					value: "None of the above",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionCheckbox,
			heading: "سؤال [٢٥]",
			label: "هل يواجه طفلك أياً من الصعوبات التالية في أنشطته اليومية؟",
			kid_label: "هل يواجه طفلك أياً من الصعوبات التالية في أنشطته اليومية؟",
			adult_label: "هل يواجه طفلك أياً من الصعوبات التالية في أنشطته اليومية؟",
			kid_sublabel: "يرجى تحديد جميع الخيارات التي تنطبق عليه",
			adult_sublabel: "يرجى تحديد جميع الخيارات التي تنطبق عليه",
			choices: [
				{
					label: "السمع",
					value: "Hearing",
				},
				{
					label: "البصر",
					value: "Seeing",
				},
				{
					label: "الكلام",
					value: "Speech",
				},
				{
					label: "الحركة",
					value: "Mobility",
				},
				{
					label: "الرشاقة",
					value: "Agility",
				},
				{
					label: "الذاكرة",
					value: "Pain",
				},
				{
					label: "ألم",
					value: "Memory",
				},
				{
					label: "صعوبات أخرى",
					value: "Other",
				},
				{
					label: "أفضّل عدم الإجابة",
					value: "Prefer not to say",
				},
				{
					label: "لا شيء مما سبق، ليس لديهم أي صعوبات",
					value: "None of the above",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionCheckbox,
			heading: "प्रश्न २५",
			label:
				"कृपया जानकारी गराउनु होला, यदी तपाईं छोरा वा छोरी लाईको कुनै प्रकारको शारीरिक गतिविधिहरु गर्न कठिनाइ छ भने",
			kid_label:
				"कृपया जानकारी गराउनु होला, यदी तपाईं छोरा वा छोरी लाईको कुनै प्रकारको शारीरिक गतिविधिहरु गर्न कठिनाइ छ भने",
			adult_label:
				"कृपया जानकारी गराउनु होला, यदी तपाईं छोरा वा छोरी लाईको कुनै प्रकारको शारीरिक गतिविधिहरु गर्न कठिनाइ छ भने",
			kid_sublabel: "उपयुक्त मा चिन्ह लगाउनुहोस् ।",
			adult_sublabel: "उपयुक्त मा चिन्ह लगाउनुहोस् ।",
			choices: [
				{
					label: "सुन्नमा",
					value: "Hearing",
				},
				{
					label: "हेर्नमा",
					value: "Seeing",
				},
				{
					label: "बोल्नमा",
					value: "Speech",
				},
				{
					label: "हिड्डुल गर्नमा",
					value: "Mobility",
				},
				{
					label: "जागरुक रहन मा",
					value: "Agility",
				},
				{
					label: "दुखाइमा",
					value: "Pain",
				},
				{
					label: "सम्झनमा",
					value: "Memory",
				},
				{
					label: "अन्य",
					value: "Other",
				},
				{
					label: "भन्न चाहन्न",
					value: "Prefer not to say",
				},
				{
					label: "कुनै पनि छैन, उ सँग कुनै समस्या छैन",
					value: "None of the above",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionCheckbox,
			heading: "Questão 25",
			label:
				"Por favor, indique se a criança ou adolescente que você é responsável tem dificuldades com alguma das seguintes situações nas atividades diárias.",
			kid_label:
				"Por favor, indique se a criança ou adolescente que você é responsável tem dificuldades com alguma das seguintes situações nas atividades diárias.",
			adult_label:
				"Por favor, indique se a criança ou adolescente que você é responsável tem dificuldades com alguma das seguintes situações nas atividades diárias.",
			kid_sublabel: "Selecione todas as que se aplicam.",
			adult_sublabel: "Selecione todas as opções que se aplicam.",
			choices: [
				{
					label: "Audição",
					value: "Hearing",
				},
				{
					label: "Visão",
					value: "Seeing",
				},
				{
					label: "Fala",
					value: "Speech",
				},
				{
					label: "Mobilidade",
					value: "Mobility",
				},
				{
					label: "Agilidade",
					value: "Agility",
				},
				{
					label: "Dor",
					value: "Pain",
				},
				{
					label: "Memória",
					value: "Memory",
				},
				{
					label: "Outro",
					value: "Other",
				},
				{
					label: "Prefiro não dizer",
					value: "Prefer not to say",
				},
				{
					label: "Nenhuma das opções anteriores, ele(a) não têm dificuldades",
					value: "None of the above",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionCheckbox,
			heading: "Fråga 25",
			label: "Ange om ditt barn har problem med något av följande i sina dagliga aktiviteter.",
			kid_label: "Ange om ditt barn har problem med något av följande i sina dagliga aktiviteter.",
			adult_label:
				"Ange om ditt barn har problem med något av följande i sina dagliga aktiviteter.",
			kid_sublabel: "välj alla som stämmer",
			adult_sublabel: "välj alla som stämmer",
			choices: [
				{
					label: "Hörsel",
					value: "Hearing",
				},
				{
					label: "Syn",
					value: "Seeing",
				},
				{
					label: "Tal",
					value: "Speech",
				},
				{
					label: "Rörlighet",
					value: "Mobility",
				},
				{
					label: "Röra sig kvickt och smidigt",
					value: "Agility",
				},
				{
					label: "Smärta",
					value: "Pain",
				},
				{
					label: "Minne",
					value: "Memory",
				},
				{
					label: "Annan",
					value: "Other",
				},
				{
					label: "Föredrar att inte svara",
					value: "Prefer not to say",
				},
				{
					label: "Inget av ovanstående, barnet har inga svårigheter",
					value: "None of the above",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionCheckbox,
			heading: "ข้อ 25",
			label: "บุตรหลานของคุณมีอุปสรรคใดต่อการใช้ชีวิตประจำวันตามรายการต่อไปนี้บ้างหรือไม่?",
			kid_label: "บุตรหลานของคุณมีอุปสรรคใดต่อการใช้ชีวิตประจำวันตามรายการต่อไปนี้บ้างหรือไม่?",
			adult_label: "บุตรหลานของคุณมีอุปสรรคใดต่อการใช้ชีวิตประจำวันตามรายการต่อไปนี้บ้างหรือไม่?",
			kid_sublabel: "เลือกทั้งหมดที่ตรงกับบุตรหลานของคุณ",
			adult_sublabel: "เลือกทั้งหมดที่ตรงกับบุตรหลานของคุณ",
			choices: [
				{
					label: "การฟัง",
					value: "Hearing",
				},
				{
					label: "การมองเห็น",
					value: "Seeing",
				},
				{
					label: "การพูด ",
					value: "Speech",
				},
				{
					label: "การเคลื่อนไหว",
					value: "Mobility",
				},
				{
					label: "ความคล่องตัว",
					value: "Agility",
				},
				{
					label: "อาการเจ็บปวด",
					value: "Pain",
				},
				{
					label: "ความทรงจำ",
					value: "Memory",
				},
				{
					label: "อื่น ๆ",
					value: "Other",
				},
				{
					label: "ไม่ต้องการตอบ",
					value: "Prefer not to say",
				},
				{
					label: "ไม่ตรงกับข้อใดเลย พวกเขาไม่มีอุปสรรคใด ๆ ตามที่กล่าวมาข้างต้น",
					value: "None of the above",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionCheckbox,
			heading: "问题 25",
			label: "请指出您的孩子在日常活动中是否有以下任何困难",
			kid_label: "请指出您的孩子在日常活动中是否有以下任何困难",
			adult_label: "请指出您的孩子在日常活动中是否有以下任何困难",
			kid_sublabel: "选择所有符合的",
			adult_sublabel: "选择所有符合的",
			choices: [
				{
					label: "听力",
					value: "Hearing",
				},
				{
					label: "视力",
					value: "Seeing",
				},
				{
					label: "说话能力",
					value: "Speech",
				},
				{
					label: "移动能力",
					value: "Mobility",
				},
				{
					label: "灵活性",
					value: "Agility",
				},
				{
					label: "痛觉",
					value: "Pain",
				},
				{
					label: "记忆力",
					value: "Memory",
				},
				{
					label: "其他",
					value: "Other",
				},
				{
					label: "不想回答",
					value: "Prefer not to say",
				},
				{
					label: "没有以上任何困难",
					value: "None of the above",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionCheckbox,
			heading: "Pregunta 25",
			label:
				"Por favor indique si su hija o hijo tiene dificultades con alguno de los siguientes aspectos en sus actividades diarias",
			kid_label:
				"Por favor indique si su hija o hijo tiene dificultades con alguno de los siguientes aspectos en sus actividades diarias",
			adult_label:
				"Por favor indique si su hija o hijo tiene dificultades con alguno de los siguientes aspectos en sus actividades diarias",
			kid_sublabel: "Seleccione todas las opciones que correspondan",
			adult_sublabel: "Seleccione todas las opciones que correspondan",
			choices: [
				{
					label: "Oír",
					value: "Hearing",
				},
				{
					label: "Ver",
					value: "Seeing",
				},
				{
					label: "Hablar",
					value: "Speech",
				},
				{
					label: "Movimiento",
					value: "Mobility",
				},
				{
					label: "Agilidad",
					value: "Agility",
				},
				{
					label: "Dolor",
					value: "Pain",
				},
				{
					label: "Memoria",
					value: "Memory",
				},
				{
					label: "Otro",
					value: "Other",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to say",
				},
				{
					label: "Ninguno de los anteriores, no tiene dificultades",
					value: "None of the above",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionCheckbox,
			heading: "Pregunta 25",
			label:
				"Por favor indique si su hija o hijo tiene dificultades con alguno de los siguientes aspectos en sus actividades diarias",
			kid_label:
				"Por favor indique si su hija o hijo tiene dificultades con alguno de los siguientes aspectos en sus actividades diarias",
			adult_label:
				"Por favor indique si su hija o hijo tiene dificultades con alguno de los siguientes aspectos en sus actividades diarias",
			kid_sublabel: "Seleccione todas las opciones que correspondan",
			adult_sublabel: "Seleccione todas las opciones que correspondan",
			choices: [
				{
					label: "Oír",
					value: "Hearing",
				},
				{
					label: "Ver",
					value: "Seeing",
				},
				{
					label: "Hablar",
					value: "Speech",
				},
				{
					label: "Movimiento",
					value: "Mobility",
				},
				{
					label: "Agilidad",
					value: "Agility",
				},
				{
					label: "Dolor",
					value: "Pain",
				},
				{
					label: "Memoria",
					value: "Memory",
				},
				{
					label: "Otro",
					value: "Other",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to say",
				},
				{
					label: "Ninguno de los anteriores, no tiene dificultades",
					value: "None of the above",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionCheckbox,
			heading: "Question 25",
			label:
				"Veuillez indiquer si votre enfant rencontre des difficultés avec n'importe lequel des éléments suivants dans ses activités quotidiennes",
			kid_label:
				"Veuillez indiquer si votre enfant rencontre des difficultés avec n'importe lequel des éléments suivants dans ses activités quotidiennes",
			adult_label:
				"Veuillez indiquer si votre enfant rencontre des difficultés avec n'importe lequel des éléments suivants dans ses activités quotidiennes",
			kid_sublabel: "sélectionnez toutes les réponses qui s'appliquent",
			adult_sublabel: "sélectionnez toutes les réponses qui s'appliquent",
			choices: [
				{
					label: "Audition",
					value: "Hearing",
				},
				{
					label: "Vision",
					value: "Seeing",
				},
				{
					label: "Parole",
					value: "Speech",
				},
				{
					label: "Mobilité",
					value: "Mobility",
				},
				{
					label: "Agilité",
					value: "Agility",
				},
				{
					label: "Douleur",
					value: "Pain",
				},
				{
					label: "Mémoire",
					value: "Memory",
				},
				{
					label: "Autre",
					value: "Other",
				},
				{
					label: "Préfère ne pas répondre",
					value: "Prefer not to say",
				},
				{
					label: "Aucune de ces réponses, il (elle) n'a pas de difficultés",
					value: "None of the above",
				},
			],
		},
	},
};

export default Difficulties;
