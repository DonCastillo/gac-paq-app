import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { QuestionDropdownPayloadLanguageInterface } from "interface/payload.type";
import Images from "styles/images";

const LanguagePage: QuestionDropdownPayloadLanguageInterface = {
	ident: "language_location",
	name: "language_location",
	type: Screen.Language,
	translations: {
		"en-CA": {
			type: Question.QuestionLanguage,
			heading: "Welcome!",
			label: "What language do you speak & Where are you?",
			kid_label: "What language do you speak & Where are you?",
			adult_label: "What language do you speak & Where are you?",
			images: {
				kid: {
					phone: Images.generic.pages.phone.language,
					tablet: Images.generic.pages.tablet.language,
				},
				teen: {
					phone: Images.generic.pages.phone.language,
					tablet: Images.generic.pages.tablet.language,
				},
				adult: {
					phone: Images.generic.pages.phone.language,
					tablet: Images.generic.pages.tablet.language,
				},
			},
		},
		"es-MX": {
			type: Question.QuestionLanguage,
			heading: "¡Bienvenido!",
			label: "¿Qué idioma hablas y dónde estás?",
			kid_label: "¿Qué idioma hablas y dónde estás?",
			adult_label: "¿Qué idioma hablas y dónde estás?",
			images: {
				kid: {
					phone: Images.generic.pages.phone.language,
					tablet: Images.generic.pages.tablet.language,
				},
				teen: {
					phone: Images.generic.pages.phone.language,
					tablet: Images.generic.pages.tablet.language,
				},
				adult: {
					phone: Images.generic.pages.phone.language,
					tablet: Images.generic.pages.tablet.language,
				},
			},
		},
		"fr-CA": {
			type: Question.QuestionLanguage,
			heading: "Bienvenue!",
			label: "Quelle langue parlez-vous et où êtes-vous?",
			kid_label: "Quelle langue parlez-vous et où êtes-vous?",
			adult_label: "Quelle langue parlez-vous et où êtes-vous?",
			images: {
				kid: {
					phone: Images.generic.pages.phone.language,
					tablet: Images.generic.pages.tablet.language,
				},
				teen: {
					phone: Images.generic.pages.phone.language,
					tablet: Images.generic.pages.tablet.language,
				},
				adult: {
					phone: Images.generic.pages.phone.language,
					tablet: Images.generic.pages.tablet.language,
				},
			},
		},
	},
};

export default LanguagePage;
