import ScreenType from "constants/screen_type";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import Images from "styles/images";

const DemographicPage: QuestionDropdownPayloadInterface = {
	ident: "child_age",
	name: "child_age",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_dropdown_id: 3,
			heading: "Welcome!",
			label: "How old are you?",
			kid_label: "How old are you?",
			adult_label: "How old are you?",
			choices: [
				{
					text: "Under 10 years old",
					value: "9",
				},
				{
					text: "10 - 14 years old",
					value: "10",
				},
				{
					text: "15 - 17 years old",
					value: "15",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
			images: {
				kid: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
				adult: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
			},
		},
	],
};

export default DemographicPage;
