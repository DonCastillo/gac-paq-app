import QuestionField from "constants/question_field";
import ScreenType from "constants/screen_type";
import type QuestionInputPayloadInterface from "../../../interface/directus/question-input-payload";

const AccelerometerPage: QuestionInputPayloadInterface = {
	name: "Please enter your Accelerometer ID",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 5,
			question_input_id: 5,
			heading: "Please enter your Accelerometer ID",
			label: "Please enter your Accelerometer ID",
			placeholder: "Accelerometer ID Serial Number",
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
			heading: "Por favor, ingrese su ID de acelerómetro.",
			label: "Por favor, ingrese su ID de acelerómetro.",
			placeholder: "Número de serie del ID del acelerómetro.",
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
			heading: "Veuillez saisir votre ID d'accéléromètre.",
			label: "Veuillez saisir votre ID d'accéléromètre.",
			placeholder: "Numéro de série de l'ID de l'accéléromètre.",
			type: "text",
			sort: null,
			languages_id: {
				name: "French - Canada",
				lang_code: "fr-CA",
			},
		},
	],
};

export default AccelerometerPage;
