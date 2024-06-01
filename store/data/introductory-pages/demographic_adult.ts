import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionDropdownPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const DemographicAdultPage: QuestionDropdownPayloadInterface = {
	ident: "age",
	name: "age",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionDropdown,
			heading: "Welcome!",
			label: "How old is your child?",
			kid_label: "How old is your child?",
			adult_label: "How old is your child?",
			choices: [
				{
					label: "8 years old",
					value: "8",
				},
				{
					label: "9 years old",
					value: "9",
				},
				{
					label: "10 years old",
					value: "10",
				},
				{
					label: "11 years old",
					value: "11",
				},
				{
					label: "12 years old",
					value: "12",
				},
				{
					label: "13 years old",
					value: "13",
				},
				{
					label: "14 years old",
					value: "14",
				},
				{
					label: "15 years old",
					value: "15",
				},
				{
					label: "16 years old",
					value: "16",
				},
				{
					label: "17 years old",
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

export default DemographicAdultPage;
