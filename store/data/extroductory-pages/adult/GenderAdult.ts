import ScreenType from "constants/screen_type";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import Images from "styles/images";

const GenderAdult: QuestionDropdownPayloadInterface = {
	name: "Gender Adult",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 4,
			question_dropdown_id: 2,
			heading: "What is your child's sex?",
			label: "What is your child's sex?",
			kid_label: "What is your child's sex?",
			adult_label: "What is your child's sex?",
			choices: [
				{
					text: "Female",
					value: "Female",
				},
				{
					text: "Male",
					value: "Male",
				},
				{
					text: "Prefer not to answer",
					value: "Prefer not to answer",
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

export default GenderAdult;
