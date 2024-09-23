import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { LangQuestionInputPayloadInterface } from "interface/payload.type";

const ParticipantIDPage: LangQuestionInputPayloadInterface = {
	ident: "participant_id",
	name: "participant_id",
	type: Screen.SingleQuestion,
	column_name: "participant_id",
	translations: {
		"en-CA": {
			type: Question.QuestionInput,
			heading: "Welcome!",
			label: "Please enter your Participant ID",
			kid_label: "Please enter your Participant ID",
			adult_label: "Please enter your Participant ID",
			placeholder: "Participant ID Serial Number",
		},
		"ar-AE": {
			type: Question.QuestionInput,
			heading: "مرحباً بك",
			label: "يرجى إدخال رقم هوية المشارك الخاص بك",
			kid_label: "يرجى إدخال رقم هوية المشارك الخاص بك",
			adult_label: "يرجى إدخال رقم هوية المشارك الخاص بك",
			placeholder: "الرقم التسلسلي لهوية المشارك",
		},
		"ne-NP": {
			type: Question.QuestionInput,
			heading: "तपाईं लाई स्वागत् छ",
			label: "कृपया तपाइको सहभागि आइडी नम्बर भर्नुहोस्",
			kid_label: "कृपया तपाइको सहभागि आइडी नम्बर भर्नुहोस्",
			adult_label: "कृपया तपाइको सहभागि आइडी नम्बर भर्नुहोस्",
			placeholder: "सहभागि आइडी सिरियल नम्बर",
		},
		"pt-BR": {
			type: Question.QuestionInput,
			heading: "Bem-vindo(a)!",
			label: "Por favor, insira o seu ID de participante",
			kid_label: "Por favor, insira o seu ID de participante",
			adult_label: "Por favor, insira o seu ID de participante",
			placeholder: "Número de Série do ID do Participante",
		},
		"sv-SE": {
			type: Question.QuestionInput,
			heading: "Välkommen!",
			label: "Var god skriv in ditt studie ID",
			kid_label: "Var god skriv in ditt studie ID",
			adult_label: "Var god skriv in ditt studie ID",
			placeholder: "Deltagarens studie ID",
		},
		"th-TH": {
			type: Question.QuestionInput,
			heading: "ยินดีต้อนรับ!",
			label: "โปรดใส่เลขรหัสผู้เข้าร่วมการตอบแบบสอบถามของคุณ",
			kid_label: "โปรดใส่เลขรหัสผู้เข้าร่วมการตอบแบบสอบถามของคุณ",
			adult_label: "โปรดใส่เลขรหัสผู้เข้าร่วมการตอบแบบสอบถามของคุณ",
			placeholder: "หมายเลขซีเรียลของผู้เข้าร่วมการตอบแบบสอบถาม",
		},
		"zh-CN": {
			type: Question.QuestionInput,
			heading: "欢迎!",
			label: "请输入填写者ID",
			kid_label: "请输入填写者ID",
			adult_label: "请输入填写者ID",
			placeholder: "填写者ID序列",
		},
		"es-ES": {
			type: Question.QuestionInput,
			heading: "¡Bienvenido!",
			label: "Escribe tu numero de participante",
			kid_label: "Escribe tu numero de participante",
			adult_label: "Escribe tu numero de participante",
			placeholder: "Número de participante",
		},
		"es-MX": {
			type: Question.QuestionInput,
			heading: "¡Te damos la bienvenida!",
			label: "Por favor, ingresa tu ID de participante",
			kid_label: "Por favor, ingresa tu ID de participante",
			adult_label: "Por favor, ingresa tu ID de participante",
			placeholder: "Número de serie de la identificación de participante",
		},
		"fr-CA": {
			type: Question.QuestionInput,
			heading: "Bienvenue!",
			label: "Veuillez entrer votre numéro de participant",
			kid_label: "Veuillez entrer votre numéro de participant",
			adult_label: "Veuillez entrer votre numéro de participant",
			placeholder: "Numéro d'identification du participant",
		},
	},
};

export default ParticipantIDPage;
