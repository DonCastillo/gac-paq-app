import Question from "constants/question.enum";
import Screen from "constants/screen.enum";
import type { QuestionDropdownPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const DemographicTeenPage: QuestionDropdownPayloadInterface = {
	ident: "age",
	name: "age",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionDropdown,
			heading: "Welcome!",
			label: "How old are you?",
			kid_label: "How old are you?",
			adult_label: "How old are you?",
			choices: [
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
	},
};

export default DemographicTeenPage;
