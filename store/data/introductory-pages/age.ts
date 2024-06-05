import Screen from "constants/screen.enum";
import Question from "constants/question.enum";
import type { QuestionDropdownPayloadInterface } from "interface/payload.type";
import Images from "styles/images";

const AgePage: QuestionDropdownPayloadInterface = {
	ident: "mode",
	name: "mode",
	type: Screen.SingleQuestion,
	translations: {
		"en-CA": {
			type: Question.QuestionDropdown,
			heading: "Welcome!",
			label: "Who's taking this questionnaire?",
			kid_label: "Who's taking this questionnaire?",
			adult_label: "Who's taking this questionnaire?",
			choices: [
				{
					label: "Child",
					value: "child",
				},
				{
					label: "Adolescent",
					value: "teen",
				},
				{
					label: "Parent",
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
		"es-MX": {
			type: Question.QuestionDropdown,
			heading: "¡Bienvenido!",
			label: "¿Quién está tomando este cuestionario?",
			kid_label: "¿Quién está tomando este cuestionario?",
			adult_label: "¿Quién está tomando este cuestionario?",
			choices: [
				{
					label: "Niño",
					value: "child",
				},
				{
					label: "Adolescente",
					value: "teen",
				},
				{
					label: "Padre",
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
		"fr-CA": {
			type: Question.QuestionDropdown,
			heading: "Bienvenue!",
			label: "Qui remplit ce questionnaire?",
			kid_label: "Qui remplit ce questionnaire?",
			adult_label: "Qui remplit ce questionnaire?",
			choices: [
				{
					label: "Enfant",
					value: "child",
				},
				{
					label: "Adolescent",
					value: "teen",
				},
				{
					label: "Parent",
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
