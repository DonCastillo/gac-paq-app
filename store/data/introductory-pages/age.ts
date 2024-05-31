import Screen from "constants/screen.enum";
import QuestionType from "constants/question_type.enum";
import type { QuestionDropdownPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const AgePage: QuestionDropdownPayloadInterface = {
	ident: "mode",
	name: "mode",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: QuestionType.QuestionDropdown,
			heading: "Welcome!",
			label: "Who's taking this questionnaire?",
			kid_label: "Who's taking this questionnaire?",
			adult_label: "Who's taking this questionnaire?",
			choices: [
				{
					text: "Child",
					value: "child",
				},
				{
					text: "Adolescent",
					value: "teen",
				},
				{
					text: "Parent",
					value: "adult",
				},
			],
			images: {
				kid: {
					phone: Images.generic.pages.phone.mode,
					tablet: Images.generic.pages.tablet.mode,
				},
				teen: {
					phone: Images.generic.pages.phone.mode,
					tablet: Images.generic.pages.tablet.mode,
				},
				adult: {
					phone: Images.generic.pages.phone.mode,
					tablet: Images.generic.pages.tablet.mode,
				},
			},
		},
	},
};

export default AgePage;
