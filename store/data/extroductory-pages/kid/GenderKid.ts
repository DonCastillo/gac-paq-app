import ScreenType from "constants/screen_type";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import Images from "styles/images";

const GenderKid: QuestionDropdownPayloadInterface = {
	name: "Gender Kid",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 4,
			question_dropdown_id: 2,
			heading: "Are you a…",
			label: "Are you a…",
			kid_label: "Are you a…",
			adult_label: "Are you a…",
			choices: [
				{
					text: "Boy",
					value: "Boy",
				},
				{
					text: "Girl",
					value: "Girl",
				},
				{
					text: "Other",
					value: "Other",
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

export default GenderKid;
