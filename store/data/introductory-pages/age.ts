import ScreenType from "constants/screen_type";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import Images from "styles/images";

const AgePage: QuestionDropdownPayloadInterface = {
	name: "Who's taking this questionnaire?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 4,
			question_dropdown_id: 2,
			heading: "Who's taking this questionnaire?",
			label: "Who's taking this questionnaire?",
			choices: [
				{
					text: "Child",
					value: "child",
				},
				{
					text: "Teen",
					value: "teen",
				},
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
		// {
		// 	id: 5,
		// 	question_dropdown_id: 2,
		// 	heading: "¿Quién está contestando este cuestionario?",
		// 	label: "¿Quién está contestando este cuestionario?",
		// 	choices: [
		// 		{
		// 			text: "Niño",
		// 			value: "child",
		// 		},
		// 		{
		// 			text: "Adolescente",
		// 			value: "teen",
		// 		},
		// 		{
		// 			text: "Padre / Madre",
		// 			value: "adult",
		// 		},
		// 	],
		// 	languages_id: {
		// 		name: "Spanish - Spain",
		// 		lang_code: "es-ES",
		// 	},
		// },
		// {
		// 	id: 6,
		// 	question_dropdown_id: 2,
		// 	heading: "Qui remplit ce questionnaire ?",
		// 	label: "Qui remplit ce questionnaire ?",
		// 	choices: [
		// 		{
		// 			text: "Enfant",
		// 			value: "child",
		// 		},
		// 		{
		// 			text: "Adolescent",
		// 			value: "teen",
		// 		},
		// 		{
		// 			text: "Parent",
		// 			value: "adult",
		// 		},
		// 	],
		// 	languages_id: {
		// 		name: "French - Canada",
		// 		lang_code: "fr-CA",
		// 	},
		// },
	],
};

export default AgePage;
