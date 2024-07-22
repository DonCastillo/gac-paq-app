import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { QuestionInputPayloadInterface } from "interface/payload.type";

const ParticipantIDPage: QuestionInputPayloadInterface = {
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
		"th-TH": {
			type: Question.QuestionInput,
			heading: "ยินดีต้อนรับ!",
			label: "กรุณากรอก ID ผู้เข้าร่วมของคุณ",
			kid_label: "กรุณากรอก ID ผู้เข้าร่วมของคุณ",
			adult_label: "กรุณากรอก ID ผู้เข้าร่วมของคุณ",
			placeholder: "หมายเลขซีเรียล ID ผู้เข้าร่วม",
		},
		"zh-CN": {
			type: Question.QuestionInput,
			heading: "欢迎!",
			label: "请输入您的参与者ID",
			kid_label: "请输入您的参与者ID",
			adult_label: "请输入您的参与者ID",
			placeholder: "参与者ID序列号",
		},
		"es-MX": {
			type: Question.QuestionInput,
			heading: "¡Bienvenido!",
			label: "Por favor ingresa tu ID de participante",
			kid_label: "Por favor ingresa tu ID de participante",
			adult_label: "Por favor ingresa tu ID de participante",
			placeholder: "Número de serie de ID de participante",
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
