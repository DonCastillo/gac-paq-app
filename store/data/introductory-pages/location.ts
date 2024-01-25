import ScreenType from "constants/screen_type";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";

const LocationPage: QuestionDropdownPayloadInterface = {
	name: "Where are you?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 1,
			region_question_dropdown_id: 1,
			heading: "Where are you?",
			label: "Where are you?",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
		},
		{
			id: 2,
			region_question_dropdown_id: 1,
			heading: "¿Dónde estás?",
			label: "¿Dónde estás?",
			languages_id: {
				name: "Spanish - Spain",
				lang_code: "es-ES",
			},
		},
		{
			id: 3,
			region_question_dropdown_id: 1,
			heading: "Où es-tu?",
			label: "Où es-tu?",
			languages_id: {
				name: "French - Canada",
				lang_code: "fr-CA",
			},
		},
	],
};

export default LocationPage;
