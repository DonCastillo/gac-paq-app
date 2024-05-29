import QuestionType from "constants/question_type.enum";
import ScreenType from "constants/screen_type.enum";
import type { QuestionDropdownPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const DemographicKidPage: QuestionDropdownPayloadInterface = {
	ident: "age",
	name: "age",
	type: ScreenType.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionDropdown,
			heading: "Welcome!",
			label: "How old are you?",
			kid_label: "How old are you?",
			adult_label: "How old are you?",
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

export default DemographicKidPage;
