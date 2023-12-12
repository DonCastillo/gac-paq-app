import ScreenType from "../../../constants/screen_type";
import type QuestionInputPayloadInterface from "../../../interface/directus/question-input-payload";

const ParticipantIDPage: QuestionInputPayloadInterface = {
	name: "Please enter your Participant ID",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 5,
			question_input_id: 5,
			heading: "Please enter your Participant ID",
			label: "",
			placeholder: "Participant ID Serial Number",
			type: "text",
			sort: null,
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
		{
			id: 5,
			question_input_id: 5,
			heading: "Por favor, ingrese su ID de participante.",
			label: "",
			placeholder: "Número de serie del ID del participante.",
			type: "text",
			sort: null,
			languages_id: {
				name: "Spanish - Spain",
				lang_code: "es-ES",
			},
		},
		{
			id: 5,
			question_input_id: 5,
			heading: "Veuillez saisir votre ID de participant.",
			label: "",
			placeholder: "Número de serie del ID del participante.",
			type: "text",
			sort: null,
			languages_id: {
				name: "French - Canada",
				lang_code: "fr-CA",
			},
		},
	],
};

export default ParticipantIDPage;
