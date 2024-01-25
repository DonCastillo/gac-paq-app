import ScreenType from "constants/screen_type";
import type QuestionDropdownPayloadInterface from "interface/directus/question-dropdown-payload";
import Images from "styles/images";

const DemographicPage: QuestionDropdownPayloadInterface = {
	name: "How old are you?",
	type: ScreenType.SingleQuestion,
	translations: [
		{
			id: 7,
			question_dropdown_id: 3,
			heading: "How old are you?",
			label: "How old are you?",
			choices: [
				{
					text: "Under 10 years old",
					value: "Under 10 years old",
				},
				{
					text: "10 - 14 years old",
					value: "10 - 14 years old",
				},
				{
					text: "15 - 17 years old",
					value: "15 - 17 years old",
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
				adult: {
					phone: Images.generic.pages.phone.age,
					tablet: Images.generic.pages.tablet.age,
				},
			},
		},
		// {
		// 	id: 8,
		// 	question_dropdown_id: 3,
		// 	heading: "¿Cuántos años tienes?",
		// 	label: "¿Cuántos años tienes?",
		// 	choices: [
		// 		{
		// 			text: "Menor de 10 años",
		// 			value: "Under 10 years old",
		// 		},
		// 		{
		// 			text: "10 - 14 años",
		// 			value: "10 - 14 years old",
		// 		},
		// 		{
		// 			text: "15 - 17 años",
		// 			value: "15 - 17 years old",
		// 		},
		// 	],
		// 	languages_id: {
		// 		name: "Spanish - Spain",
		// 		lang_code: "es-ES",
		// 	},
		// },
		// {
		// 	id: 9,
		// 	question_dropdown_id: 3,
		// 	heading: "Quel âge avez-vous ?",
		// 	label: "Quel âge avez-vous ?",
		// 	choices: [
		// 		{
		// 			text: "Moins de 10 ans",
		// 			value: "Under 10 years old",
		// 		},
		// 		{
		// 			text: "10 à 14 ans",
		// 			value: "10 - 14 years old",
		// 		},
		// 		{
		// 			text: "15 à 17 ans",
		// 			value: "15 - 17 years old",
		// 		},
		// 	],
		// 	languages_id: {
		// 		name: "French - Canada",
		// 		lang_code: "fr-CA",
		// 	},
		// },
	],
};

export default DemographicPage;
