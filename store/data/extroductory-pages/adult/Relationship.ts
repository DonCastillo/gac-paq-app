import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { LangQuestionRadioPayloadInterface } from "interface/payload.type";

const Relationship: LangQuestionRadioPayloadInterface = {
	ident: "relationship_to_the_child",
	name: "relationship_to_the_child",
	type: Screen.SingleQuestion,
	column_name: "relationship",
	audio_ident: "relationship",
	audio_autoplay: true,
	translations: {
		"en-CA": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label: "What is your relationship to the child?",
			kid_label: "What is your relationship to the child?",
			adult_label: "What is your relationship to the child?",
			choices: [
				{
					label: "Father",
					value: "Father",
				},
				{
					label: "Mother",
					value: "Mother",
				},
				{
					label: "Grandfather",
					value: "Grandfather",
				},
				{
					label: "Grandmother",
					value: "Grandmother",
				},
				{
					label: "Tutor or guardian",
					value: "Tutor or guardian",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"mi-NZ": {
			type: Question.QuestionRadio,
			heading: "Pātai 28",
			label: "Hei aha tō pānga ki te tamaiti?",
			kid_label: "Hei aha tō pānga ki te tamaiti?",
			adult_label: "Hei aha tō pānga ki te tamaiti?",
			choices: [
				{
					label: "Pāpā",
					value: "Father",
				},
				{
					label: "Māmā",
					value: "Mother",
				},
				{
					label: "Koroua",
					value: "Grandfather",
				},
				{
					label: "Kuia",
					value: "Grandmother",
				},
				{
					label: "Kaiako, Kaitiaki rānei",
					value: "Tutor or guardian",
				},
				{
					label: "Tētahi atu",
					value: "Other",
				},
				{
					label: "Kāore mō te whakautu",
					value: "Prefer not to answer",
				},
			],
		},
		"en-NZ": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label: "What is your relationship to the child?",
			kid_label: "What is your relationship to the child?",
			adult_label: "What is your relationship to the child?",
			choices: [
				{
					label: "Father",
					value: "Father",
				},
				{
					label: "Mother",
					value: "Mother",
				},
				{
					label: "Grandfather",
					value: "Grandfather",
				},
				{
					label: "Grandmother",
					value: "Grandmother",
				},
				{
					label: "Tutor or guardian",
					value: "Tutor or guardian",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"cz-CR": {
			type: Question.QuestionRadio,
			heading: "Otázka 28",
			label: "Jaký je váš vztah k dítěti?",
			kid_label: "Jaký je váš vztah k dítěti?",
			adult_label: "Jaký je váš vztah k dítěti?",
			choices: [
				{
					label: "Otec",
					value: "Father",
				},
				{
					label: "Matka",
					value: "Mother",
				},
				{
					label: "Děda",
					value: "Grandfather",
				},
				{
					label: "Babička",
					value: "Grandmother",
				},
				{
					label: "Opatrovník, zákonný zástupce",
					value: "Tutor or guardian",
				},
				{
					label: "Jiný, prosím uveďte",
					value: "Other",
				},
				{
					label: "Nechci odpovídat",
					value: "Prefer not to answer",
				},
			],
		},
		"es-CO": {
			type: Question.QuestionRadio,
			heading: "Pregunta 28",
			label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			kid_label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			adult_label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			choices: [
				{
					label: "Papá",
					value: "Father",
				},
				{
					label: "Mamá",
					value: "Mother",
				},
				{
					label: "Abuelo",
					value: "Grandfather",
				},
				{
					label: "Abuela",
					value: "Grandmother",
				},
				{
					label: "Tutor",
					value: "Tutor or guardian",
				},
				{
					label: "Otro",
					value: "Other",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to answer",
				},
			],
		},
		"es-CL": {
			type: Question.QuestionRadio,
			heading: "Pregunta 28",
			label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			kid_label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			adult_label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			choices: [
				{
					label: "Papá",
					value: "Father",
				},
				{
					label: "Mamá",
					value: "Mother",
				},
				{
					label: "Abuelo",
					value: "Grandfather",
				},
				{
					label: "Abuela",
					value: "Grandmother",
				},
				{
					label: "Tutor",
					value: "Tutor or guardian",
				},
				{
					label: "Otro",
					value: "Other",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to answer",
				},
			],
		},
		"en-MW": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label: "What is your relationship to the child?",
			kid_label: "What is your relationship to the child?",
			adult_label: "What is your relationship to the child?",
			choices: [
				{
					label: "Father",
					value: "Father",
				},
				{
					label: "Mother",
					value: "Mother",
				},
				{
					label: "Grandfather",
					value: "Grandfather",
				},
				{
					label: "Grandmother",
					value: "Grandmother",
				},
				{
					label: "Tutor or guardian",
					value: "Tutor or guardian",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"en-NG": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label: "What is your relationship to the child?",
			kid_label: "What is your relationship to the child?",
			adult_label: "What is your relationship to the child?",
			choices: [
				{
					label: "Father",
					value: "Father",
				},
				{
					label: "Mother",
					value: "Mother",
				},
				{
					label: "Grandfather",
					value: "Grandfather",
				},
				{
					label: "Grandmother",
					value: "Grandmother",
				},
				{
					label: "Tutor or guardian",
					value: "Tutor or guardian",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"ch-MW": {
			type: Question.QuestionRadio,
			heading: "Funso 28",
			label: "Pali Ubale wanji ndi mwanayu?",
			kid_label: "Pali Ubale wanji ndi mwanayu?",
			adult_label: "Pali Ubale wanji ndi mwanayu?",
			choices: [
				{
					label: "Bambo",
					value: "Father",
				},
				{
					label: "Amayi ",
					value: "Mother",
				},
				{
					label: "Agogo aamuna",
					value: "Grandfather",
				},
				{
					label: "Agogo aakazi",
					value: "Grandmother",
				},
				{
					label: "Mphunzitsi wake kapena omuyang’anira",
					value: "Tutor or guardian",
				},
				{
					label: "Ubale wina",
					value: "Other",
				},
				{
					label: "Ndasankha kusayankha",
					value: "Prefer not to answer",
				},
			],
		},
		"ma-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २८",
			label: "तुमचे मुलाशी / मुलीशी कोणते नाते आहे?",
			kid_label: "तुमचे मुलाशी / मुलीशी कोणते नाते आहे?",
			adult_label: "तुमचे मुलाशी / मुलीशी कोणते नाते आहे?",
			choices: [
				{
					label: "वडील",
					value: "Father",
				},
				{
					label: "आई",
					value: "Mother",
				},
				{
					label: "आजोबा",
					value: "Grandfather",
				},
				{
					label: "आज्जी",
					value: "Grandmother",
				},
				{
					label: "शिक्षक किंवा पालक",
					value: "Tutor or guardian",
				},
				{
					label: "इतर नाते",
					value: "Other",
				},
				{
					label: "मला नाही सांगायचे",
					value: "Prefer not to answer",
				},
			],
		},
		"hi-IN": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २८",
			label: "बच्चे के साथ आपका क्या रिश्ता है?",
			kid_label: "बच्चे के साथ आपका क्या रिश्ता है?",
			adult_label: "बच्चे के साथ आपका क्या रिश्ता है?",
			choices: [
				{
					label: "पिता",
					value: "Father",
				},
				{
					label: "माता",
					value: "Mother",
				},
				{
					label: "दादा",
					value: "Grandfather",
				},
				{
					label: "दादी",
					value: "Grandmother",
				},
				{
					label: "शिक्षक या संरक्षक",
					value: "Tutor or guardian",
				},
				{
					label: "अन्य",
					value: "Other",
				},
				{
					label: "नहीं कहना पसंद करेंगे",
					value: "Prefer not to answer",
				},
			],
		},
		"en-AE": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label: "What is your relationship to the child?",
			kid_label: "What is your relationship to the child?",
			adult_label: "What is your relationship to the child?",
			choices: [
				{
					label: "Father",
					value: "Father",
				},
				{
					label: "Mother",
					value: "Mother",
				},
				{
					label: "Grandfather",
					value: "Grandfather",
				},
				{
					label: "Grandmother",
					value: "Grandmother",
				},
				{
					label: "Tutor or guardian",
					value: "Tutor or guardian",
				},
				{
					label: "Other",
					value: "Other",
				},
				{
					label: "Prefer not to answer",
					value: "Prefer not to answer",
				},
			],
		},
		"ar-AE": {
			type: Question.QuestionRadio,
			heading: "سؤال [٢٨]",
			label: "ما هي علاقتك بالطفل؟",
			kid_label: "ما هي علاقتك بالطفل؟",
			adult_label: "ما هي علاقتك بالطفل؟",
			choices: [
				{
					label: "الأب",
					value: "Father",
				},
				{
					label: "الأم",
					value: "Mother",
				},
				{
					label: "الجد",
					value: "Grandfather",
				},
				{
					label: "الجدة",
					value: "Grandmother",
				},
				{
					label: "المعلم أو الوصي",
					value: "Tutor or guardian",
				},
				{
					label: "علاقة أخرى – يرجى التحديد:",
					value: "Other",
				},
				{
					label: "أفضّل عدم الإجابة",
					value: "Prefer not to answer",
				},
			],
		},
		"ne-NP": {
			type: Question.QuestionRadio,
			heading: "प्रश्न २८",
			label: "बच्चा सँग तपाइको सम्बन्ध के हो?",
			kid_label: "बच्चा सँग तपाइको सम्बन्ध के हो?",
			adult_label: "बच्चा सँग तपाइको सम्बन्ध के हो?",
			choices: [
				{
					label: "बुवा",
					value: "Father",
				},
				{
					label: "आमा",
					value: "Mother",
				},
				{
					label: "हजुरबा",
					value: "Grandfather",
				},
				{
					label: "हजुरआमा",
					value: "Grandmother",
				},
				{
					label: "अन्य अभिभावक",
					value: "Tutor or guardian",
				},
				{
					label: "अन्य",
					value: "Other",
				},
				{
					label: "भन्न चाहन्न",
					value: "Prefer not to answer",
				},
			],
		},
		"pt-BR": {
			type: Question.QuestionRadio,
			heading: "Questão 28",
			label: "Qual é a sua relação com a criança ou adolescente que você é responsável?",
			kid_label: "Qual é a sua relação com a criança ou adolescente que você é responsável?",
			adult_label: "Qual é a sua relação com a criança ou adolescente que você é responsável?",
			choices: [
				{
					label: "Pai",
					value: "Father",
				},
				{
					label: "Mãe",
					value: "Mother",
				},
				{
					label: "Avô",
					value: "Grandfather",
				},
				{
					label: "Avó",
					value: "Grandmother",
				},
				{
					label: "Tutor",
					value: "Tutor or guardian",
				},
				{
					label: "Outro",
					value: "Other",
				},
				{
					label: "Prefiro não responder",
					value: "Prefer not to answer",
				},
			],
		},
		"sv-SE": {
			type: Question.QuestionRadio,
			heading: "Fråga 28",
			label: "Vilken är din relation till barnet?",
			kid_label: "Vilken är din relation till barnet?",
			adult_label: "Vilken är din relation till barnet?",
			choices: [
				{
					label: "Pappa",
					value: "Father",
				},
				{
					label: "Mamma",
					value: "Mother",
				},
				{
					label: "Farfar/Morfar",
					value: "Grandfather",
				},
				{
					label: "Farmor/Mormor",
					value: "Grandmother",
				},
				{
					label: "Vårdnadshavare",
					value: "Tutor or guardian",
				},
				{
					label: "Annat",
					value: "Other",
				},
				{
					label: "Föredrar att inte svara",
					value: "Prefer not to answer",
				},
			],
		},
		"th-TH": {
			type: Question.QuestionRadio,
			heading: "ข้อ 28",
			label: "คุณกับบุตรหลานมีความสัมพันธ์กันอย่างไร?",
			kid_label: "คุณกับบุตรหลานมีความสัมพันธ์กันอย่างไร?",
			adult_label: "คุณกับบุตรหลานมีความสัมพันธ์กันอย่างไร?",
			choices: [
				{
					label: "เป็นพ่อ",
					value: "Father",
				},
				{
					label: "เป็นแม่",
					value: "Mother",
				},
				{
					label: "เป็นปู่/ตา",
					value: "Grandfather",
				},
				{
					label: "เป็นย่า/ยาย",
					value: "Grandmother",
				},
				{
					label: "เป็นครูสอนพิเศษหรือผู้ดูแล",
					value: "Tutor or guardian",
				},
				{
					label: "อื่น ๆ",
					value: "Other",
				},
				{
					label: "ไม่ต้องการตอบ",
					value: "Prefer not to answer",
				},
			],
		},
		"zh-CN": {
			type: Question.QuestionRadio,
			heading: "问题 28",
			label: "您是孩子的?",
			kid_label: "您是孩子的?",
			adult_label: "您是孩子的?",
			choices: [
				{
					label: "父亲",
					value: "Father",
				},
				{
					label: "母亲",
					value: "Mother",
				},
				{
					label: "爷爷或外公",
					value: "Grandfather",
				},
				{
					label: "奶奶或外婆",
					value: "Grandmother",
				},
				{
					label: "导师或监护人",
					value: "Tutor or guardian",
				},
				{
					label: "其他",
					value: "Other",
				},
				{
					label: "不想回答",
					value: "Prefer not to answer",
				},
			],
		},
		"es-ES": {
			type: Question.QuestionRadio,
			heading: "Pregunta 28",
			label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			kid_label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			adult_label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			choices: [
				{
					label: "Papá",
					value: "Father",
				},
				{
					label: "Mamá",
					value: "Mother",
				},
				{
					label: "Abuelo",
					value: "Grandfather",
				},
				{
					label: "Abuela",
					value: "Grandmother",
				},
				{
					label: "Tutor",
					value: "Tutor or guardian",
				},
				{
					label: "Otro",
					value: "Other",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to answer",
				},
			],
		},
		"es-MX": {
			type: Question.QuestionRadio,
			heading: "Pregunta 28",
			label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			kid_label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			adult_label:
				"¿Cuál es su relación con la niña, niño o adolescente sobre quien acaba de contestar esta encuesta?",
			choices: [
				{
					label: "Papá",
					value: "Father",
				},
				{
					label: "Mamá",
					value: "Mother",
				},
				{
					label: "Abuelo",
					value: "Grandfather",
				},
				{
					label: "Abuela",
					value: "Grandmother",
				},
				{
					label: "Tutor",
					value: "Tutor or guardian",
				},
				{
					label: "Otro",
					value: "Other",
				},
				{
					label: "Prefiero no decirlo",
					value: "Prefer not to answer",
				},
			],
		},
		"fr-CA": {
			type: Question.QuestionRadio,
			heading: "Question 28",
			label: "Quel est votre relation avec l'enfant?",
			kid_label: "Quel est votre relation avec l'enfant?",
			adult_label: "Quel est votre relation avec l'enfant?",
			choices: [
				{
					label: "Père",
					value: "Father",
				},
				{
					label: "Mère",
					value: "Mother",
				},
				{
					label: "Grand-père",
					value: "Grandfather",
				},
				{
					label: "Grand-mère",
					value: "Grandmother",
				},
				{
					label: "Tuteur (tutrice) ou gardien(ne)",
					value: "Tutor or guardian",
				},
				{
					label: "Autre",
					value: "Other",
				},
				{
					label: "Préfère ne pas répondre",
					value: "Prefer not to answer",
				},
			],
		},
	},
};

export default Relationship;
