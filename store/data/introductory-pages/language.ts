import ScreenType from "constants/screen_type";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import Images from "styles/images";

const LanguagePage: QuestionDropdownPayloadInterface = {
	name: "What language do you speak & Where are you?",
	type: ScreenType.Language,
	translations: [
		{
			id: 1,
			heading: "What language do you speak & Where are you?",
			language_question_dropdown_id: 1,
			label: "What language do you speak & Where are you?",
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
			images: {
				kid: {
					phone: Images.generic.pages.phone.language,
					tablet: Images.generic.pages.tablet.language,
				},
				adult: {
					phone: Images.generic.pages.phone.language,
					tablet: Images.generic.pages.tablet.language,
				},
			},
		},
		// {
		// 	id: 2,
		// 	heading: "¿Qué idioma hablas y dónde estás?",
		// 	language_question_dropdown_id: 1,
		// 	label: "¿Qué idioma hablas y dónde estás?",
		// 	languages_id: {
		// 		name: "Spanish - Spain",
		// 		lang_code: "es-ES",
		// 	},
		// },
		// {
		// 	id: 3,
		// 	heading: "Quelle langue parles-tu et où es-tu ?",
		// 	language_question_dropdown_id: 1,
		// 	label: "Quelle langue parles-tu et où es-tu ?",
		// 	languages_id: {
		// 		name: "French - Canada",
		// 		lang_code: "fr-CA",
		// 	},
		// },
	],
};

export default LanguagePage;
