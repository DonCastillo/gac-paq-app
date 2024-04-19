import ScreenType from "constants/screen_type";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import Images from "styles/images";

const AgePage: QuestionDropdownPayloadInterface = {
	name: "mode",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 4,
			question_dropdown_id: 2,
			heading: "Welcome!",
			label: "Who's taking this questionnaire?",
			kid_label: "Who's taking this questionnaire?",
			adult_label: "Who's taking this questionnaire?",
			choices: [
				{
					text: "Child",
					value: "child",
				},
				// {
				// 	text: "Teen",
				// 	value: "teen",
				// },
				{
					text: "Parent",
					value: "adult",
				},
			],
			languages_id: {
				name: "English - Canada",
				lang_code: "en-CA",
			},
			images: {
				kid: {
					phone: Images.generic.pages.phone.mode,
					tablet: Images.generic.pages.tablet.mode,
				},
				adult: {
					phone: Images.generic.pages.phone.mode,
					tablet: Images.generic.pages.tablet.mode,
				},
			},
		},
	],
};

export default AgePage;
