import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { QuestionInputPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const ParticipantIDPage: QuestionInputPayloadInterface = {
	ident: "participant_id",
	name: "participant_id",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionInput,
			heading: "Welcome!",
			label: "Please enter your Participant ID",
			kid_label: "Please enter your Participant ID",
			adult_label: "Please enter your Participant ID",
			placeholder: "Participant ID Serial Number",
			images: {
				kid: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
				teen: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
				adult: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
			},
		},
		"zh-CN": {
			type: Question.QuestionInput,
			heading: "欢迎!",
			label: "请输入您的参与者ID",
			kid_label: "请输入您的参与者ID",
			adult_label: "请输入您的参与者ID",
			placeholder: "参与者ID序列号",
			images: {
				kid: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
				teen: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
				adult: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
			},
		},
		"es-MX": {
			type: Question.QuestionInput,
			heading: "¡Bienvenido!",
			label: "Por favor ingresa tu ID de participante",
			kid_label: "Por favor ingresa tu ID de participante",
			adult_label: "Por favor ingresa tu ID de participante",
			placeholder: "Número de serie de ID de participante",
			images: {
				kid: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
				teen: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
				adult: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
			},
		},
		"fr-CA": {
			type: Question.QuestionInput,
			heading: "Bienvenue!",
			label: "Veuillez entrer votre identifiant de participant",
			kid_label: "Veuillez entrer votre identifiant de participant",
			adult_label: "Veuillez entrer votre identifiant de participant",
			placeholder: "Numéro de série de l'identifiant du participant",
			images: {
				kid: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
				teen: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
				adult: {
					phone: Images.generic.pages.phone.participant,
					tablet: Images.generic.pages.tablet.participant,
				},
			},
		},
	},
};

export default ParticipantIDPage;
