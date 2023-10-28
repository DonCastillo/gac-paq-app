import type QuestionTextPayloadInterface from "../../../interface/directus/question-text-payload";
import QuestionField from "../../../constants/question_field";
import ScreenType from "../../../constants/screen_type";

const AccelerometerPage: QuestionTextPayloadInterface = {
	name: "What is your Accelerometer Serial Number?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 5,
			question_text_id: 5,
			heading: "What is your Accelerometer Serial Number?",
			label: "What is your Accelerometer Serial Number?",
			fields: [
				{
					type: QuestionField.QuestionFieldText,
					label: "Serial number",
					name: "Serial number",
				},
			],
			sort: null,
			languages_id: {
				name: "English",
				lang_code: "en-US",
			},
		},
		{
			id: 6,
			question_text_id: 5,
			heading: "¿Cuál es el número de serie de tu acelerómetro?",
			label: "¿Cuál es el número de serie de tu acelerómetro?",
			fields: [
				{
					type: QuestionField.QuestionFieldText,
					label: "Número de serie",
					name: "Serial number",
				},
			],
			sort: null,
			languages_id: {
				name: "Spanish",
				lang_code: "es-ES",
			},
		},
		{
			id: 7,
			question_text_id: 5,
			heading: "Quel est le numéro de série de votre accéléromètre ?",
			label: "Quel est le numéro de série de votre accéléromètre ?",
			fields: [
				{
					type: QuestionField.QuestionFieldText,
					label: "Numéro de série",
					name: "Serial number",
				},
			],
			sort: null,
			languages_id: {
				name: "French",
				lang_code: "fr-FR",
			},
		},
	],
};

export default AccelerometerPage;
