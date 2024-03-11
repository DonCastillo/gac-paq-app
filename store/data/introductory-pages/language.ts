import ScreenType from "constants/screen_type";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import Images from "styles/images";

const LanguagePage: QuestionDropdownPayloadInterface = {
	name: "What language do you speak & Where are you?",
	type: ScreenType.Language,
	translations: [
		{
			id: 1,
			heading: "Welcome!",
			language_question_dropdown_id: 1,
			label: "What language do you speak & Where are you?",
			kid_label: "What language do you speak & Where are you?",
			adult_label: "What language do you speak & Where are you?",
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
	],
};

export default LanguagePage;
