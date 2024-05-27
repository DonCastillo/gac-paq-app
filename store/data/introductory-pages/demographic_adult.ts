import ScreenType from "constants/screen_type.enum";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import Images from "styles/images";

const DemographicAdultPage: QuestionDropdownPayloadInterface = {
	ident: "age",
	name: "age",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_dropdown_id: 3,
			heading: "Welcome!",
			label: "How old are you?",
			kid_label: "How old is your child?",
			adult_label: "How old is your child?",
			choices: [
				{
					text: "8 years old",
					value: "8",
				},
				{
					text: "9 years old",
					value: "9",
				},
				{
					text: "10 years old",
					value: "10",
				},
				{
					text: "11 years old",
					value: "11",
				},
				{
					text: "12 years old",
					value: "12",
				},
				{
					text: "13 years old",
					value: "13",
				},
				{
					text: "14 years old",
					value: "14",
				},
				{
					text: "15 years old",
					value: "15",
				},
				{
					text: "16 years old",
					value: "16",
				},
				{
					text: "17 years old",
					value: "17",
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
				teen: {
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

export default DemographicAdultPage;
